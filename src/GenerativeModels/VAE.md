# VAE (Variational AutoEncoder)

## 背景：从 AutoEncoder 到 VAE

### AutoEncoder 的局限性

传统的 AutoEncoder 存在以下问题：

1. **不能生成新样本**：只能重建输入，无法从潜在空间生成新样本
2. **潜在空间不连续**：相近的潜在向量可能解码出完全不同的图像
3. **没有概率解释**：无法给出生成样本的概率

### VAE 的核心思想

VAE (Variational AutoEncoder) 通过**引入概率分布**来解决上述问题：

- **AE**: $z = \text{Encoder}(x)$  →  确定的向量
- **VAE**: $z \sim q_\phi(z|x)$  →  概率分布中采样

---

## 核心概念

### 1. 潜在空间正则化

VAE 不仅学习重建输入，还要求潜在变量的分布接近某个**先验分布**（通常是标准正态分布）：

$$p(z) = \mathcal{N}(0, I)$$

### 2. 编码器的输出

VAE 的编码器输出不是单一的向量，而是**分布的参数**：

```
Encoder 输出:
  - μ (mean): 分布的中心
  - σ (std): 分布的宽度
  - z ~ N(μ, σ²): 从分布中采样
```

### 3. 解码器的输入

解码器接收从潜在分布中**采样**得到的向量：

$$\hat{x} = \text{Decoder}(z), \quad z \sim \mathcal{N}(\mu, \sigma^2)$$

---

## 数学推导

### 变分推断 (Variational Inference)

目标：最大化数据的对数似然 $\log p_\theta(x)$

由于后验 $p(z|x)$ 难以计算，使用变分分布 $q_\phi(z|x)$ 来近似。

### ELBO (Evidence Lower Bound)

VAE 最大化以下目标（ELBO）：

$$\mathcal{L} = \mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)] - D_{KL}(q_\phi(z|x) || p(z))$$

| 项 | 名称 | 作用 |
|----|------|------|
| $\mathbb{E}_{q_\phi(z|x)}[\log p_\theta(x|z)]$ | **Reconstruction Loss** | 重建输入 |
| $D_{KL}(q_\phi(z|x) || p(z))$ | **KL Divergence** | 正则化潜在分布 |

### KL 散度的计算

当 $q_\phi(z|x) = \mathcal{N}(\mu, \sigma^2)$ 且 $p(z) = \mathcal{N}(0, I)$ 时：

$$D_{KL}(q_\phi(z|x) || p(z)) = -\frac{1}{2}\sum_{j=1}^{J}(1 + \log\sigma_j^2 - \mu_j^2 - \sigma_j^2)$$

---

## 重参数化技巧 (Reparameterization Trick)

### 问题

直接从 $\mathcal{N}(\mu, \sigma^2)$ 采样是不可导的，无法反向传播。

### 解决方案

将采样过程分解为：

$$z = \mu + \sigma \odot \epsilon, \quad \epsilon \sim \mathcal{N}(0, I)$$

```mermaid
graph LR
    x[输入 x] --> Encoder
    Encoder --> mu[μ]
    Encoder --> sigma[σ]
    epsilon[ε ~ N(0,I)] --> z
    mu --> z
    sigma --> z
    z --> Decoder
    Decoder --> x_hat[输出 x̂]
```

### 代码实现

```python
def reparameterize(mu, logvar):
    std = torch.exp(0.5 * logvar)
    eps = torch.randn_like(std)  # ε ~ N(0, 1)
    return mu + eps * std  # z = μ + σ * ε
```

---

## 训练算法

### VAE 训练流程

```
1. Sample x from training data
2. Encode: (μ, σ) = Encoder(x)
3. Reparameterize: z = μ + σ ⊙ ε, ε ~ N(0,I)
4. Decode: x̂ = Decoder(z)
5. Compute loss:
   - Reconstruction: ||x - x̂||² or BCE(x, x̂)
   - KL: -0.5 * Σ(1 + log(σ²) - μ² - σ²)
6. Backprop and update
```

### 完整损失函数

```python
def vae_loss(x, x_hat, mu, logvar):
    # Reconstruction loss
    BCE = F.binary_cross_entropy(x_hat, x, reduction='sum')
    
    # KL divergence
    KLD = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
    
    return BCE + KLD
```

---

## VAE 的变体

### 1. β-VAE

增加 KL 项的权重，学习更解耦的表示：

$$\mathcal{L} = \text{Reconstruction} + \beta \cdot \text{KL}, \quad \beta > 1$$

### 2. Conditional VAE (CVAE)

引入条件信息实现可控生成：

$$\mathcal{L} = \mathbb{E}_{q_\phi(z|x,c)}[\log p_\theta(x|z,c)] - D_{KL}(q_\phi(z|x,c) || p(z))$$

### 3. Vector Quantized VAE (VQ-VAE)

使用离散的潜在变量，适用于序列建模和图像生成。

### 4. Hierarchical VAE

多层潜在变量，捕捉不同层次的特征。

---

## VAE vs GAN

| 特性 | VAE | GAN |
|------|-----|-----|
| **生成质量** | ⚠️ 较模糊 | ✅ 清晰 |
| **训练稳定性** | ✅ 稳定 | ❌ 需要技巧 |
| **潜在空间** | ✅ 连续、可插值 | ⚠️ 可能不连续 |
| **概率解释** | ✅ 有 | ❌ 无 |
| **Inference** | ✅ Encoder 推断 | ❌ 需要额外训练 |
| **应用** | 表示学习、异常检测 | 图像生成、编辑 |

---

## 应用场景

### 1. 图像生成

生成新的、类似的样本。

### 2. 异常检测

重建误差大的样本为异常：

$$\text{Anomaly Score} = ||x - \hat{x}||^2$$

### 3. 图像修复 (Inpainting)

给定部分图像，重建完整图像。

### 4. 表示学习

学习解耦的潜在表示，用于下游任务。

### 5. 数据增强

生成合成数据扩充训练集。

---

## 实践技巧

### 1. KL Annealing

训练初期减小 KL 权重，避免"posterior collapse"：

$$\mathcal{L} = \text{Reconstruction} + w(t) \cdot \text{KL}$$

$w(t)$ 从 0 逐渐增加到 1。

### 2. 重建损失选择

| 数据类型 | 推荐损失 |
|---------|---------|
| 归一化图像 | BCE (Binary Cross Entropy) |
| 自然图像 | MSE 或 Perceptual Loss |
| 文本 | Cross Entropy |

### 3. 潜在空间维度

- 太小：重建质量差
- 太大：后验坍塌 (posterior collapse)
- 常用：16 ~ 256

---

## 代码结构示例

```python
import torch
import torch.nn as nn

class VAE(nn.Module):
    def __init__(self, latent_dim=20):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(784, 400),
            nn.ReLU(),
        )
        self.fc_mu = nn.Linear(400, latent_dim)
        self.fc_logvar = nn.Linear(400, latent_dim)
        
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 400),
            nn.ReLU(),
            nn.Linear(400, 784),
            nn.Sigmoid()
        )
    
    def encode(self, x):
        h = self.encoder(x)
        return self.fc_mu(h), self.fc_logvar(h)
    
    def reparameterize(self, mu, logvar):
        std = torch.exp(0.5 * logvar)
        eps = torch.randn_like(std)
        return mu + eps * std
    
    def decode(self, z):
        return self.decoder(z)
    
    def forward(self, x):
        mu, logvar = self.encode(x)
        z = self.reparameterize(mu, logvar)
        return self.decode(z), mu, logvar
```

---

## 相关链接

- [Common/AutoEncoder.md](../Common/AutoEncoder.md) - 基础 AutoEncoder
- [GenerativeModels/CVAE.md](./CVAE.md) - 条件 VAE
- [GAN/VAEGAN.md](../GAN/VAEGAN.md) - VAE 与 GAN 结合

---

## 参考资料

1. Kingma, D. P., & Welling, M. (2014). Auto-Encoding Variational Bayes. *ICLR*.
2. Doersch, C. (2016). Tutorial on Variational Autoencoders. *arXiv*.
