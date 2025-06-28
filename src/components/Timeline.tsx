
import { motion } from 'framer-motion';

const timelineData = [
  {
    title: "Rapid Prototyping (1-3 Days)",
    description: "MVP development, proof of concepts, landing pages, and basic CRUD applications",
    projects: ["Landing Pages", "API Prototypes", "UI/UX Mockups", "Database Design"],
    icon: "⚡"
  },
  {
    title: "Sprint Development (1 Week)",
    description: "Feature-complete applications with authentication, database integration, and deployment",
    projects: ["Web Apps", "REST APIs", "Admin Dashboards", "Mobile Apps"],
    icon: "🚀"
  },
  {
    title: "Production Ready (2-3 Weeks)", 
    description: "Scalable applications with testing, CI/CD, monitoring, and documentation",
    projects: ["SaaS Platforms", "E-commerce Sites", "Real-time Apps", "AI Integration"],
    icon: "🏗️"
  },
  {
    title: "Enterprise Solutions (1 Month)",
    description: "Complex systems with microservices, advanced features, and enterprise integrations",
    projects: ["Multi-tenant SaaS", "Blockchain Apps", "AR/VR Experiences", "IoT Platforms"],
    icon: "🏢"
  }
];

export const Timeline = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Development Timeline</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          From rapid prototypes to enterprise solutions - here's what we can accomplish together.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
        
        {timelineData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 group">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {item.description}  
                </p>
                <div className="flex flex-wrap gap-2 justify-start">
                  {item.projects.map((project) => (
                    <span 
                      key={project}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg animate-glow" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
