export const site = {
  name: 'Aazhmeer Chhapra',
  roles: [
    'Generative AI Researcher',
    'AI Engineer',
    'Industrial Automation Engineer',
  ],
  tagline:
    'Building reliable, interpretable AI systems — from deep learning research to production pipelines and industrial control.',
  location: 'Cambridge, United Kingdom',
  address: '68 Histon Road, Cambridge UK, CB4 3LE',
  email: 'aazhmeerchhapra@gmail.com',
  phone: '+44 7873 629715',
  // Update these two with your actual profile URLs before deploying.
  github: 'https://github.com/AazhmeerChhapra/',
  linkedin: 'https://www.linkedin.com/in/aazhmeer-chhapra/',
  cvPath: '/Aazhmeer_Chhapra_CV.pdf',
  url: 'https://portfolio-pied-delta-99.vercel.app/',
};

export const about = {
  headline: 'Human-centred AI, engineered end to end.',
  paragraphs: [
    'I am an artificial intelligence engineer with strong academic training and hands-on project experience across deep learning, time-series forecasting, computer vision, and generative AI. My work is driven by a single goal: turning data into reliable, interpretable systems that hold up in the real world.',
    'Currently completing an MSc in Artificial Intelligence at Anglia Ruskin University in Cambridge (Distinction) while working at Amazon AGI-DS, I sit at the intersection of research and production — evaluating frontier model outputs by day and building end-to-end ML pipelines, RAG systems, and clinical prediction models in my own research.',
    'I care deeply about responsible AI: systems that balance technical performance with ethical and practical considerations, with a particular interest in healthcare and human-centred domains. Before moving into AI, I engineered PLC, SCADA, and HMI automation for industrial control — a background that keeps my machine learning grounded in real engineering constraints.',
  ],
  stats: [
    { value: '100%', label: 'Quality score maintained across Amazon Nova annotation work' },
    { value: '15+', label: 'AI evaluation workflows spanned at Amazon AGI-DS' },
    { value: '97.1%', label: 'Accuracy of final ensemble in asthma-risk prediction research' },
    { value: '0.93', label: 'Minority-class recall achieved for high-risk patient detection' },
  ],
};

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Machine Learning & Deep Learning',
    icon: 'brain',
    skills: [
      'TensorFlow', 'PyTorch', 'Keras', 'LSTM', 'GRU', 'Transformers',
      'Attention Models', 'CNNs', 'Transfer Learning', 'Hyperparameter Tuning',
    ],
  },
  {
    title: 'Natural Language Processing',
    icon: 'chat',
    skills: [
      'BERT', 'LLaMA 2', 'LangChain', 'RAG', 'Sentiment Analysis',
      'NER', 'Text Summarization',
    ],
  },
  {
    title: 'Time Series Forecasting',
    icon: 'wave',
    skills: [
      'Sequential Modeling', 'Financial Data Prediction', 'Technical Indicator Engineering',
    ],
  },
  {
    title: 'Computer Vision',
    icon: 'eye',
    skills: ['OpenCV', 'Image Classification', 'Object Detection', 'Feature Extraction'],
  },
  {
    title: 'Cloud & MLOps',
    icon: 'cloud',
    skills: [
      'AWS SageMaker', 'Lambda', 'EC2', 'S3', 'Model Deployment', 'Distributed Training',
    ],
  },
  {
    title: 'Data Engineering & Analytics',
    icon: 'data',
    skills: [
      'Data Pipelines', 'Preprocessing', 'Feature Engineering', 'Statistical Modeling',
      'Matplotlib', 'Seaborn', 'Scikit-learn',
    ],
  },
  {
    title: 'Languages, Databases & Frontend',
    icon: 'code',
    skills: [
      'Python', 'SQL', 'JavaScript', 'PostgreSQL', 'Pinecone', 'ChromaDB', 'React.js', 'Vite',
    ],
  },
  {
    title: 'Frameworks & Tooling',
    icon: 'tools',
    skills: [
      'Flask', 'Django', 'Django REST Framework', 'Git', 'GitHub', 'VSCode', 'Jupyter',
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  tag: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: 'Machine Learning Data Associate II',
    company: 'Amazon AGI-DS',
    location: 'Cambridge, UK',
    period: 'Sep 2025 — Present',
    tag: 'Frontier AI Evaluation',
    points: [
      'Perform high-volume data annotation for Amazon Nova, evaluating and ranking model-generated responses while consistently maintaining 100% quality scores against internal evaluation standards.',
      'Operate across 15+ annotation workflows spanning diverse AI evaluation tasks, collaborating with cross-functional quality and workflow teams to clarify guidelines, resolve ambiguous cases, and keep labelling standards consistent at scale.',
      'Achieved top-25% Average Handling Time across the team at full annotation accuracy, and set a team record for the highest number of tasks processed in a single day.',
      'Drive workflow improvement by surfacing edge cases, reporting prompt and evaluation inconsistencies, and delivering structured feedback that improved task clarity and operational efficiency across ongoing AGI data-labelling pipelines.',
    ],
  },
  {
    role: 'Junior Automation Engineer (Remote)',
    company: 'Pearl Control Systems',
    location: 'UK',
    period: 'Nov 2023 — May 2024',
    tag: 'Industrial Automation',
    points: [
      'Wrote and tested automation scripts for PLC, SCADA, and HMI systems driving industrial control processes.',
      'Collaborated with software and engineering teams to integrate control systems with UI interfaces.',
      'Conducted end-to-end system testing with external clients including McCormicks, S4 Engineering, and Prologiks, ensuring high reliability and client satisfaction.',
      'Applied software development best practices to improve the reliability, user experience, and documentation of automated workflows.',
    ],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  period: string;
  problem: string;
  contribution: string[];
  stack: string[];
  results: string[];
  accent: 'blue' | 'violet' | 'magenta';
};

export const projects: Project[] = [
  {
    title: 'AstraLung',
    subtitle: 'End-to-End ML Pipeline for Early Asthma Risk Prediction',
    period: 'Aug 2025 — Present',
    problem:
      'Asthma risk hides inside fragmented clinical data. Multi-year NHANES survey files — demographics, examinations, laboratory panels, questionnaires — are heterogeneous, incomplete, and heavily imbalanced, making high-risk patients easy to miss.',
    contribution: [
      'Integrated multi-year NHANES datasets with pandas merge/join pipelines using SEQN-based respondent alignment, producing a unified clinical dataset of ~2K evaluated patient records.',
      'Built an extensive preprocessing stage — missing-value imputation, outlier filtering, One-Hot Encoding, StandardScaler normalization — transforming raw clinical variables into a clean modelling feature space.',
      'Engineered clinically relevant features from pulmonary indicators, BMI categories, allergy markers, lifestyle factors, and blood biomarkers.',
      'Addressed severe class imbalance with SMOTE and trained Logistic Regression, Random Forest, Gradient Boosting, XGBoost, and ensemble models with GridSearchCV hyperparameter tuning.',
      'Ran comprehensive EDA and statistical analysis — correlation matrices, distribution plots, chi-square tests, feature importance — identifying BMI, allergy markers, and lifestyle variables as key predictors.',
    ],
    stack: ['Python', 'pandas', 'Scikit-learn', 'XGBoost', 'SMOTE', 'GridSearchCV', 'Matplotlib', 'Seaborn'],
    results: [
      'Final ensemble reached 97.1% accuracy with an F1-score of 0.76 for asthma prediction.',
      'Minority-class asthma recall lifted to ~0.93, significantly improving detection of high-risk patients.',
      'Reproducible pipelines and results documented in a research-grade notebook, being prepared for academic dissemination at a Cambridge-affiliated research venue.',
    ],
    accent: 'blue',
  },
  {
    title: 'Medical Chatbot',
    subtitle: 'End-to-End Generative AI Assistant with RAG',
    period: 'Feb 2025 — Mar 2025',
    problem:
      'General-purpose LLMs hallucinate on medical questions. Grounded, retrieval-based answers are essential — and the system needed to run on modest local hardware rather than expensive cloud GPUs.',
    contribution: [
      'Designed and implemented an NLP-based, AI-driven medical chatbot around LLaMA 2, integrating retrieval-based question answering with LangChain for accurate medical responses.',
      'Built a Pinecone vector database layer for fast, accurate semantic search, powering retrieval-augmented generation (RAG) to keep answers grounded.',
      'Developed a Flask-based API to serve chatbot responses efficiently between the user and the model.',
      'Optimized inference with CTransformers, enabling lightweight execution of LLaMA 2 on local hardware.',
      'Engineered a clean, user-friendly chat interface with HTML, CSS, and Flask.',
    ],
    stack: ['LLaMA 2', 'LangChain', 'RAG', 'Pinecone', 'CTransformers', 'Flask', 'Python'],
    results: [
      'Fully working end-to-end generative AI system: retrieval, generation, API, and interface.',
      'Grounded medical answers via semantic search over a vector database instead of raw LLM output.',
      'Local-hardware inference achieved without GPU cloud dependency.',
    ],
    accent: 'violet',
  },
  {
    title: 'Bird Sound Classification',
    subtitle: 'Bioacoustic Deep Learning with CNNs & Transformers',
    period: 'Feb 2025 — May 2025',
    problem:
      'Cornell University captures 24/7 unlabelled forest audio. Buried in those recordings are the bird species bioacoustic researchers need to identify — manually, an impossible task at that scale.',
    contribution: [
      'Developed a pipeline to extract bird vocalizations from continuous unlabelled forest audio recordings using Librosa.',
      'Conducted comparative feature extraction across traditional CNNs, EfficientNetB0 with transfer learning, and the Audio Spectrogram Transformer (AST).',
      'Evaluated model performance on clustering and classification tasks to identify the most effective feature extraction method.',
      'Visualized spectrograms and enriched bird-call representations with MFCCs and log-mel features.',
    ],
    stack: ['Librosa', 'CNNs', 'EfficientNetB0', 'Audio Spectrogram Transformer', 'Transfer Learning', 'Python'],
    results: [
      'A working comparative framework for bioacoustic feature extraction across CNN and transformer architectures.',
      'Directly supports researchers in automatically identifying bird species from raw environmental recordings.',
    ],
    accent: 'magenta',
  },
];

export const research = {
  headline: 'Research that ships.',
  items: [
    {
      title: 'AstraLung — Clinical Risk Prediction',
      status: 'In preparation for academic dissemination',
      description:
        'Reproducible, research-grade pipelines and experimental results for early asthma-risk prediction on NHANES data, being prepared for dissemination at a Cambridge-affiliated research venue. Key findings include BMI, allergy markers, and lifestyle variables as dominant predictors of asthma risk.',
      venue: 'Cambridge-affiliated research venue',
    },
    {
      title: 'VirtuHire — NLP-Powered Recruitment Platform',
      status: 'BSc Dissertation · COMSATS University Islamabad',
      description:
        'An NLP-powered recruitment platform built with BERT and PyTorch, applying transformer-based language understanding to the hiring pipeline. Completed as the undergraduate dissertation for the Bachelor of Software Engineering.',
      venue: 'COMSATS University Islamabad',
    },
  ],
};

export const education = [
  {
    degree: 'MSc Artificial Intelligence',
    institution: 'Anglia Ruskin University, Cambridge, UK',
    period: 'Current — September 2026',
    detail: 'Result: Distinction',
    modules:
      'Advanced Machine Learning · Semantic Technologies · Applied Machine Learning · Neural Computing and Deep Learning · Research Methods · Preparation for Professional Experience',
  },
  {
    degree: 'Bachelor of Software Engineering',
    institution: 'COMSATS University Islamabad, Lahore',
    period: 'June 2024',
    detail: 'CGPA: 3.35 · Dissertation: VirtuHire — An NLP-Powered Recruitment Platform using BERT and PyTorch',
    modules: '',
  },
];

export const certifications = [
  'Data Science Bootcamp — 365 Data Science',
  'AWS Academy ML Foundations — AWS Academy',
  'Stanford Online — CS229 (Machine Learning) & CS230 (Deep Learning)',
];
