# Recursive Network的结构

## Recurrent Network VS Recursive Network

以情绪分类任务为例来说明Recurrent Network和Recursive Network的区别:  
![](/assets/83.png)   
从图上看,把它称为递归网络更合适.  
Note: x和h的维度必须相同.  

## Recursive Network中的f定义如下：  

### 定义一:  

![](/assets/84.png)   

### 定义二: Matrix-Vector Recursive Network

结构复杂但效果不好  
把向量分为2部分,前面代表单词本身的含义,后面代表对其它单词的影响.  
![](/assets/85.png)   
过程解释:  
a被B影响得到一个结果, b被A影响得到另一个结果.两个结果合在一起,代表新向量的内容.  
A和B结合在一起,代表新向量的影响力.  

问: 设计f时,为什么认为向量的前面代表单词本身的含义,后面代表对其它单词的影响?  
答: 不是因为向量有这样的含义所以这样设计网络.而是因为这样设计网络,训练的结构导致向量有这样的含义.  

### 定义三: Tree LSTM
![](/assets/86.png)   

# Recursive Network的应用

## sentence relatedness

![](/assets/87.png)   
