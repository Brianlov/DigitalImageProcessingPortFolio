import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ZoomableImage = ({ src, alt, className, onOpen, onClose }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleOpen = () => {
        setIsExpanded(true);
        if (onOpen) onOpen();
    };

    const handleClose = () => {
        setIsExpanded(false);
        if (onClose) onClose();
    };

    return (
        <>
            {/* Thumbnail */}
            <div
                className={`relative cursor-pointer group ${className ? className.replace('object-cover', '') : ''}`}
                onClick={handleOpen}
            >
                <img
                    src={src}
                    alt={alt}
                    className={`${className || ''} w-full h-full object-cover`}
                />
            </div>

            {/* Full Screen Overlay - Rendered via Portal */}
            {createPortal(
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                            onClick={handleClose}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-[10000]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClose();
                                }}
                            >
                                <X size={32} />
                            </button>

                            {/* Image */}
                            <motion.img
                                src={src}
                                alt={alt}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default ZoomableImage;
