const Footer = () => {
  return (
    <>
      <div className="bg-appbgfooter text-white flex flex-col justify-center items-center gap-8 py-4">
        <div className="mt-4 flex flex-col w-[90%] gap-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            <p className="font-bold text-center text-3xl lg:relative lg:before:absolute lg:before:w-[2px] lg:before:h-8 lg:before:bg-appgray lg:before:-right-4">
              LOGO
            </p>

            <p className="ml-4 flex flex-col uppercase font-bold text-center leading-5">
              <span>Newsletter Subscription</span>
              <span>Get Latest Deals from E-Farming</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <input
              className="w-[90%] lg:w-[50%] px-4 py-2 text-appbgfooter rounded"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email for newsletters ..."
            />
            <a className="bg-apporange px-8 py-2 rounded hover:bg-apporangehover" href="#">
              Subscribe
            </a>
          </div>
        </div>
        <hr className="w-[80%] h-[2px] mx-auto bg-appgray border-0 rounded" />
        <div className="flex flex-col lg:flex-row justify-around items-center w-[90%] gap-4">
          <div className="w-72 text-center">
            <p className="uppercase text-xl mb-2">About E-Farming</p>
            <svg
              className="block mx-auto mb-4"
              width="111"
              height="26"
              viewBox="0 0 111 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="111" y2="0.5" stroke="#FFB800" />
              <line x1="18" y1="12.5" x2="101" y2="12.5" stroke="#FFB800" />
              <line x1="38" y1="25.5" x2="74" y2="25.5" stroke="#FFB800" />
            </svg>

            <p>
              Farming is growing crops and keeping animals for food and raw materials. Farming is a part of agriculture.
            </p>
          </div>
          <div>
            <p className="uppercase text-xl mb-6">Useful links</p>
            <ul className="list-disc ml-4">
              <li>
                <a className="hover:text-apporange" href="#">
                  About E-Farming
                </a>
              </li>
              <li>
                <a className="hover:text-apporange" href="#">
                  Equipment List
                </a>
              </li>
              <li>
                <a className="hover:text-apporange" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-sm px-4 text-center">
            @ <span className="text-apporange">2023</span>{" "}
            <span className="text-appgreen font-medium">E-Farming Solution</span> - Renting Farm Equipments. Terms &
            Conditions
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
