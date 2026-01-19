import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'AI/ML Solutions', href: '#services' },
    { name: 'DevOps & Cloud', href: '#services' },
    { name: 'Blockchain', href: '#services' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: '#', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: 'Github', href: '#', color: 'hover:text-gray-900' },
    { name: 'Twitter', icon: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { name: 'Email', icon: 'Mail', href: 'mailto:adarsh@example.com', color: 'hover:text-red-500' }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Code" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Arinova Studio</h3>
                  <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                One developer, every technology. From stunning UI/UX designs to complex AI algorithms, 
                I help businesses transform their ideas into reality with comprehensive technology solutions.
              </p>

              {/* Availability Status */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-success">Available for new projects</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onClick={() => handleLinkClick(social.href)}
                    className={`w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={20} />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => handleLinkClick(service.href)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-border"
        >
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Stay Updated with Latest Tech Insights
            </h4>
            <p className="text-muted-foreground mb-6">
              Get weekly tips on full-stack development, AI trends, and project management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} Arinova Studio. All rights reserved.
            </div>

            {/* Tech Stack Badge */}
            {/* <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={16} className="text-red-500" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div> */}

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors component-shadow z-50"
          aria-label="Back to top"
        >
          <Icon name="ArrowUp" size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;