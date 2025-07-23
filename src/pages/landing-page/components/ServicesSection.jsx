import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: 'UI/UX Design',
      icon: 'Palette',
      color: 'from-pink-500 to-purple-600',
      description: 'User-centered design that converts visitors into customers',
      startingPrice: '$2,500',
      timeline: '2-3 weeks',
      deliverables: [
        'User Research & Personas',
        'Wireframes & Prototypes',
        'High-fidelity Designs',
        'Design System & Guidelines',
        'Responsive Design Assets',
        'Usability Testing Report'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
      features: [
        'Mobile-first approach',
        'Accessibility compliance',
        'Brand consistency',
        'Conversion optimization'
      ]
    },
    {
      id: 1,
      title: 'Full-Stack Development',
      icon: 'Code',
      color: 'from-blue-500 to-cyan-600',
      description: 'Complete web applications from frontend to backend',
      startingPrice: '$5,000',
      timeline: '4-8 weeks',
      deliverables: [
        'Responsive Frontend Application',
        'RESTful API Development',
        'Database Design & Setup',
        'Authentication & Security',
        'Performance Optimization',
        'Deployment & Documentation'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      features: [
        'Scalable architecture',
        'Real-time features',
        'SEO optimization',
        'Progressive Web App'
      ]
    },
    {
      id: 2,
      title: 'Mobile App Development',
      icon: 'Smartphone',
      color: 'from-orange-500 to-red-600',
      description: 'Native and cross-platform mobile applications',
      startingPrice: '$7,500',
      timeline: '6-10 weeks',
      deliverables: [
        'iOS & Android Applications',
        'App Store Optimization',
        'Push Notifications Setup',
        'Offline Functionality',
        'App Analytics Integration',
        'App Store Submission'
      ],
      technologies: ['React Native', 'Flutter', 'Firebase', 'App Store Connect'],
      features: [
        'Cross-platform compatibility',
        'Native performance',
        'Offline capabilities',
        'App store ready'
      ]
    },
    {
      id: 3,
      title: 'DevOps & Cloud',
      icon: 'Cloud',
      color: 'from-indigo-500 to-purple-600',
      description: 'Automated deployment and scalable infrastructure',
      startingPrice: '$3,500',
      timeline: '3-5 weeks',
      deliverables: [
        'CI/CD Pipeline Setup',
        'Cloud Infrastructure Design',
        'Monitoring & Logging',
        'Security Configuration',
        'Backup & Recovery Plan',
        'Documentation & Training'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      features: [
        'Auto-scaling',
        'Zero-downtime deployment',
        '99.9% uptime guarantee',
        'Cost optimization'
      ]
    },
    {
      id: 4,
      title: 'AI & Machine Learning',
      icon: 'Brain',
      color: 'from-violet-500 to-pink-600',
      description: 'Intelligent systems and data-driven solutions',
      startingPrice: '$8,000',
      timeline: '8-12 weeks',
      deliverables: [
        'Custom AI Model Development',
        'Data Processing Pipeline',
        'Model Training & Validation',
        'API Integration',
        'Performance Monitoring',
        'Model Documentation'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenAI API', 'AWS SageMaker'],
      features: [
        'Custom model training',
        'Real-time predictions',
        'Scalable inference',
        'Continuous learning'
      ]
    },
    {
      id: 5,
      title: 'Blockchain & Web3',
      icon: 'Zap',
      color: 'from-yellow-500 to-orange-600',
      description: 'Decentralized applications and smart contracts',
      startingPrice: '$10,000',
      timeline: '10-16 weeks',
      deliverables: [
        'Smart Contract Development',
        'DApp Frontend Interface',
        'Wallet Integration',
        'Security Audit',
        'Testnet Deployment',
        'Mainnet Launch Support'
      ],
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'Hardhat'],
      features: [
        'Gas optimization',
        'Security best practices',
        'Multi-chain support',
        'DeFi integration'
      ]
    }
  ];

  const currentService = services[activeService];

  const handleGetQuote = (service) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-surface">
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
            Service{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Offerings
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions across all domains. 
            Click on each service to explore deliverables, timelines, and starting prices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Service Icons Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                viewport={{ once: true }}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 card-hover ${
                  activeService === index
                    ? 'bg-card border-2 border-primary component-shadow scale-105 glow-effect'
                    : 'bg-card border border-border hover:border-primary/50'
                }`}
                onClick={() => setActiveService(index)}
              >
                {/* Enhanced Service Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 mx-auto`}
                  whileHover={{ rotateY: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon name={service.icon} size={32} className="text-white" />
                </motion.div>

                {/* Service Title */}
                <h3 className="text-center font-semibold text-foreground mb-2">
                  {service.title}
                </h3>

                {/* Starting Price */}
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">Starting at</span>
                  <div className="text-lg font-bold text-primary">{service.startingPrice}</div>
                </div>

                {/* Enhanced Active Indicator */}
                {activeService === index && (
                  <motion.div 
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center pulse-ring"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon name="Check" size={16} className="text-white" />
                  </motion.div>
                )}

                {/* Interactive Hover Effects */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary/20 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-card border border-border rounded-2xl p-8 component-shadow">
              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentService.color} flex items-center justify-center`}>
                  <Icon name={currentService.icon} size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{currentService.title}</h3>
                  <p className="text-muted-foreground">{currentService.description}</p>
                </div>
              </div>

              {/* Pricing & Timeline */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-surface rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{currentService.startingPrice}</div>
                  <div className="text-sm text-muted-foreground">Starting Price</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{currentService.timeline}</div>
                  <div className="text-sm text-muted-foreground">Timeline</div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">What You'll Get</h4>
                <div className="space-y-2">
                  {currentService.deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Star" size={14} className="text-warning flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={() => handleGetQuote(currentService)}
                  className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 cta-shadow button-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Get Quote
                </motion.button>
                <motion.button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 border border-primary text-primary py-3 px-6 rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300 button-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  View Examples
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground text-center mb-6">
              Why Choose Full-Stack Versatility?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" size={32} className="text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Cost Effective</h4>
                <p className="text-sm text-muted-foreground">
                  Save 40-60% compared to hiring multiple specialists for different domains
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Faster Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  No coordination delays between teams - single developer, streamlined process
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-warning" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Unified Vision</h4>
                <p className="text-sm text-muted-foreground">
                  Consistent design and architecture across all technology components
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;