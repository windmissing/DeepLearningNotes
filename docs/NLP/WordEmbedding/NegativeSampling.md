Mikolov et. al., 2013. Distributed representation of words and phrases and their compositionality  

负采样 negative sample，可以解决Word2Vec和skip-grams中p(t|c)计算太慢的问题。  

# 算法过程

1. 从句中选择一个context  
2. 从context的范围内生成一对word（同Word2Vec），(context, word)构成一个正样本，定义其label为1  
3. 从单词表中随机选择一个word，(context, word)构成一个负样本，定义这k个负样本的label为0。  
4. 重复第3步k次，得到k个负样本。  
3. 用正/负样本对及其对应的label训练模型（监督学习）  
$$
P(y=1|c, t) = \sigma(\theta^\top_t e_c)
$$

# 优点

相当于把大小为1000个类别的多分类问题转换成1000个二分类问题。  
但并不是每次都把1000个二分类问题都算了，而是只更新k+1个二分类的结果。  

# 遗留问题

## 问题1：如何决定k？  

for larger corpus, [5, 20]  
for smaller corpus, [2, 5]  
数据集大则k小，数据集小则k大。  

## 问题2：如何选择负样本的context?  

- 根据词出现的频率进行采样：the, of, and...问题  
- 均匀随机抽取：样本没有代表性  
- 启发算法  
$$
P(w_i) = \frac{f(w_i)^{\frac{3}{4}}}{\sum f(w_i)^{\frac{3}{4}}}
$$

公式中$f(w_i)$代表词频。  