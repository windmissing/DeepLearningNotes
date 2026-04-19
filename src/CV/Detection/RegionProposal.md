Girshik et. al., 2013. Rich feature hierachies for accurate object detection and semantic  

Region Proposals算法又称为R-CNN，不是对整个区域的every single sliding window都作一次检测，而是只是a few windows。  

1. 使用图像分割算法，分割出色块  
2. 基于色块运行卷积网络的分类定位算法  
![](/assets/6.png)  

缺点：太慢  
一些改进：
Fast R-CNN：用卷积实现滑动窗口  
Faster R-CNN：使用卷积网络来推荐候选区域  