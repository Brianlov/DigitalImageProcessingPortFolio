import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform, useSpring, useScroll, useVelocity } from 'framer-motion';
import ZoomableImage from './ZoomableImage';

// Import images
import introImg from '../PadletContribution/Introduction.png';
import sec1Img from '../PadletContribution/Section 1.png';
import sec2Img from '../PadletContribution/Section 2.png';
import sec3Img from '../PadletContribution/Section 3.png';
import sec4Img from '../PadletContribution/Section 4.png';
import sec5Img from '../PadletContribution/Section 5.png';
import sec6Img from '../PadletContribution/Section 6.png';
import sec7Img from '../PadletContribution/Section 7.png';
import sec8Img from '../PadletContribution/Section 8.png';
import midRefImg from '../PadletContribution/MidReflection.png';
import refCourseImg from '../PadletContribution/ReflectionCourse.png';

const PadletContribution = () => {
    // Original images list
    const originalImages = [
        { src: introImg, alt: 'Introduction' },
        { src: sec1Img, alt: 'Section 1' },
        { src: sec2Img, alt: 'Section 2' },
        { src: sec3Img, alt: 'Section 3' },
        { src: sec4Img, alt: 'Section 4' },
        { src: midRefImg, alt: 'Mid Reflection' },
        { src: sec5Img, alt: 'Section 5' },
        { src: sec6Img, alt: 'Section 6' },
        { src: sec7Img, alt: 'Section 7' },
        { src: sec8Img, alt: 'Section 8' },
        { src: refCourseImg, alt: 'Reflection Course' },
    ];

    // Duplicate images for infinite seamless loop (Triple duplication to be safe for drag)
    const images = [...originalImages, ...originalImages, ...originalImages];

    const containerRef = useRef(null);
    const contentRef = useRef(null);

    // X position of the marquee
    const x = useMotionValue(0);

    // State to track if we should pause the auto-scroll
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // Speed of auto-scroll
    const baseVelocity = -0.5; // Negative for Right to Left

    useAnimationFrame((t, delta) => {
        // If any interaction (paused, dragging, hovered, expanded), stop auto-scroll
        if (isDragging || isExpanded) return;

        let moveBy = baseVelocity * (delta / 1000) * 60; // Normalize speed

        // Add movement
        x.set(x.get() + moveBy);

        // Infinite Loop Logic
        // We repeat the content 3 times. We want to loop when we scroll past the first set.
        // Assuming uniform width, but we can measure dynamically.
        if (contentRef.current) {
            const contentWidth = contentRef.current.scrollWidth;
            const singleSetWidth = contentWidth / 3;

            // If we scrolled past the first set (moving left, x becomes negative)
            if (x.get() <= -singleSetWidth) {
                x.set(x.get() + singleSetWidth);
            }
            // If we dragged past the start (moving right, x becomes positive)
            else if (x.get() > 0) {
                x.set(x.get() - singleSetWidth);
            }
        }
    });

    return (
        <section id="padlet-contribution" className="w-full max-w-full overflow-hidden py-12">
            <div className="flex flex-col items-center mb-8">
                <h3 className="text-3xl md:text-4xl text-amber-500 text-center animate-pulse" style={{ fontFamily: '"French Script MT", cursive' }}>
                    Padlet Contributions
                </h3>
            </div>

            {/* Marquee Container */}
            <div
                ref={containerRef}
                className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <motion.div
                    ref={contentRef}
                    className="flex gap-6 w-max"
                    style={{ x, paddingLeft: '1rem', paddingRight: '1rem' }}
                    drag="x"
                    dragConstraints={{ left: -10000, right: 10000 }} // Loose constraints to allow free movement, we handle loop manually
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[300px] md:w-[400px] pointer-events-auto"
                            // Prevent drag propagation when interacting with ZoomableImage
                            onPointerDownCapture={(e) => {
                                // Allow drag on the container, but we need to ensure click works too
                            }}
                        >
                            <div className="bg-white/5 p-2 rounded-xl border border-white/10 hover:border-amber-500/50 transition-colors duration-300">
                                <ZoomableImage
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-[400px] object-cover object-top rounded-lg"
                                    onOpen={() => setIsExpanded(true)}
                                    onClose={() => setIsExpanded(false)}
                                />
                                <p className="text-center text-slate-400 mt-2 text-sm font-medium">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fade Overlay for edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
};

export default PadletContribution;
