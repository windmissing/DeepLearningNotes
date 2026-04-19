# Attention-based Model升级版（可读可写）

![](/assets/images/Chapter10/91.png)   

## Turing简化版

![](/assets/images/Chapter10/92.png)   
k: attention weight  
e: 要清空的东西，attention越多的地方，清得越多  
m：原来database里面的值  
a：要放入的新的信息  
$$
m_2^i = m_1^i - \hat \alpha^i e \odot m_1 ^i + \hat \alpha^ia
$$

## Truing完整版

又叫Neural Turing Machine  
太复杂了，不想看  

## Stack RNN

![](/assets/images/Chapter10/93.png)   
1. 假设memory中的值都以stack的形式存储  
2. 读入stack的前几个值（相当于默认attention在前几个值上）  
3. f输出三个值a1, a2, a3  
另对原信息定义以下三个操作，每个操作分别基于原始信息做改变，分别得到向量v1, v2, v3  
- Push：把Information放入Stack  
- Pop：把stack顶值丢掉  
- Nothing：不变
v = v1 * a1 + v2 * a2 + v3 * a3  