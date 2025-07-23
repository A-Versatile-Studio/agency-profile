import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    { value: 'web', label: 'Web Application' },
    { value: 'mobile', label: 'Mobile App' },
    { value: 'ai', label: 'AI/ML Solution' },
    { value: 'blockchain', label: 'Blockchain/Web3' },
    { value: 'devops', label: 'DevOps/Cloud' },
    { value: 'uiux', label: 'UI/UX Design' },
    { value: 'fullstack', label: 'Full-Stack Solution' },
    { value: 'consultation', label: 'Technical Consultation' }
  ];

  const budgetRanges = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush Job)' },
    { value: '1-2months', label: '1-2 Months' },
    { value: '3-4months', label: '3-4 Months' },
    { value: '6months+', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        priority: 'medium'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getEstimatedTimeline = () => {
    if (!formData.projectType || !formData.budget) return null;
    
    const timelineMap = {
      'uiux': '2-3 weeks',
      'web': '4-8 weeks',
      'mobile': '6-10 weeks',
      'devops': '3-5 weeks',
      'ai': '8-12 weeks',
      'blockchain': '10-16 weeks',
      'fullstack': '8-16 weeks',
      'consultation': '1-2 weeks'
    };

    return timelineMap[formData.projectType] || '4-8 weeks';
  };

  return (
    <section id="contact" className="py-20 bg-background">
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
            Start Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Project Today
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your idea into reality? Get a free consultation and 
            personalized project estimate. Let's discuss how we can bring your vision to life.
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
            <div className="bg-card border border-border rounded-2xl p-8 component-shadow">
              <h3 className="text-2xl font-bold text-foreground mb-6">Project Details</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <span className="text-success font-medium">
                      Thank you! I'll get back to you within 24 hours.
                    </span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-error/10 border border-error/20 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <Icon name="AlertCircle" size={20} className="text-error" />
                    <span className="text-error font-medium">
                      Something went wrong. Please try again.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <Input
                  label="Company Name"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company Inc."
                />

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    label="Project Type"
                    options={projectTypes}
                    value={formData.projectType}
                    onChange={(value) => handleSelectChange('projectType', value)}
                    placeholder="Select project type"
                    required
                  />
                  <Select
                    label="Budget Range"
                    options={budgetRanges}
                    value={formData.budget}
                    onChange={(value) => handleSelectChange('budget', value)}
                    placeholder="Select budget range"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    label="Preferred Timeline"
                    options={timelineOptions}
                    value={formData.timeline}
                    onChange={(value) => handleSelectChange('timeline', value)}
                    placeholder="Select timeline"
                    required
                  />
                  <Select
                    label="Priority Level"
                    options={priorityOptions}
                    value={formData.priority}
                    onChange={(value) => handleSelectChange('priority', value)}
                    placeholder="Select priority"
                  />
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-xl bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe your project requirements, goals, and any specific features you need..."
                    required
                  />
                </div>

                {/* Estimated Timeline */}
                {getEstimatedTimeline() && (
                  <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <span className="text-primary font-medium">
                        Estimated Timeline: {getEstimatedTimeline()}
                      </span>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  fullWidth
                  iconName="Send"
                  iconPosition="right"
                  className="cta-shadow"
                >
                  {isSubmitting ? 'Sending...' : 'Send Project Details'}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Availability */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Availability Status */}
            <div className="bg-card border border-border rounded-2xl p-8 component-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-4 h-4 bg-success rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-foreground">Currently Available</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="text-foreground font-medium">&lt; 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Next Available</span>
                  <span className="text-foreground font-medium">Immediately</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Capacity</span>
                  <span className="text-success font-medium">2 slots remaining</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-success/10 rounded-xl border border-success/20">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={20} className="text-success" />
                  <span className="text-success font-medium">
                    Book a free 30-minute consultation call
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-card border border-border rounded-2xl p-8 component-shadow">
              <h3 className="text-xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">adarsh@example.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Location</div>
                    <div className="text-muted-foreground">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card border border-border rounded-2xl p-8 component-shadow">
              <h3 className="text-xl font-bold text-foreground mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center space-x-3 p-4 bg-surface rounded-xl hover:bg-primary/10 transition-colors">
                  <Icon name="Linkedin" size={20} className="text-primary" />
                  <span className="text-foreground font-medium">LinkedIn</span>
                </button>
                
                <button className="flex items-center space-x-3 p-4 bg-surface rounded-xl hover:bg-primary/10 transition-colors">
                  <Icon name="Github" size={20} className="text-foreground" />
                  <span className="text-foreground font-medium">GitHub</span>
                </button>
                
                <button className="flex items-center space-x-3 p-4 bg-surface rounded-xl hover:bg-primary/10 transition-colors">
                  <Icon name="Twitter" size={20} className="text-primary" />
                  <span className="text-foreground font-medium">Twitter</span>
                </button>
                
                <button className="flex items-center space-x-3 p-4 bg-surface rounded-xl hover:bg-primary/10 transition-colors">
                  <Icon name="Globe" size={20} className="text-primary" />
                  <span className="text-foreground font-medium">Portfolio</span>
                </button>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-card border border-border rounded-2xl p-8 component-shadow">
              <h3 className="text-xl font-bold text-foreground mb-6">Quick FAQ</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-1">Do you work with startups?</h4>
                  <p className="text-sm text-muted-foreground">Yes! I love working with startups and offer flexible payment terms.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-1">Can you handle ongoing maintenance?</h4>
                  <p className="text-sm text-muted-foreground">Absolutely. I provide long-term support and maintenance packages.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-1">Do you sign NDAs?</h4>
                  <p className="text-sm text-muted-foreground">Yes, I'm happy to sign NDAs to protect your intellectual property.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;