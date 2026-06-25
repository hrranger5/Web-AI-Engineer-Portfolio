import { Project, Job, Education, Skill, Testimonial, Certification, Achievement } from './types';
import React from 'react';
import { Code, Database, Globe, Cpu, Server, Terminal, Layout } from 'lucide-react';

export const PROFILE = {
  name: "Hafsa Raja",
  title: "Web & AI Engineer | MERN Stack | AI Chatbots & Automation",
  subtext: "Seeking an internship or junior role to build scalable web & AI solutions. I combine clean code with real-world problem solving.",
  email: "hrranger555@gmail.com",
  phone: "+923284017137",
  linkedin: "https://www.linkedin.com/in/hafsa-raja-5224a8365/",
  github: "https://github.com/hrranger5",
  instagram: "https://www.instagram.com/webaitechexpert/",
  resumeLink: "https://drive.google.com/file/d/1pmYRVLEt4T6Y4GtpB_2v45xD-P_DVk1q/view?usp=sharing",
  profilePic: "https://lh3.googleusercontent.com/d/1g8TQHmlFHEbMQwF9oTjsAOrho8DUnlln",
  location: "Mandi Bahauddin, Punjab, Pakistan"
};

export const SKILLS: Skill[] = [
  {
    category: "Frontend Development",
    items: ["React.js", "TypeScript", "Tailwind CSS", "Angular", "HTML5/CSS3", "Bootstrap"],
    icon: "Layout"
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express", "Flask (Python)", "RESTful APIs", "WebSocket", "PHP"],
    icon: "Server"
  },
  {
    category: "AI & Machine Learning",
    items: ["Google Gemini API", "NLP", "Dialogflow", "Computer Vision (OpenCV)", "Chatbots", "Scikit-learn"],
    icon: "Cpu"
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "MySQL", "Firebase", "Git/GitHub", "Docker", "Linux"],
    icon: "Database"
  }
];

export const EXPERIENCE: Job[] = [
  {
    company: "Code Craft",
    role: "Software Development Intern",
    period: "Oct 2025 – Jan 2026",
    type: "Internship",
    description: [
      "Developing full stack applications using Python and Flask with a focus on scalable architecture.",
      "Implementing RESTful APIs for seamless frontend-backend integration.",
      "Collaborating with cross-functional teams to deliver production-ready features."
    ]
  },
  {
    company: "Internee.pk",
    role: "Technical Intern",
    period: "Sept 2025 – Dec 2025",
    type: "Internship",
    description: [
      "Building AI-powered chatbots using Natural Language Processing techniques.",
      "Conducting data analysis to optimize application performance.",
      "Contributing to automated testing and CI/CD pipeline improvements."
    ]
  },
  {
    company: "Arch Technologies",
    role: "Software Engineering Intern",
    period: "Sept 2025 – Dec 2025",
    type: "Internship",
    description: [
      "Designed and implemented secure backend systems emphasizing cybersecurity best practices.",
      "Participated in code reviews and maintained technical documentation."
    ]
  },
  {
    company: "Academic Mentorship",
    role: "Final Year Project Advisor",
    period: "2023 – 2024",
    type: "Part-time / Community",
    description: [
      "Guided students from various colleges on their Final Year Projects (FYP), providing technical roadmaps for MERN & AI apps.",
      "Conducted code reviews and architectural planning sessions to ensure industry-standard delivery.",
      "Mentored students on debugging complex logic errors and deployment strategies."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Virtual University of Pakistan",
    degree: "BS Computer Science (M.Phil in progress)",
    period: "2021 – 2025"
  },
  {
    institution: "Government Associate Degree College",
    degree: "Intermediate in ICS",
    period: "2019 – 2021"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AI Agents & Automation",
    issuer: "Google / DeepLearning.AI",
    date: "2024",
    icon: "Cpu"
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    date: "2022",
    icon: "Network"
  },
  {
    title: "Motivational Speaker Award",
    issuer: "Regional Education Conference",
    date: "2023",
    icon: "Mic"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
    {
        title: "Academic Excellence",
        description: "Achieved A+ Grade in Chatbot Development & Web Design Final Projects.",
        icon: "Star",
        color: "text-amber-400"
    },
    {
        title: "English Proficiency",
        description: "Professional working proficiency enabling seamless global technical communication.",
        icon: "Globe",
        color: "text-emerald-500"
    }
];

export const PROJECTS: Project[] = [
  {
    title: "HR.AIverse - AI HR System",
    description: "A modern platform for AI-powered Human Resources solutions.",
    tags: ["React", "TypeScript", "Tailwind", "AI Integration"],
    githubLink: "https://github.com/hrranger5/HR.AIverse-AI-Powered-HR",
    category: "Full Stack",
    featured: true,
    problemStatement: "Recruitment processes are slow and manual, leading to candidate drop-off.",
    challenges: "Minimizing latency when streaming Gemini API responses for real-time candidate screening interviews.",
    myRole: "Built the responsive frontend and integrated candidate screening workflows.",
    date: "2025-02-01",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" // Office/Team meeting
  },
  {
    title: "Trivia Host AI",
    description: "AI Powered Trivia Challenge application using WebSearch and MediaStream APIs.",
    tags: ["Angular", "Google API", "TypeScript", "Tailwind"],
    githubLink: "https://github.com/hrranger5/Trivia-Host-",
    category: "AI",
    featured: true,
    problemStatement: "Creating engaging, infinite trivia content manually is time-consuming and static.",
    challenges: "Synchronizing Web Speech API audio output with the dynamic question generation to prevent race conditions.",
    myRole: "Integrated Google Search grounding to generate real-time, fact-checked questions.",
    date: "2025-01-15",
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?auto=format&fit=crop&q=80&w=800" // 3D Question Block
  },
  {
    title: "Intern Management System",
    description: "Full-stack CRUD app to manage profiles, tasks, and performance.",
    tags: ["Node.js", "Express", "Angular", "MongoDB", "RxJS"],
    githubLink: "https://github.com/hrranger5/Inter-Management-System",
    category: "Full Stack",
    featured: true,
    problemStatement: "Managing intern tasks via spreadsheets leads to data loss and confusion.",
    challenges: "Designing a flexible MongoDB schema to handle thousands of daily task updates and performance metrics.",
    myRole: "Architected the REST API and real-time dashboard visualization.",
    date: "2024-12-10",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" // Dashboard/Management team
  },
  {
    title: "Iris Flower Classification",
    description: "Explores Generative AI enhancing traditional ML classification with creative visualization.",
    tags: ["Python", "Flask", "Gemini API", "HTML/CSS"],
    githubLink: "https://github.com/hrranger5/Iris-Flower-Classification-AI",
    category: "AI",
    featured: false,
    problemStatement: "Traditional ML outputs are often hard for non-technical users to interpret visually.",
    challenges: "Optimizing the Flask backend to serve ML predictions and Gemini explanations without blocking the main thread.",
    date: "2024-11-20",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800" // Lab/Scientific Analysis
  },
  {
    title: "Project Pilot",
    description: "Collaborative project management tool inspired by Trello.",
    tags: ["TypeScript", "WebSocket", "React", "API"],
    githubLink: "https://github.com/hrranger5/Project-Pilot",
    category: "Web",
    featured: false,
    problemStatement: "Remote teams struggle with task synchronization without real-time updates.",
    challenges: "Managing WebSocket connection drops and ensuring state reconciliation for multiple concurrent users.",
    date: "2024-10-05",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800" // Kanban Board
  },
  {
    title: "SocialConnect",
    description: "Modern social media app for sharing posts and connecting users.",
    tags: ["React", "Tailwind", "API", "TypeScript"],
    githubLink: "https://github.com/hrranger5/socialconnect",
    category: "Web",
    featured: false,
    problemStatement: "Existing social platforms are bloated; users needed a lightweight, fast alternative.",
    challenges: "Implementing efficient infinite scroll and image optimization strategies to maintain 60fps performance.",
    date: "2024-09-15",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" // Mobile Social Apps
  },
  {
    title: "Emotion Detector",
    description: "Flask text processor with dark mode and sentiment analysis.",
    tags: ["Python", "NLP", "Flask", "Bootstrap"],
    githubLink: "https://github.com/hrranger5/emotion_detector",
    category: "AI",
    featured: false,
    problemStatement: "Raw text feedback is difficult to quantify without automated sentiment scoring.",
    challenges: "Fine-tuning the NLP model integration to correctly detect sarcasm and subtle emotional nuances.",
    date: "2024-08-01",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800" // Artificial Intelligence Face
  },
  {
    title: "Internship Cert Automation",
    description: "Auto-generates PDF certificates and emails them.",
    tags: ["Node.js", "pdf-lib", "Nodemailer"],
    githubLink: "https://github.com/hrranger5/Internship-Certificate-Automation",
    category: "Full Stack",
    featured: false,
    problemStatement: "Manually designing and emailing certificates to hundreds of interns is inefficient.",
    challenges: "Handling PDF generation memory limits when processing batches of 500+ certificates simultaneously.",
    date: "2024-07-20",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80&w=800" // Graduation/Diploma
  },
  {
    title: "AI Unemployment Analyzer",
    description: "Interactive tool using AI to analyze unemployment data from CSV.",
    tags: ["Python", "Flask", "Pandas", "Google GenAI"],
    githubLink: "https://github.com/hrranger5/AI-Unemployment-Data-Analyzer",
    category: "AI",
    featured: false,
    problemStatement: "Large datasets are overwhelming to analyze without natural language querying.",
    challenges: "Sanitizing diverse CSV formats and handling missing data points to ensure accurate AI analysis results.",
    date: "2024-06-10",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" // Data Charts
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "James Carter",
    role: "Project Manager",
    company: "Freelance Client",
    content: "Hafsa built a custom Admin Panel Chatbot for us. It completely automated our internal support queries, reducing ticket volume by 40%. The integration was seamless and the code was incredibly clean.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Sarah Jenkins",
    role: "Senior Backend Lead",
    company: "Code Craft",
    content: "Hafsa showed incredible dedication during her internship. Her ability to grasp complex Python concepts and apply them to our backend architecture was impressive. She writes maintainable, production-ready code.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "David Chen",
    role: "Startup Founder",
    company: "InnovateAI",
    content: "We needed a chatbot that could handle complex context switching, and Hafsa delivered beyond expectations. The Gemini integration she built is robust and handles edge cases gracefully.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Emily Parker",
    role: "Engineering Manager",
    company: "TechStart Inc.",
    content: "Hafsa is one of those rare developers who communicates as well as she codes. She led our frontend migration initiative with maturity and technical depth well beyond her years.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Ali Khan",
    role: "BSCS Student",
    company: "University of Gujrat",
    content: "I was stuck on my Final Year Project for weeks. Hafsa guided me through the complex API integration logic and helped me debug my code. She is an amazing mentor who explains things very clearly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Fatima Noor",
    role: "Software Student",
    company: "UET",
    content: "Best guide for college projects! She helped our team understand the MERN stack architecture and deploy our app. We got an A+ thanks to her roadmap and code reviews.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];
