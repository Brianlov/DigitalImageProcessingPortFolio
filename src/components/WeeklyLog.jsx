import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Cpu } from 'lucide-react';
import { weeks } from '../data/weeks';

import githubIcon from '../assets/github_icon.png';

const WeeklyLog = () => {
    const [expandedWeeks, setExpandedWeeks] = useState([]);
    const [showWeeks, setShowWeeks] = useState(false);

    const toggleWeek = (id) => {
        setExpandedWeeks(prev =>
            prev.includes(id)
                ? prev.filter(weekId => weekId !== id)
                : [...prev, id]
        );
    };

    return (
        <section className="w-full max-w-[800px] mx-auto">
            <div className="flex flex-col items-center mb-10 space-y-4">
                <h3 className="text-3xl md:text-4xl text-accent text-center animate-pulse" style={{ fontFamily: '"French Script MT", cursive' }}>
                    Let's Dive into my Learning Journey !
                </h3>
                <motion.button
                    onClick={() => setShowWeeks(!showWeeks)}
                    className="w-fit relative overflow-hidden group rounded-xl px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none"
                    whileTap={{ scale: 0.98 }}
                >
                    {/* Ripple Effect Background */}
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-active:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

                    <h2 className="text-3xl font-bold text-center text-white flex items-center justify-center gap-3 relative z-10 transition-transform duration-300 group-hover:scale-105">
                        <Cpu className="text-accent w-8 h-8" />
                        Learning Journey
                        <motion.div
                            animate={{ rotate: showWeeks ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-white" />
                        </motion.div>
                    </h2>
                </motion.button>
            </div>

            <AnimatePresence>
                {showWeeks && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col overflow-hidden"
                    >
                        {weeks.map((week) => (
                            <motion.div
                                key={week.id}
                                initial={false}
                                className="border-b border-gray-800"
                            >
                                <button
                                    onClick={() => toggleWeek(week.id)}
                                    className="w-full pt-8 pb-4 text-left focus:outline-none group transition-colors"
                                >
                                    {/* Header: Week Label & Title */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-bold text-black px-2 py-1 bg-accent rounded-md uppercase tracking-wider">
                                                Week {week.id}
                                            </span>
                                            <h3 className={`text-2xl font-bold transition-colors ${expandedWeeks.includes(week.id) ? 'text-accent' : 'text-white'}`}>
                                                {week.title.replace(/Week \d+: /, '')}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Summary Text */}
                                    <p className="text-gray-400 font-medium pl-1 mb-6">
                                        {week.summary}
                                    </p>

                                    {/* Image: ALWAYS VISIBLE, 600px Height, 800px Width (via container) */}
                                    <div className="w-full h-[600px] rounded-xl overflow-hidden bg-gray-900 border border-gray-800 mb-6 mx-auto relative group-hover:shadow-lg transition-all">
                                        <img
                                            src={week.image}
                                            alt="DIP Concept"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Chevron: Below the image */}
                                    <div className="flex justify-center w-full">
                                        <ChevronDown
                                            className={`w-8 h-8 text-gray-500 transition-transform duration-300 ${expandedWeeks.includes(week.id) ? 'rotate-180 text-accent' : 'group-hover:text-accent'}`}
                                        />
                                    </div>
                                </button>

                                {/* Collapsible Content: Only the details text */}
                                <AnimatePresence initial={false}>
                                    {expandedWeeks.includes(week.id) && (
                                        <motion.div
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto" },
                                                collapsed: { opacity: 0, height: 0 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="pb-8">
                                                <div className="bg-white/5 border border-white/10 text-white p-6 rounded-lg shadow-inner">
                                                    <div className="flex items-start gap-2 mb-3 text-accent text-sm font-bold uppercase tracking-wider">
                                                        <BookOpen size={16} className="mt-0.5" />
                                                        Learning Details
                                                    </div>
                                                    <div className="text-gray-300 leading-relaxed text-lg space-y-6 text-justify">
                                                        {week.details}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex justify-center mt-8 mb-4">
                <a
                    href="https://github.com/Brianlov/digital-image-processing-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                >
                    <img src={githubIcon} alt="GitHub Repository" className="w-10 h-10 bg-white rounded-full p-0.5" />
                </a>
            </div>
        </section >
    );
};

export default WeeklyLog;
