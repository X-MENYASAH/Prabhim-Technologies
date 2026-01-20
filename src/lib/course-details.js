export const courseDetails = {
  default: {
    cadSoftware: "AutoCAD",
    providers: [
      { name: "Prabhim Technologies", description: "AutoCAD customization, automation scripting and productivity mentoring" },
      { name: "Internal Mentors", description: "Project reviews, reusable script templates, lifetime community" },
    ],
    customizationApis: ["AutoLISP", "AutoCAD .NET API", "ObjectARX"],
    languagesTools: ["AutoLISP", "C#", "VB.NET", "Python"],
    structureHighlights: [
      "6-month live + lab hybrid focused on real drafting automation",
      "Capstone: automate drawing setup, custom palettes, BOM exports",
    ],
    extraHighlights: [
      "Mentor-led clinics for building deployable AutoCAD add-ins",
      "Includes script starter kits and UI customization walkthroughs",
    ],
    aboutText:
      "If you have been using AutoCAD for a while, you may have thought to progress in life, because no matter how much we advance in the digital world, our skills are valued more than our certificates. Therefore, I put these courses together to help you build your career. If I can teach you to be more productive and efficient, then I have done my job.",
    learningOutcomes: [
      "Accelerated command input & template-driven workflows",
      "Tailored tool palettes with reusable script trays",
      "Scripted and macro automation using AutoLISP/.NET",
      "Ribbon & UI customization for role-specific UX",
      "Custom desktop profiles, icons, and deployment packs",
      "Intro to AutoLISP programming & debugging",
    ],
    courseContent: [
      {
        title: "Workspace Automation Kickoff",
        duration: "26:30",
        lessons: [
          { title: "Tool palettes & UI profiles", duration: "08:10" },
          { title: "Ribbon customization & macros", duration: "10:05" },
          { title: "Deploying workspace templates", duration: "08:15" },
        ],
      },
      {
        title: "Productivity Scripts & LISP Essentials",
        duration: "45:30",
        lessons: [
          { title: "Parameter-driven commands", duration: "12:40" },
          { title: "Automate layer, dim, blocks", duration: "18:05" },
          { title: "QA & deployment tips", duration: "14:45" },
        ],
      },
      {
        title: "Integration & BOM Automation",
        duration: "32:10",
        lessons: [
          { title: "Connecting to spreadsheets/DB", duration: "15:12" },
          { title: "Generating drawing packages", duration: "09:26" },
          { title: "Packaging deliverables", duration: "07:32" },
        ],
      },
    ],
  },
  "autocad-customization": {
    cadSoftware: "AutoCAD",
    providers: [
      { name: "Descode Solutions", description: "Full AutoCAD automation plus CAD workflow advisory" },
      { name: "Prabhim Technologies", description: "Hands-on AutoLISP/.NET customization projects" },
    ],
    customizationApis: ["AutoLISP", "AutoCAD .NET API", "ObjectARX"],
    languagesTools: ["AutoLISP", "C#", "VB.NET", "Python"],
    structureHighlights: [
      "Project-driven bootcamp on tool palettes, ribbon/UI customization, macro automation",
      "Live mentor support with code reviews, reusable template pack",
    ],
    extraHighlights: [
      "Focus on accelerating command input and workspace personalization",
      "Covers integration with PLM/databases for BOM and drawing automation",
    ],
    aboutText:
      "Descode’s AutoCAD Customization path is aimed at drafters who want to own productivity tooling—expect deep dives into CUI, ribbon, palettes, script automation, and data-connected workflows that prove ROI inside manufacturing teams.",
    learningOutcomes: [
      "Speed up repetitive drafting through macros and scripts",
      "Design custom ribbon tabs, palettes, and workspaces",
      "Build AutoLISP/.NET utilities tied to project standards",
      "Automate BOM extraction, drawing batches, and QC gates",
      "Integrate AutoCAD data with Excel, PLM, or ERP sources",
      "Ship and maintain deployable add-ins for teams",
    ],
    courseContent: [
      {
        title: "Workspace Basics & Domain Hosting Explained",
        duration: "26:30",
        lessons: [
          { title: "Install AutoCAD & configure templates", duration: "08:05" },
          { title: "Command aliases, CUI, ribbon tabs", duration: "10:11" },
          { title: "Publish company-wide workspace packs", duration: "08:14" },
        ],
      },
      {
        title: "Macro, Script + AutoLISP Foundations",
        duration: "45:30",
        lessons: [
          { title: "Tool palette automation & script triggers", duration: "12:50" },
          { title: "AutoLISP routines for repetitive drafting", duration: "19:00" },
          { title: "QA, debugging & deployment playbook", duration: "13:40" },
        ],
      },
      {
        title: "Full Project: Custom UI + BOM Automation",
        duration: "42:20",
        lessons: [
          { title: "Ribbon panel + palette UX design", duration: "14:00" },
          { title: "Integrate with Excel/PLM for BOM", duration: "16:30" },
          { title: "Auto publish drawings & deliverables", duration: "11:50" },
        ],
      },
    ],
  },
  "creo-customization": {
    cadSoftware: "Creo",
    providers: [
      { name: "Descode Solutions", description: "Creo Toolkit, J-Link & VB API coverage inside CAD Automation program" },
      { name: "Creo-Toolkit.com", description: "2-month intensive, project-based automation cohort" },
    ],
    customizationApis: ["Creo Toolkit", "J-Link", "VB API"],
    languagesTools: ["C++ (Toolkit)", "Java (J-Link)", "VB"],
    structureHighlights: [
      "Descode’s CAD Automation program runs ~60 days of live classes with mentor support",
      "Creo-Toolkit.com delivers practical C++ projects: modeling automation, drawing creation, BOM tools",
    ],
    extraHighlights: [
      "Project assignments automate part/assembly creation and downstream deliverables",
      "Focus on production-grade deployment, not just macro recording",
    ],
    aboutText:
      "Creo customization training blends Descode’s CAD automation bootcamp with Creo-Toolkit.com’s project-based mentorship so you graduate with working C++/Java add-ins that automate modeling, drawings, and BOM flows.",
    learningOutcomes: [
      "Set up Creo Toolkit projects with modern C++ tooling",
      "Use J-Link and VB API for automation inside Creo",
      "Capture feature-level logic for parametric model builders",
      "Automate drawing creation, table population, and exports",
      "Wire add-ins to enterprise data/BOM pipelines",
      "Deploy production-ready automation with logging & UI",
    ],
    courseContent: [
      {
        title: "Creo Toolkit Foundations",
        duration: "35:10",
        lessons: [
          { title: "Setting up C++ dev environment", duration: "12:00" },
          { title: "Traversing models & features", duration: "11:40" },
          { title: "Event handling & UI basics", duration: "11:30" },
        ],
      },
      {
        title: "J-Link & VB API Automation",
        duration: "48:45",
        lessons: [
          { title: "Java automation workflows", duration: "16:05" },
          { title: "VB macro templates", duration: "14:20" },
          { title: "Hybrid automation strategies", duration: "18:20" },
        ],
      },
      {
        title: "Project: Modeling & BOM Automation",
        duration: "51:00",
        lessons: [
          { title: "Automated modeling sequences", duration: "18:10" },
          { title: "Drawing & table generation", duration: "16:50" },
          { title: "BOM + PLM data push", duration: "16:00" },
        ],
      },
    ],
  },
  "solidworks-customization": {
    cadSoftware: "SolidWorks",
    providers: [
      { name: "Descode Solutions", description: "SolidWorks API (COM-based) inside their CAD Automation batches" },
      { name: "CADVertex", description: "SolidWorks automation via VB.NET, C#, Python with downloadable assets" },
    ],
    customizationApis: ["SolidWorks API (COM)", "Macro automation workflows"],
    languagesTools: ["C# (.NET)", "VB (.NET)", "VBA", "Python"],
    structureHighlights: [
      "Part of Descode’s 60-day CAD Automation live program",
      "CADVertex supplies modular automation training + reusable content packs",
    ],
    extraHighlights: [
      "Emphasis on building add-ins, UI custom tools, batch drawing generation",
      "CADVertex supports multiple language tracks with downloadable code",
    ],
    aboutText:
      "SolidWorks automation cohorts teach COM-based APIs across C#, VB, and Python so you can craft add-ins that accelerate modeling, documentation, and data syncing for engineering teams.",
    learningOutcomes: [
      "Initialize COM add-ins with menus, task panes, and events",
      "Traverse parts/assemblies to drive geometry automation",
      "Batch-generate drawings and custom properties via scripts",
      "Sync BOM metadata with ERP/PLM systems",
      "Author automation templates across C#, VB, VBA, Python",
      "Package, deploy, and maintain SolidWorks add-ins",
    ],
    courseContent: [
      {
        title: "SolidWorks API Kickoff",
        duration: "33:40",
        lessons: [
          { title: "COM registration & template project", duration: "09:50" },
          { title: "Document + feature traversal", duration: "12:20" },
          { title: "Events, menus, task panes", duration: "11:30" },
        ],
      },
      {
        title: "Automation Projects in C#/VB",
        duration: "44:55",
        lessons: [
          { title: "Model & drawing batch generation", duration: "17:05" },
          { title: "Custom property and BOM sync", duration: "13:25" },
          { title: "Error handling & logging patterns", duration: "14:25" },
        ],
      },
      {
        title: "Python & VBA Extensions",
        duration: "29:20",
        lessons: [
          { title: "VBA macros for detailing", duration: "09:15" },
          { title: "Python automation via COM", duration: "10:05" },
          { title: "Packaging & documentation", duration: "10:00" },
        ],
      },
    ],
  },
  "catia-customization": {
    cadSoftware: "CATIA",
    providers: [
      { name: "Descode Solutions", description: "CATIA Automation Interfaces, CATVBA, CATVBS, CAA focus" },
      { name: "CADVertex", description: "CATIA automation via VB.NET, C#, Python" },
    ],
    customizationApis: ["CATIA Automation Interfaces", "CATVBA / CATVBS", "CAA (C++)"],
    languagesTools: ["C# (.NET)", "VB (.NET)", "VBA", "C++ (CAA)", "Python"],
    structureHighlights: [
      "60-day live course with Descode covering automation pipelines end-to-end",
      "CADVertex adds multi-language, project-based CATIA automation tracks",
    ],
    extraHighlights: [
      "Covers template-driven part creation, drawing automation, PLM connectivity",
      "Blends desktop automation with enterprise integration scenarios",
    ],
    aboutText:
      "CATIA customization bootcamps tackle CATVBA/CATVBS scripting plus CAA (C++) so you can automate template-driven modeling, detailing, and PLM-integrated deliverables.",
    learningOutcomes: [
      "Author CATVBA scripts for repetitive modeling tasks",
      "Use CATIA Automation Interfaces to control geometry & assemblies",
      "Transition into CAA for performance-critical add-ins",
      "Publish drawings, catalogs, and PLM-ready documentation",
      "Implement UI commands, macros, and user prompts",
      "Connect CATIA automation with enterprise data",
    ],
    courseContent: [
      {
        title: "CATIA Automation Interfaces",
        duration: "38:25",
        lessons: [
          { title: "CATVBA/CATVBS setup & scripting", duration: "13:20" },
          { title: "Geometry & product structure APIs", duration: "12:15" },
          { title: "UI commands, macros & deployment", duration: "12:50" },
        ],
      },
      {
        title: "CAA (C++) Essentials",
        duration: "41:00",
        lessons: [
          { title: "CAA project scaffolding", duration: "15:40" },
          { title: "Feature creation & automation", duration: "13:05" },
          { title: "Debugging & packaging", duration: "12:15" },
        ],
      },
      {
        title: "Enterprise Integration Project",
        duration: "36:10",
        lessons: [
          { title: "Template-driven part automation", duration: "14:05" },
          { title: "Drawing & BOM publishing", duration: "11:30" },
          { title: "PLM/data connectivity", duration: "10:35" },
        ],
      },
    ],
  },
  "nx-customization": {
    cadSoftware: "Siemens NX",
    providers: [
      { name: "Descode Solutions", description: "NX Open API deep dive incl. UFUNC, Block UI Styler, Knowledge Fusion" },
      { name: "NX-Open.com", description: "Tutorials, API training, job-oriented support" },
    ],
    customizationApis: ["NX Open", "UFUNC", "Block UI Styler", "Knowledge Fusion"],
    languagesTools: ["C#", "VB (.NET)", "C++"],
    structureHighlights: [
      "Live training spans NX Open automation, UI authoring, knowledge rules",
      "NX-Open.com supplements with tutorials + mentoring for job readiness",
    ],
    extraHighlights: [
      "Focus on integrating NX with PLM/data sources and automating drafting",
      "Hands-on exercises for custom dialogs, feature automation, batch jobs",
    ],
    aboutText:
      "NX customization combines NX Open, UFUNC, Block UI Styler, and Knowledge Fusion so you can design bespoke tools, automate drafting, and integrate data with Teamcenter or other PLM systems.",
    learningOutcomes: [
      "Set up C#/.NET NX Open sessions and manage geometry builders",
      "Leverage UFUNC for advanced feature automation",
      "Design custom dialogs with Block UI Styler",
      "Encode engineering logic using Knowledge Fusion rules",
      "Automate drafting, BOMs, and downstream deliverables",
      "Prepare installers and governance for enterprise rollouts",
    ],
    courseContent: [
      {
        title: "NX Open Core Concepts",
        duration: "34:55",
        lessons: [
          { title: "C#/.NET setup & session management", duration: "11:20" },
          { title: "Geometry builders & UFUNC intro", duration: "12:25" },
          { title: "Error handling & logging", duration: "11:10" },
        ],
      },
      {
        title: "Block UI Styler & Knowledge Fusion",
        duration: "39:40",
        lessons: [
          { title: "Custom dialog design", duration: "13:40" },
          { title: "Knowledge Fusion rules", duration: "15:05" },
          { title: "Connecting UI to automation logic", duration: "10:55" },
        ],
      },
      {
        title: "Deployment Project",
        duration: "37:30",
        lessons: [
          { title: "Drawing & drafting automation", duration: "12:35" },
          { title: "PLM/Teamcenter integration basics", duration: "12:20" },
          { title: "Packaging, installers, documentation", duration: "12:35" },
        ],
      },
    ],
  },
  "solidedge-customization": {
    cadSoftware: "Solid Edge",
    providers: [
      { name: "Descode Solutions", description: "Solid Edge API (COM-based) within 60-day CAD automation batches" },
      { name: "FeesWorth", description: "Dedicated Solid Edge API training" },
      { name: "CADVertex", description: "Solid Edge automation via VB.NET, C#, Python" },
    ],
    customizationApis: ["Solid Edge API (COM)", "Solid Edge automation scripts"],
    languagesTools: ["C#", "VB (.NET)", "VBA", "Python"],
    structureHighlights: [
      "Tied to Descode’s live 60-day CAD automation training",
      "FeesWorth and CADVertex add focused API mentorship + multi-language tracks",
    ],
    extraHighlights: [
      "Downloadable course content for different languages",
      "Use cases: repetitive modeling, drawing automation, BOM syncing",
    ],
    aboutText:
      "Solid Edge API courses focus on COM automation across VB.NET, C#, VBA, and Python so you can eliminate repetitive modeling tasks, control drawings, and keep BOM data synchronized.",
    learningOutcomes: [
      "Navigate the Solid Edge API object model",
      "Automate sketches, features, and drawings programmatically",
      "Leverage VB.NET/C# for robust add-ins and task automation",
      "Use Python/VBA for lightweight macro scripting",
      "Build property/BOM synchronization routines",
      "Package code with documentation and installers",
    ],
    courseContent: [
      {
        title: "Solid Edge API Essentials",
        duration: "31:35",
        lessons: [
          { title: "COM setup & object model tour", duration: "10:40" },
          { title: "Sketch/feature automation", duration: "10:20" },
          { title: "Event handling & UI hooks", duration: "10:35" },
        ],
      },
      {
        title: "VB.NET & C# Automation Lab",
        duration: "36:15",
        lessons: [
          { title: "Batch modeling + drafting", duration: "14:45" },
          { title: "Property/BOM synchronization", duration: "11:20" },
          { title: "Deployable add-in patterns", duration: "10:10" },
        ],
      },
      {
        title: "Python & VBA Recipe Pack",
        duration: "27:40",
        lessons: [
          { title: "Python macros via win32com", duration: "09:05" },
          { title: "VBA detailing shortcuts", duration: "09:40" },
          { title: "Reusable template library", duration: "08:55" },
        ],
      },
    ],
  },
  "revit-customization": {
    cadSoftware: "Autodesk Revit",
    providers: [
      { name: "Descode Solutions", description: "Revit .NET API, Dynamo workflows inside CAD automation program" },
      { name: "CADVertex", description: "Revit API master course with C#, Python + Dynamo" },
    ],
    customizationApis: ["Revit .NET API", "Dynamo"],
    languagesTools: ["C#", "VB (.NET)", "Python", "Dynamo"],
    structureHighlights: [
      "Covered within Descode's CAD automation training schedule",
      "CADVertex delivers mentor-led Revit API mastery incl. Dynamo scripting",
    ],
    extraHighlights: [
      "Focus on BIM automation, parametric content, documentation pipelines",
      "Includes Dynamo recipe library + downloadable sample add-ins",
    ],
    aboutText:
      "Revit customization training unites Descode's .NET API coverage with CADVertex's Dynamo/Python mastery so BIM teams can automate content, documentation, and data connectivity.",
    learningOutcomes: [
      "Build Revit add-ins with the .NET API and transaction best practices",
      "Automate element, parameter, and view generation",
      "Create Dynamo graphs and Python nodes for rapid workflows",
      "Publish sheets, schedules, and BIM deliverables automatically",
      "Integrate Revit data with databases or PLM/ERP systems",
      "Maintain reusable automation libraries for project teams",
    ],
    courseContent: [
      {
        title: "Revit .NET API Foundations",
        duration: "33:20",
        lessons: [
          { title: "Setting up C# add-in projects", duration: "11:05" },
          { title: "Document & element traversal", duration: "11:40" },
          { title: "Transactions & performance", duration: "10:35" },
        ],
      },
      {
        title: "Dynamo + Python Automation",
        duration: "37:15",
        lessons: [
          { title: "Dynamo graph authoring", duration: "12:55" },
          { title: "Python nodes & Revit API calls", duration: "14:05" },
          { title: "Sharing/custom packages", duration: "10:15" },
        ],
      },
      {
        title: "BIM Deliverables & Integration",
        duration: "35:45",
        lessons: [
          { title: "Parametric content generators", duration: "12:30" },
          { title: "Sheet/document automation", duration: "12:10" },
          { title: "Linking with databases/PLM", duration: "11:05" },
        ],
      },
    ],
  },
  "autodesk-inventor": {
    cadSoftware: "AutoDesk Inventor",
    providers: [
      { name: "Descode Solutions", description: "Inventor .NET API and VBA automation within CAD automation program" },
      { name: "CADVertex", description: "Inventor API training with C#, VB.NET, and Python automation" },
    ],
    customizationApis: ["Inventor .NET API", "VBA", "iLogic"],
    languagesTools: ["C#", "VB (.NET)", "VBA", "iLogic", "Python"],
    structureHighlights: [
      "4-month intensive course covering Inventor API fundamentals and automation",
      "Project-based learning with real-world 3D modeling and assembly automation",
    ],
    extraHighlights: [
      "Focus on parametric modeling automation, assembly management, and drawing generation",
      "Includes iLogic rule creation and VBA macro development for design automation",
    ],
    aboutText:
      "AutoDesk Inventor customization training empowers engineers to automate 3D modeling workflows, create custom add-ins, and integrate Inventor with enterprise systems for streamlined product design processes.",
    learningOutcomes: [
      "Master Inventor .NET API for part and assembly automation",
      "Develop iLogic rules for parametric design automation",
      "Create custom add-ins with C# and VB.NET for Inventor",
      "Automate drawing generation and documentation workflows",
      "Integrate Inventor with PLM, ERP, and data management systems",
      "Build deployable automation tools for design teams",
    ],
    courseContent: [
      {
        title: "Inventor API Fundamentals",
        duration: "38:45",
        lessons: [
          { title: "Setting up .NET add-in projects", duration: "12:20" },
          { title: "Part and assembly object model", duration: "14:15" },
          { title: "Feature creation and manipulation", duration: "12:10" },
        ],
      },
      {
        title: "iLogic & VBA Automation",
        duration: "42:30",
        lessons: [
          { title: "iLogic rule creation and parameters", duration: "15:25" },
          { title: "VBA macros for design automation", duration: "14:40" },
          { title: "Event handling and UI customization", duration: "12:25" },
        ],
      },
      {
        title: "Advanced Automation & Integration",
        duration: "40:15",
        lessons: [
          { title: "Drawing and documentation automation", duration: "13:50" },
          { title: "PLM and data system integration", duration: "14:20" },
          { title: "Deployment and maintenance strategies", duration: "12:05" },
        ],
      },
    ],
  },
  "data-analyst": {
    cadSoftware: "Data Analysis Tools",
    providers: [
      { name: "DataTech Academy", description: "Comprehensive data analysis training with Python, SQL, and visualization tools" },
      { name: "Analytics Pro", description: "Industry-focused data analyst bootcamp with real-world projects" },
    ],
    customizationApis: ["Python (Pandas, NumPy)", "SQL", "Data Visualization", "Statistical Analysis"],
    languagesTools: ["Python", "SQL", "Excel", "Tableau", "Power BI", "Jupyter Notebooks"],
    structureHighlights: [
      "6-month intensive program covering data collection, cleaning, analysis, and visualization",
      "Project-based learning with real datasets from various industries",
    ],
    extraHighlights: [
      "Focus on practical data analysis skills for business decision-making",
      "Includes portfolio projects and case studies from finance, marketing, and operations",
    ],
    aboutText:
      "The Data Analyst course equips you with essential skills to extract insights from data, create compelling visualizations, and make data-driven decisions. Learn Python for data manipulation, SQL for database queries, and visualization tools to present findings effectively.",
    learningOutcomes: [
      "Master Python libraries (Pandas, NumPy) for data manipulation and analysis",
      "Write complex SQL queries to extract and analyze data from databases",
      "Create compelling data visualizations using Tableau, Power BI, and Python",
      "Perform statistical analysis and hypothesis testing",
      "Clean and preprocess raw data for analysis",
      "Build a professional data analyst portfolio with real-world projects",
    ],
    courseContent: [
      {
        title: "Python for Data Analysis",
        duration: "45:20",
        lessons: [
          { title: "Introduction to Pandas and NumPy", duration: "15:30" },
          { title: "Data cleaning and preprocessing", duration: "18:45" },
          { title: "Data manipulation and transformation", duration: "11:05" },
        ],
      },
      {
        title: "SQL Fundamentals & Advanced Queries",
        duration: "42:15",
        lessons: [
          { title: "Database design and SQL basics", duration: "14:20" },
          { title: "Joins, subqueries, and aggregations", duration: "16:30" },
          { title: "Window functions and CTEs", duration: "11:25" },
        ],
      },
      {
        title: "Data Visualization & Reporting",
        duration: "38:50",
        lessons: [
          { title: "Creating dashboards with Tableau", duration: "13:15" },
          { title: "Power BI for business intelligence", duration: "14:20" },
          { title: "Python visualization with Matplotlib and Seaborn", duration: "11:15" },
        ],
      },
      {
        title: "Statistical Analysis & Case Studies",
        duration: "40:30",
        lessons: [
          { title: "Descriptive and inferential statistics", duration: "14:45" },
          { title: "Hypothesis testing and A/B testing", duration: "13:20" },
          { title: "Real-world case study projects", duration: "12:25" },
        ],
      },
    ],
  },
};

export const commonCourseFeatures = [
  {
    title: "Live / Project-Based Training",
    description: "Providers like Descode run multi-month live classes with mentor feedback and real CAD automation briefs.",
  },
  {
    title: "Hands-on Projects",
    description: "Assignments tackle automation tasks such as custom feature builders, drawing generation, BOM management, PLM integration.",
  },
  {
    title: "API-Focused",
    description: "Curricula emphasize production APIs over simple macro recording so you can ship add-ins and workflow tools.",
  },
  {
    title: "Multi-Language Support",
    description: "Most stacks cover C#/.NET and VB.NET; Creo adds C++ & Java, while Revit includes Dynamo scripting.",
  },
  {
    title: "Career Upside",
    description: "Automation engineers command higher pay versus pure CAD designers thanks to workflow and integration skills.",
  },
  {
    title: "Long-Term Support",
    description: "Mentorship, reusable code templates, and community support stay available well past course completion.",
  },
];

export const strengthsAndConsiderations = {
  strengths: [
    "Niche skill set: far fewer engineers master CAD automation compared to standard modeling.",
    "You can radically speed up design workflows and enforce standards company-wide.",
    "Helps bridge CAD with PLM, databases, ERP, and other enterprise platforms.",
  ],
  considerations: [
    "Requires comfort with programming languages such as C#, VB.NET, C++, Java, or Python.",
    "2-month live cohorts demand consistent time investment and project submissions.",
    "A solid CAD foundation is needed to apply APIs meaningfully and justify course costs.",
  ],
};

