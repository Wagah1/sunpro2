import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import Shop from "./Shop";
import Navbar from "../src/components/Navbar";
import SolarOrderForm from "./components/SolarOrderForm";
import Sunking from "./components/Sunking1";
import SolarPanels from "./components/Solar-panels1";
import Inverters from "./components/Inverters1";
import Batteries from "../src/components/Batteries";
import WaterHeaters from "../src/components/WaterHeaters";
import CCTVKits from "../src/components/CCTVKits";
import Footer from "../src/components/Footer";
import Services from "../src/components/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/solarForm" element={<SolarOrderForm />} />
        <Route path="/#footer" element={<Footer />} />
        <Route path="/#servicesDiv" element={<Services />} />
        <Route path="/shop#panels-container" element={<SolarPanels />} />
        <Route path="/shop#inverters-container" element={<Inverters />} />
        <Route path="/shop#batteries-container" element={<Batteries />} />
        <Route path="/shop#heaters-container" element={<WaterHeaters />} />
        <Route path="/shop#sunking-container" element={<Sunking />} />
        <Route path="/shop#cctvKits-container" element={<CCTVKits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
