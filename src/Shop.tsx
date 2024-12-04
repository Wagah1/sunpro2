import SolarPanels from "./components/Solar-panels1";
import Inverters from "./components/Inverters1";
import Batteries from "./components/Batteries";
import Sunking from "./components/Sunking1";
import WaterHeaters from "./components/WaterHeaters";
import CCTVKits from "./components/CCTVKits";
import Offers from "./components/Offers";

const Shop = () => {
  return (
    <div>
      <SolarPanels />
      <Inverters />
      <Batteries />
      <WaterHeaters />
      <Sunking />
      <CCTVKits />
      <Offers />
    </div>
  );
};

export default Shop;
