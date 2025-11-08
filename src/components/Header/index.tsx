import { useState } from 'react';
import Logo from './logo.tsx';
import MenuIcon from './menuIcon.tsx';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full">
            <nav className="px-6 py-4 bg-zinc-900">
                <div className="flex justify-between items-center">
                    <Logo />
                    <MenuIcon isMenuOpen={isOpen} setIsMenuOpen={setIsOpen} />
                </div>
            </nav>
            
            {isOpen && (
                <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
                    <div className="flex flex-col items-center gap-8 text-6xl font-bold">
                        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#about-me" onClick={() => setIsOpen(false)}>About Me</a>
                    </div>
                </div>
            )}
        </header>
    );
};
