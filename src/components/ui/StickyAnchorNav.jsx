import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const StickyAnchorNav = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleSectionClick = (href, id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 nav-blur bg-background/80 border-b border-border transition-theme">
        <div className="max-w-8xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-xl font-bold text-foreground">
                Adarsh Pandit
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map(({ id, label, href }) => (
                <button
                  key={id}
                  onClick={() => handleSectionClick(href, id)}
                  className={`text-sm font-medium transition-cta font-mono px-3 py-2 rounded-md ${
                    activeSection === id
                      ? 'text-primary bg-primary/10' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-cta"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? 'X' : 'Menu'} 
                size={24} 
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-300 md:hidden">
          <div className="fixed inset-0 bg-background/95 nav-blur">
            <div className="flex flex-col h-full pt-16">
              <div className="flex-1 px-8 py-8">
                <div className="space-y-6">
                  {sections.map(({ id, label, href }) => (
                    <button
                      key={id}
                      onClick={() => handleSectionClick(href, id)}
                      className={`block w-full text-left text-lg font-medium py-3 px-4 rounded-lg transition-cta ${
                        activeSection === id
                          ? 'text-primary bg-primary/10' :'text-foreground hover:bg-muted'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyAnchorNav;