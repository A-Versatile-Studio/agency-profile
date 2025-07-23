import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TerminalInterface = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [isInteractive, setIsInteractive] = useState(false);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const initialCommands = [
    { command: 'neofetch', delay: 1000 },
    { command: 'whoami', delay: 2000 },
    { command: 'ls -la ~/projects', delay: 3000 },
    { command: 'cat ~/.config/about.txt', delay: 4000 },
    { command: 'systemctl status portfolio.service', delay: 5000 },
    { command: 'echo "Ready for collaboration..."', delay: 6000 }
  ];

  const commandOutputs = {
    neofetch: {
      output: [
        "                   -`                    adarsh@arch-dev",
        "                  .o+`                   --------------",
        "                 `ooo/                   OS: Arch Linux x86_64",
        "                `+oooo:                  Host: Developer Workstation",
        "               `+oooooo:                 Kernel: 6.6.8-arch1-1",
        "               -+oooooo+:                Uptime: 7 years, 365 days",
        "             `/:-:++oooo+:               Packages: 1247 (pacman)",
        "            `/++++/+++++++:              Shell: zsh 5.9",
        "           `/++++++++++++++:             Resolution: 3840x2160",
        "          `/+++ooooooooooooo/`           DE: Hyprland",
        "         ./ooosssso++osssssso+`          WM: Hyprland",
        "        .oossssso-````/ossssss+`         Theme: Arc-Dark",
        "       -osssssso.      :ssssssso.        Icons: Papirus-Dark",
        "      :osssssss/        osssso+++.       Terminal: Alacritty",
        "     /ossssssss/        +ssssooo/-       CPU: Intel i9-13900K (24) @ 5.8GHz",
        "   `/ossssso+/:-        -:/+osssso+-     GPU: NVIDIA GeForce RTX 4090",
        "  `+sso+:-`                 `.-/+oso:    Memory: 32768MiB",
        " `++:.                           `-/+/   ",
        " .`                                 `/"
      ]
    },
    whoami: {
      output: [
        "Full-Stack Developer & System Architect",
        "Passionate about elegant code and innovative solutions",
        "7+ years of experience across 15+ technology domains",
        "Arch Linux enthusiast and open-source contributor"
      ]
    },
    'ls -la ~/projects': {
      output: [
        "total 847",
        "drwxr-xr-x 12 adarsh adarsh  4096 Jul 15 18:30 .",
        "drwxr-xr-x  8 adarsh adarsh  4096 Jul 15 18:30 ..",
        "drwxr-xr-x  8 adarsh adarsh  4096 Jul 15 18:30 .git",
        "drwxr-xr-x  3 adarsh adarsh  4096 Jul 15 18:30 ai-content-generator/",
        "drwxr-xr-x  3 adarsh adarsh  4096 Jul 15 18:30 blockchain-defi-platform/",
        "drwxr-xr-x  3 adarsh adarsh  4096 Jul 15 18:30 e-commerce-platform/",
        "drwxr-xr-x  3 adarsh adarsh  4096 Jul 15 18:30 healthcare-mobile-app/",
        "drwxr-xr-x  3 adarsh adarsh  4096 Jul 15 18:30 iot-dashboard/",
        "drwxr-xr-x  3 adarsh adarsh  4096 Jul 15 18:30 ml-analytics-dashboard/",
        "drwxr-xr-x  3 adarsh adarsh  4096 Jul 15 18:30 project-management-saas/",
        "drwxr-xr-x  3 adarsh adarsh  4096 Jul 15 18:30 real-estate-platform/",
        "drwxr-xr-x  3 adarsh adarsh  4096 Jul 15 18:30 social-media-app/",
        "-rw-r--r--  1 adarsh adarsh  1247 Jul 15 18:30 README.md"
      ]
    },
    'cat ~/.config/about.txt': {
      output: [
        "================================",
        "        DEVELOPER PROFILE        ",
        "================================",
        "",
        "Name: Adarsh",
        "Role: Full-Stack Developer & System Architect",
        "Experience: 7+ Years",
        "Location: Remote (Primarily based in India)",
        "",
        "Core Technologies:",
        "• Frontend: React, Next.js, Vue.js, TypeScript",
        "• Backend: Node.js, Python, Go, Java",
        "• Mobile: React Native, Flutter",
        "• Database: PostgreSQL, MongoDB, Redis",
        "• Cloud: AWS, GCP, Azure, Docker, Kubernetes",
        "• AI/ML: TensorFlow, PyTorch, OpenAI API",
        "",
        "Philosophy: \'Clean code is not written by following a set of rules.",
        "You don't become a software craftsman by learning a list of heuristics.",
        "Professionalism and craftsmanship come from values that drive disciplines.'",
        "",
        "Current Focus: Building scalable, maintainable, and beautiful applications",
        "that solve real-world problems with cutting-edge technology."
      ]
    },
    'systemctl status portfolio.service': {
      output: [
        "● portfolio.service - Adarsh\'s Portfolio Website",
        "     Loaded: loaded (/etc/systemd/system/portfolio.service; enabled; vendor preset: enabled)",
        "     Active: active (running) since Mon 2024-01-01 00:00:00 UTC; 7 years ago",
        "       Docs: https://github.com/adarsh-dev/portfolio",
        "   Main PID: 1337 (node)",
        "      Tasks: 24 (limit: 32768)",
        "     Memory: 256.0M",
        "        CPU: 2min 30.847s",
        "     CGroup: /system.slice/portfolio.service",
        "             └─1337 node /opt/portfolio/server.js",
        "",
        "Jul 15 18:30:00 arch-dev systemd[1]: Started Adarsh's Portfolio Website.",
        "Jul 15 18:30:00 arch-dev portfolio[1337]: Portfolio server started on port 3000",
        "Jul 15 18:30:00 arch-dev portfolio[1337]: ✓ All services initialized successfully",
        "Jul 15 18:30:00 arch-dev portfolio[1337]: ✓ Database connections established",
        "Jul 15 18:30:00 arch-dev portfolio[1337]: ✓ Ready to accept connections",
        "",
        "Status: ✅ OPERATIONAL - Ready for new projects!"
      ]
    },
    'echo "Ready for collaboration..."': {
      output: ["Ready for collaboration..."]
    }
  };

  const availableCommands = {
    help: {
      description: "Show available commands",
      output: [
        "Available commands:",
        "  help          - Show this help message",
        "  about         - Display detailed information about me",
        "  skills        - List technical skills and expertise",
        "  projects      - Show recent projects",
        "  contact       - Get contact information",
        "  social        - Show social media links",
        "  resume        - Download my resume",
        "  clear         - Clear the terminal",
        "  exit          - Exit interactive mode",
        "",
        "Pro tip: Use tab completion and arrow keys for command history!"
      ]
    },
    about: {
      description: "Display detailed information",
      output: [
        "Full-Stack Developer & System Architect",
        "",
        "I'm a passionate developer with 7+ years of experience building",
        "scalable web applications, mobile apps, and AI-powered solutions.",
        "",
        "My journey started with a curiosity about how things work under",
        "the hood, leading me to master everything from frontend frameworks",
        "to cloud infrastructure, from database optimization to machine",
        "learning algorithms.",
        "",
        "When I'm not coding, you'll find me contributing to open-source",
        "projects, exploring the latest tech trends, or optimizing my",
        "Arch Linux setup for maximum productivity."
      ]
    },
    skills: {
      description: "List technical skills",
      output: [
        "Technical Skills & Expertise:",
        "",
        "Frontend Development     ████████████████████ 98%",
        "Backend Development      ████████████████████ 92%",
        "Mobile Development       ████████████████████ 88%",
        "DevOps & Cloud          ████████████████████ 85%",
        "AI & Machine Learning   ████████████████████ 82%",
        "Database Management     ████████████████████ 90%",
        "UI/UX Design            ████████████████████ 95%",
        "Blockchain & Web3       ████████████████████ 78%",
        "",
        "Languages: JavaScript, TypeScript, Python, Go, Java, Rust, Solidity",
        "Frameworks: React, Next.js, Node.js, Express, Django, Flutter",
        "Databases: PostgreSQL, MongoDB, Redis, Elasticsearch",
        "Cloud: AWS, GCP, Azure, Docker, Kubernetes, Terraform",
        "Tools: Git, Linux, Vim, VS Code, Figma, Postman"
      ]
    },
    projects: {
      description: "Show recent projects",
      output: [
        "Recent Projects:",
        "",
        "1. E-Commerce Platform (2024)",
        "   - Full-stack solution with AI recommendations",
        "   - Tech: React, Node.js, PostgreSQL, AWS",
        "   - Result: 300% increase in conversion rate",
        "",
        "2. AI Content Generator (2024)",
        "   - GPT-powered content creation platform",
        "   - Tech: Python, OpenAI API, FastAPI, React",
        "   - Result: 1M+ content pieces generated",
        "",
        "3. DeFi Trading Platform (2023)",
        "   - Decentralized trading with automated market making",
        "   - Tech: Solidity, Web3.js, React, Ethereum",
        "   - Result: $10M+ in trading volume",
        "",
        "4. Healthcare Mobile App (2023)",
        "   - HIPAA-compliant telemedicine solution",
        "   - Tech: React Native, WebRTC, Firebase",
        "   - Result: 50,000+ active users",
        "",
        "Want to see more? Check out my portfolio above!"
      ]
    },
    contact: {
      description: "Get contact information",
      output: [
        "Contact Information:",
        "",
        "📧 Email: adarsh@example.com",
        "📱 Phone: +1 (555) 123-4567",
        "🌐 Website: https://adarsh-dev.com",
        "📍 Location: Remote (Available worldwide)",
        "",
        "Response Time: < 24 hours",
        "Availability: Currently accepting new projects",
        "",
        "Feel free to reach out for:",
        "• Project consultation",
        "• Technical collaboration",
        "• Code review",
        "• Mentorship",
        "• Open source contributions"
      ]
    },
    social: {
      description: "Show social media links",
      output: [
        "Social Media & Professional Links:",
        "",
        "💼 LinkedIn: https://linkedin.com/in/adarsh-dev",
        "🐙 GitHub: https://github.com/adarsh-dev",
        "🐦 Twitter: https://twitter.com/adarsh_dev",
        "📝 Blog: https://blog.adarsh-dev.com",
        "🎥 YouTube: https://youtube.com/@adarsh-dev",
        "📚 Medium: https://medium.com/@adarsh-dev",
        "",
        "📊 GitHub Stats:",
        "• 1,247 contributions this year",
        "• 89 repositories",
        "• 156 stars earned",
        "• 23 open source projects"
      ]
    },
    resume: {
      description: "Download resume",
      output: [
        "📄 Resume Download:",
        "",
        "Generating download link...",
        "✓ Resume compiled successfully",
        "",
        "Download: https://adarsh-dev.com/resume.pdf",
        "",
        "Last updated: July 15, 2025",
        "Format: PDF (A4, 2 pages)",
        "Size: 1.2 MB",
        "",
        "The resume includes:",
        "• Professional summary",
        "• Technical skills matrix",
        "• Project highlights",
        "• Work experience",
        "• Education & certifications",
        "• Open source contributions"
      ]
    }
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Start the initial command sequence
    const startSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      for (let i = 0; i < initialCommands.length; i++) {
        await new Promise(resolve => setTimeout(resolve, initialCommands[i].delay));
        setCurrentLine(i);
        setIsTyping(true);
        
        // Type the command
        const command = initialCommands[i].command;
        for (let j = 0; j <= command.length; j++) {
          await new Promise(resolve => setTimeout(resolve, 50));
          setInputValue(command.slice(0, j));
        }
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Add to history
        setTerminalHistory(prev => [...prev, {
          id: Date.now() + i,
          command: command,
          output: commandOutputs[command]?.output || [`Command '${command}' executed successfully.`],
          timestamp: new Date().toLocaleTimeString()
        }]);
        
        setInputValue('');
        setIsTyping(false);
        await new Promise(resolve => setTimeout(resolve, 800));
      }
      
      // Enable interactive mode
      setIsInteractive(true);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    
    startSequence();
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalHistory, inputValue]);

  const handleCommand = (command) => {
    const cmd = command.trim().toLowerCase();
    
    if (cmd === 'clear') {
      setTerminalHistory([]);
      return;
    }
    
    if (cmd === 'exit') {
      setIsInteractive(false);
      return;
    }
    
    let output = ["Command not found. Type \'help\' for available commands."];
    
    if (availableCommands[cmd]) {
      output = availableCommands[cmd].output;
    }
    
    setTerminalHistory(prev => [...prev, {
      id: Date.now(),
      command: command,
      output: output,
      timestamp: new Date().toLocaleTimeString(),
      isUser: true
    }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && isInteractive) {
      handleCommand(inputValue);
      setInputValue('');
    }
  };

  const TerminalWindow = () => (
    <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm font-medium ml-4">adarsh@arch-dev:~</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Terminal" size={16} className="text-gray-400" />
          <span className="text-gray-400 text-sm">Alacritty</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="bg-gray-900 p-4 h-96 overflow-y-auto font-mono text-sm"
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        {/* Terminal History */}
        <AnimatePresence>
          {terminalHistory.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              {/* Command Line */}
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-green-400">adarsh@arch-dev</span>
                <span className="text-gray-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-400">$</span>
                <span className="text-gray-100">{entry.command}</span>
                {entry.isUser && (
                  <span className="text-gray-500 text-xs ml-auto">{entry.timestamp}</span>
                )}
              </div>
              
              {/* Command Output */}
              <div className="pl-4 border-l-2 border-gray-700 ml-2">
                {entry.output.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: index * 0.05 }}
                    className="text-gray-300 whitespace-pre-wrap"
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Current Input Line */}
        {isInteractive && (
          <div className="flex items-center space-x-2">
            <span className="text-green-400">adarsh@arch-dev</span>
            <span className="text-gray-400">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent text-gray-100 outline-none flex-1 caret-green-400"
              placeholder={isInteractive ? "Type 'help' for available commands..." : ""}
              autoFocus
            />
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              className="w-2 h-5 bg-green-400"
            />
          </div>
        )}

        {/* Typing Animation */}
        {isTyping && !isInteractive && (
          <div className="flex items-center space-x-2">
            <span className="text-green-400">adarsh@arch-dev</span>
            <span className="text-gray-400">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-400">$</span>
            <span className="text-gray-100">{inputValue}</span>
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              className="w-2 h-5 bg-green-400"
            />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,197,94,0.1)_50%,transparent_75%)] bg-[size:20px_20px] animate-pulse"></div>
        
        {/* Floating Code Blocks */}
        <div className="absolute top-10 left-10 opacity-20">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <code className="text-green-400 text-sm">sudo pacman -S awesome</code>
          </div>
        </div>
        
        <div className="absolute top-32 right-20 opacity-20">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <code className="text-blue-400 text-sm">vim ~/.vimrc</code>
          </div>
        </div>
        
        <div className="absolute bottom-32 left-20 opacity-20">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <code className="text-purple-400 text-sm">git push origin main</code>
          </div>
        </div>

        {/* Arch Linux Logo SVG */}
        <div className="absolute top-20 right-10 opacity-10">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-blue-400">
            <path
              d="M60 10 L100 100 L20 100 Z"
              fill="currentColor"
              opacity="0.3"
            />
            <path
              d="M60 10 L90 85 L30 85 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.5"
            />
            <circle cx="60" cy="50" r="8" fill="currentColor" opacity="0.7" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Icon name="Terminal" size={20} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Interactive{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Terminal
              </span>
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Welcome to my Arch Linux terminal. Watch the automated setup, then try interactive commands 
            like <code className="bg-gray-800 px-2 py-1 rounded text-green-400">help</code>, 
            <code className="bg-gray-800 px-2 py-1 rounded text-green-400 ml-1">about</code>, or 
            <code className="bg-gray-800 px-2 py-1 rounded text-green-400 ml-1">projects</code>
          </p>
        </motion.div>

        {/* Terminal Interface */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <TerminalWindow />
        </motion.div>

        {/* Terminal Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: 'Command',
              title: 'Interactive Commands',
              description: 'Try various commands to explore my background, skills, and projects in a unique way.'
            },
            {
              icon: 'Code',
              title: 'Arch Linux Theme',
              description: 'Authentic terminal experience with Arch Linux styling and command structure.'
            },
            {
              icon: 'Zap',
              title: 'Real-time Responses',
              description: 'Dynamic command processing with realistic typing animations and system feedback.'
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={feature.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you enjoyed this terminal experience, imagine what we could create together. 
              Let's discuss your next project and turn your ideas into reality.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start a Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalInterface;