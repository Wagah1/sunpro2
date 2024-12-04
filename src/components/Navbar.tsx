import React from "react";
import { useEffect } from "react";
import useState from "react-usestateref";
import { Outlet, Link, useLocation } from "react-router";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <nav>
        <div className="nav">
          <Link to="/">
            <img src="../sunpro-logo.png" alt="Logo" id="logo" />
          </Link>
          <div className="mobile" onClick={toggleMenu}>
            <img
              src={isOpen ? "../exe.png" : "../bar.png"}
              alt={isOpen ? "close" : "options"}
            />
          </div>
          <div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
              <li
                className="navItem"
                id="shop"
                onClick={() => handleDropdown("shop")}
                onMouseLeave={closeDropdown}
              >
                <Link to="/shop" className="link">
                  Shop
                </Link>
                <ul
                  className={`dropMenu ${
                    openDropdown === "shop" ? "show" : ""
                  }`}
                  id="shopMenu"
                >
                  <li className="dropItem">
                    <Link to="/shop#panels-container" className="drop-link">
                      Solar panels
                    </Link>
                  </li>
                  <li className="dropItem">
                    <Link to="/shop#inverters-container" className="drop-link">
                      Solar inverters
                    </Link>
                  </li>
                  <li className="dropItem">
                    <Link to="/shop#batteries-container" className="drop-link">
                      Solar batteries
                    </Link>
                  </li>
                  <li className="dropItem">
                    <Link to="/shop#heaters-container" className="drop-link">
                      Solar water heaters
                    </Link>
                  </li>
                  <li className="dropItem">
                    <Link to="/shop#sunking-container" className="drop-link">
                      Sunking Products
                    </Link>
                  </li>
                  <li className="dropItem">
                    <Link to="/shop#cctvKits-container" className="drop-link">
                      CCTV Kits
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="navItem" id="services">
                <Link to="/#solutions" className="link">
                  What we do
                </Link>
              </li>
              <li className="navItem">
                <Link to="/#footer" className="link">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
