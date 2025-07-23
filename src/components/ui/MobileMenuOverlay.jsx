import React, { useEffect } from 'react';
import Icon from '../AppIcon';

const MobileMenuOverlay = ({ isOpen, onClose, sections, activeSection, onSectionClick }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSectionClick = (href, id) => {
    onSectionClick(href, id);
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-300 md:hidden"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 bg-background/95 nav-blur animate-fade-in">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="text-xl font-bold text-foreground">
              Navigation
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-cta"
              aria-label="Close menu"
            >
              <Icon name="X" size={24} className="text-foreground" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-8 overflow-y-auto">
            <div className="space-y-4">
              {sections.map(({ id, label, href }, index) => (
                <button
                  key={id}
                  onClick={() => handleSectionClick(href, id)}
                  className={`block w-full text-left text-lg font-medium py-4 px-6 rounded-xl transition-cta animate-fade-in ${
                    activeSection === id
                      ? 'text-primary bg-primary/10 border border-primary/20' :'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full transition-colors ${
                      activeSection === id ? 'bg-primary' : 'bg-muted-foreground'
                    }`} />
                    <span>{label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border">
            <div className="text-center text-sm text-muted-foreground">
              Swipe up to close or tap outside
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuOverlay;