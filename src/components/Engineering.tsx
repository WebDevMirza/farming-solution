import EngineringIMg from "../assets/engineering.png";

const Engineering = () => {
  return (
    <>
      <div className="bg-dark-benzene text-white text-center">
        <div className="w-[80%] mx-auto py-16 flex flex-col lg:flex-row items-center gap-8">
          <div>
            <img className="lg:w-[70%] aspect-square mx-auto" src={EngineringIMg} alt="bunch of engineers" />
          </div>
          <div className="space-y-2 lg:w-[400px]">
            <p className="text-appgray font-medium">About E-Farming Equipments Rental</p>
            <h1 className="text-2xl font-medium">We Offer Smarter & More Affordable Access To Rent Farm Equipment</h1>
            <svg
              className="block mx-auto"
              width="348"
              height="31"
              viewBox="0 0 348 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1" x2="348" y2="1" stroke="#FFB800" stroke-width="2" />
              <line x1="54" y1="14" x2="302" y2="14" stroke="#FFB800" stroke-width="2" />
              <line x1="116" y1="30" x2="246" y2="30" stroke="#FFB800" stroke-width="2" />
            </svg>
            <p className="pt-4">
              Aiusmod tempor incididunt ut labore sed dolore magna aliquay dnim ad minim veniam quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea reprehen deritin voluptate.
            </p>

            <div className="flex gap-6 pt-6">
              <p className=" font-medium relative before:absolute before:w-[2px] before:h-12 before:bg-white before:-right-3">
                The Facilities Less Expensive
              </p>
              <p className="text-appgray">Velit esse cillum dolore ipsum eu fugiat nulla pariatur.</p>
            </div>

            <div className="flex gap-6 pt-6">
              <p className=" font-medium relative before:absolute before:w-[2px] before:h-12 before:bg-white before:-right-3">
                Innovating The Heavy Fleet Ltd
              </p>
              <p className="text-appgray">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Engineering;
