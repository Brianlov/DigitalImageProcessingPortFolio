import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import ZoomableImage from './ZoomableImage';

import groupPhoto from '../assets/DIP_GroupPhoto.jpeg';

const Reflection = () => {
    return (
        <section id="reflection" className="w-full max-w-[800px] mx-auto py-10 px-4 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-8 rounded-2xl bg-white/60 border border-slate-200 shadow-xl backdrop-blur-md overflow-hidden"
            >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles className="w-32 h-32 text-amber-500" />
                </div>

                <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Sparkles className="text-amber-500 w-6 h-6" />
                        <h2 className="text-2xl font-bold text-slate-900 tracking-wide">
                            Course Reflection
                        </h2>
                    </div>

                    {/* Group Photo */}
                    <div className="w-full mb-6 rounded-xl overflow-hidden shadow-md border border-slate-200">
                        <ZoomableImage
                            src={groupPhoto}
                            alt="DIP Class Group"
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <div className="space-y-4 text-slate-700 leading-relaxed text-justify">
                        <p>
                            Throughout the Digital Image Processing (DIP) course, it has offered a comprehensive look into how we manipulate and interpret visual data. Throughout the semester, I learned many essential techniques such as image restoration to fix degraded visuals, enhancement to improve clarity, geometric transformations for spatial adjustments, and compression to optimize storage and transmission.
                        </p>

                        <p>
                            Our lecturer, Dr. Nurulfajar, played a pivotal role in this experience, teaching with genuine passion and a wealth of knowledge that turned complex theories into an engaging and fun learning environment.
                        </p>

                        <p>
                            This course has given me a clearer perspective on how this field functions in the real world, making me realize that DIP is integrated into almost every aspect of our daily lives, from the cameras in our pockets to medical imaging. I've come to understand that it is an incredibly deep field; the more I learn, the more I realize there is a vast ocean of specialized knowledge within each subdomain waiting to be explored.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Reflection;
