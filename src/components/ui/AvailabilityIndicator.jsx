import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const AvailabilityIndicator = () => {
  const [availability, setAvailability] = useState({
    status: 'available', // 'available', 'limited', 'unavailable\'nextAvailable: \'January 2025',
    slotsRemaining: 2
  });

  const getStatusConfig = () => {
    switch (availability.status) {
      case 'available':
        return {
          color: 'text-success',
          bgColor: 'bg-success/10',
          icon: 'CheckCircle',
          text: 'Available Now',
          pulse: true
        };
      case 'limited':
        return {
          color: 'text-warning',
          bgColor: 'bg-warning/10',
          icon: 'Clock',
          text: `${availability.slotsRemaining} slots left`,
          pulse: true
        };
      case 'unavailable':
        return {
          color: 'text-muted-foreground',
          bgColor: 'bg-muted',
          icon: 'Calendar',
          text: `Next: ${availability.nextAvailable}`,
          pulse: false
        };
      default:
        return {
          color: 'text-success',
          bgColor: 'bg-success/10',
          icon: 'CheckCircle',
          text: 'Available Now',
          pulse: true
        };
    }
  };

  const statusConfig = getStatusConfig();

  const handleAvailabilityClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed top-4 right-8 z-100 hidden lg:block">
      <button
        onClick={handleAvailabilityClick}
        className={`flex items-center space-x-2 px-3 py-2 rounded-full ${statusConfig.bgColor} ${statusConfig.color} transition-cta hover:scale-105 component-shadow`}
      >
        <div className="relative">
          <Icon 
            name={statusConfig.icon} 
            size={16} 
            className={statusConfig.pulse ? 'animate-pulse-glow' : ''}
          />
          {statusConfig.pulse && (
            <div className="absolute inset-0 rounded-full bg-current opacity-20 animate-ping"></div>
          )}
        </div>
        <span className="text-sm font-medium whitespace-nowrap">
          {statusConfig.text}
        </span>
      </button>
    </div>
  );
};

export default AvailabilityIndicator;