import { useEffect } from "react";
import useState from "react-usestateref";
import { Outlet, Link } from "react-router-dom";
import "./services.css";

function Services() {
  const [count, setCount] = useState(0);
  const target = 1000;
  const duration = 2000;
  const interval = duration / target;

  useEffect(() => {
    if (count < target) {
      const timeoutId = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, interval);
      return () => clearTimeout(timeoutId);
    }
  }, [count, interval, target]);

  return (
    <div id="servicesDiv">
      <div id="quality">
        <h2>Why choose us</h2>
        <p>
          Our team of experts is trained to ensure a seamless process from
          sizing and budgeting to implementation. We offer a six-month
          workmanship warranty, guaranteeing that your equipment is properly
          installed and built to last
        </p>
        <div id="happy">
          <p>Add to our list of </p>
          <div id="count">
            {count}
            <p>+</p>
          </div>
          <p>successful projects</p>
        </div>
        <a href="#footer">
          <div id="hire">
            <p>Get a free quote today!</p>
          </div>
        </a>
      </div>
      <div id="solutions">
        <div className="service" id="solar">
          <img src="../panels.jpg" />
          <div className="words">
            <h2>Solar Installation</h2>
            <p>
              Switch to a hybrid solar home system to eliminate power
              instability, blackouts, and high electricity bills. Enjoy
              reliable, sustainable, and cost-effective energy for your home
            </p>
            <div className="learn">
              <Link to="/solarForm" id="link">
                Get Service
              </Link>
            </div>
          </div>
        </div>
        <div className="service" id="electricals">
          <img src="../electrical.jpg" />
          <div className="words">
            <h2>Electrical services</h2>
            <p>
              We conduct electrical wiring services with a focus on safety,
              neatness, and durability, ensuring we work within your budget
            </p>
            <div className="learn">
              <a href="#footer">
                <p>Get service</p>
              </a>
            </div>
          </div>
        </div>
        <div className="service" id="water-heater">
          <img src="../water-heater.jpg" />
          <div className="words">
            <h2>Solar Water Heater</h2>
            <p>
              Save on power bills by harnessing solar energy for water heating.
              Explore various solar water heater options available in the market
              here
            </p>
            <div className="learn">
              <a href="#footer">
                <p>Get service</p>
              </a>
            </div>
          </div>
        </div>
        <div className="service" id="cctv">
          <img src="../cctv.jpg" />
          <div className="words">
            <h2>CCTV and Networks</h2>
            <p>
              Enhance your security with our professional CCTV installation.
              Contact us for network connectivity and troubleshooting services
              for your home and office
            </p>
            <div className="learn">
              <a href="#footer">
                <p>Get service</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Services;
