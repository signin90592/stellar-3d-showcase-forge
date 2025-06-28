
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "AI-Powered SaaS Platform",
    description: "A comprehensive SaaS solution with AI integration for automated workflow management. Built with React, Node.js, and OpenAI APIs.",
    image: "🤖",
    tags: ["React", "Node.js", "AI", "SaaS", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "E-Commerce Mobile App",
    description: "Cross-platform mobile application with real-time inventory, payment processing, and social features. Built with React Native and Firebase.",
    image: "📱",
    tags: ["React Native", "Firebase", "Stripe", "Redux", "iOS/Android"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Real-Time Dashboard",
    description: "Interactive analytics dashboard with real-time data visualization, custom charts, and export capabilities. Perfect for business intelligence.",
    image: "📊",
    tags: ["Vue.js", "D3.js", "WebSocket", "Python", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Blockchain DeFi Platform",
    description: "Decentralized finance platform with smart contracts, yield farming, and NFT marketplace. Built on Ethereum with Web3 integration.",
    image: "⛓️",
    tags: ["Solidity", "Web3.js", "Ethereum", "DeFi", "Smart Contracts"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "DevOps Automation Tool",
    description: "CI/CD pipeline automation tool with Docker containerization, Kubernetes orchestration, and monitoring dashboards.",
    image: "🔧",
    tags: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AR/VR Experience",
    description: "Immersive AR/VR application for virtual shopping experiences with 3D modeling and real-time interactions.",
    image: "🥽",
    tags: ["Unity", "C#", "ARCore", "ARKit", "3D Modeling"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          From rapid prototypes to production-ready applications, 
          here's a showcase of projects I can build within 1 day to 1 month timeframes.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};
