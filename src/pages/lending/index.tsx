import React from "react";
import banner from "../../assets/undraw/inteview.svg"
import HeaderAndFooter from "../../layout/header_and_footer";
import Jobs from "./jobs";
import News from "./news";
import About from "./about";
import Contact from "./contact";

const InformationPage: React.FC = (): React.JSX.Element => {

  return (
    <div className="information-page bg-gray-50 min-h-screen text-[18px]">
      <HeaderAndFooter
        menuItems={[
          { label: "Home", href: "#home" },
          { label: "Jobs", href: "#jobs" },
          { label: "News", href: "#news" },
          { label: "About Alumni", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}>


        {/* Home section banner */}
        <section id="home" className="bg-gray-50 p-6 mb-8 w-full h-screen flex items-center relative">
          <img src={banner} alt="" className="absolute right-0 top-1/2 transform -translate-y-1/2 m-auto min-[390px]:hidden max-[480px]:hidden md:block" />

          {/* content */}
          <div className="container mx-auto px-6 py-8 z-10">
            <div>
              <h2 className="text-[40px] font-semibold text-blue-600 mb-4">Welcome to TSUL Alumni Career Centre</h2>
              <p className="text-gray-700 text-[22px]">
                The TSUL Alumni Career Centre is your gateway to a vibrant professional <br /> network and career development opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section id="jobs" className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Jobs />
          </div>
        </section>

        {/* News section */}
        <section id="news" className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <News />
          </div>
        </section>

        {/* about section */}
        <section id="about" className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <About />
          </div>

        </section>


        {/* Contact section */}
        <section id="contact" className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Contact />
          </div>
        </section>
      </HeaderAndFooter>
    </div >
  );
};

export default InformationPage;