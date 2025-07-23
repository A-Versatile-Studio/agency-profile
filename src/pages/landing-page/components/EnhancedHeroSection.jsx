import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EnhancedHeroSection = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotateTransform = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const technologies = [
    "Quantum Computing",
    "Neural Networks", 
    "Blockchain Architecture",
    "Metaverse Development",
    "Edge Computing",
    "AI Consciousness",
    "Holographic Interfaces",
    "Quantum Cryptography"
  ];


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

  // Advanced 3D SVG Components
  const HyperCube = ({ className = "", size = 160, delay = 0 }) => (
    <motion.div
      className={`absolute hypercube-container ${className}`}
      style={{ 
        width: size, 
        height: size,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, scale: 0, rotateX: -90 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 2, delay }}
    >
      <svg viewBox="0 0 160 160" className="absolute inset-0">
        <defs>
          <linearGradient id={`hyperGradient${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#F97316" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#EA580C" stopOpacity="0.7" />
            <stop offset="75%" stopColor="#C2410C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9A3412" stopOpacity="0.5" />
          </linearGradient>
          <filter id={`hyperGlow${delay}`}>
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer cube */}
        <polygon points="20,40 120,40 140,20 40,20" fill={`url(#hyperGradient${delay})`} filter={`url(#hyperGlow${delay})`} />
        <polygon points="20,40 40,60 140,60 120,40" fill="#C2410C" opacity="0.8" />
        <polygon points="120,40 140,20 140,60 120,80" fill="#9A3412" opacity="0.6" />
        
        {/* Inner cube */}
        <polygon points="40,60 100,60 110,50 50,50" fill="#F97316" opacity="0.7" />
        <polygon points="40,60 50,70 110,70 100,60" fill="#EA580C" opacity="0.6" />
        <polygon points="100,60 110,50 110,70 100,80" fill="#C2410C" opacity="0.5" />
        
        {/* Connecting lines */}
        <line x1="20" y1="40" x2="40" y2="60" stroke="#F59E0B" strokeWidth="2" opacity="0.8" />
        <line x1="120" y1="40" x2="100" y2="60" stroke="#F59E0B" strokeWidth="2" opacity="0.8" />
        <line x1="140" y1="20" x2="110" y2="50" stroke="#F59E0B" strokeWidth="2" opacity="0.8" />
        <line x1="40" y1="20" x2="50" y2="50" stroke="#F59E0B" strokeWidth="2" opacity="0.8" />
        
        {/* Vertices */}
        {[
          {x: 20, y: 40}, {x: 120, y: 40}, {x: 140, y: 20}, {x: 40, y: 20},
          {x: 40, y: 60}, {x: 100, y: 60}, {x: 110, y: 50}, {x: 50, y: 50}
        ].map((point, i) => (
          <circle 
            key={i} 
            cx={point.x} 
            cy={point.y} 
            r="4" 
            fill="#F59E0B" 
            opacity="0.9"
            style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.8))' }}
          />
        ))}
      </svg>
    </motion.div>
  );

  const TesseractModel = ({ className = "", size = 140, delay = 0 }) => (
    <motion.div
      className={`absolute tesseract-container ${className}`}
      style={{ 
        width: size, 
        height: size,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay }}
    >
      <svg viewBox="0 0 140 140" className="absolute inset-0">
        <defs>
          <radialGradient id={`tesseractGradient${delay}`} cx="50%" cy="50%">
            <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#FDBA74" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#FB923C" stopOpacity="0.7" />
            <stop offset="90%" stopColor="#EA580C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C2410C" stopOpacity="0.5" />
          </radialGradient>
          <filter id={`tesseractGlow${delay}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Complex geometric pattern */}
        <path 
          d="M70,20 L110,40 L110,80 L70,100 L30,80 L30,40 Z" 
          fill={`url(#tesseractGradient${delay})`} 
          filter={`url(#tesseractGlow${delay})`} 
        />
        
        {/* Inner layers */}
        <path 
          d="M70,35 L95,50 L95,70 L70,85 L45,70 L45,50 Z" 
          fill="none" 
          stroke="#FB923C" 
          strokeWidth="2" 
          opacity="0.8" 
        />
        <path 
          d="M70,50 L80,55 L80,65 L70,70 L60,65 L60,55 Z" 
          fill="#EA580C" 
          opacity="0.6" 
        />
        
        {/* Connecting framework */}
        <line x1="70" y1="20" x2="70" y2="100" stroke="#F97316" strokeWidth="2" opacity="0.7" />
        <line x1="30" y1="40" x2="110" y2="80" stroke="#F97316" strokeWidth="2" opacity="0.7" />
        <line x1="110" y1="40" x2="30" y2="80" stroke="#F97316" strokeWidth="2" opacity="0.7" />
        
        {/* Orbital rings */}
        <circle cx="70" cy="60" r="25" fill="none" stroke="#FB923C" strokeWidth="1" opacity="0.5" />
        <circle cx="70" cy="60" r="35" fill="none" stroke="#EA580C" strokeWidth="1" opacity="0.4" />
        <circle cx="70" cy="60" r="45" fill="none" stroke="#C2410C" strokeWidth="1" opacity="0.3" />
      </svg>
    </motion.div>
  );

  const QuantumField = ({ className = "", delay = 0 }) => (
    <motion.div
      className={`absolute quantum-field ${className}`}
      style={{ 
        width: 300, 
        height: 300,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 2, delay }}
    >
      <svg viewBox="0 0 300 300" className="absolute inset-0">
        <defs>
          <linearGradient id={`quantumGradient${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.8" />
            <stop offset="20%" stopColor="#F59E0B" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#F97316" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#EA580C" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#C2410C" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#9A3412" stopOpacity="0.3" />
          </linearGradient>
          <filter id={`quantumGlow${delay}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Quantum field grid */}
        {[...Array(8)].map((_, i) => (
          <g key={i}>
            <line 
              x1={i * 40 + 10} 
              y1="10" 
              x2={i * 40 + 10} 
              y2="290" 
              stroke="#F97316" 
              strokeWidth="1" 
              opacity="0.3" 
            />
            <line 
              x1="10" 
              y1={i * 40 + 10} 
              x2="290" 
              y2={i * 40 + 10} 
              stroke="#F97316" 
              strokeWidth="1" 
              opacity="0.3" 
            />
          </g>
        ))}
        
        {/* Quantum particles */}
        {[...Array(12)].map((_, i) => (
          <circle 
            key={i}
            cx={50 + (i % 4) * 60} 
            cy={50 + Math.floor(i / 4) * 60} 
            r="3" 
            fill={`url(#quantumGradient${delay})`} 
            filter={`url(#quantumGlow${delay})`}
            opacity="0.8"
          />
        ))}
        
        {/* Quantum connections */}
        {[...Array(6)].map((_, i) => (
          <path 
            key={i}
            d={`M${50 + (i % 3) * 80},${50 + Math.floor(i / 3) * 100} Q${150},${100 + i * 20} ${210 - (i % 3) * 80},${150 + Math.floor(i / 3) * 100}`}
            fill="none" 
            stroke="#F59E0B" 
            strokeWidth="2" 
            opacity="0.5"
          />
        ))}
      </svg>
    </motion.div>
  );

  const HolographicDisplay = ({ className = "", delay = 0 }) => (
    <motion.div
      className={`absolute holographic-display ${className}`}
      style={{ 
        width: 200, 
        height: 200,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1.8, delay }}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0">
        <defs>
          <linearGradient id={`holoGradient${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#0EA5E9" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.7" />
            <stop offset="75%" stopColor="#6366F1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
          </linearGradient>
          <filter id={`holoGlow${delay}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Holographic frame */}
        <rect x="20" y="20" width="160" height="160" fill="none" stroke="#06B6D4" strokeWidth="2" opacity="0.6" />
        <rect x="30" y="30" width="140" height="140" fill="none" stroke="#0EA5E9" strokeWidth="2" opacity="0.5" />
        <rect x="40" y="40" width="120" height="120" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.4" />
        
        {/* Holographic content */}
        <polygon points="100,50 140,80 140,120 100,150 60,120 60,80" fill={`url(#holoGradient${delay})`} filter={`url(#holoGlow${delay})`} />
        
        {/* Scan lines */}
        {[...Array(8)].map((_, i) => (
          <line 
            key={i}
            x1="20" 
            y1={40 + i * 20} 
            x2="180" 
            y2={40 + i * 20} 
            stroke="#06B6D4" 
            strokeWidth="1" 
            opacity="0.3" 
          />
        ))}
        
        {/* Corner indicators */}
        {[
          {x: 20, y: 20}, {x: 180, y: 20}, {x: 20, y: 180}, {x: 180, y: 180}
        ].map((corner, i) => (
          <g key={i}>
            <circle cx={corner.x} cy={corner.y} r="4" fill="#06B6D4" opacity="0.8" />
            <circle cx={corner.x} cy={corner.y} r="8" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.6" />
          </g>
        ))}
      </svg>
    </motion.div>
  );

  const NeuralNetwork = ({ className = "", delay = 0 }) => (
    <motion.div
      className={`absolute neural-network ${className}`}
      style={{ 
        width: 250, 
        height: 250,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.2, delay }}
    >
      <svg viewBox="0 0 250 250" className="absolute inset-0">
        <defs>
          <radialGradient id={`neuralGradient${delay}`} cx="50%" cy="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#059669" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#047857" stopOpacity="0.7" />
            <stop offset="90%" stopColor="#065F46" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#064E3B" stopOpacity="0.5" />
          </radialGradient>
          <filter id={`neuralGlow${delay}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Neural nodes */}
        {[
          {x: 50, y: 50, r: 8}, {x: 125, y: 40, r: 6}, {x: 200, y: 60, r: 7},
          {x: 40, y: 125, r: 7}, {x: 125, y: 125, r: 10}, {x: 210, y: 140, r: 6},
          {x: 60, y: 200, r: 6}, {x: 140, y: 210, r: 8}, {x: 190, y: 200, r: 7}
        ].map((node, i) => (
          <circle 
            key={i}
            cx={node.x} 
            cy={node.y} 
            r={node.r} 
            fill={`url(#neuralGradient${delay})`} 
            filter={`url(#neuralGlow${delay})`}
          />
        ))}
        
        {/* Neural connections */}
        {[
          {x1: 50, y1: 50, x2: 125, y2: 40},
          {x1: 125, y1: 40, x2: 200, y2: 60},
          {x1: 50, y1: 50, x2: 40, y2: 125},
          {x1: 125, y1: 40, x2: 125, y2: 125},
          {x1: 200, y1: 60, x2: 210, y2: 140},
          {x1: 40, y1: 125, x2: 125, y2: 125},
          {x1: 125, y1: 125, x2: 210, y2: 140},
          {x1: 40, y1: 125, x2: 60, y2: 200},
          {x1: 125, y1: 125, x2: 140, y2: 210},
          {x1: 210, y1: 140, x2: 190, y2: 200}
        ].map((connection, i) => (
          <line 
            key={i}
            x1={connection.x1} 
            y1={connection.y1} 
            x2={connection.x2} 
            y2={connection.y2} 
            stroke="#10B981" 
            strokeWidth="2" 
            opacity="0.6"
          />
        ))}
        
        {/* Pulse animations */}
        {[...Array(3)].map((_, i) => (
          <circle 
            key={i}
            cx={125} 
            cy={125} 
            r="0" 
            fill="none" 
            stroke="#10B981" 
            strokeWidth="2" 
            opacity="0.8"
          >
            <animate 
              attributeName="r" 
              values="0;50;0" 
              dur="3s" 
              begin={`${i * 1}s`} 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="opacity" 
              values="0.8;0;0.8" 
              dur="3s" 
              begin={`${i * 1}s`} 
              repeatCount="indefinite" 
            />
          </circle>
        ))}
      </svg>
    </motion.div>
  );

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Advanced Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.1)_0%,rgba(147,51,234,0.1)_25%,rgba(245,158,11,0.1)_50%,rgba(239,68,68,0.1)_75%,rgba(34,197,94,0.1)_100%)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.2)_0%,transparent_50%),radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.2)_0%,transparent_50%)]"></div>
      </div>

      {/* Animated Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Advanced 3D Models Layer */}
      <div className="absolute inset-0 hero-3d-container pointer-events-none">
        {/* Left side advanced models */}
        <HyperCube className="top-20 left-10 hypercube-rotate" size={160} delay={0.2} />
        <TesseractModel className="top-1/2 left-20 tesseract-float" size={140} delay={0.8} />
        <QuantumField className="bottom-32 left-16 quantum-pulse" delay={1.4} />
        
        {/* Right side advanced models */}
        <HolographicDisplay className="top-32 right-20 holo-scan" delay={0.6} />
        <NeuralNetwork className="top-1/3 right-10 neural-pulse" delay={1.0} />
        <HyperCube className="bottom-20 right-24 hypercube-rotate" size={120} delay={1.2} />
        
        {/* Center advanced geometry */}
        <TesseractModel className="top-1/4 left-1/2 transform -translate-x-1/2 tesseract-float" size={180} delay={1.6} />
        <QuantumField className="bottom-1/4 left-1/3 transform -translate-x-1/2 quantum-pulse" delay={2.0} />
        <HolographicDisplay className="bottom-1/3 right-1/3 transform translate-x-1/2 holo-scan" delay={2.4} />
        
        {/* Interactive mouse-following elements */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            // repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 blur-sm"></div>
        </motion.div>
        
        {/* Floating quantum particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-70 shadow-lg"></div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Quantum Experience Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-400 font-semibold">Quantum-Level Development Experience</span>
            </div>
          </motion.div>

          {/* Enhanced Avatar with Holographic Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center shadow-inner relative overflow-hidden">
                  <Icon name="User" size={64} className="text-blue-400 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center shadow-lg">
                <div className="w-5 h-5 bg-white rounded-full animate-pulse"></div>
              </div>
              
              {/* Holographic orbital rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin" style={{ animationDuration: '15s' }}></div>
              <div className="absolute inset-3 rounded-full border border-purple-500/30 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-6 rounded-full border border-orange-500/30 animate-spin" style={{ animationDuration: '12s' }}></div>
              
              {/* Quantum field effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Revolutionary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-8 leading-tight"
          >
            <span className="block">Architect of</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500">
              Digital Universes
            </span>
          </motion.h1>

          {/* Enhanced Animated Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <div className="text-xl md:text-4xl text-gray-300 mb-4">
              <span className="block mb-2">Mastering</span>
              <span className="inline-block min-w-[400px] text-left">
                <motion.span
                  key={currentTech}
                  initial={{ opacity: 0, y: 30, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 90 }}
                  transition={{ duration: 0.8 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 font-bold"
                >
                  {technologies[currentTech]}
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* Quantum Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-2xl text-gray-300 max-w-6xl mx-auto mb-12 leading-relaxed"
          >
            Seven years of quantum-level innovation have forged an unparalleled expertise spanning 
            the entire digital multiverse. From consciousness-aware algorithms to interdimensional 
            user experiences, witness the fusion of impossible artistry and transcendent engineering.
          </motion.p>

          {/* Revolutionary CTA Buttons */}
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
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg px-10 py-5 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Commission a Digital Universe
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleViewPortfolio}
              iconName="Eye"
              iconPosition="left"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 text-lg px-10 py-5 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Explore the Multiverse
            </Button>
          </motion.div>

          {/* Enhanced Quantum Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {[
              { number: '∞', label: 'Universes Created', icon: 'Infinity', color: 'from-blue-500 to-cyan-500' },
              { number: '∞+', label: 'Dimensions Mastered', icon: 'Layers', color: 'from-purple-500 to-pink-500' },
              { number: '∞²', label: 'Years of Evolution', icon: 'Zap', color: 'from-orange-500 to-red-500' },
              { number: '∞³', label: 'Realities Unlocked', icon: 'Globe', color: 'from-green-500 to-emerald-500' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-lg"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <Icon name={stat.icon} size={32} className="text-white" />
                </div>
                <div className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-gray-300">
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
          <div className="text-sm text-gray-400 mb-2 font-medium">Enter the Quantum Realm</div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm"
          >
            <Icon name="ChevronDown" size={24} className="text-blue-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;