import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between items-center px-2 lg:px-14 py-2">
        <div className="flex items-center gap-2">
          <p className="font-bold text-3xl relative before:absolute before:w-[2px] before:h-8 before:bg-black before:-right-4">
            LOGO
          </p>
          <svg
            className="ml-6"
            width="42"
            height="41"
            viewBox="0 0 42 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_25_20)">
              <path
                d="M5.25 27V18C5.25 14.4196 6.90937 10.9858 9.86307 8.45406C12.8168 5.92232 16.8228 4.5 21 4.5C25.1772 4.5 29.1832 5.92232 32.1369 8.45406C35.0906 10.9858 36.75 14.4196 36.75 18V27"
                stroke="#008000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M36.75 28.5C36.75 29.2956 36.3813 30.0587 35.7249 30.6213C35.0685 31.1839 34.1783 31.5 33.25 31.5H31.5C30.5717 31.5 29.6815 31.1839 29.0251 30.6213C28.3687 30.0587 28 29.2956 28 28.5V24C28 23.2044 28.3687 22.4413 29.0251 21.8787C29.6815 21.3161 30.5717 21 31.5 21H36.75V28.5ZM5.25 28.5C5.25 29.2956 5.61875 30.0587 6.27513 30.6213C6.9315 31.1839 7.82174 31.5 8.75 31.5H10.5C11.4283 31.5 12.3185 31.1839 12.9749 30.6213C13.6313 30.0587 14 29.2956 14 28.5V24C14 23.2044 13.6313 22.4413 12.9749 21.8787C12.3185 21.3161 11.4283 21 10.5 21H5.25V28.5Z"
                stroke="#008000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_25_20"
                x="-4"
                y="0"
                width="50"
                height="44"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_20" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_20" result="shape" />
              </filter>
            </defs>
          </svg>

          <p className="flex flex-col uppercase font-bold text-center leading-5 relative lg:before:absolute lg:before:w-[2px] lg:before:h-8 lg:before:bg-black lg:before:-right-4">
            <span>Get quick support</span>
            <span>+253434213543</span>
          </p>
        </div>
        <div onClick={toggleMenu} className="lg:hidden mr-1">
          <svg
            className={toggle ? "hidden" : "block"}
            width="34"
            height="23"
            viewBox="0 0 44 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="44" height="4" fill="#222222" />
            <rect y="19" width="44" height="4" fill="#222222" />
            <rect y="10" width="44" height="4" fill="#222222" />
          </svg>
          <svg
            className={toggle ? "block" : "hidden"}
            width="25"
            height="25"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2.49539" width="38.8191" height="3.52901" transform="rotate(45 2.49539 0)" fill="#222222" />
            <rect y="27.4492" width="38.8191" height="3.52901" transform="rotate(-45 0 27.4492)" fill="#222222" />
          </svg>
        </div>

        <nav className={toggle ? "mx-auto my-6 lg:block lg:m-0" : "hidden mx-auto my-6 lg:block lg:m-0"}>
          <ul className="flex flex-col lg:flex-row items-center gap-8 font-bold uppercase">
            <li>
              <NavLink className="hover:text-appblue" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-appblue" to="/equipments">
                Equipment List
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-appblue" to="/about">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-appblue" to="/contacts">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
