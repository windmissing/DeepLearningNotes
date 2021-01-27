# Attention-based Model基础版（只读模型）

![](/assets/images/Chapter10/88.png)   

## 应用

1. seq2seq  
2. 阅读理解 squad比赛  

## 基于Attention-based技术的Memory Network  

![](/assets/images/Chapter10/89.png)   
1. 把Document中的每个句子转成向量，N个句子得到N个高维向量  
2. 降维，N个高维向量降到N个低维向量x  
3. 将Query转成向量q  
4. 计算q与x的match score，每个x对应一个score，定义为$\alpha$  
5. 根据$\alpha$对x做加权求和$\sum_i\alpha_i x_i$  
6. 5的结果和q一起进入一个DNN  
7. 由DNN产生answer  

# Attention-based Model进阶版

Sentence to vector can be jointly trained.  
![](/assets/images/Chapter10/90.png)   

## 改进1

Document产生2个向量，分别是x和h。  
第4步使用x计算match score，用于决定从哪些向量抽取信息。  
第5步使用h生成最终被抽取的信息。$\sum_i\alpha_i h_i$   

## 改进2 hopping

根据当前的结果生成新的问题向量q  
基于新的q再计算答案  

hopping可以做多次，hopping的次数可以是人为决定，也可以Machine自己决定ReasoNet。  

## 应用

视觉问答  
1. 模型读入一张图  
2. 通过CNN，将每个小区域转成一个向量  
3. 输入一个问题，由reading head controller决定，哪个区域与问题相关  
4. 读入相关的区域，产生output

文本QA
1. 通过Semantic分析，将每个句子转成一个向量  
2. 输入一个问题，由reading head controller决定，哪个句子与问题相关  
3. 把相关的句子读进模型，产生output

语音QA
1. 例如托福听力测试  
2. 将语音识别、句义分析、attention的综合运用  