import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const scrollContainer = document.getElementById('main-frame');

        const handleScroll = () => {
            if (scrollContainer) {
                const offset = scrollContainer.scrollTop;
                if (offset > 50) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }
        };

        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleNavClick = (link) => {
        if (link.action) {
            link.action();
        } else if (link.id) {
            const element = document.getElementById(link.id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { name: 'Home', action: () => window.location.reload() },
        { name: 'About Me', id: 'home' },
        { name: 'Reflection', id: 'reflection' },
        { name: 'Learning Journey', id: 'weekly-log' },
    ];

    return (
        <header
            className={`sticky top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-slate-50/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo / Name */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-lg font-medium text-slate-600 tracking-wider cursor-pointer font-sans hover:text-slate-900 transition-colors"
                    onClick={() => handleNavClick({ id: 'home' })}
                >
                    Project &gt; Digital Image Processing Portfolio
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.button
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => handleNavClick(link)}
                            className="text-slate-600 hover:text-slate-900 font-medium text-lg transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                        </motion.button>
                    ))}
                </nav>

                {/* Mobile Menu Icon (Placeholder for now, can be expanded) */}
                <div className="md:hidden">
                    {/* Simple Hamburger icon if needed, but keeping it simple for now as requested 'like that above' which implies desktop view */}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
