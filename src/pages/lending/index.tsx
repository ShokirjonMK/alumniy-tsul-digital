import React from "react";
import logo from "../../assets/logos/main_logo.png";

const InformationPage: React.FC = (): React.JSX.Element => {
  return (
    <div className="information-page bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto p-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="TSUL Alumni Logo"
              className="h-10"
            />
            <span className="font-semibold text-lg tracking-wide text-gray-800">
              TSUL ALUMNI
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <a href="/" className="hover:text-blue-600">
              About us
            </a>
            <a href="/InformationPage" className="text-blue-600 font-bold">
              Information
            </a>
            <a href="/Vacancies" className="hover:text-blue-600">
              Vacancies
            </a>
            <a href="/Events" className="hover:text-blue-600">
              Events
            </a>
            <a href="/Contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>

          {/* Login Button */}
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Information</h1>

          {/* Information Sections */}
          <div className="space-y-8">
            {/* About Section */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 mb-4">About Career Centre</h2>
              <div className="prose max-w-none text-gray-700">
                <p>
                  Tashkent State University of Law (TSUL) is the main higher educational and
                  scientific institution for educating, training and retraining of lawyers
                  in the Republic of Uzbekistan.
                </p>
              </div>
            </section>

            {/* Services Section */}
            <section>
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
            </section>

            {/* Statistics Section */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 mb-4">Our Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">95%</p>
                  <p className="text-sm text-gray-600">Employment Rate</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">200+</p>
                  <p className="text-sm text-gray-600">Partner Companies</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">50+</p>
                  <p className="text-sm text-gray-600">Annual Events</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">1000+</p>
                  <p className="text-sm text-gray-600">Jobs Posted</p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 mb-4">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Career Centre Location</h3>
                  <p className="text-gray-700">
                    Tashkent State University of Law<br />
                    100047, Sayilgokh str. 35<br />
                    Tashkent,Uzbekistan
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Contact Information</h3>
                  <p className="text-gray-700">
                    <strong>Email:</strong> info@tsul.uz<br />
                    <strong>Phone:</strong> +998 71-236-28-06<br />
                    <strong>Hours:</strong> 9:00 AM - 5:30 PM (Mon-Fri)
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
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
                <li><a href="/InformationPage" className="hover:text-white">Information</a></li>
                <li><a href="/Vacancies" className="hover:text-white">Vacancies</a></li>
                <li><a href="/Events" className="hover:text-white">Events</a></li>
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
      </footer>
    </div>
  );
};

export default InformationPage;