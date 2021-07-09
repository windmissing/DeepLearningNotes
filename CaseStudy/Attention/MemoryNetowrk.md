# 任务描述

根据Ducument和Query生成Answer  
Answer是提前定义好的, 要从这些答案中选择一个正确答案.  
这是一个多分类问题  

# 模型

Sainbayar ukhbaatar, 2015, End-to-End Momery Network

利用attention机制, 用较少的参数,训练出较好的效果.  

![](/assets/89.png)   

# 过程  

1. 把Document中的每个句子转成一个bag of word向量，N个句子得到N个高维向量  
2. 降维，N个高维向量通过乘以一个矩阵得到N个低维向量x, 矩阵的内容是迭代学习得到的.  
3. 将Query转成向量q  
4. 计算q与x的match score，每个x对应一个score，定义为$\alpha$, match score为x与q的余弦相似度    
5. 根据$\alpha$对x做加权求和$\sum_i\alpha_i x_i$  
6. 5的结果和q一起进入一个DNN  
7. 由DNN产生answer  

# Attention-based Model进阶版

Sentence to vector can be jointly trained.  
![](/assets/90.png)   

## 改进1

Document产生2个向量，分别是x和h。  
第4步使用x计算match score，用于决定从哪些向量抽取信息。  
第5步使用h生成最终被抽取的信息。$\sum_i\alpha_i h_i$   

## 改进2 hopping

根据当前的结果生Extracted Information生成新的问题向量q  
q = q + Extracted Information
基于新的q再计算答案  

hopping可以做多次，hopping的次数可以是人为决定，也可以Machine自己决定ReasoNet。  

## 改进3  

Answer只由Extracted Information决定，q不进入DNN  

