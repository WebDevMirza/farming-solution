type MachineCompoType = {
  img: string;
  title: string;
};

const Machine = ({ img, title }: MachineCompoType) => {
  return (
    <>
      <div className="bg-appgray w-fit mx-auto lg:grow rounded">
        <img className="block p-2 w-full rounded-xl" src={img} alt="photo" />
        <p className="text-center font-bold text-xl uppercase py-4">{title}</p>
      </div>
    </>
  );
};

export default Machine;
