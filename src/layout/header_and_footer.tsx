import React, { useState } from "react";
import logo from "../assets/logos/main_logo.png";
import { Link } from "react-router-dom";

interface MenuItem {
    label: string;
    href: string;
    isActive?: boolean;
}

interface Props {
    children: React.ReactNode;
    menuItems: MenuItem[];
}


const HeaderAndFooter: React.FC<Props> = ({ children, menuItems }): React.JSX.Element => {
    // hamburger menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const currentPath = window.location.pathname;

    return (
        <div className="information-page bg-gray-50 min-h-screen text-[18px]">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img
                            src={logo}
                            alt="TSUL Alumni Logo"
                            className="h-10"
                        />
                        <span className="font-bold text-lg tracking-wide text-gray-800">
                            TSUL ALUMNI
                        </span>
                    </div>

                    {/* Desktop Navigation - hidden on mobile */}
                    <nav className="hidden md:flex space-x-6 text-xl font-medium text-gray-700">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={`${currentPath === item.href ? "text-blue-600 font-bold" : "hover:text-blue-600"
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button - visible only on mobile */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Login Button - hidden on mobile */}
                    <div className="hidden md:block">
                        <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-2 rounded-md text-sm">
                            Login
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu - appears when hamburger is clicked */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200">
                        <nav className="flex flex-col px-6 py-4 space-y-4">
                            {menuItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className={`${currentPath === item.href ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
                                        } text-lg font-medium`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm w-full mt-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Login
                            </button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Main content */}
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8" >
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold text-lg mb-4">TSUL ALUMNI</h3>
                            <p className="text-gray-400 text-sm">
                                Bridging the gap between education and employment for TSUL students and alumni.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="/" className="hover:text-white">Home</a></li>
                                <li><a href="/InformationPage" className="hover:text-white">About alumni</a></li>
                                <li><a href="/Vacancies" className="hover:text-white">Jobs</a></li>
                                <li><a href="/Events" className="hover:text-white">News</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4">Resources</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white">CV Tips</a></li>
                                <li><a href="#" className="hover:text-white">Interview Guide</a></li>
                                <li><a href="#" className="hover:text-white">Career Advice</a></li>
                                <li><a href="#" className="hover:text-white">Employer Resources</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-4">Connect With Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-telegram-plane"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">
                                Subscribe to our newsletter for updates
                            </p>
                            <div className="mt-2 flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="px-3 py-2 text-sm text-gray-800 rounded-l focus:outline-none"
                                />
                                <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2 text-sm rounded-r">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 text-center">
                        <p>© {new Date().getFullYear()} Tashkent State University of Law. All rights reserved.</p>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default HeaderAndFooter;