import Equipments from "../assets/equipments.webp";

const LearnCard = () => {
  return (
    <>
      <div className="bg_equipment flex justify-center items-center py-24">
        <div className="flex bg-white rounded overflow-hidden">
          <div>
            <img src={Equipments} alt="equipments" width={250} height={220} />
          </div>
          <div className="bg-benzene px-10 flex flex-col gap-2 items-center justify-center">
            <h1 className="font-bold text-2xl">Worried About The Idling Yard?</h1>
            <p>Start hiring our equipment(s) today!</p>
            <a
              href="#"
              className="bg-apporange hover:bg-apporangehover px-4 py-2 mt-4 rounded-sm uppercase text-white tracking-wide"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnCard;
