import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Timing from "./components/Timing";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Timing />
      <header className="lg:sticky lg:top-0 lg:bg-white lg:z-10">
        <Header />
      </header>

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
