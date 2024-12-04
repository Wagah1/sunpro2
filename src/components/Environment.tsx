import "./environment.css";

const Environment = () => {
  const Relax = () => {
    alert("Relax, what do you want to learn : )");
  };
  return (
    <>
      <div id="env">
        <div id="cont">
          <div id="take">
            <h3>Our take on energy sustainability:</h3>
            <p>
              In today's world, we must generate energy sustainably to protect
              nature and all its inhabitants. Moreover, everyone should have
              access to quality, reliable energy to improve essential sectors
              like health, education, food, and business.
            </p>
          </div>
        </div>
        <button onClick={Relax}>Learn more</button>
      </div>
    </>
  );
};

export default Environment;
