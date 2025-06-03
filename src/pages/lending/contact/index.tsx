import React from "react";

const Contact: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Contact</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Email:</strong> info@tsul.uz<br />
                        <strong>Phone:</strong> +998 71-236-28-06<br />
                        <strong>Hours:</strong> 9:00 AM - 5:30 PM (Mon-Fri)
                    </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Career Centre Location</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Tashkent State University of Law<br />
                        100047, Sayilgokh str. 35<br />
                        Tashkent, Uzbekistan
                    </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-gray-200  md:col-span-2">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h2>
                    <div className="flex justify-center space-x-6 text-2xl text-gray-600">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://t.me/tsulcareer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            <i className="fab fa-telegram-plane"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Contact;
