# Summary

[Deep Learning Notes]()

- [Introduction](README.md)
- [DL 学习路线](2020-04-17-deep-learning-study-path.md)

# Case Study

- [经典网络](CaseStudy/ClassicNetwork.md)
- [残差网络](CaseStudy/ResNet.md)
- [1*1 卷积](CaseStudy/SpecialConv.md)
- [Inception 网络](CaseStudy/Inception.md)
- [Seq2Seq](CaseStudy/Seq2Seq.md)
- [注意力模型](CaseStudy/Attention/Attention.md)
- [Memory Network](CaseStudy/Attention/MemoryNetowrk.md)
- [指针网络](CaseStudy/PointerNetwork.md)
- [循环网络](CaseStudy/Recursive.md)
- [RNN 的各种应用](CaseStudy/Applications.md)
- [Highway Network](CaseStudy/Highway.md)

# Computer Vision

- [CV 基础](CV/CV.md)
- [目标定位](CV/Localization.md)
- [Landmark Detection](CV/LandmarkDetection.md)
- [目标检测](CV/Detection/Detection.md)
    - [滑动窗口算法](CV/Detection/SlidingWindow.md)
    - [YOLO 算法](CV/Detection/YOLO.md)
    - [候选区域算法](CV/Detection/RegionProposal.md)
- [风格迁移](CV/Style.md)
- [人脸验证与人脸识别](CV/Face/Face.md)
    - [Siamese Network](CV/Face/Siamese.md)
    - [三元组损失函数](CV/Face/Triplet.md)
- [Domain-Adversarial Training](CV/DomainAdversarial.md)
- [人体姿态估计 HPE](CV/HPE/HPE.md)
    - [DeepPose](CV/HPE/DeepPose.md)
- [实践](CV/Practice/Practice.md)
    - [读入 VGG16 预训练模型](CV/Practice/load_vgg_model.md)
    - [基于预训练模型的图像重构](CV/Practice/ImageReconstruction.md)
    - [基于预训练模型的风格重构](CV/Practice/StyleReconstruction.md)

# Natural Language Processing

- [语言模型](NLP/LanguageModel.md)
- [词汇表征](NLP/WordEmbedding/README.md)
    - [One-hot Embedding](NLP/WordEmbedding/OneHotEmbedding.md)
    - [Word Embedding](NLP/WordEmbedding/WordEmbedding.md)
    - [类比推理](NLP/WordEmbedding/ReasonableAnalogies.md)
    - [用语言模型学习 Embedding Matrix](NLP/WordEmbedding/LanguageModel.md)
    - [Word2Vec 算法](NLP/WordEmbedding/Word2Vec.md)
    - [skip-grams 算法](NLP/WordEmbedding/Skipgrams.md)
    - [负采样算法](NLP/WordEmbedding/NegativeSampling.md)
    - [词向量算法](NLP/WordEmbedding/GloVec.md)
    - [词嵌入除偏](NLP/WordEmbedding/Debiasing.md)
- [Embedding](NLP/Embedding.md)
- [情绪分类](NLP/SentimentClassification.md)
- [NMT](NLP/2020-11-12-NMT-Summary.md)

# Audio

- [音频预处理](Audio/Preprocess.md)
- [语音辨识](Audio/Speech.md)
- [触发字检测](Audio/TriggerWord.md)

# Common Topics

- [Zero Shot 问题](Common/ZeroShot.md)
- [深度自编码器](Common/AutoEncoder.md)
- [Deep Learning VS Structured Learning](Common/Structured.md)

# Generative Adversarial Networks

- [深度生成模型](GAN/Generative.md)
- [条件生成对抗网络](GAN/Condition.md)
- [非监督条件生成](GAN/unsupervised.md)
- [GAN 的理论基础](GAN/Thoery.md)
- [通用框架](GAN/Framework.md)
- [LSGAN](GAN/LSGAN.md)
- [WGAN](GAN/WGAN.md)
- [Energy-based GAN](GAN/EBGAN.md)
- [Info GAN](GAN/Info.md)
- [VAE GAN](GAN/VAEGAN.md)
- [BiGAN](GAN/BiGAN.md)
- [Domain Adversarial Training](GAN/DAT.md)
- [照片编辑应用](GAN/Phote.md)
- [序列生成的应用](GAN/Sequence.md)
- [GAN 的估计](GAN/Evaluation.md)

# 强化学习

- [RL 基础](RL/README.md)
- [强化学习](RL/Reinforce.md)
- [Policy Based](RL/Policy/Policy.md)
    - [Basic Version](../Policy1.md)
    - [公式改进](../Policy2.md)
    - [off-policy](../Policy3.md)
    - [近端优化策略](../Policy4.md)
- [Value Based](RL/Value/Value.md)
    - [value function](../Value1.md)
    - [Q-Learning](../Value2.md)
    - [Q-Learning 的改进算法](../Value3.md)
- [Q-Learning Vs Policy Based](RL/Compare.md)
- [A3C](RL/A3C/A3C.md)
    - [复习](../A3C1.md)
    - [A3C](../A3C2.md)
    - [Pathwise Derivative Policy Gradient](../A3C3.md)
- [补充主题：RL vs 轨迹优化](RL/AdvancedTopics.md)
- [稀疏奖励](RL/Sparse.md)
- [模仿学习](RL/Imitation.md)

# Advanced Topics

- [异常侦测](1209400866/Anomaly.md)
    - [case 1: labelled data](1209400866/Labelled.md)
    - [case 3: polluted unlabelled data](1209400866/Unlabelled.md)
- [对抗模型](1209400866/AttackModel.md)
    - [攻击](1209400866/Attack.md)
    - [防御](1209400866/Defense.md)
- [模型的可解释性 Explainable ML](1209400866/Explainable.md)
- [Life Long Learning](1209400866/LLL.md)
- [Meta Learning](1209400866/Meta.md)
