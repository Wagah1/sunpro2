import React from "react";
import useState from "react-usestateref";
import { batteries, Unit } from "./battery";
import BatteryForm from "./BatteryForm";
import "./batteries.css";

const Batteries: React.FC = () => {
  const [selected, setSelected] = useState<Unit | null>(null);
  const [openDetails, setOpenDetails] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = searchQuery
    ? batteries.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const toggleDet = (item: string) => {
    setOpenDetails((prev) => (prev === item ? null : item));
  };

  const handleViewClick = (item: Unit) => {
    setSelected(item);
  };

  const closeBatteryForm = () => {
    setSelected(null);
  };

  const [copied, setCopied] = useState(false);

  const handleShareClick = () => {
    navigator.clipboard
      .writeText(
        "Check out this amazing offer I found on Sunpro:\n" +
          window.location.href
      )
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      });
  };

  return (
    <div id="batteries-container">
      <div id="top">
        <h3>Quality solar batteries available at affordable prices</h3>
        <div id="search">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            placeholder="Search batteries"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div id="search-results">
        {filteredProducts.map((product, index) => (
          <div className="battery" key={index}>
            <img src={product.imgSrc} alt={product.name} />
            <div
              className={`btns ${
                openDetails === product.id ? "open-btns" : ""
              }`}
            >
              <div className="btns-head" onClick={() => toggleDet(product.id)}>
                <h3>
                  {product.name} @
                  <span className="bold"> Ksh {product.price}/-</span>
                </h3>
                <img
                  src={
                    openDetails === product.id
                      ? "../close-w.png"
                      : "../open-b.png"
                  }
                  alt={openDetails === product.id ? "Close" : "Open"}
                />
              </div>
              <div className="end-btns">
                <button className="share" onClick={handleShareClick}>
                  {copied ? "Link copied!" : "Share link"}
                </button>
                <a href="#battery-view">
                  <button onClick={() => handleViewClick(product)}>View</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="batteries">
        {batteries.map((item, index) => (
          <div className="battery" key={index}>
            <img src={item.imgSrc} alt={item.name} />
            <div
              className={`btns ${openDetails === item.id ? "open-btns" : ""}`}
            >
              <div className="btns-head" onClick={() => toggleDet(item.id)}>
                <h3>
                  {item.name} @<span className="bold"> Ksh {item.price}/-</span>
                </h3>
                <img
                  src={
                    openDetails === item.id ? "../close-w.png" : "../open-b.png"
                  }
                  alt={openDetails === item.id ? "Close" : "Open"}
                />
              </div>
              <div className="end-btns">
                <button className="share" onClick={handleShareClick}>
                  {copied ? "Link copied!" : "Share link"}
                </button>
                <a href="#battery-view">
                  <button onClick={() => handleViewClick(item)}>View</button>
                </a>
              </div>
            </div>
          </div>
        ))}
        {selected && (
          <BatteryForm selected={selected} onClose={closeBatteryForm} />
        )}
      </div>
    </div>
  );
};

export default Batteries;
