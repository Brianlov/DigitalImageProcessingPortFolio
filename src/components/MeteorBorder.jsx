import React, { useEffect, useRef, useState } from 'react';

const MeteorBorder = ({ duration = 4000, color = 'white', trailLength = 100 }) => {
    const containerRef = useRef(null);
    const meteorRef = useRef(null);
    const requestRef = useRef();
    const startTimeRef = useRef();

    // Border radius in pixels (2.5rem approx 40px)
    // We can try to measure it, or hardcode if we know the class
    const RADIUS = 40;

    const animate = (time) => {
        if (!startTimeRef.current) startTimeRef.current = time;
        const progress = ((time - startTimeRef.current) % duration) / duration;

        if (containerRef.current && meteorRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect();

            // Adjust dimensions to account for the center of the border path
            // If the meteor sits on the border, and border is simulated by padding,
            // we want coordinates relative to the TOP-LEFT of the container.

            // Perimter Calculation
            const straightWidth = width - 2 * RADIUS;
            const straightHeight = height - 2 * RADIUS;
            const perimeter = 2 * straightWidth + 2 * straightHeight + 2 * Math.PI * RADIUS;

            const currentDist = progress * perimeter;

            let x = 0, y = 0, angle = 0;

            // Logic to determine segment
            // 1. Top Edge (Left -> Right)
            if (currentDist < straightWidth) {
                x = RADIUS + currentDist;
                y = 0;
                angle = 0;
            }
            // 2. Top-Right Corner
            else if (currentDist < straightWidth + (Math.PI * RADIUS / 2)) {
                const arcDist = currentDist - straightWidth;
                const arcAngle = (arcDist / (Math.PI * RADIUS / 2)) * (Math.PI / 2); // 0 to 90 deg
                x = width - RADIUS + RADIUS * Math.sin(arcAngle);
                y = RADIUS - RADIUS * Math.cos(arcAngle);
                angle = arcAngle * (180 / Math.PI);
            }
            // 3. Right Edge (Top -> Bottom)
            else if (currentDist < straightWidth + (Math.PI * RADIUS / 2) + straightHeight) {
                const lineDist = currentDist - (straightWidth + (Math.PI * RADIUS / 2));
                x = width;
                y = RADIUS + lineDist;
                angle = 90;
            }
            // 4. Bottom-Right Corner
            else if (currentDist < straightWidth + Math.PI * RADIUS + straightHeight) {
                const arcDist = currentDist - (straightWidth + (Math.PI * RADIUS / 2) + straightHeight);
                const arcAngle = (arcDist / (Math.PI * RADIUS / 2)) * (Math.PI / 2); // 0 to 90
                x = width - RADIUS + RADIUS * Math.cos(arcAngle);
                y = height - RADIUS + RADIUS * Math.sin(arcAngle);
                angle = 90 + arcAngle * (180 / Math.PI);
            }
            // 5. Bottom Edge (Right -> Left)
            else if (currentDist < 2 * straightWidth + Math.PI * RADIUS + straightHeight) {
                const lineDist = currentDist - (straightWidth + Math.PI * RADIUS + straightHeight);
                x = width - RADIUS - lineDist;
                y = height;
                angle = 180;
            }
            // 6. Bottom-Left Corner
            else if (currentDist < 2 * straightWidth + 1.5 * Math.PI * RADIUS + straightHeight) {
                const arcDist = currentDist - (2 * straightWidth + Math.PI * RADIUS + straightHeight);
                const arcAngle = (arcDist / (Math.PI * RADIUS / 2)) * (Math.PI / 2);
                x = RADIUS - RADIUS * Math.sin(arcAngle);
                y = height - RADIUS + RADIUS * Math.cos(arcAngle);
                angle = 180 + arcAngle * (180 / Math.PI);
            }
            // 7. Left Edge (Bottom -> Top)
            else if (currentDist < 2 * straightWidth + 1.5 * Math.PI * RADIUS + 2 * straightHeight) {
                const lineDist = currentDist - (2 * straightWidth + 1.5 * Math.PI * RADIUS + straightHeight);
                x = 0;
                y = height - RADIUS - lineDist;
                angle = 270;
            }
            // 8. Top-Left Corner
            else {
                const arcDist = currentDist - (2 * straightWidth + 1.5 * Math.PI * RADIUS + 2 * straightHeight);
                const arcAngle = (arcDist / (Math.PI * RADIUS / 2)) * (Math.PI / 2);
                x = RADIUS - RADIUS * Math.cos(arcAngle);
                y = RADIUS - RADIUS * Math.sin(arcAngle);
                angle = 270 + arcAngle * (180 / Math.PI);
            }

            meteorRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
        }

        requestRef.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [duration]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none rounded-[2.5rem]">
            {/* Meteor Head & Tail */}
            <div
                ref={meteorRef}
                className="absolute top-0 left-0 w-0 h-0 flex items-center justify-center will-change-transform"
                style={{ zIndex: 20 }}
            >
                {/* The Meteor Group - Rotated by logic above */}
                {/* We need to offset the visualization such that (0,0) is center of head */}
                <div className="relative">
                    {/* Head */}
                    <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.9)] relative z-10"
                        style={{ transform: 'translate(-50%, -50%)' }}
                    ></div>

                    {/* Tail - Trails behind (which is LEFT when angle is 0/moving right) */}
                    <div className="absolute top-1/2 right-0 w-[200px] h-[4px] bg-gradient-to-r from-transparent via-slate-400 to-white origin-right -translate-y-1/2 -translate-x-[2px] blur-[1px]"></div>
                </div>
            </div>
        </div>
    );
};

export default MeteorBorder;
