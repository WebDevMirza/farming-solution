import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <>
      <div className="bg-appdarkgreen text-white flex flex-col lg:flex-row justify-center items-center gap-4 py-8">
        <h1 className="text-2xl lg:basis-[400px] text-center lg:relative lg:before:absolute lg:before:w-[2px] lg:before:h-16 lg:before:bg-white lg:before:right-0">
          We Help Industry To Utilize The Heavy Equipment Work Better
        </h1>
        <div className="flex items-center justify-center">
          <svg
            className="mr-4"
            width="48"
            height="48"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.0489 16C48.2233 16.6193 51.1406 18.1718 53.4276 20.4588C55.7145 22.7457 57.267 25.6631 57.8864 28.8375L45.0489 16ZM45.0489 3C51.644 3.73267 57.7941 6.68607 62.4892 11.3753C67.1843 16.0645 70.1454 22.2108 70.8864 28.805L45.0489 3ZM67.6364 54.74V64.49C67.6401 65.3951 67.4547 66.291 67.092 67.1204C66.7294 67.9497 66.1976 68.6942 65.5306 69.3061C64.8637 69.918 64.0762 70.3838 63.2188 70.6738C62.3614 70.9638 61.4528 71.0715 60.5514 70.99C50.5506 69.9033 40.9441 66.486 32.5039 61.0125C24.6513 56.0227 17.9937 49.3651 13.0039 41.5125C7.51131 33.0339 4.09317 23.3807 3.02638 13.335C2.94516 12.4363 3.05197 11.5305 3.34001 10.6753C3.62804 9.82009 4.09098 9.03424 4.69937 8.36777C5.30775 7.7013 6.04825 7.16881 6.8737 6.8042C7.69915 6.43959 8.59149 6.25085 9.49388 6.25H19.2439C20.8211 6.23448 22.3502 6.79301 23.5461 7.82148C24.742 8.84996 25.5231 10.2782 25.7439 11.84C26.1554 14.9602 26.9186 18.0239 28.0189 20.9725C28.4561 22.1358 28.5508 23.4 28.2916 24.6154C28.0324 25.8307 27.4302 26.9464 26.5564 27.83L22.4289 31.9575C27.0554 40.094 33.7924 46.8309 41.9289 51.4575L46.0564 47.33C46.94 46.4562 48.0556 45.854 49.271 45.5948C50.4864 45.3356 51.7506 45.4302 52.9139 45.8675C55.8625 46.9678 58.9262 47.731 62.0464 48.1425C63.6251 48.3652 65.0669 49.1604 66.0976 50.3769C67.1283 51.5933 67.6759 53.1461 67.6364 54.74Z"
              stroke="white"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-2xl text-center">
            Get Quick Support<span className="block">+254717255460</span>
          </p>
        </div>

        <Link
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
            });
          }}
          className="bg-apporange hover:bg-apporangehover mt-2 lg:mt-0 lg:ml-8 px-8 py-2 rounded"
          to="/contacts"
        >
          Contact Us
          <svg
            className="inline ml-2"
            width="20"
            height="20"
            viewBox="0 1 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 16L16 12L12 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default CTA;
