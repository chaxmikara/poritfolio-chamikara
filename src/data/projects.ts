export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    category: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Modern E-commerce Platform",
        description: "A full-stack e-commerce application built with Next.js, featuring product listings, shopping cart, and secure checkout functionality.",
        image: "/images/projects/ecommerce.jpg",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        githubUrl: "https://github.com/username/ecommerce-project",
        liveUrl: "https://ecommerce-demo.vercel.app",
        category: "Full-Stack",
        featured: true
    },
    {
        id: "2",
        title: "Finance Dashboard UI",
        description: "A responsive finance dashboard interface with data visualization, analytics, and user management screens.",
        image: "/images/projects/finance-dashboard.jpg",
        tags: ["React", "TypeScript", "D3.js", "Styled Components", "Redux"],
        githubUrl: "https://github.com/username/finance-dashboard",
        liveUrl: "https://finance-dashboard-demo.netlify.app",
        category: "Frontend"
    },
    {
        id: "3",
        title: "Health & Fitness App Design",
        description: "A comprehensive UI/UX design for a health and fitness mobile application focused on workout tracking and nutrition planning.",
        image: "/images/projects/fitness-app.jpg",
        tags: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
        githubUrl: "https://github.com/username/fitness-app-design",
        liveUrl: "https://www.figma.com/file/example/fitness-app",
        category: "UI/UX Design"
    },
    {
        id: "4",
        title: "Task Management System",
        description: "A collaborative task management application with real-time updates, team assignments, and progress tracking.",
        image: "/images/projects/task-management.jpg",
        tags: ["Angular", "Firebase", "RxJS", "SCSS", "NgRx"],
        githubUrl: "https://github.com/username/task-management",
        liveUrl: "https://task-management-demo.web.app",
        category: "Full-Stack"
    },
    {
        id: "5",
        title: "AI Content Generator",
        description: "An AI-powered content generation tool that creates blog posts, social media content, and marketing copy based on user inputs.",
        image: "/images/projects/ai-content.jpg",
        tags: ["Python", "Flask", "OpenAI API", "React", "Docker"],
        githubUrl: "https://github.com/username/ai-content-generator",
        liveUrl: "https://ai-content-generator.herokuapp.com",
        category: "Software Dev",
        featured: true
    },
    {
        id: "6",
        title: "Educational Platform Interface",
        description: "A comprehensive UI/UX design for an online learning platform with course navigation, video lessons, and assessment features.",
        image: "/images/projects/education-platform.jpg",
        tags: ["Adobe XD", "UI/UX", "Wireframing", "User Research"],
        githubUrl: "https://github.com/username/education-ui",
        liveUrl: "https://www.behance.net/gallery/example/education-platform",
        category: "UI/UX Design"
    }
];

export const getProjectsByCategory = (category: string) => {
    if (category === "All Projects") {
        return projects;
    }
    return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
    return projects.filter(project => project.featured);
};
