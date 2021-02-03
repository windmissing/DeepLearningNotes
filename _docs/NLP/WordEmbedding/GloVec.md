Pennington et. al., 2014. Glove: Global vectors for word representation  

GloVe = Global Vector = 词向量   
特点：简便  

1. 定义：  
$X_{ij}$为target i出现在context c中的次数  
遍历corpus统计$X_{ij}$。  
$X_{ij}$是否对称与如何定义context有关。  

2. 优化  

$$
\sum_i\sum_j f(X_{ij})(\theta^\top_i e_j + b_i + b_j' - \log X_{ij})^2
$$

关于$f(X_{ij})$  
1. 公式中$f(X_{ij})$为权重：  
2. 当$X_{ij} = 0$时，$f(X_{ij})$必须定义为0。否则上面这个公式没有意义。  
3. $X_{ij}$可能差别很大，$f(X_{ij})$应保留$X_{ij}$的大小关系（单调），但不能让它们的差别过于悬殊。  

关于$e$和$\theta$：  
$e$和$\theta$是对称的，因此将$e$和$\theta$初始化为相同的值，迭代之后：  
$$
e_w^{final} = \frac{e_w + \theta_w}{2}
$$

这是因为在这个算法里，$e$和$\theta$的意义是相同的，而之前的算法中$e$和$\theta$不同。  