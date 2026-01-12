import React from 'react';
import { motion } from 'framer-motion';
import avatarDip from '../assets/avatar_dip.png';


const Hero = () => {
    return (
        <section id="home" className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 min-h-[60vh] pt-20">
            {/* Hero Image Container Wrapper */}
            <div className="relative">


                {/* Large Hero Image - Front */}
                <motion.div
                    className="relative z-10 w-full max-w-[500px] md:max-w-[700px] aspect-square rounded-full overflow-hidden shadow-2xl border-2 border-gray-100"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={avatarDip}
                        alt="BrianOoi"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-2xl">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Hi, I am <span className="text-amber-500">Brian</span>.
                    </h1>
                </div>

                <div className="mt-2 w-fit">
                    <div className="overflow-hidden whitespace-nowrap animate-typewriter w-0">
                        <p className="text-2xl md:text-3xl text-slate-600 font-casual tracking-wide">
                            A Final Year Computer Engineering student studying in UTeM.
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="mt-6 p-6 rounded-lg bg-white/90 border-l-4 border-amber-500 shadow-2xl w-full backdrop-blur-md"
                >
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Introduction</h3>
                    <p className="text-slate-700 leading-relaxed text-base">
                        Hi everyone!

                        I’m Brian Ooi Teik Sheng can called me Brian.I am now diving into web app development and AI/ML stuff. I’m currently exploring how to combine both to build full-stack AI projects that actually provide big value.



                        I usually spend my free time reading, eating, or just sleeping. I really enjoy learning about the latest tech trends and experimenting with Node.js, Python, and React.



                        PEACE🤘
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
