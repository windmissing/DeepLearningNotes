# 任务描述

根据Ducument和Query生成Answer  
Answer是提前定义好的, 要从这些答案中选择一个正确答案.  
这是一个多分类问题
squad比赛  

# 模型

Memory Netowrk
Attention-based Model基础版（只读模型）
ReasoNet

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
