---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
# About me
I am a forth-year PhD student (2021 - present) of [Department of Computer Science and Engineering](https://www.cs.sjtu.edu.cn/) at [Shanghai Jiao Tong University (SJTU)](https://en.sjtu.edu.cn/). I am fortunate to be advised by [Prof. Rui Wang](https://wangruinlp.github.io/). Before that, I received the bachelor degree in Software Engineering from South China University of Technology (SCUT). I am currently a research intern at Tencent AI Lab, co-advised by [Dr. Xing Wang](http://www.xingwang4nlp.com/) and [Dr. Zhaopeng Tu](http://www.zptu.net/). I also work closely with [Zhuosheng Zhang](https://bcmi.sjtu.edu.cn/~zhangzs/).


# 🔬 Research

**Large and Efficient Reasoning Models**

* DeepMath-103K [Preprint]
* Underthinking issue in o1-like models [Preprint]
* Overthinking issue in o1-like models [ICML 2025]
* Rank-sharing LoRA [ICLR 2025]

**Autonomous Agent powered by Large Language Models**

* Multi-agent debate [EMNLP 2024]
* Evaluating and improving agent safety [EMNLP 2024 (Findings)]

**Multilinguality & Machine Translation**

* Bridging the gap between training signal and real user input [ACL 2022]
* Human-like translation strategy [TACL 2024]
* Improving translation with human feedback [NAACL 2024]
* Cross-lingual consistency for text watermark [ACL 2024 (Oral)]


# 🔥 News
- *2025.05*: 🎉🎉 One paper about model overthinking accepted by [ICML 2025](https://icml.cc/).
- *2025.04*: 🇸🇬🇸🇬 Attended [ICLR 2025](https://iclr.cc/Conferences/2025) @ Singapore.
- *2025.04*: 🎓🎓 Released [DeepMath-103K](https://huggingface.co/datasets/zwhe99/DeepMath-103K), a large-scale, challenging, decontaminated, and verifiable math dataset for advancing reasoning.
- *2025.01*: 🤯🤯 Revealed underthinking issue in o1-like models ([preprint](https://arxiv.org/abs/2501.18585)).
- *2024.12*: 🎉🎉 One paper about parameter-efficient fine-tuning accepted by [ICLR 2025](https://iclr.cc/Conferences/2025).
- *2024.12*: 🤯🤯 Revealed overthinking issue in o1-like models ([preprint](https://arxiv.org/abs/2412.21187)).
- *2024.08*: 🇹🇭🐘 Gave an oral presentation at [ACL 2024](https://2024.aclweb.org/) on cross-lingual text watermark.
- *2024.06*: 🇲🇽🌮 Attended [NAACL 2024](https://2024.naacl.org/) @ Mexico.
- *2024.05*: 🎉🎉 One paper about cross-lingual text watermark accepted by [ACL 2024](https://2024.aclweb.org/).
- *2024.03*: 🎉🎉 One paper about improving translation with human feedback accepted by [NAACL 2024](https://2024.naacl.org/).
- *2023.11*: 🎉🎉 One paper about human-like translation strategy accepted by [TACL 2024](https://transacl.org/index.php/tacl).
- *2023.05*: Introduced the [MAPS](https://github.com/zwhe99/MAPS-mt) framework, enabling LLMs to mimic the human translation strategy. See also the [media coverage](https://slator.com/how-large-language-models-mimic-human-translation-process/) 📸.
- *2023.05*: Proposed a multi-agent debate framework ([MAD](https://github.com/Skytliang/Multi-Agents-Debate)) with large language models [(EMNLP 2024)](https://arxiv.org/abs/2305.19118).

<span class='anchor' id='preprints'></span>
# 🖨️ Selected preprints
\* denotes co-first authors
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='papers/deepmath/fig.png' alt="deepmath" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[DeepMath-103K: A Large-Scale, Challenging, Decontaminated, and Verifiable Mathematical Dataset for Advancing Reasoning](https://arxiv.org/abs/2504.11456)

<font size=2><b>Zhiwei He*</b>, Tian Liang*, Jiahao Xu*, Qiuzhi Liu, Xingyu Chen, Yue Wang, Linfeng Song, Dian Yu, Zhenwen Liang, Wenxuan Wang, Zhuosheng Zhang, Rui Wang, Zhaopeng Tu, Haitao Mi, Dong Yu</font>

<a href='https://github.com/zwhe99/DeepMath'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="deepmath">BIB</button> <a href='https://huggingface.co/datasets/zwhe99/DeepMath-103K'><button class="home-btn">DATA</button></a> <a href='papers/deepmath/slide.pdf'><button class="slide-btn">SLIDE</button></a>


* 💪🏻 Challenging math dataset with verifiable answers.
* 🔥 Top trending dataset on HuggingFace (30,000+ downloads).
* 📈 SOTA on math reasoning benchmarks.
</div>
</div>

- [Thoughts Are All Over the Place: On the Underthinking of o1-Like LLMs](https://arxiv.org/abs/2501.18585)

  Yue Wang\*, Qiuzhi Liu\*, Jiahao Xu\*, Tian Liang\*, Xingyu Chen\*, **Zhiwei He**\*, Linfeng Song, Dian Yu, Juntao Li, Zhuosheng Zhang, Rui Wang, Zhaopeng Tu, Haitao Mi, Dong Yu

  ``arXiv 2025`` \| <button class="copy-btn" data-bib-file="wang2025thought">BIB</button>
<br>
<br>

# 📝 Selected publications 
\* denotes co-first authors
- [Do NOT Think That Much for 2+3=? On the Overthinking of o1-Like LLMs](https://arxiv.org/abs/2412.21187)

  Xingyu Chen\*, Jiahao Xu\*, Tian Liang\*, **Zhiwei He**\*, Jianhui Pang, Dian Yu, Linfeng Song, Qiuzhi Liu, Mengfei Zhou, Zhuosheng Zhang, Rui Wang, Zhaopeng Tu, Haitao Mi, Dong Yu

  ``ICML 2025`` \| <button class="copy-btn" data-bib-file="chen2024not">BIB</button>

  * Reasoning models ofter overthinks, which contribute minimally to improving accuracy.
<br>
<br>

- [RaSA: Rank-Sharing Low-Rank Adaptation](https://arxiv.org/abs/2503.12576)

  **Zhiwei He**, Zhaopeng Tu, Xing Wang, Xingyu Chen, Zhijie Wang, Jiahao Xu, Tian Liang, Wenxiang Jiao, Zhuosheng Zhang, Rui Wang

  ``ICLR 2025`` \| <a href='https://github.com/zwhe99/RaSA'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="he2025rasa">BIB</button> <a href='papers/he2025rasa/poster.pdf'><button class="poster-btn">POSTER</button></a> <a href='papers/he2025rasa/slide.pdf'><button class="slide-btn">SLIDE</button></a>

  * We show how sharing ranks across layers significantly improves LoRA's expressive capacity for efficient LLM adaptation.
<br>
<br>

- [R-Judge: Benchmarking Safety Risk Awareness for LLM Agents](https://arxiv.org/abs/2401.10019)

  Tongxin Yuan\*, **Zhiwei He**\*, Lingzhong Dong, Yiming Wang, Ruijie Zhao, Tian Xia, Lizhen Xu, Binglin Zhou, Fangqi Li, Zhuosheng Zhang, Rui Wang, Gongshen Liu

  ``EMNLP 2024 (Findings)`` \| <a href='https://github.com/Lordog/R-Judge'><button class="code-btn">PROJ</button></a> <button class="copy-btn" data-bib-file="yuan2024rjudge">BIB</button> <a href='https://rjudgebench.github.io/'><button class="home-btn">HOME</button></a> <a href='papers/yuan2024rjudge/poster.pdf'><button class="poster-btn">POSTER</button></a>

  * Are LLM agents aware of safety risks in real-world applications? Let's find out with R-Judge!
<br>
<br>

- [Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate](https://arxiv.org/abs/2305.19118)

  Tian Liang\*, **Zhiwei He**\*, Wenxiang Jiao\*, Xing Wang, Yan Wang, Rui Wang, Yujiu Yang, Zhaopeng Tu, Shuming Shi

  ``EMNLP 2024`` \| <a href='https://github.com/Skytliang/Multi-Agents-Debate'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="liang2023encouraging">BIB</button> <a href='papers/liang2023encouraging/poster.pdf'><button class="poster-btn">POSTER</button></a> <a href='papers/liang2023encouraging/slide.pdf'><button class="slide-btn">SLIDE</button></a>

  * We propose a multi-agent debate framework with large language models.
<br>
<br>

- [Can Watermarks Survive Translation? On the Cross-lingual Consistency of Text Watermark for Large Language Models](https://arxiv.org/abs/2402.14007)

  **Zhiwei He**\*, Binglin Zhou\*, Hongkun Hao, Aiwei Liu, Xing Wang, Zhaopeng Tu, Zhuosheng Zhang, Rui Wang

  ``ACL 2024`` \| <a href='https://github.com/zwhe99/X-SIR'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="he2024can">BIB</button> <a href='https://cross-lingual-watermark.github.io/'><button class="home-btn">HOME</button></a> <a href='papers/he2024can/poster.pdf'><button class="poster-btn">POSTER</button></a> <a href='papers/he2024can/slide.pdf'><button class="slide-btn">SLIDE</button></a>

  * Text watermarks can be easily removed by translation.
  * We analyze and improve the cross-lingual consistency of text watermarks.
<br>
<br>

- [Improving Machine Translation with Human Feedback: An Exploration of Quality Estimation as a Reward Model](https://arxiv.org/abs/2401.12873)

  **Zhiwei He**, Xing Wang, Wenxiang Jiao, Zhuosheng Zhang, Rui Wang, Shuming Shi, Zhaopeng Tu

  ``NAACL 2024`` \| <a href='https://github.com/zwhe99/FeedbackMT'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="he2024improving">BIB</button> <a href='papers/he2024improving/poster.pdf'><button class="poster-btn">POSTER</button></a> <a href='papers/he2024improving/slide.pdf'><button class="slide-btn">SLIDE</button></a>

  * We identify the *overoptimization* problem when using QE-based reward models for training translation model.
  * We address it with a simple yet effective method.
<br>
<br>

- [Exploring Human-Like Translation Strategy with Large Language Models](https://arxiv.org/abs/2305.04118)

  **Zhiwei He**\*, Tian Liang\*, Wenxiang Jiao, Zhuosheng Zhang, Yujiu Yang, Rui Wang, Zhaopeng Tu, Shuming Shi, Xing Wang

  ``TACL 2024`` \| <a href='https://github.com/zwhe99/MAPS-mt'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="he2023exploring">BIB</button> <a href='papers/he2023exploring/poster.pdf'><button class="poster-btn">POSTER</button></a> <a href='papers/he2023exploring/slide.pdf'><button class="slide-btn">SLIDE</button></a>
  
  * We propose MAPS, the first machine translation system that mimics human translation strategies.
  * Outperforms WMT22 winners in 5 out of 11 translation directions.
  * [Media coverage](https://slator.com/how-large-language-models-mimic-human-translation-process/)
<br>
<br>

- [Tencent AI Lab-Shanghai Jiao Tong University Low-Resource Translation System for the WMT22 Translation Task](https://arxiv.org/abs/2210.08742)

  **Zhiwei He**, Xing Wang, Zhaopeng Tu, Shuming Shi, Rui Wang

  ``WMT 2022`` \| <a href='https://github.com/zwhe99/WMT22-En-Liv'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="he-etal-2022-tencent">BIB</button> <a href='papers/he-etal-2022-tencent/poster.pdf'><button class="poster-btn">POSTER</button></a>
  
  * Machine translation system for [Livonian](https://en.wikipedia.org/wiki/Livonian_language)
  * 🥇1st place for English$\Rightarrow$Livonian (unconstrained system)
  * 🥈2nd place for Livonian$\Rightarrow$English (unconstrained system)
<br>
<br>

- [Bridging the Data Gap between Training and Inference for Unsupervised Neural Machine Translation](https://arxiv.org/abs/2203.08394)

  **Zhiwei He**, Xing Wang, Rui Wang, Shuming Shi, Zhaopeng Tu

  ``ACL 2022`` \| <a href='https://github.com/zwhe99/SelfTraining4UNMT'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="he-etal-2022-bridging">BIB</button> <a href='papers/he-etal-2022-bridging/poster.pdf'><button class="poster-btn">POSTER</button></a> <a href='papers/he-etal-2022-bridging/slide.pdf'><button class="slide-btn">SLIDE</button></a>

# 🎖 Honors and Awards
- *2022.8*: 1st place in the WMT22 General Translation Task, English to Livonian (Unconstrained System).
- *2022.8*: 2nd place in the WMT22 General Translation Task, Livonian to English (Unconstrained System).
- *2018, 2019*: First Class Scholarship.

# 💬 Invited Talks
- *2025.05*: RaSA: Rank-Sharing Low-Rank Adaptation, 腾讯混元ICLR前沿论文分享 \| [\[slide\]](talks/HUNYUAN/rasa.pdf)
- *2024.07*: Can Watermarks Survive Translation, AITIME \| [\[video\]](https://b23.tv/e7NCKTv) [\[slide\]](talks/AITIME/cross_lingual_watermark_ai_time.pdf)
- *2023.11*: Improving Machine Translation with Human Strategy and Feedback, CJNLP \| [\[slide\]](talks/CJNLP/CJNLP.pdf)
- *2022.08*: Unsupervised Neural Machine Translation, CCKS 2022

# 💻 Internships
- *2021 - present*: [Tencent AI Lab](https://ai.tencent.com/ailab/en/index), Shenzhen, Mentors: [Dr. Xing Wang](http://www.xingwang4nlp.com/) and [Dr. Zhaopeng Tu](http://www.zptu.net/).





<p align="center" style="padding-top: 40px;"><a href='https://clustrmaps.com/site/1buod'  title='Visit tracker'><img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=300&t=tt&d=wrVdBNFzLxaWLvwSCyCmHsqwS2ECsylNIejFIQfnD2A&co=2d78ad&ct=ffffff'/></a></p>
