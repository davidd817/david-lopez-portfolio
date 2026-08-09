export const site = {
  name: "David López Diego",
  shortName: "David López Diego",
  domain: "davidlopezdiego.com",
  location: "Madrid, Spain",
  email: "davidlopezd8@gmail.com",
  role: "Advanced Materials Characterization & Metrology Scientist",
  subtitle: "Nanomaterials · Scientific Data Analysis · R&D Scientist· Semiconductors",
  description:
    "I combine advanced materials characterization, nanoscale metrology and Python-based scientific data workflows to support reproducible, insight-driven R&D across nanomaterials, biosensors, semiconductors and biological systems.",
  cv: "/cv/David_Lopez_Diego_CV_Optimized_B.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/davidlopezdiego",
    github: "https://github.com/davidd817",
    orcid: "https://orcid.org/0009-0003-0396-1077",
    webOfScience: "https://www.webofscience.com/wos/author/record/LFF-9560-2024",
  }
};

export const navigation = [
  { label: "Profile", href: "/#profile" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Selected Work", href: "/#selected-work" },
  { label: "Experience", href: "/#experience" },
  { label: "Publications", href: "/#publications" },
  { label: "Contact", href: "/#contact" }
];

export const metrics = [
  {
    value: "3+",
    label: "years in advanced characterization and scientific instrumentation",
    note: "AFM-based methods, microscopy, spectroscopy and nanoscale metrology in R&D environments."
  },
  {
    value: "10+",
    label: "peer-reviewed publications",
    note: "Co-authored work in nanoscience, biosensors, DNA nanostructures and applied materials research."
  },
  {
    value: "€800K",
    label: "direct-cost R&D project budget supported",
    note: "PERTE Chip · qNanoFoPho · Biosensor/autism-related initiatives"
  },
{
  value: "2+",
  label: "years in energy-related materials characterization",
  note: "Thermoelectric materials evaluated through electrical and thermal transport measurements using Hall, Seebeck, Specific Heat Capacity, NanoTR and PicoTR systems."
}
];

export const profile = {
  eyebrow: "Professional profile",
  title: "A scientist working at the interface of advanced characterization, R&D and data-driven analysis.",
  body: [
    "I am a physicist and PhD candidate in Materials Physics, Nanoscience and Biophysics, with hands-on experience in advanced materials characterization, nanoscale metrology, scientific instrumentation and experimental data analysis.",
    "My work spans nanomaterials, semiconductors, biosensors, thermoelectric materials and biological systems, combining laboratory methods with Python-based workflows for reproducible processing, technical reporting and decision support in research environments.",
    "I am especially interested in roles where scientific rigor, instrumentation, data quality and reproducible analysis matter: materials characterization, metrology, R&D, application science, scientific data analysis and interdisciplinary science-data roles."
  ],
  bridge: {
    title: "Between the laboratory and the data layer",
    text: "I operate advanced scientific instrumentation, generate complex experimental datasets, and build reproducible workflows to make results easier to analyze, report and use."
  }
};

export const strengths = [
  {
    title: "Advanced Materials Characterization",
    description:
      "AFM, SEM-EDX, TEM, XRD, Raman, FTIR, XPS, Litography, FIB, optical and fluorescence microscopy, HPLC-MS and ICP workflows across nanomaterials, semiconductors, biosensors and biological systems.",
    keywords: ["AFM", "SEM-EDX", "TEM", "XRD", "Raman", "FTIR", "XPS", "FIB"]
  },
  {
    title: "Nanoscale Metrology & Instrumentation",
    description:
      "Operation, calibration, preventive maintenance, method development, data acquisition and technical availability for multiple research teams and R&D workflows.",
    keywords: ["Metrology", "Calibration", "Maintenance", "Data acquisition", "Method development"]
  },
  {
    title: "Scientific Data Analysis",
    description:
      "Python-based workflows for experimental data processing, numerical modelling, reporting automation and reproducible analysis.",
    keywords: ["Python", "NumPy", "Pandas", "Scikit-learn", "R", "ImageJ", "Git"]
  },
  {
    title: "R&D Execution & Documentation",
    description:
      "Technical reporting, SOP improvement, ISO 9001 support, GLP/GMP-aligned documentation, equipment logs, workflow traceability, procurement and supplier coordination.",
    keywords: ["ISO 9001", "SOPs", "GLP/GMP", "Technical reports", "Traceability"]
  }
];

export const targetRoles = [
  "Materials Characterization Scientist",
  "Metrology Scientist",
  "R&D Scientist / Research Scientist",
  "Nanomaterials Scientist",
  "AFM / Microscopy Application Scientist",
  "Scientific Instrumentation Specialist",
  "Scientific Data Analyst",
  "Materials Data Analyst",
  "Research Engineer",
  "AI for Science / Materials Informatics — junior or hybrid roles"
];

export const selectedWork = [
  {
    slug: "afm-force-curve-analysis",
    group: "Scientific computing",
    title: "Automated AFM Biophysics Analysis",
    subtitle: "Scientific Python workflow for reproducible biomechanical analysis of AFM force spectroscopy data.",
    summary:
      "A scientific computing project focused on processing AFM dats files with reproducible numerical workflows: baseline correction, contact point detection, fitting, nanomechanics models and  parameter extraction.",
    context:
      "AFM Biophysics analysis can become slow, inconsistent and difficult to reproduce when many data are processed manually. The objective was to standardize recurring steps and generate clean outputs for downstream scientific interpretation.",
    role: "Scientific data workflow development, numerical analysis and reporting automation.",
    methods: [
      "Batch processing of force-curve files",
      "Baseline correction and contact point detection",
      "Contact-region fitting and parameter extraction",
      "Automated plot generation and tabular reporting",
      "Error handling for recurring experimental analysis"
    ],
    tools: ["Python", "NumPy", "Pandas", "Matplotlib", "SciPy", "Excel-ready outputs", "AFM data"],
    impact:
      "Improves reproducibility, reduces manual processing effort and makes AFM analysis easier to review, compare and report across experimental datasets.",
    demonstrates:
      "Scientific computing, experimental data processing, automation, numerical fitting, reproducible research workflows and domain-specific data interpretation.",
    priority: "Primary"
  },
  {
    slug: "materials-characterization-rd",
    group: "R&D experience snapshot",
    title: "Advanced Materials Characterization for Multidisciplinary R&D",
    subtitle: "AFM-based characterization, nanoscale metrology and instrumentation support for nanomaterials, biosensors, semiconductors and biological systems.",
    summary:
      "Professional work at IMN-CNM, CSIC supporting multiple research teams through advanced characterization methods, instrumentation operation, protocols, datasets and technical reporting.",
    context:
      "R&D teams working on nanomaterials, biosensors and biological systems require reliable characterization methods, well-maintained instrumentation and clear technical outputs that can support scientific decisions and publications.",
    role: "Research Technician and PhD candidate contributing to characterization workflows, instrumentation, reporting and research outputs.",
    methods: [
      "AFM-based characterization method development",
      "Operation and calibration of AFM, SEM-EDX, TEM, FIB, XRD, Raman, FTIR and HPLC-MS systems",
      "Translation of experimental requirements into reproducible protocols and technical reports",
      "Support for ISO 9001-aligned workflows, SOPs and equipment logs",
      "Training junior researchers on analytical methods and sample preparation"
    ],
    tools: ["AFM", "SEM-EDX", "TEM", "FIB", "XRD", "Raman", "FTIR", "HPLC-MS", "ISO 9001"],
    impact:
      "Supports reliable instrumentation availability, traceable experimental workflows and publication-quality research outputs in multi-institutional R&D projects.",
    demonstrates:
      "Advanced characterization, cross-functional R&D execution, instrumentation reliability, scientific communication and technical maturity.",
    priority: "Primary"
  },
  {
    slug: "thermoelectric-materials",
    group: "Materials characterization",
    title: "Thermoelectric Materials Characterization",
    subtitle: "Electrical and thermal transport measurements for materials performance evaluation.",
    summary:
      "Characterization of thermoelectric materials through electrical and thermal transport measurements using Hall, Seebeck, NanoTR and PicoTR systems.",
    context:
      "Thermoelectric materials require careful measurement of transport properties to understand performance and support materials development decisions.",
    role: "Experimental characterization and technical reporting support.",
    methods: [
      "Electrical transport measurements",
      "Thermal transport measurements",
      "Hall and Seebeck characterization",
      "NanoTR and PicoTR measurement workflows",
      "Data interpretation and reporting for R&D contexts"
    ],
    tools: ["Hall", "Seebeck", "NanoTR", "PicoTR", "Materials characterization", "Technical reporting"],
    impact:
      "Enables materials performance evaluation and supports R&D teams with reliable measurement workflows and interpretable outputs.",
    demonstrates:
      "Materials physics, measurement discipline, experimental data quality and applied characterization know-how.",
    priority: "Primary"
  },
  {
    slug: "mixed-matrix-membranes",
    group: "Early research experience",
    title: "Mixed-Matrix Membranes for Gas-Separation Applications",
    subtitle: "Synthesis and characterization of polymer formulations for CO₂ and greenhouse-gas capture use cases.",
    summary:
      "Research work at the SMAP Group involving the synthesis and characterization of 10+ mixed-matrix membrane and polymer formulations.",
    context:
      "Gas-separation materials require balancing permeability, selectivity and performance trade-offs for CO₂ and greenhouse-gas capture applications.",
    role: "Research Assistant in Materials Physics supporting synthesis, characterization and lab operations.",
    methods: [
      "Synthesis of mixed-matrix membrane and polymer formulations",
      "Materials characterization and performance evaluation",
      "Optimization of permeability/selectivity trade-offs",
      "Laboratory operations, instrument maintenance and safety protocols"
    ],
    tools: ["Materials synthesis", "Polymer formulations", "Gas separation", "CO₂ capture", "Lab operations"],
    impact:
      "Built a foundation in applied materials research, experimental discipline and laboratory execution in a high-volume research environment.",
    demonstrates:
      "Materials research fundamentals, experimental design, characterization and lab reliability.",
    priority: "Primary"
  },
  {
    slug: "analytics-training-projects",
    group: "Complementary analytics training",
    title: "Applied Data Analytics Training Projects",
    subtitle: "Python, SQL and machine-learning practice projects used to broaden analytical capabilities beyond the laboratory.",
    summary:
      "A set of complementary analytics projects covering economic risk modelling, SQL-based sales analysis and market-basket association rules. These are positioned as training and portfolio exercises, not as the core professional identity.",
    context:
      "The goal was to expand computational fluency across Python, SQL, machine learning and business-oriented analysis while keeping the main professional focus on scientific and R&D data.",
    role: "Independent learning and applied analytics practice.",
    methods: [
      "Economic early-warning modelling using state-level indicators",
      "SQL/data warehouse practice for sales and customer analysis",
      "Market-basket analysis with association rules",
      "Model evaluation, visualisation and reporting"
    ],
    tools: ["Python", "TensorFlow", "Scikit-learn", "SQL", "Power BI", "Machine learning", "Association rules"],
    impact:
      "Demonstrates learning agility, analytical breadth and the ability to transfer scientific reasoning into broader data contexts without overstating professional specialization.",
    demonstrates:
      "Python analytics, SQL fundamentals, model evaluation, structured reporting and continuous upskilling.",
    priority: "Secondary"
  }
];

export const experience = [
  {
    role: "Research Technician",
    organization: "Institute of Micro and Nanotechnology, IMN-CNM, CSIC",
    location: "Madrid, Spain",
    period: "Feb 2022 – Present",
    highlights: [
      "Develop advanced AFM-based characterization methods for nanomaterials, semiconductors, biosensors and biological systems.",
      "Operate, calibrate and maintain advanced instrumentation including AFM, SEM-EDX, TEM, FIB lithography, XRD, HPLC-MS, Raman and FTIR.",
      "Translate experimental requirements into reproducible protocols, datasets and technical reports for multidisciplinary R&D projects.",
      "Contribute to national, international and industry-linked projects, including qNanoFoPho, a 3-year AFM-confocal nanoscale metrology project with a €200K direct-cost budget.",
      "Support ISO 9001 quality processes through equipment procedures, audit preparation, workflow traceability, SOP improvement and GLP/GMP-aligned documentation.",
      "Develop computational tools for scientific data analysis, numerical modelling and experimental reporting, improving reproducibility and reducing recurring manual processing time.",
      "Train junior researchers on analytical methods, sample preparation and instrumentation workflows."
    ]
  },
  {
    role: "Research Assistant, Materials Physics",
    organization: "SMAP Group, Surfaces and Porous Materials",
    location: "Valladolid, Spain",
    period: "Jan 2021 – Sep 2021",
    highlights: [
      "Synthesized and characterized 10+ mixed-matrix membrane and polymer formulations for gas-separation applications.",
      "Optimized permeability/selectivity/performance trade-offs for CO₂ and greenhouse-gas capture use cases.",
      "Managed laboratory operations, instrument maintenance and safety protocols in a high-volume materials research environment."
    ]
  }
];

export const education = [
  {
    degree: "PhD Candidate in Condensed Matter Physics, Nanoscience and Biophysics",
    institution: "Autonomous University of Madrid",
    period: "Expected: 2027",
    detail: "Current doctoral work aligned with materials physics, nanoscience, nanoscale characterization and biophysics."
  },
  {
    degree: "Master's Degree in Physics, Materials Physics",
    institution: "University of Valladolid",
    period: "2021",
    detail: "Specialization in materials physics and experimental research."
  },
  {
    degree: "Bachelor's Degree in Physics",
    institution: "University of Valladolid",
    period: "2020",
    detail: "Physics foundation with later progression into materials research and scientific instrumentation."
  }
];

export const skills = [
  {
    category: "Materials Characterization",
    items: ["AFM", "SEM-EDX", "TEM", "XRD", "Raman", "FTIR", "XPS", "FIB lithography", "Optical microscopy", "Fluorescence microscopy", "HPLC-MS", "ICP"]
  },
  {
    category: "Scientific Data Analysis",
    items: ["Python", "NumPy", "Pandas", "Scikit-learn", "R", "Excel", "Origin", "ImageJ", "Git", "Numerical modelling", "Workflow automation"]
  },
  {
    category: "Instrumentation & Lab Operations",
    items: ["Calibration", "Preventive maintenance", "Data acquisition", "Sample preparation", "Bacterial cultures", "Equipment logs", "Technical availability"]
  },
  {
    category: "Quality & Documentation",
    items: ["ISO 9001", "GLP/GMP principles", "SOP improvement", "Workflow standardization", "Technical reporting", "Procurement", "Budget tracking"]
  },
  {
    category: "Additional Tools",
    items: ["TensorFlow", "SQL", "Power BI", "CST Studio Suite", "AutoCAD", "Mathematica", "C++", "NI LabVIEW", "3D printing"]
  }
];

export const certifications = [
  "Data Manipulation in Python, Data Science, Python for Machine Learning and Generative AI — Harvard University / Coursera, 2025",
  "Financial Modeling for Data Scientists; Data Analysis and Big Data / AI Through Visualization — Coursera / Columbia University, 2025",
  "Data Science and Data Analysis with R / SQL for Data Analysis and SQL Database Design — Coursera, 2025 / Udemy, 2024",
  "Computational Physics: Mathematica, C++ and NI LabVIEW — University of Valladolid, 2021"
];

export const publications = [
   {
    title: "Covalent organic polymer-based biosensor for autism spectrum disorder biomarker detection",
    journal: "Microchimica Acta",
    year: "2026",
    theme: "DNA biosensors · Autism biomarker detection",
    doi: "10.1007/s00604-025-07794-7",
    url: "https://doi.org/10.1007/s00604-025-07794-7"
  },
  {
    title: "Dendrimer-based DNA biosensor for HIV virus detection",
    journal: "Biosensors and Bioelectronics",
    year: "2025",
    theme: "DNA biosensors · Virus detection",
    doi: "10.1016/j.bios.2025.118014",
    url: "https://doi.org/10.1016/j.bios.2025.118014"
  },
  {
    title: "Advancing diagnostics with BODIPY-bismuthene DNA biosensors",
    journal: "Nanoscale",
    year: "2025",
    theme: "Bismuthene · Diagnostic biosensors",
    doi: "10.1039/D4NR05258G",
    url: "https://doi.org/10.1039/D4NR05258G"
  },
  {
    title: "MoS₂-DNA tetrahedral bioconjugate for high-performance DNA biosensors: application in viral infection diagnostics",
    journal: "Microchimica Acta",
    year: "2025",
    theme: "MoS₂ · DNA biosensors",
    doi: "10.1007/s00604-025-07084-2",
    url: "https://doi.org/10.1007/s00604-025-07084-2"
  },
  {
    title: "Tetrahedral DNA nanostructures, graphene and carbon nanodots-based electrochemiluminescent biosensor for BRCA1 gene mutation detection",
    journal: "Talanta",
    year: "2025",
    theme: "BRCA1 · Electrochemiluminescent biosensing",
    doi: "10.1016/j.talanta.2024.127182",
    url: "https://doi.org/10.1016/j.talanta.2024.127182"
  },
  {
    title: "Bismuthene - Tetrahedral DNA nanobioconjugate for virus detection",
    journal: "Biosensors and Bioelectronics",
    year: "2024",
    theme: "2D materials · Virus detection",
    doi: "10.1016/j.bios.2024.116500",
    url: "https://doi.org/10.1016/j.bios.2024.116500"
  },
  {
    title: "Rapid and simple viral protein detection by functionalized 2D MoS₂/graphene electrochemiluminescence aptasensor",
    journal: "Talanta",
    year: "2024",
    theme: "MoS₂/graphene · Aptasensors",
    doi: "10.1016/j.talanta.2024.126293",
    url: "https://doi.org/10.1016/j.talanta.2024.126293"
  },
  {
    title: "A signal off-on fluorescence bioassay based on 2D-MoS₂-tetrahedral DNA bioconjugate for rapid virus detection",
    journal: "Talanta",
    year: "2024",
    theme: "Fluorescence bioassay · Virus detection",
    doi: "10.1016/j.talanta.2023.125497",
    url: "https://doi.org/10.1016/j.talanta.2023.125497"
  },
  {
    title: "Multiplex Portable Biosensor for Bacteria Detection",
    journal: "Biosensors",
    year: "2023",
    theme: "Portable biosensors · Bacteria detection",
    doi: "10.3390/bios13110958",
    url: "https://doi.org/10.3390/bios13110958"
  }
];

export const marketPositioning = [
  {
    title: "Advanced characterization and metrology",
    text:
      "Core positioning in materials characterization, nanoscale metrology and scientific instrumentation, supporting R&D teams that need reliable measurements, validated workflows and interpretable experimental results."
  },
  {
    title: "Data-driven experimental R&D",
    text:
      "Strong fit for roles where Python-based analysis, reproducible workflows and scientific data interpretation help transform complex experimental outputs into usable technical insight."
  },
  {
    title: "Deep-tech and industrial innovation",
    text:
      "Relevant alignment with advanced materials, semiconductors, sensors, biosensing, energy-related materials and scientific instrumentation companies developing complex technologies."
  }
];
