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
I am currently a **Research Assistant** at the [Computational Light Laboratory](https://complightlab.com), University College London, working under the supervision of [**Assoc. Kaan Akşit**](https://www.kaanaksit.com/). I am also in the process of applying for PhD programs in Computer Vision.

I recently completed my **MSc in Computer Graphics, Vision and Imaging** at [University College London](https://www.ucl.ac.uk/). Under the supervision of [**Assoc. Kaan Akşit**](https://www.kaanaksit.com/), my research centers on text-guided video anomaly detection (VAD) based on Large Vision-Language Models (LVLMs), aiming to enable fine-grained, interpretable, and human-centered video understanding.

I received my **BEng in Computer Science and Technology** from [Hefei University of Technology](https://ci.hfut.edu.cn/), School of Computer Science and Information Engineering (School of Artificial Intelligence), where I was supervised by [**Prof. Dan Guo**](https://faculty.hfut.edu.cn/gd/en/index.htm). During my undergraduate studies, I conducted research on visual perception systems for assisting visually impaired individuals, exploring multimodal sensing, intelligent interaction, and navigation technologies.

My research interests span **computer vision**, **multimodal learning**, and **vision-language understanding**, with an emphasis on perception, reasoning, and generation in visual intelligence. I am particularly interested in building systems that connect human motion, emotion, and cognition through multimodal signals, with additional interests in autonomous driving and environmental perception.

If you are seeking any form of academic collaboration, please feel free to contact me. <a href='https://scholar.google.com/citations?user=fSWwq3AAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>


# 🔥 News

- *2026.03*:  🎉🎉🎉 Our paper accepted by **CVPR Workshop 2026**.
- *2026.02*:  🎉🎉🎉 Our paper accepted by **CVPR 2026**.
- *2025.07*:  🎉🎉🎉 Our paper accepted by **ACM MM 2025**.
- *2025.05*:  🏆🏆🏆 Our work won the champion of Micro-gesture Classification sub-challenge in **MiGA@IJCAI 2025**.
- *2024.06*:  🏆🏆🏆 My undergraduate thesis was recognized as the **Best Thesis Award** at Hefei University of Technology.

# 📝 Publications 


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/DERM-3R.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**DERM-3R: A Resource-Efficient Multimodal Agents Framework for Dermatologic Diagnosis and Treatment in Real-World Clinical Settings**

<a href="https://drive.google.com/file/d/1D5YT8i_fBEYGYOiyvf42VV3t5Ou59At4/view?usp=drive_link" target="_blank"><img src="https://img.shields.io/badge/Preprint-PDF-blue?logo=google-drive"></a> <a href="https://github.com/NJUCM-BJUCM-TCM-AI/DERM-3R" target="_blank"><img src="https://img.shields.io/badge/GitHub-DERM--3R-black?logo=github"></a> <a href="https://github.com/NJUCM-BJUCM-TCM-AI/DERM-3R" target="_blank"><img src="https://img.shields.io/github/stars/NJUCM-BJUCM-TCM-AI/DERM-3R?logo=github&color=yellow&style=flat"></a> <a href="https://huggingface.co/MightyAntsGoesUp/DERM-3R-7B" target="_blank"><img src="https://img.shields.io/badge/HuggingFace-DERM--3R--7B-yellow?logo=huggingface"></a>

Ziwen Chen, Zhendong Wang, Chongjing Wang, Yurui Dong, Luozhijie Jin, **Jihao Gu**, Kui Chen, Jiaxi Yang, Bingjie Lu, Zhou Zhang, Jirui Dai, Changyong Luo, Xiameng Gai, Haibing Lan, Zhi Liu

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR Workshop 2026</div><img src='images/MABench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/T-VAD.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Text-guided Fine-Grained Video Anomaly Understanding**

<a href="https://arxiv.org/abs/2511.00524" target="_blank"><img src="https://img.shields.io/badge/arXiv-2511.00524-red?logo=arxiv"></a>

**Jihao Gu**, Kun Li, Wang He, Akşit Kaan

</div>
</div>


**MA-Bench: Towards Fine-grained Micro-Action Understanding**

<a href="https://drive.google.com/file/d/1YOtJhsndc5tYGm28LlAXAVkvmqx3FT42/view?usp=drive_link" target="_blank"><img src="https://img.shields.io/badge/Preprint-PDF-blue?logo=google-drive"></a> <a href="https://ma-bench.github.io/" target="_blank"><img src="https://img.shields.io/badge/Website-MA--Bench-blue?logo=googlechrome"></a>

Kun Li, **Jihao Gu**, Fei Wang, zhiliang wu, Hehe Fan, Dan Guo

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2025</div><img src='images/MMN.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


**Motion Matters: Motion-guided Modulation Network for Skeleton-based Micro-Action Recognition**

<a href="https://dl.acm.org/doi/abs/10.1145/3746027.3754722" target="_blank"><img src="https://img.shields.io/badge/ACM-10.1145%2F3746027.3754722-00457C?logo=acm"></a> <a href="https://github.com/momiji-bit/MMN" target="_blank"><img src="https://img.shields.io/badge/GitHub-MMN-black?logo=github"></a> <a href="https://github.com/momiji-bit/MMN" target="_blank"><img src="https://img.shields.io/github/stars/momiji-bit/MMN?logo=github&color=yellow&style=flat"></a>

**Jihao Gu**, Kun Li, Fei Wang, Yanyan Wei, Zhiliang Wu, Hehe Fan, Meng Wang

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI Workshop 2025</div><img src='images/MMG.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


**MM-Gesture: Towards Precise Micro-Gesture Recognition through Multimodal Fusion**

<a href="https://arxiv.org/abs/2507.08344" target="_blank"><img src="https://img.shields.io/badge/arXiv-2507.08344-red?logo=arxiv"></a> <a href="https://github.com/momiji-bit/MM-Gesture" target="_blank"><img src="https://img.shields.io/badge/GitHub-MM--Gesture-black?logo=github"></a> <a href="https://github.com/momiji-bit/MM-Gesture" target="_blank"><img src="https://img.shields.io/github/stars/momiji-bit/MM-Gesture?logo=github&color=yellow&style=flat"></a>

**Jihao Gu**, Fei Wang, Kun Li, Yanyan Wei, Zhiliang Wu, Dan Guo

> 🏆 The Champion of Micro-gesture Classification sub-challenge in [MiGA@IJCAI2025](https://cv-ac.github.io/MiGA2025).

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">PRML 2025</div><img src='images/VQA.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


**Performance Analysis of Traditional VQA Models Under Limited Computational Resources**

<a href="https://ieeexplore.ieee.org/abstract/document/11159683" target="_blank"> <img src="https://img.shields.io/badge/IEEE-11159683-blue?logo=ieee&style=flat"></a>

**Jihao Gu**

</div>
</div>

# 🔬 Projects

- *2026.01 - Present*: **Reflective Meta-Learner Agent for Micro-Action Recognition**

  **Jihao Gu**, [Kun Li](https://kunli-cs.github.io/)

  > - We propose a diagnosis-driven agentic framework for micro-action recognition that leverages Large Vision-Language Models to reflect on backbone error patterns and perform adaptive, context-aware fusion.

- *2025.09 - 2025.11*: **MABench: Towards Fine-grained Micro-Action Understanding**

  **Jihao Gu**, [Kun Li](https://kunli-cs.github.io/)

  > - Proposed MA-Bench, a comprehensive benchmark comprising 1,000 videos and a three-tier evaluation architecture that progressively examines micro-action perception, relational comprehension, and interpretive reasoning
  > - Constructed MA-Bench-Train, a large-scale training corpus with 20K videos annotated for detailed motion patterns and finetuned Qwen3-VL-8B on MA-Bench-Train, achieving consistent gains across micro-action reasoning tasks

- *2025.03 - 2025.09*: **Text-guided Fine-Grained Video Anomaly**

  [Postgraduate Project] [Thesis]

  **Jihao Gu**, [Kaan Akşit (Supervisor)](https://kaanaksit.com/), [He Wang (Co-supervisor)](https://drhewang.com/)

  > - Proposed Text-guided Fine-Grained Video Anomaly Detection (T-VAD), a framework built upon Large Vision-Language Model (LVLM)
  > - Introduced an Anomaly Heatmap Decoder (AHD) that performs pixel-wise visual-textual feature alignment to generate fine-grained anomaly heatmaps
  > - Designed a Region-aware Anomaly Encoder (RAE) that transforms the heatmaps into learnable textual embeddings, guiding the LVLM to accurately identify and localize anomalous events in videos
  > - Achieved SOTA performance by demonstrating 94.8% micro-AUC and 67.8% / 76.7% accuracy in anomaly heatmaps (RBDC / TBDC) on the UBnormal dataset


- *2024.01 - 2024.06*: **Enhancing the Baseline Performance of OrienterNet for Visual Localization**

  **Jihao Gu**, [Yan Da (Supervisor)](https://homes.luddy.indiana.edu/yanda/home.html)

  > - Our task aims to further optimize OrienterNet, a neural network-based visual localization method designed to achieve accurate localization using 2D public maps (e.g., planar maps). The original approach matches camera-captured images with public maps, effectively addressing localization challenges in GPS-denied scenarios, especially in indoor and complex urban environments.

- *2022.12 - 2023.10*: **End-to-End Sign Language Recognition using Transformers**

  **Jihao Gu**, [Shengeng Tang](https://tangshengeng.github.io/)

  > - Read and analyzed two papers in detail, and learned the application of the Transformer architecture in sign language recognition and the design idea of the dual-block module
  > - Used the PyTorch toolkit to reproduce the model in the paper, and achieved similar BLEU and WER scores on the validation set and test set
  > - Combined the dual-block module with the reproduced model, and enhanced the BLEU and WER scores on the validation set and test set by parameter adjustment and multiple rounds of training


- *2021.06 - 2024.06*: **Navigation System for Visually Impaired People Based on Visual Ambient Intelligence**

  [Undergraduate Project] [[Thesis](https://github.com/momiji-bit/Bachelor-s-Degree-Project/blob/main/[终版]谷纪豪_毕业论文.pdf)] [[Project](https://github.com/momiji-bit/UG-Thesis-VEPNav)]

  **Jihao Gu**, [Guo Dan (Supervisor)](https://faculty.hfut.edu.cn/gd/zh_CN/index.htm), [Meng Wang (Co-supervisor)](https://sites.google.com/view/meng-wang/home)

  > - Designed and implemented a navigation system based on visual environmental perception, with accuracy increased by approximately 15% compared with traditional navigation systems
  > - Proposed a deep intelligent interaction-based outdoor assistance method tailored for visually impaired individuals
  > - Developed an offset warning system leveraging semantic segmentation techniques
  > - Introduced a collision warning method utilizing image-based object detection and visual depth estimation
  > - Formulated a route planning method founded on weighted undirected graph principles
  > - Constructed a road image dataset specifically for the Hefei University of Technology campus, which contains over 12,000 images


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

- *2025.09 - Present*: Research Assistant, [Computational Light Laboratory](https://complightlab.com), University College London, London, UK
- *2023.07 - 2023.08*: Embedded Development Assistant, Shenzhen Boshengteng Technology Co., Ltd., Shenzhen, China
- *2023.03 - 2023.06*: Algorithm Development Assistant, Shenzhen Boshengteng Technology Co., Ltd., Shenzhen, China
- *2023.01 - 2023.02*: Python Development Engineer Assistant, Beijing Tuosida Technology Development Co., Ltd., Beijing, China

# 🤝 Services

**Journal Reviewing**

- IEEE Transactions on Pattern Analysis and Machine Intelligence (**TPAMI**) ×2
- IEEE Transactions on Multimedia (**TMM**)
- ACM Transactions on Multimedia Computing, Communications, and Applications (**TOMM**)
- Engineering Applications of Artificial Intelligence (**EAAI**) ×4
- Intelligent Data Analysis (**IDA**) ×2

**Conference Reviewing**

- International ACM SIGIR Conference on Research and Development in Information Retrieval (**SIGIR'24**)
- IEEE International Conference on Multimedia and Expo (**ICME'26**) ×7
- International Joint Conference on Neural Networks (**IJCNN'25**)

**Organizing & Volunteering**

- Data Chair, MAC'26: The 3rd Micro-Action Analysis Grand Challenge (**ACM MM'26**)
- Volunteer, International Joint Conference on Artificial Intelligence (**IJCAI'25**, Guangzhou)



# 📖 Educations

- *09/2024 - 09/2025*: Postgraduate, Computer Graphics, Vision and Imaging , University College London, UK 

  > **Modules:** Machine Vision, Image Processing, Computer Graphics, Machine Learning for Visual Computing 
  >
  > **Optional:** Inverse Problems in lmaging, Acquisition and Processing of 3D Geometry, Numerical Optimisation, Virtual Environments 
  >
  > **Score:** Pass with Distinction (78.30/100)

- *09/2020 - 06/2024*: Undergraduate, Computer Science and Technology, Hefei University of Technology, China 

  > **GPA:** 90.10% (3.85/4.0), Rank: 5/152
