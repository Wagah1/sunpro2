import React, { useRef, useEffect } from "react";
import useState from "react-usestateref";
import "./offers.css";
import { items, Item } from "./items";
import OrderForm from "./OrderForm";

const Offers: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseActive, setIsMouseActive] = useState(true);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [openDetails, setOpenDetails] = useState<string | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.style.transition = "transform 0.5s ease-in-out";
      container.style.transform = "translateX(-20em)";
      setTimeout(() => {
        container.style.transition = "none";
        container.style.transform = "translateX(0)";
        container.appendChild(container.firstElementChild as Node);
      }, 500);
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.style.transition = "none";
      container.insertBefore(
        container.lastElementChild as Node,
        container.firstElementChild
      );
      container.style.transform = "translateX(-20em)";
      setTimeout(() => {
        container.style.transition = "transform 0.5s ease-in-out";
        container.style.transform = "translateX(0)";
      }, 0);
    }
  };

  const toggleDet = (item: string) => {
    setOpenDetails((prev) => (prev === item ? null : item));
  };

  const handleViewClick = (item: Item) => {
    setSelectedItem(item);
  };

  const closeOrderForm = () => {
    setSelectedItem(null);
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

  const handleMouseMove = () => {
    setIsMouseActive(true);
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      setIsMouseActive(false);
    }, 10000);
  };

  useEffect(() => {
    if (!isMouseActive) {
      scrollTimeout.current = setInterval(() => {
        scrollNext();
      }, 10000);
    } else {
      if (scrollTimeout.current) {
        clearInterval(scrollTimeout.current);
      }
    }

    return () => {
      if (scrollTimeout.current) {
        clearInterval(scrollTimeout.current);
      }
    };
  }, [isMouseActive]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div id="horizontal-scroll-container">
      <div id="top">
        <h3>Featured packages</h3>
        <div id="scroll-btns">
          <button onClick={scrollPrev} className="scroll-button">
            <img src="../previous.png" alt="<" />
          </button>
          <button onClick={scrollNext} className="scroll-button">
            <img src="../next.png" alt=">" />
          </button>
        </div>
      </div>
      <div className="scroll-container" ref={scrollContainerRef}>
        {items.map((item, index) => (
          <div className="offer-item" key={index}>
            <img src={item.imgSrc} alt={item.title} />
            <div
              className={`details ${openDetails === item.id ? "open-det" : ""}`}
            >
              <div className="det-head" onClick={() => toggleDet(item.id)}>
                <h3>{item.title}</h3>
                <img
                  src={
                    openDetails === item.id ? "../close-b.png" : "../open-w.png"
                  }
                  alt={openDetails === item.id ? "Close" : "Open"}
                />
              </div>
              <div
                className={`det ${openDetails === item.id ? "open-det" : ""}`}
              >
                <h4>{item.details}</h4>
              </div>
              <div className="end-btns">
                <button className="share" onClick={handleShareClick}>
                  {copied ? "Link copied!" : "Share link"}
                </button>
                <button onClick={() => handleViewClick(item)}>View</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <OrderForm selectedItem={selectedItem} onClose={closeOrderForm} />
      )}
    </div>
  );
};

export default Offers;
