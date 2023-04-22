const FindEquipment = () => {
  return (
    <>
      <div className="absolute -top-[17rem] lg:-top-40 left-1/2 -translate-x-1/2 max-w-[800px] w-[90%]">
        <div className="bg-appdarkgreen text-white px-4 py-6 flex flex-col gap-6 lg:items-center rounded">
          <h1 className="text-2xl text-center uppercase">Find The Right Equipment</h1>
          <form action="/equipments" method="get">
            <div className="flex flex-wrap flex-col lg:flex-row gap-4 lg:gap-8 px-2">
              <input
                className="lg:w-[30%] px-4 py-1.5 rounded text-appbgfooter"
                type="text"
                name="machine"
                id="machine"
                placeholder="Equipment Name..."
              />
              <select
                className="dropdown lg:w-[25%] px-3 py-1.5 rounded text-appbgfooter"
                name="equipment"
                id="equipment"
              >
                <option value="excavators">Excavators</option>
                <option value="scissor lifts">Scissor Lifts</option>
                <option value="boom lifts">Boom Lifts</option>
                <option value="forklifts">Forklifts</option>
                <option value="compaction">Compaction</option>
                <option value="roller">Roller</option>
              </select>
              <button type="submit" className="bg-black px-6 py-1.5 rounded">
                Find Equipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FindEquipment;
