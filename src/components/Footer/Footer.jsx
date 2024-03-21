import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTelegram } from 'react-icons/fa';
import themeStore from "../../zustand/store";


const Footer = () => {
  const { theme, setTheme } = themeStore();
  const gradient = {
    backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
    width: '100%',
    height: '100%'
  }
  return (
    <div style={gradient} className=" pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start place-items-start sm:place-items-center text-white">
          {/* company detaills section  */}
          <div className="space-y-6">
            <h1
              data-aos="fade-up"
              className="text-4xl font-bold">Fruits Seller</h1>
            <p className="text-sm max-w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus suscipit soluta quae incidunt mollitia numquam in quod sed ipsa tempore enim aliquam illum autem, deserunt nulla earum voluptatem dolores.</p>
          </div>

          {/* Link section */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="space-y-6">
            <h1 className="text-4xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first column  */}
              <div>
                <ul className="space-y-2">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Search Fruits</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>

              {/* second column */}
              <div>
                <ul className="space-y-2">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Search Fruits</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* social media section  */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="space-y-6">
            <h1 className="text-4xl font-bold">Follow Us</h1>
            <div>
              <p>+91 789932xxxxx</p>
              <p>Kolhapur, Maharashtra</p>
            </div>

            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
          </div>
        </div>

        {/* copyright section  */}
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2024 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
