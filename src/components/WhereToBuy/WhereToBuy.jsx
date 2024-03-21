import React from "react";
import Worldmap from '../../assets/world-map.png';
import themeStore from "../../zustand/store";

const WhereToBuy = () => {
  const { theme, setTheme } = themeStore();

  const style = {
    backgroundColor: theme.colors.primary,
  }

  return (
    <>
      <div className="container my-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* seach section  */}
          <div className="space-y-8">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-4xl font-bold text-dark font-serif">
              Where to by our products?
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex items-center gap-4">
              <input type="text" placeholder="Country" className="input-style w-full" />
              <input type="text" placeholder="Zipcode" className="input-style w-full" />
            </div>

            <button
              data-aos="fade-up"
              data-aos-delay="700"
              style={style}
              className="primary-btn ">Search</button>
          </div>
          {/* map section  */}
          <div>
            <img
              data-aos="fade"
              data-aos-delay="300"
              src={Worldmap} alt="Image not found" className="w-full sm:w-[500px] mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereToBuy;
