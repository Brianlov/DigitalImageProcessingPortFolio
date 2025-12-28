import bgImage from '../assets/background.jpg';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-primary text-slate-200 font-sans selection:bg-accent selection:text-primary overflow-x-hidden">
            {/* Custom Background Image */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                {/* Dark Overlay for content readability */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
                {children}
            </main>

            <footer className="relative z-10 text-center py-8 text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Brian | Digital Image Processing Portfolio</p>
            </footer>
        </div>
    );
};

export default Layout;
