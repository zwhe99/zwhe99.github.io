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
I am a third-year PhD student (2021 - present) of [Department of Computer Science and Engineering](https://www.cs.sjtu.edu.cn/) at [Shanghai Jiao Tong University (SJTU)](https://en.sjtu.edu.cn/). I am fortunate to be advised by [Prof. Rui Wang](https://wangruinlp.github.io/). Before that, I received the bachelor degree in Software Engineering from South China University of Technology (SCUT). I am currently a research intern at Tencen AI Lab, co-advised by [Dr. Xing Wang](http://www.xingwang4nlp.com/) and [Dr. Zhaopeng Tu](http://www.zptu.net/).



# 🔬 Research

**Autonomous Agent powered by Large Language Models**

* Multi-agent debate [Pre-print]
* Evaluating and improving agent safety [Pre-print]

**Human-centered Machine Translation**

* Bridging the gap between training signal and real user input [ACL 2022]
* Human-like translation strategy [TACL 2024]
* Improving translation with human feedback [Pre-print]




# 🔥 News
- *2024.01*: [New preprint](https://arxiv.org/abs/2401.10019): R-Judge: Benchmarking Safety Risk Awareness for LLM Agents
- *2024.01*: [New preprint](https://arxiv.org/abs/2401.12873): Improving Machine Translation with Human Feedback: An Exploration of Quality Estimation as a Reward Model
- *2023.11*: 🎉🎉 One paper about human-like translation strategy is accepted by [TACL 2024](https://transacl.org/index.php/tacl).
- *2023.05*: We introduce the [MAPS](https://github.com/zwhe99/MAPS-mt) framework, enabling LLMs to mimic the human translation strategy. See also the [media coverage](https://slator.com/how-large-language-models-mimic-human-translation-process/) 📸.
- *2023.05*: We propose multi-agent debate framework ([MAD](https://github.com/Skytliang/Multi-Agents-Debate)) with large language models [(preprint)](https://arxiv.org/abs/2305.19118).
- *2023.05*: One short paper about tense consistency of machine translation is accepted by [ACL 2023](https://2023.aclweb.org/).

<span class='anchor' id='preprints'></span>
# 🖨️ Preprints
\* denotes co-first authors
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2024</div><img src='papers/he2024improving/fig.png' alt="he2024improving" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Improving Machine Translation with Human Feedback: An Exploration of Quality Estimation as a Reward Model](https://arxiv.org/abs/2401.12873)


**Zhiwei He**, Xing Wang, Wenxiang Jiao, Zhuosheng Zhang, Rui Wang, Shuming Shi, Zhaopeng Tu

<button class="copy-btn" data-bib-file="he2024improving">BIB</button>

- We identify the *overoptimization* problem when using QE-based reward models for training translation model.
- We address it with a simple yet effective method.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2024</div><img src='papers/yuan2024rjudge/fig.png' alt="yuan2024rjudge" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[R-Judge: Benchmarking Safety Risk Awareness for LLM Agents](https://arxiv.org/abs/2401.10019)


Tongxin Yuan\*, **Zhiwei He**\*, Lingzhong Dong, Yiming Wang, Ruijie Zhao, Tian Xia, Lizhen Xu, Binglin Zhou, Fangqi Li, Zhuosheng Zhang, Rui Wang, Gongshen Liu

<a href='https://github.com/Lordog/R-Judge'><button class="code-btn">PROJ</button></a> <button class="copy-btn" data-bib-file="yuan2024rjudge">BIB</button>

- A benchmark for agent safety awareness.
</div>
</div>

- [Igniting Language Intelligence: The Hitchhiker's Guide From Chain-of-Thought Reasoning to Language Agents](https://arxiv.org/abs/2311.11797)

  Zhuosheng Zhang, Yao Yao, Aston Zhang, Xiangru Tang, Xinbei Ma, **Zhiwei He**, Yiming Wang, Mark Gerstein, Rui Wang, Gongshen Liu, Hai Zhao

  ``arXiv 2023`` \| <a href='https://github.com/Zoeyyao27/CoT-Igniting-Agent'><button class="code-btn">PROJ</button></a> <button class="copy-btn" data-bib-file="zhang2023igniting">BIB</button>

- [Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate](https://arxiv.org/abs/2305.19118)

  Tian Liang\*, **Zhiwei He**\*, Wenxiang Jiao\*, Xing Wang, Yan Wang, Rui Wang, Yujiu Yang, Zhaopeng Tu, Shuming Shi

  ``arXiv 2023`` \| <a href='https://github.com/Skytliang/Multi-Agents-Debate'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="liang2023encouraging">BIB</button>

- [Leveraging Word Guessing Games to Assess the Intelligence of Large Language Models](https://arxiv.org/abs/2310.20499)

  Tian Liang, **Zhiwei He**, Jen-tse Huang, Wenxuan Wang, Wenxiang Jiao, Rui Wang, Yujiu Yang, Zhaopeng Tu, Shuming Shi, Xing Wang


  ``arXiv 2023`` \| <a href='https://github.com/Skytliang/SpyGame'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="liang2023spygame">BIB</button>


# 📝 Publications 
\* denotes co-first authors
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TACL 2024</div><img src='papers/he2023exploring/fig.png' alt="he2023exploring" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Exploring Human-Like Translation Strategy with Large Language Models](https://arxiv.org/abs/2305.04118)


**Zhiwei He**\*, Tian Liang\*, Wenxiang Jiao, Zhuosheng Zhang, Yujiu Yang, Rui Wang, Zhaopeng Tu, Shuming Shi, Xing Wang

<a href='https://github.com/zwhe99/MAPS-mt'><button class="code-btn">CODE</button></a>
<button class="copy-btn" data-bib-file="he2023exploring">BIB</button>


- We propose MAPS, the first machine translation system that mimics human translation strategies.
- Outperforms WMT22 winners in 5 out of 11 translation directions.
- [Media coverage](https://slator.com/how-large-language-models-mimic-human-translation-process/)
</div>
</div>

- [ParroT: Translating during Chat using Large Language Models tuned with Human Translation and Feedback](https://arxiv.org/abs/2304.02426)

  Wenxiang Jiao, Jen-tse Huang, Wenxuan Wang, **Zhiwei He**, Tian Liang, Xing Wang, Shuming Shi, Zhaopeng Tu


  ``EMNLP 2023`` \| <a href='https://github.com/wxjiao/ParroT'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="jiao2023parrot">BIB</button> <a href='papers/jiao2023parrot/slide.pdf'><button class="slide-btn">SLIDE</button></a>

- [TeCS: A Dataset and Benchmark for Tense Consistency of Machine Translation](https://arxiv.org/abs/2305.13740)

  Yiming Ai, **Zhiwei He**, Kai Yu, Rui Wang

  ``ACL 2023`` \| <a href='https://github.com/rutilel/TeCS-A-Dataset-and-Benchmark-for-Tense-Consistency'><button class="code-btn">DATA</button></a> <button class="copy-btn" data-bib-file="ai2023tecs">BIB</button> <a href='papers/ai2023tecs/poster.pdf'><button class="poster-btn">POSTER</button></a> <a href='papers/ai2023tecs/slide.pdf'><button class="slide-btn">SLIDE</button></a>

- [Tencent AI Lab-Shanghai Jiao Tong University Low-Resource Translation System for the WMT22 Translation Task](https://arxiv.org/abs/2210.08742)

  **Zhiwei He**, Xing Wang, Zhaopeng Tu, Shuming Shi, Rui Wang

  ``WMT 2022`` \| <a href='https://github.com/zwhe99/WMT22-En-Liv'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="he-etal-2022-tencent">BIB</button> <a href='papers/he-etal-2022-tencent/poster.pdf'><button class="poster-btn">POSTER</button></a>
  
  * Machine translation system for [Livonian](https://en.wikipedia.org/wiki/Livonian_language)
  * 🥇1st place for English$\Rightarrow$Livonian (unconstrained system)
  * 🥈2nd place for Livonian$\Rightarrow$English (unconstrained system)

- [Bridging the Data Gap between Training and Inference for Unsupervised Neural Machine Translation](https://arxiv.org/abs/2203.08394)

  **Zhiwei He**, Xing Wang, Rui Wang, Shuming Shi, Zhaopeng Tu

  ``ACL 2022`` \| <a href='https://github.com/zwhe99/SelfTraining4UNMT'><button class="code-btn">CODE</button></a> <button class="copy-btn" data-bib-file="he-etal-2022-bridging">BIB</button> <a href='papers/he-etal-2022-bridging/poster.pdf'><button class="poster-btn">POSTER</button></a> <a href='papers/he-etal-2022-bridging/slide.pdf'><button class="slide-btn">SLIDE</button></a>

# 🎖 Honors and Awards
- *2022.8*: 1st place in the WMT22 General Translation Task, English to Livonian (Unconstrained System).
- *2022.8*: 2nd place in the WMT22 General Translation Task, Livonian to English (Unconstrained System).
- *2018, 2019*: First Class Scholarship.

# 💬 Invited Talks
- *2023.11*: Improving Machine Translation with Human Strategy and Feedback, CJNLP \| [\[slide\]](talks/CJNLP/CJNLP.pdf)
- *2022.08*: Unsupervised Neural Machine Translation, CCKS 2022

# 💻 Internships
- *2021 - present*: [Tencent AI Lab](https://ai.tencent.com/ailab/en/index), Shenzhen, Mentors: [Dr. Xing Wang](http://www.xingwang4nlp.com/) and [Dr. Zhaopeng Tu](http://www.zptu.net/).





<p align="center" style="padding-top: 40px;"><a href='https://clustrmaps.com/site/1buod'  title='Visit tracker'><img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=300&t=tt&d=wrVdBNFzLxaWLvwSCyCmHsqwS2ECsylNIejFIQfnD2A&co=2d78ad&ct=ffffff'/></a></p>
