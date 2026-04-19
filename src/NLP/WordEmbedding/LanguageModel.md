# 用语言模型学习Embedding Matrix

Bengio et. al., 2003. A neura; probabilistic language model  

I want a  glass of orange ______.  
语言模型的目标是预测下一个单词。  

1. 提取target的前K个单词。  
2. one shot向量经过embedding matrix得到embedding向量  
3. embedding向量通过RNN神经网络进行训练  
4. softmax作为NN的输出Unit，来计算w是每个单词的概率。  
![](/assets/42.png)   

这个模型中有softmax的参数和E的参数，都可以通过GD迭代得到。  