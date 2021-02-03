Schroff et. al., 2015. FaceNet: A unified embedding for face recognition and clustering  

# Triplet Loss

定义三种图像分别为Anchor(A)、Positive(P)、Negative(N)  
定义一个三元组的损失函数为：  
$$
L(A, P, N) = \max(||f(A) - f(P)||^2 - ||f(A) - f(N)||^2 + \alpha, 0)
$$

其中：  
f代表将图像通过神经网络转成向量。  
公式原理为：“同一个人的两张图像的距离” 应比 “不同人的两张图像的距离” 小$\alpha$。  
$\alpha$为间隔margine。  

整个训练集的损失函数为每个三元组的损失之和。  

Note：  
训练时不是one-shot的，训练集中每个人至少要有2张照片（分别用做A和P），才能完成训练。  
在预测时可以是one-shot的。  

##  怎样根据训练集生成三元组？  

1. 随机生成  
缺点：不等式d(A, P) + a <= d(A, N)太容易满足了，NN从中学不到东西。  
2. 选择“hard to train”的三元组，即d(A, P)和d(A, N)接近的三元组。  
优点：加速算法学习
