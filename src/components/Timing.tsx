const Timing = () => {
  return (
    <>
      <div className="px-6 lg:px-20 py-2 bg-black222 text-white flex flex-col justify-between items-center gap-1 lg:flex-row">
        <div>
          <a className="newsletter-text hover:text-appblue" href="#email">
            <p className="text-center">
              <svg
                className="inline"
                width="20"
                height="20"
                viewBox="5 2 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12H19" stroke="#008000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#008000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Latest Updates Get latest updates by subscribing to our newsletter</span>
            </p>
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <p className="clock">
            <svg
              className="inline mr-1 mb-1"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#008000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 6V12L16 14" stroke="#008000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Mon - Sat 9.00 - 18.00</span>
          </p>
          <ul className="relative flex gap-2 lg:gap-4 pl-4 items-center before:absolute before:w-[2px] before:h-6 before:bg-white before:left-0">
            <li className="social">
              <a href="#">
                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="social">
              <a href="#">
                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23 1.99998C22.0424 2.67546 20.9821 3.19209 19.86 3.52999C19.2577 2.8375 18.4573 2.34668 17.567 2.12391C16.6767 1.90115 15.7395 1.95718 14.8821 2.28444C14.0247 2.6117 13.2884 3.19439 12.773 3.9537C12.2575 4.71302 11.9877 5.61232 12 6.52998V7.52998C10.2426 7.57555 8.50127 7.1858 6.93101 6.39543C5.36074 5.60506 4.01032 4.43862 3 2.99998C3 2.99998 -1 12 8 16C5.94053 17.398 3.48716 18.0989 1 18C10 23 21 18 21 6.49998C20.9991 6.22144 20.9723 5.94358 20.92 5.66999C21.9406 4.66348 22.6608 3.3927 23 1.99998V1.99998Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="social">
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 9H2V21H6V9Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className="social">
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.5401 6.42C22.4213 5.94541 22.1794 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6001 4.42C18.8801 4 12.0001 4 12.0001 4C12.0001 4 5.12008 4 3.40008 4.46C2.92933 4.59318 2.50206 4.84824 2.16143 5.19941C1.8208 5.55057 1.57887 5.98541 1.46008 6.46C1.1453 8.20556 0.991319 9.97631 1.00008 11.75C0.988863 13.537 1.14285 15.3213 1.46008 17.08C1.59104 17.5398 1.83839 17.9581 2.17823 18.2945C2.51806 18.6308 2.9389 18.8738 3.40008 19C5.12008 19.46 12.0001 19.46 12.0001 19.46C12.0001 19.46 18.8801 19.46 20.6001 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1794 17.9094 22.4213 17.4746 22.5401 17C22.8524 15.2676 23.0064 13.5103 23.0001 11.75C23.0113 9.96295 22.8573 8.1787 22.5401 6.42V6.42Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.75 15.02L15.5 11.75L9.75 8.47998V15.02Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Timing;
