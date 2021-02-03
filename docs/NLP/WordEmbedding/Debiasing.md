# 词嵌入除偏 Debiasing

Bolukbasi et. al., 2016 Man is to computer programmer as woman is to homemaker?  

word embedding中的bias反映了corpus中的bias。  

用于消除种族歧视、性别歧视等。  
例如：  
Man:Woman -> King:Queen  
Man：程序员 -> Woman：家庭主妇  

1. 识别bias的方向，以及中轴  
![](/assets/48.png)   
2. 中和步 neutralization step  
有明确的性别分别的词，例如：boy, girl, he, she  
没有性别区分的词，例如doctor, nurse, programmer, homemaker  
将第二类词中和，即消除它们到中轴的距离。  
![](/assets/49.png)   
3. 平衡步 equalize  
目标：使第一类词对到中轴的距离相等  
![](/assets/50.png)   

问题：怎样判断一个词是第一类词还是第二类词？  
答：训练一个NN来判断。  

