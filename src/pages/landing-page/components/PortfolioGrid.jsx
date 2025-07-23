import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'web', label: 'Web Apps', count: 5 },
    { id: 'mobile', label: 'Mobile', count: 3 },
    { id: 'ai', label: 'AI/ML', count: 2 },
    { id: 'blockchain', label: 'Blockchain', count: 2 }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Full-stack e-commerce solution with AI-powered recommendations',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      complexity: 'High',
      timeline: '3 months',
      client: 'TechCorp Inc.',
      results: '300% increase in conversion rate',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      description: 'HIPAA-compliant telemedicine app with real-time video consultations',
      technologies: ['React Native', 'WebRTC', 'Firebase', 'Twilio'],
      complexity: 'High',
      timeline: '4 months',
      client: 'MedTech Solutions',
      results: '50,000+ active users',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'AI Content Generator',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      description: 'GPT-powered content creation platform with custom fine-tuning',
      technologies: ['Python', 'OpenAI API', 'FastAPI', 'React', 'Redis'],
      complexity: 'Very High',
      timeline: '5 months',
      client: 'ContentAI Startup',
      results: '1M+ content pieces generated',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'DeFi Trading Platform',
      category: 'blockchain',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      description: 'Decentralized trading platform with automated market making',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
      complexity: 'Very High',
      timeline: '6 months',
      client: 'CryptoTrade DAO',
      results: '$10M+ in trading volume',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Project Management SaaS',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      description: 'Collaborative project management tool with real-time updates',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io', 'Vercel'],
      complexity: 'Medium',
      timeline: '2 months',
      client: 'ProductivityPro',
      results: '95% user satisfaction',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      description: 'AI-powered fitness tracking with personalized workout plans',
      technologies: ['Flutter', 'TensorFlow Lite', 'Firebase', 'HealthKit'],
      complexity: 'High',
      timeline: '3 months',
      client: 'FitTech Innovations',
      results: '4.8/5 app store rating',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 7,
      title: 'Real Estate Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      description: 'Property listing platform with virtual tours and AR features',
      technologies: ['React', 'Three.js', 'Node.js', 'MongoDB', 'Mapbox'],
      complexity: 'High',
      timeline: '4 months',
      client: 'RealEstate Pro',
      results: '200% increase in leads',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 8,
      title: 'Predictive Analytics Dashboard',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Machine learning dashboard for business intelligence',
      technologies: ['Python', 'Scikit-learn', 'D3.js', 'Flask', 'PostgreSQL'],
      complexity: 'Very High',
      timeline: '5 months',
      client: 'DataInsights Corp',
      results: '40% better forecasting accuracy',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 9,
      title: 'Social Media App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      description: 'Social networking app with end-to-end encryption',
      technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'AWS'],
      complexity: 'High',
      timeline: '4 months',
      client: 'SocialConnect',
      results: '100K+ downloads in first month',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 10,
      title: 'NFT Marketplace',
      category: 'blockchain',
      image: 'https://images.unsplash.com/photo-1640161704729-cbe966a08853?w=600&h=400&fit=crop',
      description: 'Decentralized NFT marketplace with lazy minting',
      technologies: ['Solidity', 'React', 'IPFS', 'Polygon', 'MetaMask'],
      complexity: 'Very High',
      timeline: '4 months',
      client: 'ArtChain Gallery',
      results: '5,000+ NFTs traded',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 11,
      title: 'Learning Management System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      description: 'Comprehensive LMS with video streaming and assessments',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'AWS S3'],
      complexity: 'Medium',
      timeline: '3 months',
      client: 'EduTech Solutions',
      results: '10,000+ students enrolled',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 12,
      title: 'IoT Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      description: 'Real-time IoT device monitoring and control system',
      technologies: ['React', 'Node.js', 'InfluxDB', 'MQTT', 'Docker'],
      complexity: 'High',
      timeline: '3 months',
      client: 'SmartHome Inc.',
      results: '99.9% uptime achieved',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Medium': return 'text-warning bg-warning/10';
      case 'High': return 'text-error bg-error/10';
      case 'Very High': return 'text-purple-600 bg-purple-100';
      default: return 'text-success bg-success/10';
    }
  };

  const handleSimilarProject = (project) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-surface">
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
            Project{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore 50+ successful projects across different technology domains. 
            Each project showcases versatility, technical excellence, and measurable business impact.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground component-shadow'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-sm opacity-70">({filter.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 component-shadow hover:shadow-lg"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Icon name="ExternalLink" size={20} />
                  </button>
                  <button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="bg-card text-foreground p-3 rounded-full hover:bg-muted transition-colors"
                  >
                    <Icon name="Github" size={20} />
                  </button>
                </div>

                {/* Complexity Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full bg-white text-xs font-medium ${getComplexityColor(project.complexity)}`}>
                    {project.complexity}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    {project.timeline}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Results */}
                <div className="flex items-center justify-between mb-4 p-3 bg-success/5 rounded-lg border border-success/20">
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-success" />
                    <span className="text-sm font-medium text-success">Results</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.results}</span>
                </div>

                {/* Client & CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Client: {project.client}
                  </div>
                  <button
                    onClick={() => handleSimilarProject(project)}
                    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Similar Project?
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join 50+ satisfied clients who chose versatility over complexity. 
              Get a free consultation and project estimate tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors cta-shadow"
              >
                Start Your Project
              </button>
              <button
                onClick={() => window.open('#', '_blank')}
                className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                View All Projects
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;