import React, { useRef, useEffect } from "react";
import { testimonials } from "./testimonials";
import "./testimonials.css";

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  // Function to scroll to the next testimonial
  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.style.transition = "transform 0.5s ease-in-out";
      container.style.transform = "translateX(-30em)";

      setTimeout(() => {
        container.style.transition = "none";
        container.style.transform = "translateX(0)";
        container.appendChild(container.firstElementChild as Node);
      }, 500);
    }
  };

  // Function to scroll to the previous testimonial
  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.style.transition = "none";
      container.insertBefore(
        container.lastElementChild as Node,
        container.firstElementChild
      );
      container.style.transform = "translateX(-30em)";
      setTimeout(() => {
        container.style.transition = "transform 0.5s ease-in-out";
        container.style.transform = "translateX(0)";
      }, 0);
    }
  };

  // Automatically scroll every 20 seconds
  useEffect(() => {
    scrollInterval.current = setInterval(scrollNext, 20000);

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, []);

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h3>What our clients say:</h3>
        <div id="scrollers">
          <button onClick={scrollPrev}>
            <img src="../previous.png" alt="<" />
          </button>
          <button onClick={scrollNext}>
            <img src="../next.png" alt=">" />
          </button>
        </div>
      </div>
      <div className="testimonials-scroll" ref={scrollContainerRef}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <img src={testimonial.imgSrc} alt="reload" />
            <div className="testimonial-text">
              <h4>
                {testimonial.client}, <br /> {testimonial.location}
              </h4>

              <p>{testimonial.cap}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
