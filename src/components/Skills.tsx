
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Three.js", "Next.js"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "Django", "FastAPI", "Express.js", "GraphQL", "REST APIs"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Capacitor"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Database & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase", "Prisma"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "AI & Emerging Tech",
    skills: ["OpenAI APIs", "Machine Learning", "Blockchain", "AR/VR", "IoT", "Web3"],
    color: "from-indigo-500 to-purple-500"
  }
];

export const Skills = () => {
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
          <span className="gradient-text">Technology Stack</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Versatile skill set spanning multiple domains - from rapid prototyping to enterprise solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-6 h-6 bg-white rounded opacity-80" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
