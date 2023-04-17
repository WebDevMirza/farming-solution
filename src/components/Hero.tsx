const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="w-[95%] lg:w-[50%] mx-auto py-20 text-white flex flex-col gap-8">
          <h1 className="text-3xl uppercase text-center leading-8 mb-52">
            Your One-Stop Source For All Equipment Rental Needs
          </h1>
          <div className="relative rounded-lg overflow-hidden mt-8 w-[95%] mx-auto">
            <input
              className="pl-4 pr-[6rem] py-4 lg:min-w-[550px] text-appblackish"
              type="text"
              name="search"
              id="search"
              placeholder="Search for something..."
            />
            <button className="bg-appblackish absolute inset-y-0 right-0 px-3 lg:px-6 hover:opacity-95">
              <svg
                className="inline"
                width="30"
                height="25"
                viewBox="4 0 35 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_25_88)">
                  <path
                    d="M15.728 25.3333C21.6441 25.3333 26.4401 20.5577 26.4401 14.6667C26.4401 8.77563 21.6441 4 15.728 4C9.81186 4 5.01588 8.77563 5.01588 14.6667C5.01588 20.5577 9.81186 25.3333 15.728 25.3333Z"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.1181 28L23.2934 22.2"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_25_88"
                    x="-3.00116"
                    y="0"
                    width="40.1363"
                    height="40"
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
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_88" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_88" result="shape" />
                  </filter>
                </defs>
              </svg>
              Search
            </button>
          </div>
          <p className="text-center">Top-Of-The-Line Equipment Ready At Flexible Rates Around</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
