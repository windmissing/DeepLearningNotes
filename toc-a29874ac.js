// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><span>Deep Learning Notes</span></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html"><strong aria-hidden="true">1.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="2020-04-17-deep-learning-study-path.html"><strong aria-hidden="true">2.</strong> DL 学习路线</a></span></li><li class="chapter-item expanded "><li class="part-title">Case Study</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CaseStudy/ClassicNetwork.html"><strong aria-hidden="true">3.</strong> 经典网络</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CaseStudy/ResNet.html"><strong aria-hidden="true">4.</strong> 残差网络</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CaseStudy/SpecialConv.html"><strong aria-hidden="true">5.</strong> 1*1 卷积</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CaseStudy/Inception.html"><strong aria-hidden="true">6.</strong> Inception 网络</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CaseStudy/Seq2Seq.html"><strong aria-hidden="true">7.</strong> Seq2Seq</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CaseStudy/Attention/Attention.html"><strong aria-hidden="true">8.</strong> 注意力模型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CaseStudy/Attention/MemoryNetowrk.html"><strong aria-hidden="true">9.</strong> Memory Network</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CaseStudy/PointerNetwork.html"><strong aria-hidden="true">10.</strong> 指针网络</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CaseStudy/Recursive.html"><strong aria-hidden="true">11.</strong> 循环网络</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CaseStudy/Applications.html"><strong aria-hidden="true">12.</strong> RNN 的各种应用</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CaseStudy/Highway.html"><strong aria-hidden="true">13.</strong> Highway Network</a></span></li><li class="chapter-item expanded "><li class="part-title">Computer Vision</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CV/CV.html"><strong aria-hidden="true">14.</strong> CV 基础</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CV/Localization.html"><strong aria-hidden="true">15.</strong> 目标定位</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CV/LandmarkDetection.html"><strong aria-hidden="true">16.</strong> Landmark Detection</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CV/Detection/Detection.html"><strong aria-hidden="true">17.</strong> 目标检测</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CV/Detection/SlidingWindow.html"><strong aria-hidden="true">17.1.</strong> 滑动窗口算法</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CV/Detection/YOLO.html"><strong aria-hidden="true">17.2.</strong> YOLO 算法</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CV/Detection/RegionProposal.html"><strong aria-hidden="true">17.3.</strong> 候选区域算法</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CV/Style.html"><strong aria-hidden="true">18.</strong> 风格迁移</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CV/Face/Face.html"><strong aria-hidden="true">19.</strong> 人脸验证与人脸识别</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CV/Face/Siamese.html"><strong aria-hidden="true">19.1.</strong> Siamese Network</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CV/Face/Triplet.html"><strong aria-hidden="true">19.2.</strong> 三元组损失函数</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CV/DomainAdversarial.html"><strong aria-hidden="true">20.</strong> Domain-Adversarial Training</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CV/HPE/HPE.html"><strong aria-hidden="true">21.</strong> 人体姿态估计 HPE</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CV/HPE/DeepPose.html"><strong aria-hidden="true">21.1.</strong> DeepPose</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="CV/Practice/Practice.html"><strong aria-hidden="true">22.</strong> 实践</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CV/Practice/load_vgg_model.html"><strong aria-hidden="true">22.1.</strong> 读入 VGG16 预训练模型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CV/Practice/ImageReconstruction.html"><strong aria-hidden="true">22.2.</strong> 基于预训练模型的图像重构</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="CV/Practice/StyleReconstruction.html"><strong aria-hidden="true">22.3.</strong> 基于预训练模型的风格重构</a></span></li></ol><li class="chapter-item expanded "><li class="part-title">Natural Language Processing</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="NLP/LanguageModel.html"><strong aria-hidden="true">23.</strong> 语言模型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="NLP/WordEmbedding/index.html"><strong aria-hidden="true">24.</strong> 词汇表征</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="NLP/WordEmbedding/OneHotEmbedding.html"><strong aria-hidden="true">24.1.</strong> One-hot Embedding</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="NLP/WordEmbedding/WordEmbedding.html"><strong aria-hidden="true">24.2.</strong> Word Embedding</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="NLP/WordEmbedding/ReasonableAnalogies.html"><strong aria-hidden="true">24.3.</strong> 类比推理</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="NLP/WordEmbedding/LanguageModel.html"><strong aria-hidden="true">24.4.</strong> 用语言模型学习 Embedding Matrix</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="NLP/WordEmbedding/Word2Vec.html"><strong aria-hidden="true">24.5.</strong> Word2Vec 算法</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="NLP/WordEmbedding/Skipgrams.html"><strong aria-hidden="true">24.6.</strong> skip-grams 算法</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="NLP/WordEmbedding/NegativeSampling.html"><strong aria-hidden="true">24.7.</strong> 负采样算法</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="NLP/WordEmbedding/GloVec.html"><strong aria-hidden="true">24.8.</strong> 词向量算法</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="NLP/WordEmbedding/Debiasing.html"><strong aria-hidden="true">24.9.</strong> 词嵌入除偏</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="NLP/Embedding.html"><strong aria-hidden="true">25.</strong> Embedding</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="NLP/SentimentClassification.html"><strong aria-hidden="true">26.</strong> 情绪分类</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="NLP/2020-11-12-NMT-Summary.html"><strong aria-hidden="true">27.</strong> NMT</a></span></li><li class="chapter-item expanded "><li class="part-title">Audio</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Audio/Preprocess.html"><strong aria-hidden="true">28.</strong> 音频预处理</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Audio/Speech.html"><strong aria-hidden="true">29.</strong> 语音辨识</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Audio/TriggerWord.html"><strong aria-hidden="true">30.</strong> 触发字检测</a></span></li><li class="chapter-item expanded "><li class="part-title">Common Topics</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Common/ZeroShot.html"><strong aria-hidden="true">31.</strong> Zero Shot 问题</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Common/AutoEncoder.html"><strong aria-hidden="true">32.</strong> 深度自编码器</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Common/Structured.html"><strong aria-hidden="true">33.</strong> Deep Learning VS Structured Learning</a></span></li><li class="chapter-item expanded "><li class="part-title">Generative Adversarial Networks</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/Generative.html"><strong aria-hidden="true">34.</strong> 深度生成模型</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/Condition.html"><strong aria-hidden="true">35.</strong> 条件生成对抗网络</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/unsupervised.html"><strong aria-hidden="true">36.</strong> 非监督条件生成</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/Thoery.html"><strong aria-hidden="true">37.</strong> GAN 的理论基础</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/Framework.html"><strong aria-hidden="true">38.</strong> 通用框架</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/LSGAN.html"><strong aria-hidden="true">39.</strong> LSGAN</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/WGAN.html"><strong aria-hidden="true">40.</strong> WGAN</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/EBGAN.html"><strong aria-hidden="true">41.</strong> Energy-based GAN</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/Info.html"><strong aria-hidden="true">42.</strong> Info GAN</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/VAEGAN.html"><strong aria-hidden="true">43.</strong> VAE GAN</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/BiGAN.html"><strong aria-hidden="true">44.</strong> BiGAN</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/DAT.html"><strong aria-hidden="true">45.</strong> Domain Adversarial Training</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/Phote.html"><strong aria-hidden="true">46.</strong> 照片编辑应用</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/Sequence.html"><strong aria-hidden="true">47.</strong> 序列生成的应用</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="GAN/Evaluation.html"><strong aria-hidden="true">48.</strong> GAN 的估计</a></span></li><li class="chapter-item expanded "><li class="part-title">强化学习</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="RL/index.html"><strong aria-hidden="true">49.</strong> RL 基础</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="RL/Reinforce.html"><strong aria-hidden="true">50.</strong> 强化学习</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="RL/Policy/Policy.html"><strong aria-hidden="true">51.</strong> Policy Based</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="../Policy1.html"><strong aria-hidden="true">51.1.</strong> Basic Version</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="../Policy2.html"><strong aria-hidden="true">51.2.</strong> 公式改进</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="../Policy3.html"><strong aria-hidden="true">51.3.</strong> off-policy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="../Policy4.html"><strong aria-hidden="true">51.4.</strong> 近端优化策略</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="RL/Value/Value.html"><strong aria-hidden="true">52.</strong> Value Based</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="../Value1.html"><strong aria-hidden="true">52.1.</strong> value function</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="../Value2.html"><strong aria-hidden="true">52.2.</strong> Q-Learning</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="../Value3.html"><strong aria-hidden="true">52.3.</strong> Q-Learning 的改进算法</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="RL/Compare.html"><strong aria-hidden="true">53.</strong> Q-Learning Vs Policy Based</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="RL/A3C/A3C.html"><strong aria-hidden="true">54.</strong> A3C</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="../A3C1.html"><strong aria-hidden="true">54.1.</strong> 复习</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="../A3C2.html"><strong aria-hidden="true">54.2.</strong> A3C</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="../A3C3.html"><strong aria-hidden="true">54.3.</strong> Pathwise Derivative Policy Gradient</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="RL/AdvancedTopics.html"><strong aria-hidden="true">55.</strong> 补充主题：RL vs 轨迹优化</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="RL/Sparse.html"><strong aria-hidden="true">56.</strong> 稀疏奖励</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="RL/Imitation.html"><strong aria-hidden="true">57.</strong> 模仿学习</a></span></li><li class="chapter-item expanded "><li class="part-title">Advanced Topics</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1209400866/Anomaly.html"><strong aria-hidden="true">58.</strong> 异常侦测</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1209400866/Labelled.html"><strong aria-hidden="true">58.1.</strong> case 1: labelled data</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1209400866/Unlabelled.html"><strong aria-hidden="true">58.2.</strong> case 3: polluted unlabelled data</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1209400866/AttackModel.html"><strong aria-hidden="true">59.</strong> 对抗模型</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1209400866/Attack.html"><strong aria-hidden="true">59.1.</strong> 攻击</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="1209400866/Defense.html"><strong aria-hidden="true">59.2.</strong> 防御</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1209400866/Explainable.html"><strong aria-hidden="true">60.</strong> 模型的可解释性 Explainable ML</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1209400866/LLL.html"><strong aria-hidden="true">61.</strong> Life Long Learning</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="1209400866/Meta.html"><strong aria-hidden="true">62.</strong> Meta Learning</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

