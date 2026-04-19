# 问题描述

每张图像中最多只有一个较大的对象，且位于相对中间的位置。  
要识别的目标有三类：pedestrain、car、motorcycle，分别对应c1, c2, c3  
定义图像的左上角坐标为（0，0），右下角坐标为（1，1）。目标的中心点为bx, by，目标的大小为bh, bw。  
![](/assets/19.png)  

# 定义标签y

定义一个训练集的label应该为1*8的向量，即：  
$$
y = [p_c, b_x, b_y, b_h, b_w, c_1, c_2, c_3]^\top
$$

pc：图像中是否存在对象。pc为1时后面的值才有意义。    
bx, by, bw, bh：对象的位置。  
c1, c2, c3：是什么对象，三个数值只能有一个是1。  
例如：  

$$
\begin{aligned}
y = [1, b_x, b_y, b_h, b_w, 0, 1, 0]^\top  \\
y = [0, ?, ?, ?, ?, ?, ?, ?]^\top
\end{aligned}
$$  

?表示不care具体的值，不会在loss function中用到这些值。  

# 定义损失函数

定义一个样本上的损失函数为：  

$$
l = 
\begin{cases}
MSE(pc, bx, by, bw, bh) + CrossEntropy(c1, c2, c3)  &&  pc = 1 \\
MSE(pc) && pc = 0
\end{cases}
$$