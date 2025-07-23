import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechFlow Solutions',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      content: `Adarsh is a rare find in the tech world. Instead of managing 5 different contractors for our e-commerce platform, we had one person who handled everything from the React frontend to the AI recommendation engine. The project was delivered 3 months ahead of schedule and saved us over $40,000 in coordination costs.`,
      project: 'E-commerce Platform with AI',
      technologies: ['React', 'Node.js', 'AI/ML', 'AWS'],
      results: '300% increase in conversion rate',
      linkedinUrl: '#',
      verified: true
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Founder & CEO',
      company: 'HealthTech Innovations',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      content: `Working with Adarsh was a game-changer for our healthcare startup. He built our entire telemedicine platform - from the React Native mobile app to the HIPAA-compliant backend infrastructure. His understanding of both technical requirements and healthcare regulations was impressive. One developer, infinite possibilities indeed!`,
      project: 'Telemedicine Mobile Platform',
      technologies: ['React Native', 'Node.js', 'WebRTC', 'HIPAA'],
      results: '50,000+ active users in 6 months',
      linkedinUrl: '#',
      verified: true
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Product Manager',
      company: 'FinTech Pro',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      content: `Adarsh delivered our DeFi trading platform with smart contracts, React frontend, and real-time analytics dashboard. What would have required a team of 6 specialists, he handled single-handedly. The attention to security, user experience, and performance was exceptional. Our platform now handles $10M+ in monthly trading volume.`,
      project: 'DeFi Trading Platform',
      technologies: ['Solidity', 'React', 'Web3.js', 'Analytics'],
      results: '$10M+ monthly trading volume',
      linkedinUrl: '#',
      verified: true
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Technical Director',
      company: 'AI Dynamics Corp',
      avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
      rating: 5,
      content: `We needed someone who could bridge the gap between AI/ML and web development. Adarsh built our entire content generation platform with custom GPT integration, React dashboard, and scalable backend. His ability to understand complex AI concepts and translate them into user-friendly interfaces is remarkable.`,
      project: 'AI Content Generation Platform',
      technologies: ['Python', 'OpenAI API', 'React', 'FastAPI'],
      results: '1M+ content pieces generated',
      linkedinUrl: '#',
      verified: true
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'VP of Engineering',
      company: 'CloudScale Systems',
      avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
      rating: 5,
      content: `Adarsh transformed our entire development process. He migrated our legacy system to a modern React/Node.js stack, implemented CI/CD pipelines, and set up AWS infrastructure. Having one person who understands the full technology stack eliminated all the integration headaches we used to face with multiple contractors.`,
      project: 'Legacy System Modernization',
      technologies: ['React', 'Node.js', 'AWS', 'DevOps'],
      results: '70% reduction in deployment time',
      linkedinUrl: '#',
      verified: true
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Startup Founder',
      company: 'EduTech Solutions',
      avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
      rating: 5,
      content: `As a non-technical founder, I was overwhelmed by the complexity of building our learning management system. Adarsh not only built the entire platform but also educated me about the technical decisions. His ability to communicate complex concepts in simple terms while delivering exceptional code quality is unmatched.`,
      project: 'Learning Management System',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Video Streaming'],
      results: '10,000+ students enrolled',
      linkedinUrl: '#',
      verified: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Client{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Success Stories
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how CTOs and technical leaders transformed their projects 
            by choosing versatility over complexity. Real results from real clients.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 component-shadow"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={32} className="text-primary" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg md:text-xl text-foreground text-center mb-8 leading-relaxed">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Project Details */}
              <div className="bg-surface rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Project</h4>
                    <p className="text-muted-foreground mb-4">{currentTestimonial.project}</p>
                    
                    <h4 className="font-semibold text-foreground mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentTestimonial.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Results Achieved</h4>
                    <div className="flex items-center space-x-2 bg-success/10 rounded-lg p-3">
                      <Icon name="TrendingUp" size={20} className="text-success" />
                      <span className="text-success font-medium">{currentTestimonial.results}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {currentTestimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <h4 className="font-semibold text-foreground">{currentTestimonial.name}</h4>
                  <p className="text-muted-foreground">{currentTestimonial.role}</p>
                  <p className="text-primary font-medium">{currentTestimonial.company}</p>
                </div>
                
                <button
                  onClick={() => window.open(currentTestimonial.linkedinUrl, '_blank')}
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                >
                  <Icon name="Linkedin" size={20} className="text-primary" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors component-shadow"
          >
            <Icon name="ChevronLeft" size={20} className="text-foreground" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors component-shadow"
          >
            <Icon name="ChevronRight" size={20} className="text-foreground" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-muted hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name={isAutoPlaying ? 'Pause' : 'Play'} size={16} />
            <span className="text-sm">{isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;