import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const problemPoints = [
    {
      icon: 'Users',
      title: 'Multiple Contractors',
      description: 'Managing 5+ different specialists for UI, backend, mobile, DevOps, and AI components',
      cost: '$15,000+',
      time: '6+ months'
    },
    {
      icon: 'MessageSquare',
      title: 'Communication Chaos',
      description: 'Endless meetings, conflicting opinions, and misaligned project visions',
      cost: '$3,000+',
      time: '2+ months delay'
    },
    {
      icon: 'AlertTriangle',
      title: 'Integration Nightmares',
      description: 'Components built in isolation failing to work together seamlessly',
      cost: '$8,000+',
      time: '3+ months rework'
    },
    {
      icon: 'Clock',
      title: 'Timeline Disasters',
      description: 'Dependencies between contractors causing cascading delays and budget overruns',
      cost: '$12,000+',
      time: '4+ months delay'
    }
  ];

  const solutionPoints = [
    {
      icon: 'User',
      title: 'Single Point of Contact',
      description: 'One developer handling all aspects from UI/UX to AI algorithms',
      benefit: 'Save $20,000+',
      time: '3x faster delivery'
    },
    {
      icon: 'Zap',
      title: 'Seamless Integration',
      description: 'All components designed and built with perfect compatibility in mind',
      benefit: 'Zero integration issues',
      time: 'Launch ready'
    },
    {
      icon: 'Target',
      title: 'Unified Vision',
      description: 'Consistent design language and technical architecture across all domains',
      benefit: 'Professional quality',
      time: 'First-time right'
    },
    {
      icon: 'Rocket',
      title: 'Rapid Deployment',
      description: 'No coordination delays, immediate implementation of changes and updates',
      benefit: 'Market advantage',
      time: '50% faster launch'
    }
  ];

  return (
    <section className="py-20 bg-surface">
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
            The Multi-Contractor{' '}
            <span className="text-error">Nightmare</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stop burning money and time managing multiple contractors. 
            See how the traditional approach compares to the streamlined single-developer solution.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-error/10 rounded-full mb-4">
                <Icon name="AlertTriangle" size={32} className="text-error" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Traditional Approach</h3>
              <p className="text-muted-foreground">Multiple contractors, multiple problems</p>
            </div>

            <div className="space-y-4">
              {problemPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-error/20 rounded-xl p-6 hover:border-error/40 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-error/10 rounded-xl flex items-center justify-center">
                      <Icon name={point.icon} size={20} className="text-error" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{point.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{point.description}</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="bg-error/10 text-error px-2 py-1 rounded">
                          Cost: {point.cost}
                        </span>
                        <span className="bg-error/10 text-error px-2 py-1 rounded">
                          Time: {point.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Total Cost Calculator */}
            <div className="bg-error/5 border border-error/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-error mb-2">$38,000+</div>
              <div className="text-sm text-muted-foreground">Average additional costs</div>
              <div className="text-2xl font-bold text-error mt-2">15+ months</div>
              <div className="text-sm text-muted-foreground">Total project timeline</div>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
                <Icon name="CheckCircle" size={32} className="text-success" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Arinova Studio Solution</h3>
              <p className="text-muted-foreground">One developer, infinite possibilities</p>
            </div>

            <div className="space-y-4">
              {solutionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-success/20 rounded-xl p-6 hover:border-success/40 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                      <Icon name={point.icon} size={20} className="text-success" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{point.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{point.description}</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="bg-success/10 text-success px-2 py-1 rounded">
                          {point.benefit}
                        </span>
                        <span className="bg-success/10 text-success px-2 py-1 rounded">
                          {point.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Total Savings Calculator */}
            <div className="bg-success/5 border border-success/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-success mb-2">$20,000+</div>
              <div className="text-sm text-muted-foreground">Money saved</div>
              <div className="text-2xl font-bold text-success mt-2">5 months</div>
              <div className="text-sm text-muted-foreground">Faster delivery</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Simplify Your Tech Stack?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join 50+ companies who chose efficiency over complexity. 
              Get a free project consultation and see how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-2xl font-semibold hover:bg-primary/90 transition-colors cta-shadow"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-primary text-primary px-8 py-3 rounded-2xl font-semibold hover:bg-primary/10 transition-colors"
              >
                See Success Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;