import { Link } from "react-router-dom";
import Equipments from "../assets/equipments.webp";

const LearnCard = () => {
  return (
    <>
      <div className="bg_equipment flex justify-center items-center py-24 text-center">
        <div className="w-[85%] lg:w-auto  py-8 lg:py-0 flex flex-col lg:flex-row bg-white rounded overflow-hidden">
          <div>
            <img className="mx-auto" src={Equipments} alt="equipments" width={250} height={220} />
          </div>
          <div className="mt-8 lg:mt-0 bg-benzene px-6 lg:px-10 flex flex-col gap-2 items-center justify-center">
            <h1 className="font-bold text-2xl">Worried About The Idling Yard?</h1>
            <p>Start hiring our equipment(s) today!</p>
            <Link
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                });
              }}
              to="/equipments"
              className="bg-apporange hover:bg-apporangehover px-4 py-2 mt-4 rounded-sm uppercase text-white tracking-wide"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnCard;
