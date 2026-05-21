import { enpointe, vcet, polytechnic } from "../assets/images";
import {
    contact,
    css,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    react,
    python,
    sql,
    cpp,
    c,
    pandas,
    numpy,
    matplotlib,
    scikit_learn,
    mysql,
    oracle,
    vscode,
    jupyter,
    excel,
    ml,
    data_analysis,
    data_vis,
    dbms,
    dsa,
    communication,
    problem_solving,
    teamwork,
    summiz,
    pricewise
} from "../assets/icons";

export const skills = [
    // --- LANGUAGES ---
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Language",
    },
    {
        imageUrl: css,
        name: "HTML/CSS",
        type: "Language",
    },

    // --- FRAMEWORKS & LIBRARIES ---
    {
        imageUrl: react,
        name: "React.js",
        type: "Framework/Library",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Framework/Library",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "Framework/Library",
    },
    {
        imageUrl: numpy,
        name: "NumPy",
        type: "Framework/Library",
    },
    {
        imageUrl: matplotlib,
        name: "Matplotlib",
        type: "Framework/Library",
    },
    {
        imageUrl: scikit_learn,
        name: "Scikit-learn",
        type: "Framework/Library",
    },

    // --- DATABASES ---
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: oracle,
        name: "Oracle",
        type: "Database",
    },

    // --- TOOLS & PLATFORMS ---
    {
        imageUrl: github,
        name: "GitHub",
        type: "Tool/Platform",
    },
    {
        imageUrl: vscode,
        name: "VS Code",
        type: "Tool/Platform",
    },
    {
        imageUrl: jupyter,
        name: "Jupyter Notebook",
        type: "Tool/Platform",
    },
    {
        imageUrl: excel,
        name: "Excel",
        type: "Tool/Platform",
    },

    // --- CORE SKILLS ---
    {
        imageUrl: ml,
        name: "Machine Learning",
        type: "Core Skill",
    },
    {
        imageUrl: data_analysis,
        name: "Data Analysis",
        type: "Core Skill",
    },
    {
        imageUrl: data_vis,
        name: "Data Visualization",
        type: "Core Skill",
    },
    {
        imageUrl: dbms,
        name: "DBMS",
        type: "Core Skill",
    },
    {
        imageUrl: dsa,
        name: "Data Structures & Algorithms",
        type: "Core Skill",
    },

    // --- SOFT SKILLS ---
    {
        imageUrl: communication,
        name: "Communication",
        type: "Soft Skill",
    },
    {
        imageUrl: problem_solving,
        name: "Problem Solving",
        type: "Soft Skill",
    },
    {
        imageUrl: teamwork,
        name: "Teamwork",
        type: "Soft Skill",
    }
];

export const experiences = [
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
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'TruthLens: AI misinformation detection',
        description: 'Developed an AI-powered misinformation detection system using Machine Learning and Natural Language Processing (NLP) techniques. Trained classification models to identify fake and misleading news content with high accuracy using Python, Scikit-learn, and designed a responsive interface for real-time news verification.',
        link: 'https://github.com/Lavanya-code-byte/truthlens',
        skills: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis", "Data Visualization"]
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'SegmentX: AI Customer Segmentation',
        description: 'Designed and built a web dashboard for AI-powered customer segmentation. The platform processes transaction data, calculates RFM (Recency, Frequency, Monetary) scores, and generates responsive segment distribution charts and audience breakdown visualizations with interactive components.',
        link: 'https://github.com/Lavanya-code-byte/SegmentX',
        skills: ["React.js", "Node.js", "JavaScript", "MySQL", "Data Analysis", "Data Visualization"]
    }
];