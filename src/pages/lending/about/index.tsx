import React from "react";

const About: React.FC = () => {
    return (

        <div className="container mx-auto px-6 py-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">About Alumni Platform</h1>

            <div className="space-y-10">
                <h2 className="text-xl font-semibold text-blue-600 mb-4">Our Vision</h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our Alumni Platform is an innovative digital space designed to connect graduates, mentors, and students of higher education institutions across Uzbekistan and beyond. It enables professional networking, knowledge exchange, and career development in a secure and user-friendly environment.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-800 mb-2">For Students</h3>
                        <p>
                            Our Alumni Platform is a forward-thinking digital ecosystem created to foster meaningful connections between graduates,
                            current students, and academic professionals across Uzbekistan and around the world. It serves as a dynamic hub for
                            career advancement, mentorship opportunities, and lifelong learning.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-800 mb-2">For Employers</h3>
                        <p>
                            By joining this platform, alumni can showcase their professional journey, offer guidance to the next generation,
                            and stay updated on the latest news, events, and job opportunities. The platform is designed with an intuitive and
                            secure interface, making it easy to network, collaborate, and contribute to a thriving academic and professional community.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                        <p>
                            Whether you're seeking mentorship, looking to give back, or simply staying connected with your alma mater,
                            this platform is your trusted space to grow and engage.
                        </p>
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-blue-600 mb-4">Our Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-800 mb-2">For Students</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Career counseling and guidance</li>
                            <li>CV and cover letter assistance</li>
                            <li>Interview preparation</li>
                            <li>Internship opportunities</li>
                            <li>Job placement services</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-800 mb-2">For Employers</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Recruitment services</li>
                            <li>Internship programs</li>
                            <li>On-campus recruitment</li>
                            <li>Employer branding opportunities</li>
                            <li>Industry partnership programs</li>
                        </ul>
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-blue-600 mb-4">Our Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600">84%</p>
                        <p className="text-sm text-gray-600">Employment Rate</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600">20+</p>
                        <p className="text-sm text-gray-600">Partner Companies</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600">7+</p>
                        <p className="text-sm text-gray-600">Annual Events</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-3xl font-bold text-blue-600">100+</p>
                        <p className="text-sm text-gray-600">Jobs Posted</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;
