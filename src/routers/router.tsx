import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Equipments from "../pages/Equipments";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
