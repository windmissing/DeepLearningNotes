Mikolov et. al., 2013. Linguistic regualrities in continuous space word representations

# 类比推理

man -> woman， king -> ?  

# 向量相减

$$
e_{\text{man}} - e_{\text{woman}} \approx e_{\text{king}} - e_{w}
$$

找到一个w使式子成立：  
$$
w = \arg\max_w \text{sim}(e_{w}, e_{\text{king}} - e_{\text{man}} + e_{\text{woman}})
$$

公式中的sim代表相似度计算公式，有“余弦相似度”和“平方相似度”。余弦相似度更常用。    
- 余弦相似度：  
$$
\text{sim}(u, v) = \frac{u^\top v}{||u||_2||v||_2}
$$

公式中的$u^\top v$计算u、v夹角的余弦值，因此称为余弦相似度。  
- 平方相似度：  
$$
\text{sim}(u, v) = - ||u-v||^2
$$



# 词嵌入除偏 Debiasing

用于消除种族歧视、性别歧视等。  
例如：  
Man:Woman -> King:Queen  
Man：程序员 -> Woman：家庭主妇  

1. 识别bias的方向，以及中轴  
![](/assets/images/Chapter10/48.png)   
2. 中和步 neutralization step  
有明确的性别分别的词，例如：boy, girl, he, she  
没有性别区分的词，例如doctor, nurse, programmer, homemaker  
将第二类词中和，即消除它们到中轴的距离。  
![](/assets/images/Chapter10/49.png)   
3. 平衡步 equalize  
目标：使第一类词对到中轴的距离相等  
![](/assets/images/Chapter10/50.png)   

问题：怎样判断一个词是第一类词还是第二类词？  
答：训练一个NN来判断。  

