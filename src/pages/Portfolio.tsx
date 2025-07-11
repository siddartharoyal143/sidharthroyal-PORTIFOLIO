import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, Twitter, Download, Code, Palette, Database, Globe, ChevronDown, Send, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import heroBackground from '@/assets/hero-bg.jpg';
import aiProjectImage from '@/assets/ai-project.jpg';
import taskProjectImage from '@/assets/task-project.jpg';
import ecommerceProjectImage from '@/assets/ecommerce-project.jpg';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  const skills = [
    { name: 'Python', level: 90, icon: Code },
    { name: 'JavaScript', level: 85, icon: Code },
    { name: 'HTML/CSS', level: 95, icon: Globe },
    { name: 'React', level: 88, icon: Code },
    { name: 'Java', level: 80, icon: Code },
    { name: 'Firebase', level: 85, icon: Database },
    { name: 'MongoDB', level: 82, icon: Database },
    { name: 'Node.js', level: 78, icon: Code },
    { name: 'UI/UX Design', level: 90, icon: Palette },
    { name: 'Git', level: 85, icon: Code }
  ];

  const projects = [
    {
      title: 'AI Portfolio Assistant',
      description: 'An intelligent portfolio website with AI-powered chatbot for visitor interactions',
      tech: ['React', 'Python', 'OpenAI API', 'Firebase'],
      image: aiProjectImage,
      link: '#',
      github: '#'
    },
    {
      title: 'Smart Task Manager',
      description: 'A comprehensive task management system with real-time collaboration features',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: taskProjectImage,
      link: '#',
      github: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with advanced filtering and payment integration',
      tech: ['React', 'Firebase', 'Stripe API', 'Tailwind CSS'],
      image: ecommerceProjectImage,
      link: '#',
      github: '#'
    }
  ];

  const education = [
    {
      year: '2023-2027',
      degree: 'Bachelor of Technology',
      institution: 'XYZ University',
      field: 'Computer Science & Engineering',
      gpa: '8.5/10'
    },
    {
      year: '2021-2023',
      degree: 'Higher Secondary',
      institution: 'ABC School',
      field: 'Science (PCM)',
      gpa: '92%'
    }
  ];

  const experiences = [
    {
      year: '2024',
      role: 'Frontend Developer Intern',
      company: 'Tech Startup Inc.',
      description: 'Developed responsive web applications using React and modern JavaScript frameworks'
    },
    {
      year: '2023',
      role: 'UI/UX Design Intern',
      company: 'Creative Agency',
      description: 'Designed user interfaces for mobile and web applications using Figma and Adobe Creative Suite'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">MSR</div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="hover:bg-primary/20"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="container mx-auto px-6 text-center z-10">
          <div className="slide-in-left">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">M SIDDHARTHA</span>
              <br />
              <span className="gradient-text">ROYAL</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-muted-foreground">
              Developer & Designer
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto text-muted-foreground">
              Crafting digital experiences through innovative development and creative design solutions
            </p>
          </div>
          
          <div className="slide-in-right flex flex-wrap justify-center gap-6 mb-12">
            <Button className="gradient-bg hover-lift group">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              siddhartha@example.com
            </Button>
            <Button variant="outline" className="hover-lift group border-primary/50">
              <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              +91 98765 43210
            </Button>
            <Button variant="outline" className="hover-lift group border-primary/50">
              <MapPin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Hyderabad, India
            </Button>
          </div>

          <div className="fade-in-up flex justify-center gap-6">
            <Button size="icon" variant="outline" className="hover-lift glow-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="hover-lift glow-secondary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="hover-lift glow-accent">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-primary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h3 className="text-2xl font-semibold mb-6">Full Stack Developer & UI/UX Designer</h3>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                I'm a passionate developer and designer with expertise in modern web technologies and creative design solutions. 
                Currently pursuing my B.Tech in Computer Science, I combine technical skills with creative vision to build 
                exceptional digital experiences.
              </p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                With hands-on experience through internships at tech startups and creative agencies, I specialize in 
                frontend development, UI/UX design, and full-stack web applications. I'm always eager to learn new 
                technologies and take on challenging projects.
              </p>
              <Button className="gradient-bg hover-lift">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
            
            <div className="slide-in-right">
              <Card className="gradient-card hover-lift p-8">
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Experience</h4>
                      <p className="text-2xl font-bold">2+ Years</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Projects</h4>
                      <p className="text-2xl font-bold">15+ Completed</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Technologies</h4>
                      <p className="text-2xl font-bold">10+ Mastered</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Clients</h4>
                      <p className="text-2xl font-bold">8+ Happy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="gradient-card hover-lift group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <skill.icon className="h-8 w-8 text-primary mr-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="gradient-card hover-lift group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="gradient-bg flex-1">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Education & Experience</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="gradient-card hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="text-primary border-primary">
                          {edu.year}
                        </Badge>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{edu.gpa}</p>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.field}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Calendar className="mr-3 h-6 w-6 text-primary" />
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="gradient-card hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="text-primary border-primary">
                          {exp.year}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{exp.role}</h4>
                      <p className="text-primary mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="gradient-card hover-lift">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your Name" className="bg-background/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your.email@example.com" className="bg-background/50" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Input placeholder="Project Discussion" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell me about your project..." 
                      className="bg-background/50 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full gradient-bg hover-lift text-lg py-6">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold gradient-text mb-4">M SIDDHARTHA ROYAL</div>
          <p className="text-muted-foreground mb-6">Developer & Designer</p>
          <div className="flex justify-center gap-4 mb-6">
            <Button size="icon" variant="outline" className="hover-lift">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="hover-lift">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="hover-lift">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="hover-lift">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 M Siddhartha Royal. All rights reserved. Made with ❤️ and React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;