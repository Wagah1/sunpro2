import React from "react";
import useState from "react-usestateref";
import { sector, ServiceItem, Area } from "./serviceArea";
import "./serviceArea.css";

const ServiceArea: React.FC = () => {
  const [capShow, setCapShow] = useState<string | null>(null);

  const toggleCap = (area: string) => {
    setCapShow((preview) => (preview === area ? null : area));
  };

  return (
    <div id="sect">
      <div id="sectors-intro">
        <h2>Where we can serve you:</h2>
      </div>
      <div id="sectors">
        {sector.map((area: Area, index: number) => (
          <div className="sector" key={index}>
            <img src={area.image} alt={area.title} />
            <div className={`caption ${capShow === area.id ? "show-cap" : ""}`}>
              <div className="cap-head" onClick={() => toggleCap(area.id)}>
                <h3>{area.title}</h3>
                <img
                  src={capShow === area.id ? "../close-b.png" : "../open-b.png"}
                  alt={capShow === area.id ? "Close" : "Open"}
                />
              </div>
              <div className="serviceIcons">
                {area.services.map((item: ServiceItem, index: number) => (
                  <div className="serviceIcon" key={index}>
                    <p>{item.cap}</p>
                    <img src={item.image} alt={item.cap} />
                  </div>
                ))}
              </div>
              <hr />
              <div className={`cap ${capShow === area.id ? "shown-cap" : ""}`}>
                <p>{area.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceArea;
