import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';

const Quiz = ({ question, options, correctAnswerIndex, explanation }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleOptionClick = (index) => {
        if (selectedAnswer !== null && selectedAnswer === index) return; // Prevent double clicking same
        setSelectedAnswer(index);

        if (index === correctAnswerIndex) {
            setShowSuccess(true);
        }
    };

    const handleTryAgain = (e) => {
        e.stopPropagation();
        setSelectedAnswer(null);
    };

    return (
        <div className="border border-slate-300 p-6 rounded-xl bg-slate-50 backdrop-blur-sm mt-8 shadow-inner">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="bg-amber-500 text-white text-sm px-2 py-0.5 rounded font-extrabold">QUIZ</span>
                {question}
            </h3>

            <div className="space-y-3">
                {options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === correctAnswerIndex;

                    // Button styling state
                    let buttonStyle = "bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-300";
                    if (isSelected) {
                        if (isCorrect) {
                            buttonStyle = "bg-green-100 border-green-500 text-green-700";
                        } else {
                            buttonStyle = "bg-red-100 border-red-500 text-red-700";
                        }
                    }

                    return (
                        <div key={index} className="flex items-center gap-3">
                            <button
                                onClick={() => handleOptionClick(index)}
                                disabled={selectedAnswer === correctAnswerIndex} // Disable all if correct answer found
                                className={`flex-1 text-left px-5 py-4 rounded-lg border transition-all duration-200 flex items-center justify-between group ${buttonStyle}`}
                            >
                                <span className="font-medium">{option}</span>
                                {isSelected && (
                                    isCorrect
                                        ? <CheckCircle className="text-green-600" />
                                        : <XCircle className="text-red-600" />
                                )}
                            </button>

                            {/* Try Again Button for Wrong Answer */}
                            <AnimatePresence>
                                {isSelected && !isCorrect && (
                                    <motion.button
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        onClick={handleTryAgain}
                                        className="px-4 py-4 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-lg border border-slate-300 transition-colors flex items-center gap-2 whitespace-nowrap"
                                    >
                                        <RefreshCw size={18} />
                                        <span className="text-sm font-bold">Try Again</span>
                                    </motion.button>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>

            {/* Success Popup */}
            <AnimatePresence>
                {showSuccess && (
                    <div className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white border-2 border-amber-500 p-8 rounded-2xl shadow-2xl flex flex-col items-center gap-4 text-center pointer-events-auto max-w-md mx-4"
                        >
                            <motion.div
                                initial={{ rotate: -180, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                            >
                                <Trophy className="w-16 h-16 text-amber-500 mb-2" />
                            </motion.div>

                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-1">Correct!</h2>
                                <p className="text-slate-600 text-pretty">{explanation || "You mastered this concept!"}</p>
                            </div>

                            <button
                                onClick={() => setShowSuccess(false)}
                                className="mt-4 px-6 py-2 bg-accent text-black font-bold rounded-full hover:bg-accent/80 transition-colors"
                            >
                                Continue Learning
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Quiz;
