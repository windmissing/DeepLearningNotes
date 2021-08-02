# 人体姿态估计  

人体姿态估计，Human Pose Estimation， HPE  

要解决的问题：  
- 图像或视频中，人体关节（关键点）的定位问题。  
- 所有关节姿势组成的空间中搜索特定姿势。  

方法：  
- 基于部件组合的传统方法
- 深度学习方法

难点：  
- 关节小而灵活  
- 衣服遮挡  

分类：  

- 维度：2D姿势估计、3D姿势估计  
- 多人估计的解决思路：top-down(将多人姿势估计转化为单人姿势估计)、bottom-up(先找出图中所有关键点，再对关键点分组)  

# 经典模型

2. DeepPose  
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

# 数据集

|Name|Training Images|Test Images|Source|Style|Labeled Body Joints|
|---|---|---|---|---|---|
|Frames Labeled In Cinema(FLIC)|4000|1000|popular Hollywood movies|people in diverse poses and especially diverse clothing| 10 uppep body joints|
|Leeds Sports Dataset(LSD)|11000|1000|sports activities|quite challenging in terms of appearance and especially articulations|14 full body joints|

# 估计指标

- Percentage of Correct Parts(PCP)：正确部件的百分比  
如果两个预测的关节位置与真实肢体关节位置之间的距离小于肢体长度的a，则认为肢体被检测到。a通常为0.5。  
PCP越大越好。  
缺点：由于较短的肢体具有较小的阈值，因此它会对较短的肢体惩罚。  

- Percentage of Detected Joints(PDJ)  

- PCK：正确关键点的百分比  
如果预测关节与真实关节之间的距离在特定阈值内，则检测到的关节被认为是正确的。  
阈值可以是头骨链接的百分比，或者躯干直径的百分比，或者某个数值。  
这个方法不会对较短的肢体有惩罚。  
PCK越大越好。  

3. OKS：对象关键点相似度

# 参考材料

1. [POSE estimation，肢体估计HPE](https://blog.csdn.net/u010451780/article/details/106790471/)
2. [人体姿态估计(Human Pose Estimation)经典方法整理](https://zhuanlan.zhihu.com/p/104917833)