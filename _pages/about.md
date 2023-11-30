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

* Multi-agent debate [Preprint]

**Human-centered Machine Translation**

* Bridging the gap between training signal and real user input [ACL 2022]
* Human-like translation strategy [TACL 2024]
* Improving translation with human feedback




# 🔥 News
- *2023.11*: 🎉🎉 One paper about human-like translation strategy is accepted by [TACL 2024](https://transacl.org/index.php/tacl).
- *2023.05*: We introduce the [MAPS](https://github.com/zwhe99/MAPS-mt) framework, enabling LLMs to mimic the human translation strategy. See also the [media coverage](https://slator.com/how-large-language-models-mimic-human-translation-process/) 📸 and [demo](https://huggingface.co/spaces/zwhe99/MAPS-mt).
- *2023.05*: We propose multi-agent debate framework ([MAD](https://github.com/Skytliang/Multi-Agents-Debate)) with large language models [(preprint)](https://arxiv.org/abs/2305.19118).
- *2023.05*: One short paper about tense consistency of machine translation is accepted by [ACL 2023](https://2023.aclweb.org/).

<span class='anchor' id='preprints'></span>
# 🖨️ Preprints
\* denotes co-first authors
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2023</div><img src='papers/zhang2023igniting/fig.png' alt="zhang2023igniting" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Igniting Language Intelligence: The Hitchhiker's Guide From Chain-of-Thought Reasoning to Language Agents](https://arxiv.org/abs/2311.11797)


Zhuosheng Zhang, Yao Yao, Aston Zhang, Xiangru Tang, Xinbei Ma, **Zhiwei He**, Yiming Wang, Mark Gerstein, Rui Wang, Gongshen Liu, Hai Zhao

[![](https://img.shields.io/github/stars/Zoeyyao27/CoT-Igniting-Agent?style=social&logo=github&label=CoT-Igniting-Agent)](https://github.com/Zoeyyao27/CoT-Igniting-Agent)
<button class="copy-btn" data-bib-file="zhang2023igniting">Copy BIB</button>

- A journey from CoT to language agent.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2023</div><img src='papers/liang2023encouraging/fig.png' alt="liang2023encouraging" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate](https://arxiv.org/abs/2305.19118)


Tian Liang\*, **Zhiwei He**\*, Wenxiang Jiao\*, Xing Wang, Yan Wang, Rui Wang, Yujiu Yang, Zhaopeng Tu, Shuming Shi

[![](https://img.shields.io/github/stars/Skytliang/Multi-Agents-Debate?style=social&logo=github&label=Multi-Agents-Debate)](https://github.com/Skytliang/Multi-Agents-Debate)
<button class="copy-btn" data-bib-file="liang2023encouraging">Copy BIB</button>

- Yes. Multi-agent debate.
</div>
</div>

# 📝 Publications 
\* denotes co-first authors
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TACL 2024</div><img src='papers/he2023exploring/fig.png' alt="he2023exploring" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Exploring Human-Like Translation Strategy with Large Language Models](https://arxiv.org/abs/2305.04118)


**Zhiwei He**\*, Tian Liang\*, Wenxiang Jiao, Zhuosheng Zhang, Yujiu Yang, Rui Wang, Zhaopeng Tu, Shuming Shi, Xing Wang

[![](https://img.shields.io/github/stars/zwhe99/MAPS-mt?style=social&logo=github&label=MAPS-mt)](https://github.com/zwhe99/MAPS-mt)
[![](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Demo-blue)](https://huggingface.co/spaces/zwhe99/MAPS-mt)
<button class="copy-btn" data-bib-file="he2023exploring">Copy BIB</button>

- We propose MAPS, the first machine translation system that mimics human translation strategies.
- Outperforms WMT22 winners in 5 out of 11 translation directions.
- [Media coverage](https://slator.com/how-large-language-models-mimic-human-translation-process/)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2023</div><img src='papers/ai2023tecs/fig.png' alt="ai2023tecs" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[TeCS: A Dataset and Benchmark for Tense Consistency of Machine Translation](https://arxiv.org/abs/2305.13740)


Yiming Ai, **Zhiwei He**, Kai Yu, Rui Wang

[![](https://img.shields.io/github/stars/rutilel/TeCS-A-Dataset-and-Benchmark-for-Tense-Consistency?style=social&logo=github&label=Dataset)](https://github.com/rutilel/TeCS-A-Dataset-and-Benchmark-for-Tense-Consistency)
<button class="copy-btn" data-bib-file="ai2023tecs">Copy BIB</button>

- The first dataset targeting tense consistency of machine translation.
</div>

</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">WMT 2022</div><img src='papers/he-etal-2022-tencent/fig.png' alt="he-etal-2022-tencent" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Tencent AI Lab-Shanghai Jiao Tong University Low-Resource Translation System for the WMT22 Translation Task](https://arxiv.org/abs/2210.08742)


**Zhiwei He**, Xing Wang, Zhaopeng Tu, Shuming Shi, Rui Wang

[![](https://img.shields.io/github/stars/zwhe99/WMT22-En-Liv?style=social&logo=github&label=WMT22-En-Liv)](https://github.com/zwhe99/WMT22-En-Liv)
<button class="copy-btn" data-bib-file="he-etal-2022-tencent">Copy BIB</button>

- Machine translation system for [Livonian](https://en.wikipedia.org/wiki/Livonian_language)
- 🥇1st place for English$\Rightarrow$Livonian (unconstrained system)
- 🥈2nd place for Livonian$\Rightarrow$English (unconstrained system)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACL 2022</div><img src='papers/he-etal-2022-bridging/fig.png' alt="he-etal-2022-bridging" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Bridging the Data Gap between Training and Inference for Unsupervised Neural Machine Translation](https://arxiv.org/abs/2203.08394)


**Zhiwei He**, Xing Wang, Rui Wang, Shuming Shi, Zhaopeng Tu

[![](https://img.shields.io/github/stars/zwhe99/SelfTraining4UNMT?style=social&logo=github&label=SelfTraining4UNMT)](https://github.com/zwhe99/SelfTraining4UNMT)
<button class="copy-btn" data-bib-file="he-etal-2022-bridging">Copy BIB</button>

- Unsupervised neural machine translation.
- Bridging the gap between training signal and real user input.
</div>
</div>

# 🎖 Honors and Awards
- *2022.8*: 1st place in the WMT22 General Translation Task, English to Livonian (Unconstrained System).
- *2022.8*: 2nd place in the WMT22 General Translation Task, Livonian to English (Unconstrained System).
- *2018, 2019*: First Class Scholarship.

# 💬 Invited Talks
- *2023.11*: Improving Machine Translation with Human Strategy and Feedback, CJNLP \| [\[slide\]](talks/CJNLP/CJNLP.key)
- *2022.08*: Unsupervised Neural Machine Translation, CCKS 2022

# 💻 Internships
- *2021 - present*: [Tencent AI Lab](https://ai.tencent.com/ailab/en/index), Shenzhen, Mentors: [Dr. Xing Wang](http://www.xingwang4nlp.com/) and [Dr. Zhaopeng Tu](http://www.zptu.net/).

<p align="center" style="padding-top: 20px;">
    <a href='https://clustrmaps.com/site/1buod' title='Visit tracker'>
        <img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=300&t=tt&d=wrVdBNFzLxaWLvwSCyCmHsqwS2ECsylNIejFIQfnD2A&co=2d78ad&ct=ffffff'/>
    </a>
</p>