import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon, ReactQueryIcon, EdgeStoreIcon
} from "../assets/Icons"

// Mock assets - replace with your actual project assets
const MockLogo = HtmlIcon; // Placeholder - replace with your logos
const MockShot = HtmlIcon; // Placeholder - replace with your screenshots  
const MockMockup = HtmlIcon; // Placeholder - replace with your mockups

type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

const TechInfo = {
    HTML: {
        title: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: HtmlIcon
    },
    CSS: {
        title: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: CssIcon
    },
    JavaScript: {
        title: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: JsIcon
    },
    React: {
        title: "React",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: ReactIcon
    },
    Node: {
        title: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architecture.",
        icon: NodeIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability and tooling support.",
        icon: TsIcon
    },
    Next: {
        title: "Next.js",
        description: "A React framework for server-side rendering, static site generation, and routing, offering improved performance and SEO optimization.",
        icon: NextIcon
    },
    MySQL: {
        title: "MySQL",
        description: "Open-source relational database management system for storing and managing structured data.",
        icon: MysqlIcon
    },
    MongoDB: {
        title: "MongoDB",
        description: "NoSQL database offering flexibility and scalability for storing and managing data efficiently.",
        icon: MongoIcon
    },
    GDrive: {
        title: "Google Drive API",
        description: "RESTful API for integrating Google Drive functionalities such as file storage and synchronization into applications.",
        icon: GdriveIcon
    },
    SocketIO: {
        title: "Socket.IO",
        description: "Real-time bidirectional communication library for building interactive web applications.",
        icon: SocketIoIcon
    },
    RESTAPI: {
        title: "REST API",
        description: "Architectural style for designing networked applications with standardized HTTP operations.",
        icon: RestApiIcon
    },
    PHP: {
        title: "PHP",
        description: "Server-side scripting language for building dynamic web applications.",
        icon: PhpIcon
    },
    Vite: {
        title: "Vite",
        description: "Modern build tooling for web development with rapid startup and hot module replacement.",
        icon: ViteIcon
    },
    NextAuth: {
        title: "NextAuth.js",
        description: "Authentication library designed specifically for Next.js applications, providing robust authentication features and seamless integration.",
        icon: NextAuthIcon
    },
    Redux: {
        title: "Redux",
        description: "Predictable state management library for JavaScript applications, enabling developers to write consistent, scalable code with ease.",
        icon: ReduxIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework providing pre-designed, atomic-level utility classes for rapid UI development with minimal CSS code.",
        icon: TailwindIcon
    },
    Zustand: {
        title: "Zustand",
        description: "Tiny, fast, and scalable state management for React applications, providing a simple and intuitive API.",
        icon: ZustandIcon
    },
    Astro: {
        title: "Astro",
        description: "Frontend framework for streamlined development, integrating seamlessly with popular tools to create fast and modern websites with minimal configuration overhead.",
        icon: AstroIcon
    },
    NanoStores: {
        title: "NanoStores",
        description: "Lightweight state management library for JavaScript applications, designed for simplicity and performance to simplify state management and improve application responsiveness.",
        icon: NanostoresIcon
    },
    D3: {
        title: "D3.js",
        description: "Versatile JavaScript library for data visualization, enabling developers to create dynamic, interactive graphics and charts by binding data to DOM elements.",
        icon: D3JsIcon
    },
    ReactQuery: {
        title: "React Query",
        description: "React library for managing, caching, and synchronizing server state in web applications, providing a powerful and intuitive API for fetching and updating data.",
        icon: ReactQueryIcon
    },
    EdgeStore: {
        title: "EdgeStore",
        description: "EdgeStore is an open-source file storage service, designed for scalability and performance, with efficient updates and minimal API.",
        icon: EdgeStoreIcon
    }
};

// Common Features List
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}

// Replace this with your actual projects
export const ProjectsList: ProjectsListType = [
    {
        Name: "ARMS v3",
        ShortDesc: "ARMS v3 project description.",
        Desc: "Detailed project description for ARMS v3.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Vortexa",
        ShortDesc: "Vortexa project description.",
        Desc: "Detailed project description for Vortexa.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Next Mart",
        ShortDesc: "Next Mart project description.",
        Desc: "Detailed project description for Next Mart.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "ARMS v2",
        ShortDesc: "ARMS v2 project description.",
        Desc: "Detailed project description for ARMS v2.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Xrecon",
        ShortDesc: "Xrecon project description.",
        Desc: "Detailed project description for Xrecon.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Yoatube",
        ShortDesc: "Yoatube project description.",
        Desc: "Detailed project description for Yoatube.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Srinivas Exam Manager",
        ShortDesc: "Srinivas Exam Manager project description.",
        Desc: "Detailed project description for Srinivas Exam Manager.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Piktures",
        ShortDesc: "Piktures project description.",
        Desc: "Detailed project description for Piktures.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Days Beyond",
        ShortDesc: "Days Beyond project description.",
        Desc: "Detailed project description for Days Beyond.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "ARMS v1",
        ShortDesc: "ARMS v1 project description.",
        Desc: "Detailed project description for ARMS v1.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Film Stack",
        ShortDesc: "Film Stack project description.",
        Desc: "Detailed project description for Film Stack.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Covidtrax",
        ShortDesc: "Covidtrax project description.",
        Desc: "Detailed project description for Covidtrax.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Climate",
        ShortDesc: "Climate project description.",
        Desc: "Detailed project description for Climate.",
        Logo: MockLogo,
        Shot: MockShot,
        Mockup: MockMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://your-project-link.com",
        Source: "https://github.com/kiernan-dev/your-project",
        Tech: [TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Feature 1",
                description: "Description of your first feature."
            },
            {
                title: "Feature 2",
                description: "Description of your second feature."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    }
]