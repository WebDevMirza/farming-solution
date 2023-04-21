import { Link } from "react-router-dom";

type MachineCompoType = {
  img: string;
  title: EquipmentType;
};

type EquipmentType = "excavators" | "scissor lifts" | "boom lifts" | "forklifts" | "compaction" | "roller";

const Machine = ({ img, title }: MachineCompoType) => {
  return (
    <>
      <Link
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
          });
        }}
        state={{ type: title }}
        to="/equipments"
        className="bg-appgray w-fit mx-auto lg:grow rounded"
      >
        <img className="block p-2 w-full rounded-xl" src={img} alt="photo" />
        <p className="text-center font-bold text-xl uppercase py-4">{title}</p>
      </Link>
    </>
  );
};

export default Machine;
