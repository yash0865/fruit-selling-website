// Hero.js
import React, { useState, useEffect } from "react";
import OrangeImage from '../../assets/bg/orange.png';
import AppleImage from '../../assets/bg/apple.png';
import LemonImage from '../../assets/bg/lemon.png';
import GuavaImage from '../../assets/bg/guava.png';
import GrapesImage from '../../assets/bg/grapes.png';
import Navbar from "../Navbar/Navbar";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa6";
import themeStore from "../../zustand/store";


const pages = [
  {
    id: 1,
    fruit: "Orange",
    colors: {
      primary: "#f39c0b",
      secondary: "#e86f00",
      primaryDark: "#d65609"
    }
  },
  {
    id: 2,
    fruit: "Apple",
    colors: {
      primary: "#fb7185",
      secondary: "#f43f5e",
      primaryDark: "#e11d48"
    }
  },
  {
    id: 3,
    fruit: "Guava",
    colors: {
      primary: "#bef264",
      secondary: "#a3e635",
      primaryDark: "#84cc16"
    },
  },
  {
    id: 4,
    fruit: "Grapes",
    colors: {
      primary: "#c67dff",
      secondary: "#9d4edd",
      primaryDark: "#7b2bbe"
    },
  },
  {
    id: 5,
    fruit: "Lemon",
    colors: {
      primary: "#fef08a",
      secondary: "#facc15",
      primaryDark: "#eab308"
    }
  }
]

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const { theme, setTheme } = themeStore();

  const bg = {
    backgroundColor: theme.colors.primaryDark,
  }

  const gradient = {
    backgroundImage: `linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary})`,
    width: '100%',
    height: '100%'
  }

  const sidebarGradient = {
    backgroundImage: `linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.primary})`,
  }

  const next = () => {
    setCurrentPageIndex(prevIndex => (prevIndex + 1) % pages.length);
    setTheme(pages[(currentPageIndex + 1) % pages.length]);
  };

  const back = () => {
    setCurrentPageIndex(prevIndex => (prevIndex - 1 + pages.length) % pages.length);
    setTheme(pages[(currentPageIndex - 1 + pages.length) % pages.length]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the theme to the next page's theme
      setCurrentPageIndex(prevIndex => (prevIndex + 1) % pages.length);
      setTheme(pages[currentPageIndex]);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [setTheme, currentPageIndex, pages]);


  return (
    <main style={bg} className={`md:px-12 md:py-6 `}>
      <section style={gradient} className={`relative min-h-[650px] w-full md:rounded-xl shadow-md`}>
        <div className="container">
          {/* Navbar  */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
            {/* text section  */}
            <div className="text-white mt-[50px] sm:mt-[100px] md:mt-0 p-4 space-y-4">
              <h1 data-aos="fade-up" className="text-2xl sm:text-3xl pl-6 md:pl-14">0{theme.id}________</h1>
              <h1 data-aos="fade-up" data-aos-delay="300" className="text-5xl font-bold uppercase text-shadow">A Healthy Fruit</h1>
              <p data-aos="fade-up" data-aos-delay="500" className="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel facilis numquam veritatis dolorem corporis fuga cumque. Beatae.</p>
              <button data-aos="fade-up" data-aos-delay="700" data-aos-offset="0" className="secondary-btn">Shop Now</button>
            </div>

            {/* image section */}
            <div data-aos="zoom-in" className="">
              <img src={OrangeImage} alt="Image not found" className={`relative z-10 w-[400px]  img-shadow ${theme.fruit === "Orange" ? "" : "hidden"}`} />
              <img src={AppleImage} alt="Image not found" className={`relative z-10 w-[400px]  img-shadow ${theme.fruit === "Apple" ? "" : "hidden"}`} />
              <img src={GuavaImage} alt="Image not found" className={`relative z-10 w-[400px]  img-shadow ${theme.fruit === "Guava" ? "" : "hidden"}`} />
              <img src={LemonImage} alt="Image not found" className={`relative z-10 w-[300px]  img-shadow ${theme.fruit === "Lemon" ? "" : "hidden"}`} />
              <img src={GrapesImage} alt="Image not found" className={`relative z-10 w-[400px]  img-shadow ${theme.fruit === "Grapes" ? "" : "hidden"}`} />
            </div>

            {/* blank div  */}
            <div className="md:hidden"></div>
          </div>
        </div>

        {/* background large text  */}
        <h1 data-aos="fade" data-aos-delay="600" data-aos-duration="1800" className="large-text">{theme.fruit}</h1>

        {/* direction arrow  */}
        <div className="absolute top-[45%] left-0 m-1  sm:m-5 isolate aspect-video rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 cursor-pointer" onClick={back}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-1  text-white  w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>

        <div className="absolute top-[45%] right-0 m-1  sm:m-5 isolate aspect-video rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 cursor-pointer" onClick={next}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="p-1 text-white  w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>

        {/* Sidebar section  */}
        {sidebar && (
          <div style={sidebarGradient} className={`absolute top-0 right-0 w-[120px] h-full z-10 rounded-tr-xl`}>
            <div className="w-full h-full flex justify-center items-center">
              <div className="text-white flex flex-col justify-center items-center gap-6">
                {/* line  */}
                <div className="w-[1px] h-[70px] bg-white"></div>

                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl " />
                </div>

                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl " />
                </div>

                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaLinkedinIn className="text-2xl " />
                </div>

                {/* line  */}
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
