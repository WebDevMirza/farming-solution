import Header from "../components/Header";
import Hero from "../components/Hero";
import Timing from "../components/Timing";

const Home = () => {
  return (
    <>
      <Timing />
      <header>
        <Header />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Home;
