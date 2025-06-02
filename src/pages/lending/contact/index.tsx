import React from "react";

const Contact: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Contact Us</h1>

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
            </div>
        </div>

    );
};

export default Contact;
