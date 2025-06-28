
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, MessageCircle, Calendar, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
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
          <span className="gradient-text">Let's Build Together</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Ready to turn your ideas into reality? Whether it's a quick prototype or a comprehensive solution, 
          let's discuss your project and timeline.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your name" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="bg-background/50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <Input placeholder="Web App, Mobile App, SaaS, etc." className="bg-background/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Timeline</label>
                <Input placeholder="1 day, 1 week, 1 month..." className="bg-background/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project idea, requirements, and goals..."
                  rows={5}
                  className="bg-background/50"
                />
              </div>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">hello@developer.com</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Discord</h4>
                <p className="text-gray-400">developer#1234</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Calendar className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold">Schedule a Call</h4>
                <p className="text-gray-400">Book a free consultation</p>
              </div>
            </div>
          </Card>

          <div className="pt-8">
            <h4 className="text-lg font-semibold mb-4">Follow me</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-card/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-card/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-card/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
