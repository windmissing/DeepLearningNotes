# 人体姿态估计  

人体姿态估计，Human Pose Estimation， HPE  
1. 图像或视频中，人体关节（关键点）的定位问题。  
2. 所有关节姿势组成的空间中搜索特定姿势。  
方法：基于部件组合的传统方法、深度学习方法
难点：关节小而灵活、衣服遮挡  
分类：  
1. 维度：2D姿势估计、3D姿势估计  
2. 多人估计的解决思路：top-down(将多人姿势估计转化为单人姿势估计)、bottom-up(先找出图中所有关键点，再对关键点分组)  

# 模型

2. DeepPose  
3. 卷积 + 滑动窗口 + 热图  
4. 卷积摆位机CPM  
5. 误差反馈  
6. 堆叠式沙漏网络Hourglass  
7. 高分辨率网络HRNet
8. CPN, GlobalNet + RefineNet  
9. Simple Baseslines
10. MSPN  
11. Openpose  
12. Hourglass + Associative Embedding  
13. HigherHRNet

# 损失函数

1. 直接对关键点的坐标进行回归  
2. 为每个关键点预测一个headmap作为关键点的中间表示  

# 估计指标

1. PCP：正确部件的百分比  
2. PCK：正确关键点的百分比  
3. OKS：对象关键点相似度

# 参考材料

1. [POSE estimation，肢体估计HPE](https://blog.csdn.net/u010451780/article/details/106790471/)
2. [人体姿态估计(Human Pose Estimation)经典方法整理](https://zhuanlan.zhihu.com/p/104917833)