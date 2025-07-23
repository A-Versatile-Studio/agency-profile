import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateTransform = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const technologies = [
    "React & Next.js",
    "Node.js & Express", 
    "Python & Django",
    "React Native",
    "AWS & DevOps",
    "AI & Machine Learning",
    "UI/UX Design",
    "Blockchain"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleStartProject = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Complex 3D SVG Components
  const CubeModel = ({ className = "", size = 120, delay = 0 }) => (
    <motion.div
      className={`absolute rotating-cube ${className}`}
      style={{ 
        width: size, 
        height: size,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0">
        <defs>
          <linearGradient id={`cubeGradient${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB923C" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#EA580C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C2410C" stopOpacity="1" />
          </linearGradient>
          <filter id={`glow${delay}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Cube faces */}
        <polygon points="20,30 80,30 100,10 40,10" fill={`url(#cubeGradient${delay})`} filter={`url(#glow${delay})`} />
        <polygon points="20,30 40,50 100,50 80,30" fill="#C2410C" opacity="0.7" />
        <polygon points="80,30 100,10 100,50 80,70" fill="#9A3412" opacity="0.5" />
        
        {/* Wireframe overlay */}
        <polygon points="20,30 80,30 100,10 40,10 20,30" fill="none" stroke="#FB923C" strokeWidth="1" opacity="0.6" />
        <polygon points="20,30 40,50 100,50 80,30" fill="none" stroke="#EA580C" strokeWidth="1" opacity="0.6" />
        <polygon points="80,30 100,10 100,50 80,70" fill="none" stroke="#C2410C" strokeWidth="1" opacity="0.6" />
      </svg>
    </motion.div>
  );

  const PyramidModel = ({ className = "", size = 100, delay = 0 }) => (
    <motion.div
      className={`absolute rotating-pyramid ${className}`}
      style={{ 
        width: size, 
        height: size,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0">
        <defs>
          <linearGradient id={`pyramidGradient${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FB923C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.7" />
          </linearGradient>
          <filter id={`pyramidGlow${delay}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Pyramid faces */}
        <polygon points="50,10 20,70 80,70" fill={`url(#pyramidGradient${delay})`} filter={`url(#pyramidGlow${delay})`} />
        <polygon points="50,10 80,70 90,80" fill="#C2410C" opacity="0.6" />
        <polygon points="50,10 20,70 10,80" fill="#9A3412" opacity="0.5" />
        
        {/* Wireframe */}
        <polygon points="50,10 20,70 80,70 50,10" fill="none" stroke="#FB923C" strokeWidth="1" opacity="0.8" />
        <line x1="50" y1="10" x2="80" y2="70" stroke="#EA580C" strokeWidth="1" opacity="0.6" />
        <line x1="50" y1="10" x2="20" y2="70" stroke="#EA580C" strokeWidth="1" opacity="0.6" />
      </svg>
    </motion.div>
  );

  const SphereModel = ({ className = "", size = 90, delay = 0 }) => (
    <motion.div
      className={`absolute rotating-sphere ${className}`}
      style={{ 
        width: size, 
        height: size,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
    >
      <svg viewBox="0 0 90 90" className="absolute inset-0">
        <defs>
          <radialGradient id={`sphereGradient${delay}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FB923C" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C2410C" stopOpacity="0.5" />
          </radialGradient>
          <filter id={`sphereGlow${delay}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main sphere */}
        <circle cx="45" cy="45" r="35" fill={`url(#sphereGradient${delay})`} filter={`url(#sphereGlow${delay})`} />
        
        {/* Wireframe grid */}
        <ellipse cx="45" cy="45" rx="35" ry="35" fill="none" stroke="#FB923C" strokeWidth="1" opacity="0.4" />
        <ellipse cx="45" cy="45" rx="35" ry="20" fill="none" stroke="#EA580C" strokeWidth="1" opacity="0.3" />
        <ellipse cx="45" cy="45" rx="20" ry="35" fill="none" stroke="#EA580C" strokeWidth="1" opacity="0.3" />
        <line x1="10" y1="45" x2="80" y2="45" stroke="#C2410C" strokeWidth="1" opacity="0.3" />
        <line x1="45" y1="10" x2="45" y2="80" stroke="#C2410C" strokeWidth="1" opacity="0.3" />
      </svg>
    </motion.div>
  );

  const ParticleOrbit = ({ className = "", delay = 0 }) => (
    <motion.div
      className={`absolute particle-orbit ${className}`}
      style={{ 
        width: 200, 
        height: 200,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full shadow-lg"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 45}deg) translateX(80px) translateY(-50%)`,
              boxShadow: '0 0 10px rgba(251, 146, 60, 0.8)'
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  const ComplexGeometry = ({ className = "", delay = 0 }) => (
    <motion.div
      className={`absolute ${className}`}
      style={{ 
        width: 200, 
        height: 200,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, rotateX: -90 }}
      animate={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 1.5, delay }}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0">
        <defs>
          <linearGradient id={`complexGradient${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDBA74" stopOpacity="0.8" />
            <stop offset="33%" stopColor="#FB923C" stopOpacity="0.7" />
            <stop offset="66%" stopColor="#EA580C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C2410C" stopOpacity="0.5" />
          </linearGradient>
          <filter id={`complexGlow${delay}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Complex interconnected geometry */}
        <path d="M100,20 L170,60 L150,130 L50,130 L30,60 Z" fill={`url(#complexGradient${delay})`} filter={`url(#complexGlow${delay})`} />
        <path d="M100,50 L140,80 L120,120 L80,120 L60,80 Z" fill="none" stroke="#FB923C" strokeWidth="2" opacity="0.6" />
        <path d="M100,80 L120,100 L100,120 L80,100 Z" fill="#EA580C" opacity="0.4" />
        
        {/* Connecting lines */}
        <line x1="100" y1="20" x2="100" y2="180" stroke="#C2410C" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="#C2410C" strokeWidth="1" opacity="0.3" />
        <line x1="40" y1="40" x2="160" y2="160" stroke="#9A3412" strokeWidth="1" opacity="0.3" />
        <line x1="160" y1="40" x2="40" y2="160" stroke="#9A3412" strokeWidth="1" opacity="0.3" />
        
        {/* Connection nodes */}
        {[
          {x: 100, y: 20}, {x: 170, y: 60}, {x: 150, y: 130}, 
          {x: 50, y: 130}, {x: 30, y: 60}, {x: 100, y: 100}
        ].map((point, i) => (
          <circle 
            key={i} 
            cx={point.x} 
            cy={point.y} 
            r="3" 
            fill="#FB923C" 
            opacity="0.8"
            style={{ filter: 'drop-shadow(0 0 5px rgba(251, 146, 60, 0.8))' }}
          />
        ))}
      </svg>
    </motion.div>
  );

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-background via-surface to-background overflow-hidden">
      {/* Fixed Dynamic Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50"></div>
      
      {/* Enhanced Animated Background Grid */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,146,60,0.08)_1px,transparent_1px),linear-gradient(rgba(251,146,60,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Enhanced Complex 3D Models Layer */}
      <div className="absolute inset-0 hero-3d-container pointer-events-none">
        {/* Left side models with enhanced interactivity */}
        <motion.div
          className="absolute top-20 left-10"
          whileHover={{ scale: 1.1, rotateY: 45 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CubeModel className="interactive-hover" size={120} delay={0.2} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-20"
          whileHover={{ scale: 1.15, rotateX: 30 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <PyramidModel className="interactive-hover" size={100} delay={0.8} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-16"
          whileHover={{ scale: 1.2, rotateZ: 180 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <SphereModel className="interactive-hover glow-effect" size={90} delay={1.4} />
        </motion.div>
        
        {/* Right side models with enhanced interactivity */}
        <motion.div
          className="absolute top-32 right-20"
          whileHover={{ scale: 1.1, rotateY: -45 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <CubeModel className="interactive-hover" size={100} delay={0.6} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-10"
          whileHover={{ scale: 1.15, rotateX: -30 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <PyramidModel className="interactive-hover" size={110} delay={1.0} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-24"
          whileHover={{ scale: 1.2, rotateZ: -180 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <SphereModel className="interactive-hover glow-effect" size={80} delay={1.2} />
        </motion.div>
        
        {/* Center complex geometry with enhanced interactivity */}
        <motion.div
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2"
          whileHover={{ scale: 1.1, rotateY: 360 }}
          transition={{ type: "spring", stiffness: 200, duration: 1 }}
        >
          <ComplexGeometry className="interactive-hover" delay={1.6} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2"
          whileHover={{ scale: 1.1, rotateX: 360 }}
          transition={{ type: "spring", stiffness: 200, duration: 1 }}
        >
          <ComplexGeometry className="interactive-hover" delay={2.0} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 transform translate-x-1/2"
          whileHover={{ scale: 1.1, rotateZ: 360 }}
          transition={{ type: "spring", stiffness: 200, duration: 1 }}
        >
          <ComplexGeometry className="interactive-hover" delay={2.4} />
        </motion.div>
        
        {/* Enhanced particle orbits with interactions */}
        <motion.div
          className="absolute top-16 left-1/4 transform -translate-x-1/2"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ParticleOrbit className="interactive-hover pulse-ring" delay={0.4} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/4 transform translate-x-1/2"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ParticleOrbit className="interactive-hover pulse-ring" delay={1.8} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ParticleOrbit className="interactive-hover pulse-ring" delay={2.2} />
        </motion.div>
        
        {/* Enhanced floating elements with micro-interactions */}
        <motion.div
          className="absolute top-1/2 left-1/4 floating-animation"
          style={{ y: yTransform, rotate: rotateTransform }}
          whileHover={{ scale: 1.5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg opacity-60 glow-effect"></div>
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/3 floating-animation"
          style={{ y: yTransform, rotate: rotateTransform }}
          whileHover={{ scale: 1.5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg opacity-50 glow-effect"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
              <Icon name="Award" size={20} className="text-primary mr-2" />
              <span className="text-primary font-semibold">7 Years of Technical Mastery</span>
            </div>
          </motion.div>

          {/* Avatar with enhanced design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center shadow-inner">
                  <Icon name="User" size={56} className="text-primary" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-success rounded-full border-4 border-background flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              {/* Orbital rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: '10s' }}></div>
              <div className="absolute inset-2 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
            </div>
          </motion.div>

          {/* Enhanced Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8"
          >
            <span className="block">Architect of</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Digital Masterpieces
            </span>
          </motion.h1>

          {/* Animated Tech Stack with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <div className="text-xl md:text-3xl text-muted-foreground mb-4">
              <span className="block mb-2">Mastering</span>
              <span className="inline-block min-w-[300px] text-left">
                <motion.span
                  key={currentTech}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold"
                >
                  {technologies[currentTech]}
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* Enhanced Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-5xl mx-auto mb-12 leading-relaxed"
          >
            Seven years of relentless innovation have forged an unparalleled expertise spanning every 
            technology domain. From quantum-inspired algorithms to immersive 3D experiences, witness 
            the convergence of artistry and engineering in perfect harmony.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              variant="default"
              size="lg"
              onClick={handleStartProject}
              iconName="Zap"
              iconPosition="right"
              className="cta-shadow hover:scale-105 transition-3d bg-gradient-to-r from-primary to-secondary text-lg px-8 py-4"
            >
              Commission a Masterpiece
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleViewPortfolio}
              iconName="Eye"
              iconPosition="left"
              className="hover:scale-105 transition-3d border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4"
            >
              Explore the Gallery
            </Button>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '100+', label: 'Masterpieces Crafted', icon: 'Palette' },
              { number: '15+', label: 'Technology Domains', icon: 'Code' },
              { number: '7', label: 'Years of Excellence', icon: 'Award' },
              { number: '∞', label: 'Possibilities Unlocked', icon: 'Infinity' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name={stat.icon} size={32} className="text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <div className="text-sm text-muted-foreground mb-2 font-medium">Discover the Journey</div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
          >
            <Icon name="ChevronDown" size={24} className="text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;