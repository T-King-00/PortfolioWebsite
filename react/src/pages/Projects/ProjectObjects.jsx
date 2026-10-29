const projects=[
    {
        id: 0,
        title: "B&B Booking Web Application",

        description:
            "• Built a booking application with ASP.NET Core  API, EF Core, React, and SQLite.\n" +
            "• Implemented date validation and booking conflict prevention, along with unit and integration tests using xUnit.\n" +
            "• Documented REST endpoints with Swagger and integrated the frontend using Axios and Zustand.\n" +
            "• Developed an AI-powered booking assistant using Microsoft Agent Framework, IChatClient, and RAG, enabling natural-language room recommendations, real-time availability checks, and automated booking workflows through AI tool calling.",

        techStack: ["C#", "ASP.NET Core API", "EF Core", "React", "SQLite", "xUnit", "Swagger", "Axios", "Zustand", "Microsoft Agent Framework", "IChatClient", "RAG"],

    },
    {
        id: 1,
        title: "News Web Application API",

        description:
            "• Developed a React frontend and ASP.NET Core Web API using a layered architecture." +
            "• Integrated an external news API and built custom .NET endpoints to retrieve, process, and tailor news data for the frontend." +
            "• Implemented article browsing, category navigation, pagination, and search across the application.",

        techStack: ["C#", "ASP.NET Core Web API", "React", "REST APIs"],

    },
    {
        id: 1,
        title: "3-Tier Web Application Deployment (AWS)",
        description:
            "Designed and deployed a scalable multi-tier architecture using EC2, RDS, CloudWatch, and Auto Scaling.",
        techStack: ["AWS Services", "EC2", "RDS", "CloudWatch", "Auto Scaling", "C#", ".NET"],

    },
    {
        id: 2,
        title: "Automation for generation of UML design",
        description:
            "Logic module for analyzing text input and generating class/use-case diagrams.",
        techStack: ["Python", "NLTK", "SpaCy", "Flask API", "React"],
    },
    {
        id: 3,
        title: "Bike Ecommerce Web Application",
        description:
            "Service-oriented e-commerce system using ASP.NET MVC and WCF Services.",
        techStack: ["C#", ".NET MVC", "WCF", "Razor", "MSSQL", "Bootstrap"],
    },
    {
        id: 4,
        title: "Gym Management System",
        description:
            "Built a JavaFX GUI application with role-based access for admins and employees to manage classes, members, and trainers.",
        techStack: ["Java", "JavaFX", "MSSQL", "OOP Concepts"],
    }
]
export default projects
