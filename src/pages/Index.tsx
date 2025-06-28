
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Timeline } from '@/components/Timeline';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="projects" className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <Projects />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="timeline" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
          <Timeline />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="py-8 px-6 text-center border-t border-border/50">
        <p className="text-gray-400">
          © 2024 Creative Developer. Built with passion, powered by innovation.
        </p>
      </footer>
    </div>
  );
};

export default Index;
