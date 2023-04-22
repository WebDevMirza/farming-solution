import { useEffect, useState } from "react";
import CTA from "../components/CTA";
import SecondaryHero from "../components/SecondaryHero";
import AllEquipments from "../assets/data/AllEquipments.json";
import { useLocation, useSearchParams } from "react-router-dom";

const Equipments = () => {
  const [equip, setEquipment] = useState(AllEquipments);
  const [equipActive, setEquipActive] = useState("equipments");
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (location.state?.type != undefined) {
      equipFilter(location.state.type);
    }

    if (searchParams.get("equipment")) {
      equipFilter(searchParams.get("equipment")!);
    }

    if (searchParams.get("search")) {
      let query = searchParams.get("search");

      const newEquipFilter = AllEquipments.filter((value) => {
        return value.name.match(new RegExp(query!, "i"));
      });

      setEquipment(newEquipFilter);
    }
  }, []);

  const equipFilter = (equipType: string) => {
    const newEquipFilter = AllEquipments.filter((value) => {
      return value.type == equipType;
    });
    setEquipActive(equipType);
    setEquipment(newEquipFilter);
  };

  const resetEquip = () => {
    setEquipActive("equipments");
    setEquipment(AllEquipments);
  };

  return (
    <>
      <main>
        <SecondaryHero title="Equipments" bgHero="bg-equipments" />
        <div className="flex items-start gap-8 my-8 w-[90%] mx-auto tracking-wider">
          <div>
            <div className="bg-appdarkgreen mb-4 text-white px-10 py-8">
              <p className="max-w-[200px]">Total {equip.length} Equipments are available.</p>
            </div>
            <div className="bg-appdarkgreen text-white uppercase px-10 py-8 space-y-4">
              <p className="text-xl">Categories</p>
              <ul>
                <li
                  onClick={resetEquip}
                  className={
                    equipActive == "equipments"
                      ? "w-fit cursor-pointer hover:text-apporangehover equipActive"
                      : "w-fit cursor-pointer hover:text-apporangehover"
                  }
                >
                  All Equipments
                </li>
                <li
                  onClick={(e) => equipFilter("scissor lifts")}
                  className={
                    equipActive == "scissor lifts"
                      ? "w-fit cursor-pointer hover:text-apporangehover equipActive"
                      : "w-fit cursor-pointer hover:text-apporangehover"
                  }
                >
                  Scissor Lifts
                </li>
                <li
                  onClick={() => equipFilter("excavators")}
                  className={
                    equipActive == "excavators"
                      ? "w-fit cursor-pointer hover:text-apporangehover equipActive"
                      : "w-fit cursor-pointer hover:text-apporangehover"
                  }
                >
                  Excavators
                </li>
                <li
                  onClick={() => equipFilter("boom lifts")}
                  className={
                    equipActive == "boom lifts"
                      ? "w-fit cursor-pointer hover:text-apporangehover equipActive"
                      : "w-fit cursor-pointer hover:text-apporangehover"
                  }
                >
                  Boom Lifts
                </li>
                <li
                  onClick={() => equipFilter("forklifts")}
                  className={
                    equipActive == "forklifts"
                      ? "w-fit cursor-pointer hover:text-apporangehover equipActive"
                      : "w-fit cursor-pointer hover:text-apporangehover"
                  }
                >
                  Fork Lifts
                </li>
                <li
                  onClick={() => equipFilter("compaction")}
                  className={
                    equipActive == "compaction"
                      ? "w-fit cursor-pointer hover:text-apporangehover equipActive"
                      : "w-fit cursor-pointer hover:text-apporangehover"
                  }
                >
                  Compactions
                </li>
                <li
                  onClick={() => equipFilter("roller")}
                  className={
                    equipActive == "roller"
                      ? "w-fit cursor-pointer hover:text-apporangehover equipActive"
                      : "w-fit cursor-pointer hover:text-apporangehover"
                  }
                >
                  Rollers
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-[60%]">
            {equip.map((value) => {
              return (
                <div className="bg-appgray/20 py-6 px-8 mb-4 rounded" key={value.id}>
                  <p className="text-appblue text-xl uppercase font-medium">{value.name}</p>
                  <p className="font-medium text-appbgfooter mb-1 capitalize">Type: {value.type}</p>
                  <hr className="h-[3px] bg-appblue/40" />
                  <div className="flex justify-evenly gap-4 mt-6">
                    <ul className="basis-[45%]">
                      <li>Model: {value.model}</li>
                      <li>Manufacture Country: {value.manufacturecountry}</li>
                      <li>Manufacture Year: {value.manufactureyear}</li>
                    </ul>
                    <ul className="basis-[45%]">
                      {value.diggingDepth && <li>Digging Depth: {value.diggingDepth}</li>}
                      {value.productionCapacity && <li>Production Capacity: {value.productionCapacity}</li>}
                      {value.size && <li>Size: {value.size}</li>}
                      {value.liftHeight && <li>Lift Height: {value.liftHeight}</li>}
                      {value.weightCapacity && <li>Weight Capacity: {value.weightCapacity}kg</li>}
                      {value.platformSize && <li>Platform Size: {value.platformSize}</li>}
                      {value.outreach && <li>Outreact: {value.outreach}</li>}
                      {value.powerType && <li>Power Type: {value.powerType}</li>}
                      {value.drumWidth && <li>Drum Width: {value.drumWidth}</li>}
                      {value.plateWidth && <li>Plate Width: {value.plateWidth}</li>}
                      {value.weight && <li>Weight: {value.weight}kg</li>}
                      {value.vibrationType && <li>Vibration Type: {value.vibrationType}</li>}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <CTA />
      </main>
    </>
  );
};

export default Equipments;
