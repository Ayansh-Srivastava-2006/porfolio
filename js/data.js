const portfolioData = {
  personal: {
    name: "Ayansh Srivastava",
    primaryRole: "Computer Science Undergraduate",
    secondaryRole: "Android & Python Developer",
    about: "I’m a Computer Science undergraduate at Galgotias University with project experience in Android application development and Python-based file search. I enjoy building practical software, working with databases, and improving code efficiency.",
    heroGreeting: "I’m Ayansh Srivastava",
    heroRoleAccent: "Computer Science",
    heroRoleSuffix: "Undergraduate",
    hireMeCta: "CONTACT ME",
    email: "ayanshsrivastava30042006@gmail.com",
    phone: "+91 6306595683",
    country: "India",
    city: "Greater Noida, Uttar Pradesh",
    university: "Galgotias University",
    cgpa: "Class XII: 73.16%",
    githubUrl: "https://github.com/Ayansh-Srivastava-2006",
    linkedinUrl: "",
    leetcodeUrl: "https://leetcode.com/u/Ayansh2006/",
    copyrightYear: 2026
  },

  skills: [
    {
      category: "Languages",
      icon: "code",
      description: "Programming languages for application development and problem solving",
      items: ["Java", "SQL", "C", "Python", "HTML/CSS"]
    },
    {
      category: "Frameworks",
      icon: "layout",
      description: "Frameworks and libraries for Android, backend, and networking",
      items: ["Android SDK", "Android Jetpack", "Flask", "Retrofit"]
    },
    {
      category: "Tools",
      icon: "server",
      description: "Development tools, databases, and deployment workflows",
      items: ["MySQL", "Git", "GitHub", "Docker"]
    },
    {
      category: "Platforms",
      icon: "database",
      description: "Development environments used for building and testing software",
      items: ["Android Studio", "Visual Studio Code", "IntelliJ IDEA"]
    },
    {
      category: "Coursework",
      icon: "tool",
      description: "Core computer science subjects and engineering foundations",
      items: ["Data Structures", "Algorithms", "Databases", "Computer Systems", "Operating Systems"]
    }
  ],

  education: {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Galgotias University",
    cgpa: "Class XII: 73.16%",
    location: "Greater Noida, Uttar Pradesh, India",
    status: "Expected July 2028",
    details: "Coursework includes Data Structures, Algorithms, Databases, Computer Systems, and Operating Systems."
  },

  projects: [
    {
      id: "finance-manager",
      title: "Online Personal Finance Manager",
      highlight: "Android Application",
      description: "Full-stack Android application for managing personal finances, including accounts, income, expenses, and budgets.",
      technologies: ["Java", "Android SDK", "Retrofit", "Gson", "Material Design"],
      features: [
        "User authentication with password hashing",
        "Account and transaction CRUD workflows",
        "Budget management for personal financial planning",
        "Client-server synchronization through Retrofit",
        "Backend built with Jetty, Jakarta Servlets, and Gradle Kotlin DSL"
      ],
      image: "assets/images/project-calculator.jpg",
      github: "https://github.com/Ayansh-Srivastava-2006",
      live: "https://github.com/Ayansh-Srivastava-2006"
    },
    {
      id: "file-search",
      title: "File Search Engine",
      highlight: "Python & Search",
      description: "Local file search engine that indexes documents and retrieves matching content through a browser and command-line interface.",
      technologies: ["Python", "Whoosh", "Flask", "PyPDF2", "Docker"],
      features: [
        "Indexing for TXT and PDF documents",
        "Browser-based search results with highlighted matches",
        "Command-line search interface",
        "Document retrieval powered by Whoosh",
        "Docker-based deployment workflow"
      ],
      image: "assets/images/project-pagepulse.jpg",
      github: "https://github.com/Ayansh-Srivastava-2006",
      live: "https://github.com/Ayansh-Srivastava-2006"
    }
  ],

  recommendations: [
    {
      id: 1,
      rating: 5,
      title: "Practical Problem Solver",
      text: "Ayansh approaches software projects with curiosity, discipline, and a focus on building practical solutions.",
      author: "Project Collaborator",
      role: "Development Collaborator",
      avatar: "assets/images/avatar-1.svg"
    },
    {
      id: 2,
      rating: 5,
      title: "Strong Learner",
      text: "Ayansh continues to build a strong foundation across Java, Python, databases, and computer science fundamentals.",
      author: "Academic Peer",
      role: "Computer Science Peer",
      avatar: "assets/images/avatar-2.svg"
    }
  ],

  partners: [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "Android", icon: "🤖" },
    { name: "Flask", icon: "⚗️" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Docker", icon: "🐳" }
  ]
};

window.portfolioData = portfolioData;
