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
