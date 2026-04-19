# Seq2Seq模型存在的问题

![](/assets/56.png)   
先输入整个原文序列，再输出整个翻译序列。  
事实上，如果原文序列很长，一次性记住全部内容是困难的。因此导致翻译结果不好。    
改进方法：attention based模型，一次读入一部分，根据部分信息提供输出，然后再读入一些信息。  

Bahdanau et, al., 2014 Neural machine translation by jointly learning to align and translate  

# 注意力模型的结构

## encoder  

使用双向RNN来计算每个单词的特征。双向RNN的unit可以是GRU或LSTM或其它类型的Unit。  
每个单词通过双向RNN会得到2个activition，分别定义为`\overrightarrow{a^t}`和`\overleftarrow{a^t}`。并用一个符号来表现这两个activation。    

```
a^t = (\overrightarrow{a^t}, \overleftarrow{a^t})
```

![](/assets/57.png)   

## decoder  
decoder部分的结构和翻译模型是基本上一样的。
![](/assets/58.png)   
decoder使用某个context作为输入，context用向量C表示，是一个与encoder中的activation有关的向量。    

## 注意力权重   

关键在于怎样连接encoder与decoder。翻译模型使用顺序连接，先encoder，再decoder。  
注意力模型使用注意力权重将encoder的activation和decoder的context联系到一起。  
![](/assets/59.png)   
定义注意力权重$\alpha^{t1,t2}$为：**当生成y的第t1个单词时，对原文第t2个词的注意力应该是多少？**    
$$
\begin{aligned}
\sum_{t2}\alpha^{t1,t2} = 1   \\
C^{t1} = \sum_{t2}\alpha^{t1, t2} a^{t2}
\end{aligned}
$$

# 注意力模型的计算过程

**注意$a$和$\alpha$的区别。**  
由于输入序列和输出序列是两个不同的序列，分别用于t1、t2表示输出序列和输入序列的时间步。  
整体计算过程为：  
$$
x \rightarrow a \rightarrow e \rightarrow \alpha \rightarrow C \rightarrow s \rightarrow y
$$

![](/assets/60.png)   

## $x \rightarrow a$

Encoder

## $a \rightarrow e$

根据t2时间步的Encoder输出和t1-1时间步的Decoder中间状态，计算出t1时间对t2时间的注意力。  
可以看作是嵌入了一个简单的网络。  

## $e \rightarrow \alpha$

以及t2为维度为e作为归一化，使得归一伦后$\sum_{t2}\alpha^{t1,t2} = 1 $  
$$
\alpha^{t1,t2} = \frac{\exp(e^{t1,t2})}{\sum_{t2}\exp(e^{t1,t2})}
$$

## $\alpha \rightarrow C$

根据归一化后的注意力权重计算Decoder的输入。  
$$
\begin{aligned}
C^{t1} = \sum_{t2}\alpha^{t1, t2} a^{t2}
\end{aligned}
$$

## $C \rightarrow s$

Decoder

## $s \rightarrow y$

输出


# 时间复杂度

注意力模型的时间复杂度为$O(n^3)$，复杂度有点高。  
由于机器翻译的输入、输出通常不是会太，因此$O(n^3)$也是可以接受的。  
