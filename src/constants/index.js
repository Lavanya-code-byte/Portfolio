import { enpointe, vcet, polytechnic, orient } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    python,
    flutter,
    sql,
    cpp,
    c,
    java,
    pandas,
    numpy,
    matplotlib,
    scikit_learn,
    tensorflow,
    pytorch,
    powerbi,
    mysql,
    oracle,
    sql_opt,
    vscode,
    jupyter,
    postman,
    linux,
    excel,
    chatgpt,
    gemini,
    claude,
    rest_api,
    ml,
    genai,
    llm,
    prompt_eng,
    nlp,
    deep_learning,
    feature_eng,
    model_eval,
    data_prep,
    eda,
    data_analysis,
    data_vis,
    dbms,
    dsa,
    communication,
    problem_solving,
    teamwork,
    analytical_thinking,
    research_analysis,
    leadership,
    tech_doc,
    presentation,
    adaptability,
    time_mgmt,
    attention_detail,
    continuous_learning,
    intellitel,
    predicta
} from "../assets/icons";

export const skillsCategories = [
    "All",
    "Programming Languages",
    "Artificial Intelligence & Machine Learning",
    "Data Science & Analytics",
    "Web Development",
    "Databases",
    "Tools & Platforms",
    "Professional Skills"
];

export const skills = [
    // --- PROGRAMMING LANGUAGES ---
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Languages",
        theme: "btn-back-blue",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Languages",
        theme: "btn-back-orange",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming Languages",
        theme: "btn-back-blue",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming Languages",
        theme: "btn-back-black",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Programming Languages",
        theme: "btn-back-yellow",
    },

    // --- ARTIFICIAL INTELLIGENCE & MACHINE LEARNING ---
    {
        imageUrl: ml,
        name: "Machine Learning",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-pink",
    },
    {
        imageUrl: genai,
        name: "Generative AI",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-pink",
    },
    {
        imageUrl: llm,
        name: "Large Language Models (LLMs)",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-blue",
    },
    {
        imageUrl: prompt_eng,
        name: "Prompt Engineering",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-green",
    },
    {
        imageUrl: nlp,
        name: "Natural Language Processing (NLP)",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-green",
    },
    {
        imageUrl: deep_learning,
        name: "Deep Learning",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-pink",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-orange",
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-red",
    },
    {
        imageUrl: scikit_learn,
        name: "Scikit-learn",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-orange",
    },
    {
        imageUrl: feature_eng,
        name: "Feature Engineering",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-blue",
    },
    {
        imageUrl: model_eval,
        name: "Model Evaluation",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-green",
    },
    {
        imageUrl: data_prep,
        name: "Data Preprocessing",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-yellow",
    },
    {
        imageUrl: eda,
        name: "Exploratory Data Analysis (EDA)",
        type: "Artificial Intelligence & Machine Learning",
        theme: "btn-back-blue",
    },

    // --- DATA SCIENCE & ANALYTICS ---
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Data Science & Analytics",
        theme: "btn-back-blue",
    },
    {
        imageUrl: numpy,
        name: "NumPy",
        type: "Data Science & Analytics",
        theme: "btn-back-blue",
    },
    {
        imageUrl: matplotlib,
        name: "Matplotlib",
        type: "Data Science & Analytics",
        theme: "btn-back-blue",
    },
    {
        imageUrl: data_analysis,
        name: "Data Analysis",
        type: "Data Science & Analytics",
        theme: "btn-back-green",
    },
    {
        imageUrl: data_vis,
        name: "Data Visualization",
        type: "Data Science & Analytics",
        theme: "btn-back-pink",
    },
    {
        imageUrl: powerbi,
        name: "Power BI",
        type: "Data Science & Analytics",
        theme: "btn-back-yellow",
    },
    {
        imageUrl: excel,
        name: "Microsoft Excel",
        type: "Data Science & Analytics",
        theme: "btn-back-green",
    },

    // --- WEB DEVELOPMENT ---
    {
        imageUrl: html,
        name: "HTML5",
        type: "Web Development",
        theme: "btn-back-orange",
    },
    {
        imageUrl: css,
        name: "CSS3",
        type: "Web Development",
        theme: "btn-back-blue",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Web Development",
        theme: "btn-back-blue",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Web Development",
        theme: "btn-back-green",
    },
    {
        imageUrl: rest_api,
        name: "RESTful APIs",
        type: "Web Development",
        theme: "btn-back-blue",
    },
    {
        imageUrl: flutter,
        name: "Flutter (Dart)",
        type: "Web Development",
        theme: "btn-back-blue",
    },

    // --- DATABASES ---
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Databases",
        theme: "btn-back-blue",
    },
    {
        imageUrl: oracle,
        name: "Oracle Database",
        type: "Databases",
        theme: "btn-back-red",
    },
    {
        imageUrl: sql_opt,
        name: "SQL Query Optimization",
        type: "Databases",
        theme: "btn-back-green",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Databases",
        theme: "btn-back-blue",
    },
    {
        imageUrl: dbms,
        name: "DBMS",
        type: "Databases",
        theme: "btn-back-green",
    },

    // --- TOOLS & PLATFORMS ---
    {
        imageUrl: git,
        name: "Git",
        type: "Tools & Platforms",
        theme: "btn-back-orange",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Tools & Platforms",
        theme: "btn-back-black",
    },
    {
        imageUrl: vscode,
        name: "VS Code",
        type: "Tools & Platforms",
        theme: "btn-back-blue",
    },
    {
        imageUrl: jupyter,
        name: "Jupyter Notebook",
        type: "Tools & Platforms",
        theme: "btn-back-orange",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Tools & Platforms",
        theme: "btn-back-orange",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "Tools & Platforms",
        theme: "btn-back-yellow",
    },
    {
        imageUrl: chatgpt,
        name: "ChatGPT",
        type: "Tools & Platforms",
        theme: "btn-back-green",
    },
    {
        imageUrl: gemini,
        name: "Gemini",
        type: "Tools & Platforms",
        theme: "btn-back-blue",
    },
    {
        imageUrl: claude,
        name: "Claude",
        type: "Tools & Platforms",
        theme: "btn-back-orange",
    },

    // --- PROFESSIONAL SKILLS ---
    {
        imageUrl: problem_solving,
        name: "Problem Solving",
        type: "Professional Skills",
        theme: "btn-back-blue",
    },
    {
        imageUrl: analytical_thinking,
        name: "Analytical Thinking",
        type: "Professional Skills",
        theme: "btn-back-blue",
    },
    {
        imageUrl: research_analysis,
        name: "Research & Analysis",
        type: "Professional Skills",
        theme: "btn-back-pink",
    },
    {
        imageUrl: communication,
        name: "Communication",
        type: "Professional Skills",
        theme: "btn-back-green",
    },
    {
        imageUrl: teamwork,
        name: "Team Collaboration",
        type: "Professional Skills",
        theme: "btn-back-yellow",
    },
    {
        imageUrl: leadership,
        name: "Leadership",
        type: "Professional Skills",
        theme: "btn-back-orange",
    },
    {
        imageUrl: tech_doc,
        name: "Technical Documentation",
        type: "Professional Skills",
        theme: "btn-back-black",
    },
    {
        imageUrl: presentation,
        name: "Presentation Skills",
        type: "Professional Skills",
        theme: "btn-back-pink",
    },
    {
        imageUrl: adaptability,
        name: "Adaptability",
        type: "Professional Skills",
        theme: "btn-back-green",
    },
    {
        imageUrl: time_mgmt,
        name: "Time Management",
        type: "Professional Skills",
        theme: "btn-back-blue",
    },
    {
        imageUrl: attention_detail,
        name: "Attention to Detail",
        type: "Professional Skills",
        theme: "btn-back-blue",
    },
    {
        imageUrl: continuous_learning,
        name: "Continuous Learning",
        type: "Professional Skills",
        theme: "btn-back-green",
    },
    {
        imageUrl: dsa,
        name: "Data Structures & Algorithms",
        type: "Professional Skills",
        theme: "btn-back-blue",
    }
];

export const experiences = [
    {
        title: "Artificial Intelligence Engineer Intern",
        company_name: "Orient Technologies Limited",
        icon: orient,
        iconBg: "#bbf7d0",
        date: "July 2026",
        points: [
            "Contributed to enterprise AI-assisted document processing and business automation solutions, including SegmentAI, AI-powered Invoice OCR, IntelliTel, and HireRef.",
            "Engineered automated document parsing and OCR data extraction pipelines using Python to streamline high-volume invoice processing and Excel automation.",
            "Developed responsive web application features and client interfaces using JavaScript, enabling seamless integration with backend AI microservices.",
            "Applied Deep Learning and Artificial Intelligence models to automate business operations and accelerate data processing pipelines.",
        ],
    },
    {
        title: "B.E. in Artificial Intelligence & Data Science",
        company_name: "Vidyavardhini’s College of Engineering and Technology",
        icon: vcet,
        iconBg: "#e0e7ff",
        date: "September 2024 - June 2027",
        points: [
            "Pursuing a Bachelor of Engineering (B.E.) with a strong core focus on Artificial Intelligence, Machine Learning, Deep Learning, and NLP.",
            "Acquiring advanced academic training in Data Structures & Algorithms, Database Management Systems (DBMS), and predictive data analytics.",
            "Participating in technical workshops and hands-on coding labs to implement machine learning pipelines in real-world contexts.",
        ],
    },
    {
        title: "Web and App Developer Intern",
        company_name: "Enpointe IO",
        icon: enpointe,
        iconBg: "#accbe1",
        date: "June 2023 - July 2023",
        points: [
            "Developed responsive web applications using React.js with reusable components, state hooks, and modern UI frameworks.",
            "Built backend services and RESTful APIs using Node.js for efficient data processing and client-server integration.",
            "Engineered cross-platform mobile applications using Flutter and Dart, ensuring smooth animations and native performance.",
            "Integrated remote APIs and database connectivity to enable seamless, real-time data handling for mobile and web clients.",
            "Applied state management and optimized application bundle performance for enhanced scalability and load speeds.",
        ],
    },
    {
        title: "Diploma in Computer Engineering",
        company_name: "Bhausaheb Vartak Polytechnic",
        icon: polytechnic,
        iconBg: "#fbc3bc",
        date: "September 2021 - June 2024",
        points: [
            "Completed a comprehensive Diploma program with a strong foundation in computer engineering and software systems.",
            "Acquired hands-on proficiency in core computer science subjects including system architecture, operating systems, and computer networks.",
            "Developed software projects using C, C++, Java, and standard SQL databases, applying robust software development life cycle (SDLC) methods.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Lavanya-code-byte',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/lavanya-kini',
    }
];

export const projects = [
    {
        iconUrl: predicta,
        theme: 'btn-back-yellow',
        name: 'Predicta: AI Customer Churn Prediction',
        description: 'Developed an AI-powered customer churn prediction dashboard that identifies at-risk accounts through machine learning and behavioral analytics. Features customer risk scoring, churn trend visualization, KPI tracking, and interactive customer segmentation to enable data-driven retention strategies.',
        link: 'https://github.com/Lavanya-code-byte/Predicta',
        skills: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis", "Data Visualization", "JavaScript"]
    },
    {
        iconUrl: intellitel,
        theme: 'btn-back-green',
        name: 'IntelliTel: Telecom Invoice Automation & OCR',
        description: 'Engineered an intelligent document processing application for telecom invoices in PDF format. Utilized Python, pdfplumber, and regex pattern matching to automatically extract critical billing periods, GST credentials, account metrics, and payment details into structured Excel sheets via Streamlit.',
        link: 'https://github.com/Lavanya-code-byte/IntelliTel',
        skills: ["Python", "Machine Learning", "Data Preprocessing", "Data Analysis", "Microsoft Excel"]
    }
];