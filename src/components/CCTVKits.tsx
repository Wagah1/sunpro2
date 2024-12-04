import React from "react";
import useState from "react-usestateref";
import { cctvPackages, Unit } from "./cctv";
import CCTVForm from "./CCTVForm";
import "./cctvKits.css";

const CCTVKits: React.FC = () => {
  const [selected, setSelected] = useState<Unit | null>(null);
  const [openDetails, setOpenDetails] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = searchQuery
    ? cctvPackages.filter((product) =>
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
    <div id="cctvKits-container">
      <div id="top">
        <h3>Browse complete 4/8/16 channel CCTV kits here</h3>
        <div id="search">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            placeholder="Search CCTV packages"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div id="search-results">
        {filteredProducts.map((product, index) => (
          <div className="cctvKit" key={index}>
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
                <a href="#cctv-view">
                  <button onClick={() => handleViewClick(product)}>View</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="cctvKits">
        {cctvPackages.map((item, index) => (
          <div className="cctvKit" key={index}>
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
                <a href="#cctv-view">
                  <button onClick={() => handleViewClick(item)}>View</button>
                </a>
              </div>
            </div>
          </div>
        ))}
        {selected && (
          <CCTVForm selected={selected} onClose={closeBatteryForm} />
        )}
      </div>
    </div>
  );
};

export default CCTVKits;
