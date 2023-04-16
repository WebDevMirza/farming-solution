import Header from "../components/Header";
import Hero from "../components/Hero";
import Machine from "../components/Machine";
import Timing from "../components/Timing";
import Excavators from "../assets/machines/EXCAVATORS.png";
import ScissorLift from "../assets/machines/SCISSOR LIFT.png";
import BoomLift from "../assets/machines/BOOMLIFT.png";
import ForkLift from "../assets/machines/FORKLIFT.png";
import Compaction from "../assets/machines/COMPACTION.png";
import Roller from "../assets/machines/ROLLER.png";

const Home = () => {
  return (
    <>
      <Timing />
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <div className="bg-benzene">
          <div className="mt-24 lg:w-[90%] mx-auto py-8">
            <div className="mb-8">
              <p className="text-center text-sm lg:text-lg">We Promise To Find You The Right Equipment</p>
              <h1 className="text-center text-3xl">Browse Machinery Categories</h1>
            </div>
            <div className="flex flex-wrap gap-4 lg:gap-8">
              <Machine img={Excavators} title="Excavators" />
              <Machine img={ScissorLift} title="ScissorLift" />
              <Machine img={BoomLift} title="BoomLift" />
              <Machine img={ForkLift} title="ForkLift" />
              <Machine img={Compaction} title="Compaction" />
              <Machine img={Roller} title="Roller" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
