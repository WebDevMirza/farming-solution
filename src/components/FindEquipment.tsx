const FindEquipment = () => {
  return (
    <>
      <div className="absolute -top-[17rem] lg:-top-40 left-1/2 -translate-x-1/2 max-w-[800px] w-[90%]">
        <div className="bg-appdarkgreen text-white px-4 py-6 flex flex-col gap-6 lg:items-center rounded">
          <h1 className="text-2xl text-center uppercase">Find The Right Equipment</h1>
          <div className="flex flex-wrap flex-col lg:flex-row gap-4 lg:gap-8 px-2">
            <input
              className="lg:w-[30%] px-4 py-1.5 rounded text-appbgfooter"
              type="text"
              name="machine"
              id="machine"
              placeholder="Equipment Name..."
            />
            <input
              className="lg:w-[30%] px-4 py-1.5 rounded text-appbgfooter"
              type="text"
              name="machinetype"
              id="machinetype"
              placeholder="Equipment Type"
            />
            <button className="bg-black px-6 py-1.5 rounded">Find Equipment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindEquipment;
