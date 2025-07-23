import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsShowcase = () => {
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    {
      id: 0,
      name: 'UI/UX Design',
      icon: 'Palette',
      level: 95,
      color: 'from-pink-500 to-purple-600',
      description: 'Creating intuitive, beautiful interfaces that users love',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
      projects: 25,
      certifications: ['Google UX Design', 'Adobe Certified Expert'],
      experience: '5+ years'
    },
    {
      id: 1,
      name: 'Frontend Development',
      icon: 'Code',
      level: 98,
      color: 'from-blue-500 to-cyan-600',
      description: 'Building responsive, performant web applications',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
      projects: 40,
      certifications: ['React Developer', 'Frontend Masters'],
      experience: '6+ years'
    },
    {
      id: 2,
      name: 'Backend Development',
      icon: 'Server',
      level: 92,
      color: 'from-green-500 to-emerald-600',
      description: 'Scalable APIs and robust server-side architecture',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
      projects: 35,
      certifications: ['AWS Solutions Architect', 'Node.js Certified'],
      experience: '5+ years'
    },
    {
      id: 3,
      name: 'Mobile Development',
      icon: 'Smartphone',
      level: 88,
      color: 'from-orange-500 to-red-600',
      description: 'Native and cross-platform mobile applications',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
      projects: 20,
      certifications: ['React Native Specialist', 'Flutter Developer'],
      experience: '4+ years'
    },
    {
      id: 4,
      name: 'DevOps & Cloud',
      icon: 'Cloud',
      level: 85,
      color: 'from-indigo-500 to-purple-600',
      description: 'Automated deployment and cloud infrastructure',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      projects: 30,
      certifications: ['AWS Solutions Architect', 'Kubernetes Admin'],
      experience: '4+ years'
    },
    {
      id: 5,
      name: 'AI & Machine Learning',
      icon: 'Brain',
      level: 82,
      color: 'from-violet-500 to-pink-600',
      description: 'Intelligent systems and data-driven solutions',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Scikit-learn'],
      projects: 15,
      certifications: ['Google AI Engineer', 'Deep Learning Specialization'],
      experience: '3+ years'
    },
    {
      id: 6,
      name: 'Database & Analytics',
      icon: 'Database',
      level: 90,
      color: 'from-teal-500 to-green-600',
      description: 'Data architecture and business intelligence',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'GraphQL'],
      projects: 28,
      certifications: ['MongoDB Developer', 'PostgreSQL Expert'],
      experience: '5+ years'
    },
    {
      id: 7,
      name: 'Blockchain & Web3',
      icon: 'Zap',
      level: 78,
      color: 'from-yellow-500 to-orange-600',
      description: 'Decentralized applications and smart contracts',
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'Hardhat'],
      projects: 8,
      certifications: ['Ethereum Developer', 'Blockchain Fundamentals'],
      experience: '2+ years'
    }
  ];

  const currentSkill = skills[activeSkill];

  return (
    <section id="skills" className="py-20 bg-background">
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
            Technology{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hover over each domain to explore my expertise level, recent projects, 
            and certifications across the entire technology spectrum.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Radar/Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                  activeSkill === index
                    ? 'border-primary bg-primary/5 component-shadow'
                    : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5'
                }`}
                onMouseEnter={() => setActiveSkill(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                      <Icon name={skill.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.experience}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{skill.level}%</div>
                    <div className="text-xs text-muted-foreground">Proficiency</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-3">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{skill.projects} projects</span>
                  <span>{skill.certifications.length} certifications</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Details */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-card border border-border rounded-2xl p-8 component-shadow">
              {/* Skill Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentSkill.color} flex items-center justify-center`}>
                  <Icon name={currentSkill.icon} size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{currentSkill.name}</h3>
                  <p className="text-muted-foreground">{currentSkill.description}</p>
                </div>
              </div>

              {/* Proficiency Circle */}
              <div className="flex justify-center mb-8">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-muted opacity-20"
                    />
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      strokeWidth="8"
                      strokeLinecap="round"
                      className={`text-primary`}
                      initial={{ strokeDasharray: "0 314" }}
                      animate={{ strokeDasharray: `${(currentSkill.level / 100) * 314} 314` }}
                      transition={{ duration: 1 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{currentSkill.level}%</div>
                      <div className="text-xs text-muted-foreground">Expert</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {currentSkill.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
                <div className="space-y-2">
                  {currentSkill.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Award" size={16} className="text-success" />
                      <span className="text-sm text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{currentSkill.projects}</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{currentSkill.experience}</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Integration */}
      </div>
    </section>
  );
};

export default SkillsShowcase;