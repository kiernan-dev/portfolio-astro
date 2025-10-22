import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon, ReactQueryIcon, EdgeStoreIcon
} from "../assets/Icons"

// Project mockup images
import ProjVenmapMockup from "../assets/webp/proj-venmap.webp"
import ProjKeygenMockup from "../assets/webp/proj-keygen.webp"
import ProjCardographyMockup from "../assets/webp/proj-cardography.webp"
import ProjColorstackMockup from "../assets/webp/proj-colorstack.webp"
import ProjMemoriumMockup from "../assets/webp/proj-memorium.webp"
import ProjDockerpimpMockup from "../assets/webp/proj-dockerpimp.webp"
import ProjHealthwiseMockup from "../assets/webp/proj-healthwise.webp"
import ProjStorybookMockup from "../assets/webp/proj-storybook.webp"
// Project thumbnail images
import ProjVenmapThumb from "../assets/png/proj-venmap.png"
import ProjKeygenThumb from "../assets/png/proj-keygen.png"
import ProjCardographyThumb from "../assets/png/proj-cardography.png"
import ProjColorstackThumb from "../assets/png/proj-colorstack.png"
import ProjMemoriumThumb from "../assets/png/proj-memorium.png"
import ProjDockerpimpThumb from "../assets/png/proj-dockerpimp.png"
import ProjHealthwiseThumb from "../assets/png/proj-healthwise.png"
import ProjStorybookThumb from "../assets/png/proj-storybook.png"

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
}

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
        Name: "VentureMap",
        ShortDesc: "AI-powered business plan generator",
        Desc: "An AI-powered business planning tool that generates comprehensive business plans and pitch decks. The intelligent assistant maintains full context awareness across all your documents and provides actionable insights to help refine your strategy based on your specific business model and market.",
        Logo: ReactIcon,
        Shot: ProjVenmapThumb,
        Mockup: ProjVenmapMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://venmap.kiernan.studio",
        Source: "https://github.com/kiernan-dev/venture-map",
        Tech: [TechInfo.Vite, TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "AI-Powered Business Planning",
                description: "Generate comprehensive business plans and pitch decks using multiple AI providers including Claude, OpenAI, and Gemini with intelligent fallback mechanisms."
            },
            {
                title: "Interactive Chat Assistant",
                description: "Real-time Q&A assistant with voice input support that maintains full context awareness across all your documents and provides actionable business insights."
            },
            {
                title: "Multiple Business Templates",
                description: "Choose from various business templates including Startup, SaaS, E-commerce, Non-profit, and custom templates tailored to your specific business model."
            },
            {
                title: "Multi-Format Export",
                description: "Export your business plans in multiple formats including PDF, Google Docs, Notion, PowerPoint, and Word for seamless sharing and presentation."
            },
            {
                title: "Modern UI/UX",
                description: "Responsive design with dark/light mode support and glass morphism visual effects that provide a seamless experience across all devices."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Key Generator",
        ShortDesc: "Security key generation platform",
        Desc: "A powerful, production-ready key generation platform for developers and security professionals, featuring multiple algorithms and secure client-side generation, built with React, TypeScript, and Tailwind CSS.",
        Logo: ReactIcon,
        Shot: ProjKeygenThumb,
        Mockup: ProjKeygenMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://keygen.kiernan.studio",
        Source: "https://github.com/kiernan-dev/keygen",
        Tech: [TechInfo.Vite, TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "11 Secure Key Generators",
                description: "Generate API keys, passwords, JWTs, UUIDs, and more using Web Crypto API with 100% client-side generation for complete privacy."
            },
            {
                title: "Cryptographically Secure",
                description: "All keys are generated using cryptographically secure random algorithms with no data transmission, ensuring maximum security."
            },
            {
                title: "Multiple Generator Types",
                description: "Includes Secret Key, API Key, Password, JWT Secret, UUID, Random String, Hex Color, Base64, Alphanumeric, Numeric, and MAC Address generators."
            },
            {
                title: "Customizable Options",
                description: "Each generator offers customizable options including character sets, formats, and length specifications to meet your exact requirements."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Cardography",
        ShortDesc: "Visual Journey Thru Design History",
        Desc: "Cardography is an interactive web showcase featuring over 200 design movements and themes from 1850-2030. This project presents design history through an engaging card-based interface with filtering, animation, and detailed information about each design movement.",
        Logo: HtmlIcon,
        Shot: ProjCardographyThumb,
        Mockup: ProjCardographyMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://cardography.kiernan.studio",
        Source: "https://github.com/kiernan-dev/cardography",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript],
        features: [
            {
                title: "217 Design Movements",
                description: "Explore comprehensive design history from 1850-2030 featuring movements across 15 categories from prestigious archives like AIGA, Bauhaus-Archiv, and Cooper Hewitt Smithsonian."
            },
            {
                title: "Interactive Card Interface",
                description: "Engaging flip interactions reveal detailed movement information with smooth animations and transitions optimized for both mobile and desktop."
            },
            {
                title: "Smart Filtering System",
                description: "Filter design movements by colors and design systems with intuitive controls for discovering related movements and themes."
            },
            {
                title: "Zero Dependencies",
                description: "Built with vanilla HTML5, CSS3, and JavaScript using JSON-based theme library with no build process required for maximum performance."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "ColorStack",
        ShortDesc: "Color palette generator",
        Desc: "A powerful and intuitive color palette generator for designers and developers. Create, explore, and export beautiful color schemes with ease.",
        Logo: ReactIcon,
        Shot: ProjColorstackThumb,
        Mockup: ProjColorstackMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://colorstack.kiernan.studio",
        Source: "https://github.com/kiernan-dev/colorstack",
        Tech: [TechInfo.Vite, TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "Palette Generation",
                description: "Generate beautiful color palettes with intuitive controls and real-time preview for designers and developers."
            },
            {
                title: "Multiple Export Formats",
                description: "Export palettes in various formats including CSS, SCSS, JSON, and more for seamless integration into your projects."
            },
            {
                title: "Contrast Checker",
                description: "Built-in contrast checker tool ensures accessibility compliance with WCAG guidelines for better user experience."
            },
            {
                title: "Gradient Maker & Trending Palettes",
                description: "Create custom gradients and explore trending color combinations with advanced color theory tools and community-driven palette collections."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Memorium",
        ShortDesc: "AI-powered memorial platform",
        Desc: "A compassionate web application for creating memorial content including eulogies, condolence messages, tribute walls, and QR codes for sharing memories.",
        Logo: AstroIcon,
        Shot: ProjMemoriumThumb,
        Mockup: ProjMemoriumMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://memorium.kiernan.studio",
        Source: "https://github.com/kiernan-dev/memorium",
        Tech: [TechInfo.Astro, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "AI Eulogy Generator",
                description: "Create heartfelt tributes with AI assistance that helps craft meaningful memorial content during difficult times."
            },
            {
                title: "Condolence Message Creator",
                description: "Express sympathy with thoughtful words using AI-guided support for writing compassionate condolence messages."
            },
            {
                title: "Digital Tribute Wall",
                description: "Share memories and condolences in a beautiful digital space designed for remembrance and community support."
            },
            {
                title: "QR Code Memory Sharing",
                description: "Generate Share-a-Memory QR codes for easy memory sharing at memorial services and gatherings."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "DockerPimp",
        ShortDesc: "Docker commands companion",
        Desc: "A modern Docker commands companion tool with search, favorites, and copy-to-clipboard functionality.",
        Logo: NextIcon,
        Shot: ProjDockerpimpThumb,
        Mockup: ProjDockerpimpMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://dockerpimp.kiernan.studio",
        Source: "https://github.com/kiernan-dev/docker-pimp",
        Tech: [TechInfo.Next, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "100+ Docker Commands",
                description: "Comprehensive collection of Docker commands organized by categories including Basic, Images, Containers, Networks, and more."
            },
            {
                title: "Smart Search & Favorites",
                description: "Powerful search functionality with persistent favorites system using localStorage for quick access to your most-used commands."
            },
            {
                title: "One-Click Copy",
                description: "Copy commands and examples to clipboard instantly with automatic theme detection supporting both dark and light modes."
            },
            {
                title: "Categorized Organization",
                description: "Commands organized into logical categories with popular commands like docker run, docker ps, docker build, and docker-compose highlighted."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "HealthWise",
        ShortDesc: "AI-powered health assistant",
        Desc: "A React-based natural health assistant that helps users track symptoms, discover natural remedies, and gain insights into their wellness journey. Features an AI-powered chat interface, comprehensive symptom tracking, and personalized health insights.",
        Logo: ReactIcon,
        Shot: ProjHealthwiseThumb,
        Mockup: ProjHealthwiseMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://healthwise.kiernan.studio",
        Source: "https://github.com/kiernan-dev/healthwise",
        Tech: [TechInfo.Vite, TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "AI Health Assistant",
                description: "Personalized health recommendations with natural language symptom descriptions and real-time streaming AI responses supporting file and image uploads."
            },
            {
                title: "Comprehensive Symptom Tracking",
                description: "Log symptoms with severity ratings (1-10), track potential triggers, and store data persistently with AI-powered pattern analysis."
            },
            {
                title: "Visual Health Insights",
                description: "Interactive trend charts and graphs with pattern recognition for health correlations, progress tracking, and AI-generated personalized reports."
            },
            {
                title: "Natural Remedies Database",
                description: "Evidence-based treatment recommendations with detailed safety information, effectiveness ratings, and interactive remedy cards focused on natural wellness."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "StoryBook",
        ShortDesc: "AI-generated stories",
        Desc: "An interactive web application for creating personalized children's stories with AI-generated content and illustrations.",
        Logo: ReactIcon,
        Shot: ProjStorybookThumb,
        Mockup: ProjStorybookMockup,
        Theme: "#6366f1",
        Status: "completed",
        Link: "https://storybook.kiernan.studio",
        Source: "https://github.com/kiernan-dev/storybook",
        Tech: [TechInfo.Vite, TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS],
        features: [
            {
                title: "AI Story Generation",
                description: "Create complete personalized children's stories by simply describing what you want with genre selection and age-appropriate content customization."
            },
            {
                title: "Custom Illustrations",
                description: "Generate custom images for each chapter with adaptive visual content that perfectly matches your story narrative and characters."
            },
            {
                title: "Interactive Story Editing",
                description: "Edit and customize AI-generated stories with intuitive tools for personalizing characters, plot points, and story elements."
            },
            {
                title: "Y2K-Inspired Design",
                description: "Enjoy a unique Y2K-themed interface with colorful gradients, mobile-friendly design, and dark/light mode for an engaging storytelling experience."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    }
]