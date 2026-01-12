import React from 'react';
import bgImage from '../assets/background.png';
import BrushNoise from './NoiseReveal';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const [isNoiseActive, setNoiseActive] = React.useState(false);

    return (
        <div className="h-screen w-screen overflow-hidden bg-primary relative flex items-center justify-center font-sans selection:bg-accent selection:text-primary">
            {/* Custom Background Image - Full Screen Behind Frame */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <BrushNoise isActive={isNoiseActive} onComplete={() => setNoiseActive(false)} />

            {/* The Big Frame */}
            {/* The Big Frame */}
            <div className="relative z-10 w-[95vw] h-[92vh] md:w-[90vw] md:h-[90vh] bg-gradient-to-br from-slate-200 via-slate-500 to-black rounded-[2.5rem] overflow-hidden shadow-2xl">

                {/* Inner White Frame */}
                <div className="absolute inset-[8px] bg-white rounded-[2.1rem] overflow-hidden flex flex-col text-slate-800 z-10">
                    {/* Scrollable Content Container */}
                    <div id="main-frame" className="flex-1 overflow-y-auto scroll-smooth scrollbar-hide">
                        <Navbar />

                        <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
                            {children}
                        </main>

                        <footer className="relative z-10 text-center py-8 text-slate-500 text-sm">
                            <p>&copy; {new Date().getFullYear()} Brian | Digital Image Processing Portfolio</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
