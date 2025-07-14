import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, Twitter, Download, Code, Palette, Database, Globe, ChevronDown, Send, Calendar, Award, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import TypingAnimation from '@/components/TypingAnimation';
import FloatingTechIcons from '@/components/FloatingTechIcons';
import TiltCard from '@/components/TiltCard';
import heroBackground from '@/assets/hero-bg.jpg';
import aiProjectImage from '@/assets/ai-project.jpg';
import taskProjectImage from '@/assets/task-project.jpg';
import ecommerceProjectImage from '@/assets/ecommerce-project.jpg';
const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const {
    toast
  } = useToast();
  const {
    scrollYProgress
  } = useScroll();
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const heroInView = useInView(heroRef, {
    once: true,
    amount: 0.3
  });
  const aboutInView = useInView(aboutRef, {
    once: true,
    amount: 0.3
  });
  const skillsInView = useInView(skillsRef, {
    once: true,
    amount: 0.3
  });
  const projectsInView = useInView(projectsRef, {
    once: true,
    amount: 0.3
  });

  // Parallax transforms
  const yHero = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yFloating = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);
  const skills = [{
    name: 'Python',
    level: 90,
    icon: Code,
    color: 'from-yellow-400 to-yellow-600'
  }, {
    name: 'JavaScript',
    level: 85,
    icon: Code,
    color: 'from-yellow-300 to-yellow-500'
  }, {
    name: 'React',
    level: 88,
    icon: Code,
    color: 'from-blue-400 to-blue-600'
  }, {
    name: 'HTML/CSS',
    level: 95,
    icon: Globe,
    color: 'from-orange-400 to-red-500'
  }, {
    name: 'Java',
    level: 80,
    icon: Code,
    color: 'from-red-400 to-red-600'
  }, {
    name: 'Firebase',
    level: 85,
    icon: Database,
    color: 'from-orange-400 to-yellow-500'
  }, {
    name: 'MongoDB',
    level: 82,
    icon: Database,
    color: 'from-green-400 to-green-600'
  }, {
    name: 'Node.js',
    level: 78,
    icon: Code,
    color: 'from-green-400 to-green-600'
  }, {
    name: 'UI/UX Design',
    level: 90,
    icon: Palette,
    color: 'from-purple-400 to-pink-500'
  }, {
    name: 'Git',
    level: 85,
    icon: Code,
    color: 'from-gray-400 to-gray-600'
  }];
  const projects = [{
    title: 'AI Portfolio Assistant',
    description: 'An intelligent portfolio website with AI-powered chatbot for visitor interactions and personalized content recommendations.',
    tech: ['React', 'Python', 'OpenAI API', 'Firebase', 'Framer Motion'],
    image: aiProjectImage,
    link: '#',
    github: '#',
    featured: true
  }, {
    title: 'Smart Task Manager',
    description: 'A comprehensive task management system with real-time collaboration, advanced analytics, and intelligent scheduling.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis'],
    image: taskProjectImage,
    link: '#',
    github: '#',
    featured: true
  }, {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced filtering, AI-powered recommendations, and seamless payment integration.',
    tech: ['React', 'Firebase', 'Stripe API', 'Tailwind CSS', 'PWA'],
    image: ecommerceProjectImage,
    link: '#',
    github: '#',
    featured: false
  }];
  const education = [{
    year: '2022–2025',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Sri Venkateshwara University',
    field: 'Computer Applications',
    gpa: '7.3 CGPA',
    achievements: ['Best Final Year Project', 'Leadership']
  }, {
    year: '2020–2022',
    degree: 'Intermediate',
    institution: 'Space Junior College',
    field: 'MPC (Maths, Physics, Chemistry)',
    gpa: '60%',
    achievements: ['Topper in Physics']
  }];
  const experiences = [{
    year: '2024',
    role: 'Python Intern',
    company: 'Divith Techno Solutions',
    description: 'Developed Python applications and automation scripts for data processing and web scraping. Worked on backend development using Django and Flask frameworks.',
    skills: ['Python', 'Django', 'Flask', 'Data Processing', 'Web Scraping']
  }, {
    year: '2024',
    role: 'Data Analytics Intern',
    company: 'Divith Techno Solutions',
    description: 'Analyzed large datasets to extract meaningful insights and trends. Created data visualizations and reports using Python libraries and statistical tools.',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Visualization']
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };
  const slideInLeft = {
    hidden: {
      x: -100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };
  const slideInRight = {
    hidden: {
      x: 100,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon."
    });
  };
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <motion.nav className="fixed top-0 w-full z-50 glass-nav" initial={{
      y: -100
    }} animate={{
      y: 0
    }} transition={{
      type: "spring",
      stiffness: 100,
      damping: 20
    }}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div className="text-2xl font-bold gradient-text" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            MSR
          </motion.div>
          <div className="flex items-center gap-6">
            {['About', 'Skills', 'Projects', 'Contact'].map(item => <motion.a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors relative" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }}>
                {item}
                <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary" initial={{
              scaleX: 0
            }} whileHover={{
              scaleX: 1
            }} transition={{
              duration: 0.3
            }} />
              </motion.a>)}
            <motion.div whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }}>
              <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)} className="glass-button">
                <motion.div animate={{
                rotate: isDarkMode ? 0 : 180
              }} transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}>
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Section - Portrait Image */}
            <motion.div initial={{
            x: -100,
            opacity: 0
          }} animate={heroInView ? {
            x: 0,
            opacity: 1
          } : {
            x: -100,
            opacity: 0
          }} transition={{
            duration: 0.6,
            ease: "easeOut"
          }} className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-96 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/lovable-uploads/d48e8edf-c848-404a-8d17-7a1a3ba1513c.png" alt="M Siddhartha Royal - Developer and Designer" className="w-full h-full object-center object-fill" />
                </div>
                {/* Optional gradient overlay for style */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Right Section - Text Content */}
            <motion.div initial={{
            x: 100,
            opacity: 0
          }} animate={heroInView ? {
            x: 0,
            opacity: 1
          } : {
            x: 100,
            opacity: 0
          }} transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2
          }} className="space-y-8 text-center lg:text-left">
              {/* Designer Name - Large Serif Typography */}
              <div className="space-y-2">
                <h1 className="text-5xl lg:text-7xl font-serif font-light leading-tight">
                  
                  <span className="block gradient-text text-center text-4xl my-px mx-0">M SIDDHARTHA ROYAL</span>
                </h1>
                
                {/* Role Title - Small Uppercase Sans-serif */}
                <p className="uppercase tracking-[0.3em] text-muted-foreground mt-4 mx-[85px] font-extrabold text-sm text-center">
                  DEVELOPER AND DESIGNER
                </p>
              </div>

              {/* Bio Paragraph */}
              <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
                <p className="leading-relaxed text-muted-foreground font-light text-base">As a Developer and Designer intern with experience in Python, Java, HTML, and C, you combine technical expertise with a strong eye for design. You’re skilled in crafting both functional and visually appealing solutions, using tools like Figma for design and GitHub for version control. Your technical toolkit also includes proficiency in MS Office, making you versatile in both development and design tasks. Your internship experience in Python has allowed you to build practical skills while refining your ability to collaborate, problem-solve, and create seamless user experiences.</p>
                
                {/* Contact Information */}
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Mail className="h-4 w-4" />
                    <span>SIDDARTHAROYAL143@GMAIL.com</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+91 9440369638</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Github className="h-4 w-4" />
                    <a href="https://github.com/siddartharoyal143" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      siddartharoyal143
                    </a>
                  </div>
                </div>
              </div>

              {/* Personal Logo/Icon in bottom-right */}
              <div className="flex justify-center lg:justify-end">
                <motion.div className="w-16 h-16 rounded-full glass-card flex items-center justify-center" whileHover={{
                scale: 1.1,
                rotate: 5
              }} transition={{
                duration: 0.3
              }}>
                  <Palette className="h-8 w-8 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }}>
          <ChevronDown className="h-8 w-8 text-primary" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-gradient-to-br from-muted/10 to-muted/20 relative">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" variants={slideInLeft} initial="hidden" animate={aboutInView ? "visible" : "hidden"}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft} initial="hidden" animate={aboutInView ? "visible" : "hidden"}>
              <h3 className="text-2xl font-semibold mb-6">Full Stack Developer & Creative Designer</h3>
              <motion.p className="text-lg mb-6 text-muted-foreground leading-relaxed" initial={{
              opacity: 0
            }} animate={aboutInView ? {
              opacity: 1
            } : {
              opacity: 0
            }} transition={{
              delay: 0.3
            }}>I'm a passionate developer and designer with expertise in modern web technologies and creative design solutions. Currently pursuing my degree bca Computer Applications , I combine technical skills with creative vision to build exceptional digital experiences that make a difference.</motion.p>
              <motion.p className="text-lg mb-8 text-muted-foreground leading-relaxed" initial={{
              opacity: 0
            }} animate={aboutInView ? {
              opacity: 1
            } : {
              opacity: 0
            }} transition={{
              delay: 0.5
            }}>
                With hands-on experience through internships at innovative tech companies and creative studios, I specialize in 
                frontend development, UI/UX design, and full-stack applications. I'm always eager to learn cutting-edge 
                technologies and tackle challenging projects that push boundaries.
              </motion.p>
              <motion.div initial={{
              scale: 0.8,
              opacity: 0
            }} animate={aboutInView ? {
              scale: 1,
              opacity: 1
            } : {
              scale: 0.8,
              opacity: 0
            }} transition={{
              delay: 0.7
            }}>
                <Button className="gradient-bg hover-lift group">
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div variants={slideInRight} initial="hidden" animate={aboutInView ? "visible" : "hidden"}>
              <div className="glass-card-premium glass-floating hover-lift p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                   {[{
                  label: "Experience",
                  value: "0 Years",
                  icon: Calendar
                }, {
                  label: "Projects",
                  value: "5",
                  icon: Code
                }, {
                  label: "Technologies",
                  value: "5",
                  icon: Cpu
                }, {
                  label: "Clients",
                  value: "12+",
                  icon: Award
                }].map(({
                  label,
                  value,
                  icon: Icon
                }, index) => <motion.div key={label} className="text-center glass-ripple p-4 rounded-xl" initial={{
                  scale: 0,
                  opacity: 0
                }} animate={aboutInView ? {
                  scale: 1,
                  opacity: 1
                } : {
                  scale: 0,
                  opacity: 0
                }} transition={{
                  delay: 0.3 + index * 0.1
                }} whileHover={{
                  scale: 1.05
                }}>
                      <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-primary mb-2">{label}</h4>
                      <p className="text-2xl font-bold gradient-text">{value}</p>
                    </motion.div>)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" variants={slideInLeft} initial="hidden" animate={skillsInView ? "visible" : "hidden"}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate={skillsInView ? "visible" : "hidden"}>
            {skills.map((skill, index) => <motion.div key={skill.name} variants={itemVariants}>
                <div className={`glass-card glass-morph-${index % 2 === 0 ? '1' : '2'} hover-lift group p-6 rounded-2xl glass-ripple`}>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4 pulse-glow`}>
                      <skill.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-semibold gradient-text">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-3 overflow-hidden glass-card">
                      <motion.div className={`h-full bg-gradient-to-r ${skill.color} rounded-full glow-primary`} initial={{
                    width: 0
                  }} animate={skillsInView ? {
                    width: `${skill.level}%`
                  } : {
                    width: 0
                  }} transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: "easeOut"
                  }} />
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 bg-gradient-to-br from-muted/10 to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" variants={slideInLeft} initial="hidden" animate={projectsInView ? "visible" : "hidden"}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate={projectsInView ? "visible" : "hidden"}>
            {projects.map((project, index) => <motion.div key={project.title} variants={itemVariants}>
                <TiltCard className="h-full">
                  <div className="glass-card hover-lift group overflow-hidden h-full rounded-2xl">
                    <div className="aspect-video overflow-hidden">
                      <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover" whileHover={{
                    scale: 1.1
                  }} transition={{
                    duration: 0.5
                  }} />
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.featured && <Badge variant="secondary" className="text-xs bg-gradient-primary text-white">
                            Featured
                          </Badge>}
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map(tech => <Badge key={tech} variant="outline" className="text-xs glass-button">
                            {tech}
                          </Badge>)}
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" className="gradient-bg flex-1 hover-lift">
                          <Globe className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="glass-button">
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Education & Experience</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.2,
                duration: 0.6
              }}>
                    <div className="glass-card hover-lift p-6 rounded-2xl">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="text-primary border-primary glass-button">
                          {edu.year}
                        </Badge>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{edu.gpa}</p>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{edu.degree}</h4>
                      <p className="text-primary mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mb-3">{edu.field}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map(achievement => <Badge key={achievement} variant="secondary" className="text-xs">
                            {achievement}
                          </Badge>)}
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <Calendar className="mr-3 h-6 w-6 text-primary" />
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.2,
                duration: 0.6
              }}>
                    <div className="glass-card hover-lift p-6 rounded-2xl">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="outline" className="text-primary border-primary glass-button">
                          {exp.year}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{exp.role}</h4>
                      <p className="text-primary mb-3">{exp.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>)}
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-muted/10 to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Work Together</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life with cutting-edge technology and creative design.
            </p>
          </motion.div>
          
          <motion.div className="max-w-2xl mx-auto" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }}>
            <div className="glass-card hover-lift p-8 rounded-2xl">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your Name" className="glass-button" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="glass-button" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Project Discussion" className="glass-button" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Tell me about your project and how we can collaborate..." className="glass-button min-h-[120px]" required />
                </div>
                <motion.div whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                  <Button type="submit" className="w-full gradient-bg hover-lift text-lg py-6">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 glass-nav">
        <div className="container mx-auto px-6 text-center">
          <motion.div className="text-2xl font-bold gradient-text mb-4" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }}>
            M SIDDHARTHA ROYAL
          </motion.div>
          <p className="text-muted-foreground mb-6">Full Stack Developer & Creative Designer</p>
          <motion.div className="flex justify-center gap-4 mb-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {[{
            icon: Github,
            href: "#"
          }, {
            icon: Linkedin,
            href: "#"
          }, {
            icon: Twitter,
            href: "#"
          }, {
            icon: Mail,
            href: "mailto:siddhartha@example.com"
          }].map(({
            icon: Icon,
            href
          }, index) => <motion.div key={index} variants={itemVariants}>
                <Button size="icon" variant="outline" className="glass-button hover-lift" asChild>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>)}
          </motion.div>
          <motion.p className="text-sm text-muted-foreground" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3
        }}>
            © 2024 M Siddhartha Royal. All rights reserved. Crafted with ❤️ and React.
          </motion.p>
        </div>
      </footer>
    </div>;
};
export default Portfolio;