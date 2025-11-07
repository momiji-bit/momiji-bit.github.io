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

I’m currently pursuing an **MSc in Computer Graphics, Vision and Imaging** at [University College London](https://www.ucl.ac.uk/). Under the supervision of [**Assoc. Kaan Akşit**](https://www.kaanaksit.com/), my current research focuses on text-guided video anomaly detection (VAD) based on Large Vision-Language Models (LVLMs), aiming to enable fine-grained, interpretable, and human-centered video understanding.

I received my **BEng in Computer Science and Technology** from [Hefei University of Technology](https://ci.hfut.edu.cn/), School of Computer Science and Information Engineering (School of Artificial Intelligence), where I was supervised by [**Prof. Dan Guo**](https://faculty.hfut.edu.cn/gd/en/index.htm). During my undergraduate studies, I conducted research on visual perception systems for assisting visually impaired individuals, exploring multimodal sensing, intelligent interaction, and navigation technologies.

My research interests span **computer vision**, **multimodal learning**, and **vision-language understanding**, with an emphasis on perception, reasoning, and generation in visual intelligence. I am particularly interested in building systems that connect human motion, emotion, and cognition through multimodal signals, with additional interests in autonomous driving and environmental perception.

If you are seeking any form of academic collaboration, please feel free to contact me. <a href='https://scholar.google.com/citations?user=fSWwq3AAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>


# 🔥 News
- *2025.07*:  🎉🎉🎉 Our paper accepted by **ACM MM 2025**.
- *2025.05*:  🏆🏆🏆 Our work won the champion of Micro-gesture Classification sub-challenge in **MiGA@IJCAI 2025**.

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Anonymous 2026</div><img src='images/MABench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**MA-Bench: Towards Fine-grained Micro-Action Understanding** (*under-review*)

[Anonymous] [Paper] [Project]

Kun Li, **Jihao Gu**, et al.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Anonymous 2026</div><img src='images/T-VAD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Text-guided Fine-Grained Video Anomaly Detection** (*under-review*)

[Anonymous] [[Paper](https://arxiv.org/abs/2511.00524)] [Project]

**Jihao Gu**, Kun Li, Wang He, Akşit Kaan

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2025</div><img src='images/MMN.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Motion Matters: Motion-guided Modulation Network for Skeleton-based Micro-Action Recognition

[[ACM MM'25](https://acmmm2025.org/)] [[Paper](https://dl.acm.org/doi/abs/10.1145/3746027.3754722)] [[Project](https://github.com/momiji-bit/MMN)] <a href="https://visitor-badge.laobi.icu/badge?page_id=momiji-bit.MMN&left_color=green&right_color=red" target="_blank"><img src="https://visitor-badge.laobi.icu/badge?page_id=momiji-bit.MMN&left_color=green&right_color=red"></a> <a href="https://img.shields.io/github/stars/momiji-bit/MMN?style=flat&color=yellow" target="_blank"><img src="https://img.shields.io/github/stars/momiji-bit/MMN?style=flat&color=yellow"></a>

**Jihao Gu**, Kun Li, Fei Wang, Yanyan Wei, Zhiliang Wu, Hehe Fan, Meng Wang

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2025</div><img src='images/MMG.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

MM-Gesture: Towards Precise Micro-Gesture Recognition through Multimodal Fusion

[[IJCAI'25 Workshop](https://2025.ijcai.org/)] [[Paper](https://arxiv.org/abs/2507.08344)] [[Project](https://github.com/momiji-bit/MM-Gesture)] <a href="https://visitor-badge.laobi.icu/badge?page_id=momiji-bit.MM-Gesture&left_color=green&right_color=red" target="_blank"><img src="https://visitor-badge.laobi.icu/badge?page_id=momiji-bit.MM-Gesture&left_color=green&right_color=red"></a> <a href="https://img.shields.io/github/stars/momiji-bit/MM-Gesture?style=flat&color=yellow" target="_blank"><img src="https://img.shields.io/github/stars/momiji-bit/MM-Gesture?style=flat&color=yellow"></a>

**Jihao Gu**, Fei Wang, Kun Li, Yanyan Wei, Zhiliang Wu, Dan Guo

> 🏆 The Champion of Micro-gesture Classification sub-challenge in [MiGA@IJCAI2025](https://cv-ac.github.io/MiGA2025).

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PRML 2025</div><img src='images/VQA.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

Performance Analysis of Traditional VQA Models Under Limited Computational Resources

[[IEEE PRML'25](https://www.prml.org/prml2025.html)] [[Paper](https://ieeexplore.ieee.org/abstract/document/11159683)]

**Jihao Gu**

</div>
</div>

# 🔬 Projects

- *2025.09 - now*: MABench: Towards Fine-grained Micro-Action Understanding

  **Jihao Gu**, [Kun Li](https://kunli-cs.github.io/)

  > With the rapid development of Multimodal Large Language Models (MLLMs), their potential in Micro-Action Recognition, a field that plays a vital role in human emotion analysis, remains largely unexplored due to the absence of specialized benchmarks. To bridge this gap, we present MA-Bench, a comprehensive benchmark comprising 1,000 videos and a three-tier evaluation architecture that progressively examines micro-action perception, relational comprehension, and interpretive reasoning. MA-Bench contains 8, 000 structured question–answer pairs, enabling systematic assessment of both recognition accuracy and action interpretive. Through extensive evaluations of 23 representative MLLMs, we reveal significant limitations in capturing motion granularity and fine-grained body-part dynamics. To address these challenges, we further construct MA-Bench-Train, a large-scale training corpus with 20K videos annotated for detailed motion patterns. Finetuning Qwen3-VL-8B on MA-Bench-Train achieves consistent gains across micro-action reasoning tasks. Together, MA-Bench and MA-Bench-Train establish a solid foundation for advancing MLLMs toward a deeper understanding of subtle human motions and emotion-related behaviors.

- *2025.03 - 2025.09*: Text-guided Recognition of Events for Anomaly Detection

  [Postgraduate Project] [Thesis]

  **Jihao Gu**, [Kaan Akşit (Supervisor)](https://kaanaksit.com/)

  > Video Anomaly Detection (VAD) aims to identify anomalous events within video segments. In scenarios such as surveillance or industrial process monitoring, anomaly detection is of critical importance. While existing approaches are semi-automated requiring human assessment for anomaly detection, traditional VADs are offering limited output as either normal or anomalous. We propose Text-guided Recognition of Events for Anomaly Detection (TREAD), a framework built upon Large Vision-Language Models (LVLMs). TREAD introduces an Anomaly Heatmap Decoder (AHD) that performs pixel-wise visual-textual feature alignment to generate fine-grained anomaly heatmaps. Furthermore, we design a Region-aware Anomaly Encoder (RAE) that transforms the heatmaps into learnable textual embeddings, guiding the LVLM to accurately identify and localize anomalous events in videos. This significantly enhances both the granularity and interactivity of anomaly detection. Our proposed method achieves SOTA performance by demonstrating 94.8% micro-AUC and 67.8% / 76.7% accuracy in anomaly heatmaps (RBDC / TBDC) on the UBnormal dataset, and subjectively more preferable textual descriptions on the ShanghaiTech-based dataset (BLEU-4: 62.67 for targets, 88.84 for trajectories; Yes/No accuracy: 97.67%).

- *2024.01 - 2024.06*: Enhancing the Baseline Performance of OrienterNet for Visual Localization

  **Jihao Gu**, [Yan Da (Supervisor)](https://homes.luddy.indiana.edu/yanda/home.html)

  > Our task aims to further optimize OrienterNet, a neural network-based visual localization method designed to achieve accurate localization using 2D public maps (e.g., planar maps). The original approach matches camera-captured images with public maps, effectively addressing localization challenges in GPS-denied scenarios, especially in indoor and complex urban environments.

- *2022.12 - 2023.10*: End-to-End Sign Language Recognition using Transformers, 12/2022 - 10/2023

  **Jihao Gu**, [Shengeng Tang](https://tangshengeng.github.io/)

  > Enhanced a Transformer-based model for sign language recognition, achieving improved translation accuracy and reduced word error rate.

- *2021.06 - 2024.06*: Navigation System for Visually Impaired People Based on Visual Ambient Intelligence

  [Undergraduate Project] [[Thesis](https://github.com/momiji-bit/Bachelor-s-Degree-Project/blob/main/[终版]谷纪豪_毕业论文.pdf)] [[Project](https://github.com/momiji-bit/UG-Thesis-VEPNav)]

  **Jihao Gu**, [Guo Dan (Supervisor)](https://faculty.hfut.edu.cn/gd/zh_CN/index.htm)

  > This thesis proposes a visually aware navigation system to assist visually impaired individuals in outdoor travel. By integrating computer vision, artificial intelligence, and cloud computing technologies, the system captures environmental information using a binocular camera and processes the data through advanced algorithms such as object detection and semantic segmentation. The primary contributions of this thesis are as follows: (1) the design and implementation of a navigation system based on visual environmental perception; (2) the proposal of a deep intelligent interaction-based outdoor assistance method tailored for visually impaired individuals; (3) the development of an offset warning system leveraging semantic segmentation techniques; (4) the introduction of a collision warning method utilizing image-based object detection and visual depth estimation; (5) the formulation of a route planning method founded on weighted undirected graph principles; and (6) the construction of a road image dataset specifically for the Hefei University of Technology campus.

# 🧾 Patents

- Blind Travel Obstacle Avoidance Assistance System V1.0 [2023SR0517944]
- Outdoor Visual Impairment Assisting Method based on Deep Intelligent Interaction [[CN114724053A]](https://patents.google.com/patent/CN114724053A/en)  
- Semantic Segmentation-Based Preferential Direction Deviation Early Warning System [[CN114723946A]](https://patents.google.com/patent/CN114723946A/en)  
- Route Planning Method for Visually Impaired People [[CN116448130A]](https://patents.google.com/patent/CN116448130A/en)  
- Collision Warning Method based on Image Target Detection and Depth Estimation [[CN116403146A]](https://patents.google.com/patent/CN116403146A/en)

# 🎖 Honors and Awards

- *2024.06*: Outstanding Graduate of Hefei University of Technology. 
- *2024.06*: Outstanding Graduation Thesis (Design)
- *2023.09*: First-Class Scholarship
- *2023.09*: "Three Good Students" Award
- *2022.09*: Second-Class Scholarship
- *2022.09*: "Three Good Students" Award
- *2021.09*: Second-Class Scholarship

# 💼 Internships

- *2025.09 - now*: Research Assistant, [Computational Light Laboratory](https://complightlab.com), University College London, London, UK
- *2023.07 - 2023.08*: Embedded Development Assistant, Shenzhen Boshengteng Technology Co., Ltd., Shenzhen, China
- *2023.03 - 2023.06*: Algorithm Development Assistant, Shenzhen Boshengteng Technology Co., Ltd., Shenzhen, China
- *2023.01 - 2023.02*: Python Development Engineer Assistant, Beijing Tuosida Technology Development Co., Ltd., Beijing, China

# 🤝 Services

- *2025.08*: Volunteer for International Joint Conferences on Artificial Intelligence(Guangzhou) (**IJCAI**)
- *2025.08*: Reviewer for Transactions on Pattern Analysis and Machine Intelligence (**TPAMI**)
- *2025.04*: Reviewer for Engineering Applications of Artificial Intelligence (**EAAI**×4)
- *2025.04*: Reviewer for Intelligent Data Analysis (**IDA**×2)
- *2025.03*: Reviewer for The 2025 International Joint Conference on Neural Networks (**IJCNN’25**)
- *2024.02*: Reviewer for The 47th International ACM SIGIR Conference on Research and Development in Information Retrieval (**SIGIR’24**)

# 📖 Educations

- *09/2024 - 09/2025*: Postgraduate, Computer Graphics, Vision and Imaging , University College London, UK 

  > **Modules:** Machine Vision, Image Processing, Computer Graphics, Machine Learning for Visual Computing 
  >
  > **Optional:** Inverse Problems, 3D Geometry, Numerical Optimisation, Virtual Environments 
  >
  > **Score:** Pass with Distinction

- *09/2020 - 06/2024*: Undergraduate, Computer Science and Technology, Hefei University of Technology, China 

  > **GPA:** 90.10% (3.85/4.0), Rank: 5/152
