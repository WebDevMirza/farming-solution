const FindEquipment = () => {
  return (
    <>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 max-w-[800px] w-[90%] ">
        <div className="bg-appdarkgreen text-white px-4 py-6 flex flex-col gap-6 items-center rounded">
          <h1 className="text-2xl uppercase">Find The Right Equipment</h1>
          <div className="flex flex-wrap gap-8">
            <input
              className="w-[40%] px-4 py-1.5 rounded text-appbgfooter"
              type="text"
              name="machine"
              id="machine"
              placeholder="Equipment Name..."
            />
            <input
              className="w-[20%] px-4 py-1.5 rounded text-appbgfooter"
              type="text"
              name="machineprice"
              id="machineprice"
              placeholder="Price Below..."
            />
            <button className="bg-black px-6 py-1.5 rounded">Find Equipment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindEquipment;
