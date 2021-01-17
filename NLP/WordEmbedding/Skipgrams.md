# Skip-Gram Model

Skip-grams与Word2Vec算法相似，只是选择context和target的方法不同。  

skip-context的目标是：给一个context，输出从context skip一些单词之后的单词。  

基于NLP语言模型的改进。  
在NLP语言模型中，使用target的前K个单词作为context.  
如果目标不是生成语言模型，而是用于训练类比推理，可以使用其它类型的context.  

# 遗留问题

## 问题1： 公式p(t|c)的分母计算非常慢  

$$
p(t|c) = \frac{\exp{\theta^\top_t e_c}}{\sum_t \exp{\theta^\top_t e_c}}
$$

解决方法：分组的softmax  
![](/assets/45.png)   

## 问题2：怎么采样生成context？  
- 均匀随机采样：  the, of, a等词频繁出现和更新，orange, apple, durian较少出现和更新  
- 启发算法：用于平衡常见词和不常见词  
