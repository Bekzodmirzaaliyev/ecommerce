import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";

const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    sliderImages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="relative bg-gray-100">
        {data.sliderImages.length > 0 ? (
          <img
            className="w-full object-cover object-center slider-img"
            src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
            alt="sliderImage"
          />
        ) : (
          ""
        )}
        <svg
          onClick={(e) => prevSlide(data.sliderImages.length, slide, setSlide)}
          className={`z-10 absolute top-0 left-0 mt-button-svg flex justify-end items-center box-border flex justify-center w-12 h-12 text-gray-700  cursor-pointer hover:text-yellow-700`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <svg
          onClick={(e) => nextSlide(data.sliderImages.length, slide, setSlide)}
          className={`z-10 absolute top-0 right-0 mt-button-svg flex justify-start items-center box-border flex justify-center w-12 h-12 text-gray-700 cursor-pointer hover:text-yellow-700`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <div className="absolute inset-0 flex items-end mb-10 justify-center">
          <h1
            style={{ 
              border: "#b7791f 1px solid", 
              color: "#b7791f" }}
            className="cursor-pointer box-border text-xl  px-2 py-1 rounded"
          >
            Ecommerce Top Brands
          </h1>
        </div>
      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
