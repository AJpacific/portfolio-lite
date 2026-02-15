import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Security', href: '#security' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    closeMenu();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple ${isScrolled
          ? 'backdrop-apple bg-white/80 border-b border-apple-gray-100'
          : 'bg-white/0'
          }`}
      >
        <div className="max-w-apple-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link
              to="/"
              className="text-apple-gray-800 font-display font-bold text-xl tracking-tight hover:text-apple-gray-600 transition-colors duration-300"
              onClick={closeMenu}
            >
              AJ
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-body-sm text-apple-gray-600 hover:text-apple-gray-800 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="mailto:aj4ashutoshjha@gmail.com"
                className="btn-apple btn-apple-primary text-sm px-5 py-2"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 -mr-2 text-apple-gray-600 hover:text-apple-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <Icon
                name={isMenuOpen ? 'X' : 'Menu'}
                size={22}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-apple-spring lg:hidden ${isMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-white/95 backdrop-apple"
          onClick={closeMenu}
        />

        {/* Menu Content */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          {navigationItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-3xl font-semibold text-apple-gray-800 hover:text-apple-blue transition-all duration-300 ${isMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
                }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 60}ms` : '0ms',
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="mailto:aj4ashutoshjha@gmail.com"
            onClick={closeMenu}
            className={`btn-apple btn-apple-primary mt-4 transition-all duration-300 ${isMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
              }`}
            style={{
              transitionDelay: isMenuOpen ? `${navigationItems.length * 60}ms` : '0ms',
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;