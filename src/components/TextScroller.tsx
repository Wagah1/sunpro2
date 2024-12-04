import React, { useEffect } from "react";
import useState from "react-usestateref";
import "./textScroller.css";

const TextScroller: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScroll(true);
      setTimeout(() => {
        setScroll(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 1000); // This duration should match the transition duration in CSS
    }, 7000); // 5 seconds for staying on screen + 1 second for transition

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="scroller-container">
      <div className={`scroller-text ${scroll ? "scroll" : ""}`}>
        {texts[currentIndex]}
      </div>
    </div>
  );
};

export default TextScroller;
