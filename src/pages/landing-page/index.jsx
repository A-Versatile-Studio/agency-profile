import React from 'react';
import StickyAnchorNav from '../../components/ui/StickyAnchorNav';
import ThemeToggle from '../../components/ui/ThemeToggle';
import AvailabilityIndicator from '../../components/ui/AvailabilityIndicator';
import EnhancedHeroSection from './components/EnhancedHeroSection';
import ProblemSection from './components/ProblemSection';
import SkillsShowcase from './components/SkillsShowcase';
import PortfolioGrid from './components/PortfolioGrid';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import TerminalInterface from './components/TerminalInterface';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-theme">
      {/* Navigation */}
      <StickyAnchorNav />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Availability Indicator */}
      {/* <AvailabilityIndicator /> */}

      {/* Main Content */}
      <main>
        {/* Enhanced Hero Section */}
        <EnhancedHeroSection />

        {/* Problem Agitation Section */}
        <ProblemSection />

        {/* Skills Showcase */}
        <SkillsShowcase />

        {/* Portfolio Grid */}
        <PortfolioGrid />

        {/* Testimonials */}
        <TestimonialsCarousel />

        {/* Services */}
        <ServicesSection />

        {/* Contact */}
        <ContactSection />

        {/* Terminal Interface */}
        {/* <TerminalInterface /> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;