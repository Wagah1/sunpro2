import "./partners.css";

const Partners = () => {
  return (
    <>
      <div id="whole">
        <h3>We proudly partner with:</h3>
        <div id="partners">
          <a
            href="https://sunking.com/"
            className="partner"
            id="sunking"
            target="_blank"
          >
            <img src="../sunking.png" alt="SunKing" />
          </a>
          <a
            href="https://engie-energyaccess.com/"
            className="partner"
            id="engie"
            target="_blank"
          >
            <img src="../engie.png" alt="Engie Energy" />
          </a>
          <a href="https://livoltek.com/" className="partner" id="livoltek">
            <img src="../livoltek.png" alt="Livoltek" />
          </a>
          <a
            href="https://www.hexingafrica.com/"
            className="partner"
            id="hexing"
            target="_blank"
          >
            <img src="../hexing.png" alt="Hexing Africa" />
          </a>
          <a href="https://www.hinen.com/" className="partner" id="hinen">
            <img src="../hinen.png" alt="Hinen" />
          </a>
          <a
            href="https://www.bioliteenergy.com/"
            className="partner"
            id="biolite"
            target="_blank"
          >
            <img src="../biolite.png" alt="Biolite Energy" />
          </a>
          <a
            href="https://surechill.com/"
            className="partner"
            id="surechill"
            target="_blank"
          >
            <img src="../surechill.png" alt="Surechill" />
          </a>
        </div>
        <div id="sunpro">
          <a href="#footer">
            <img src="sunpro10.png" alt="Sunpro" />
            Partner with us
          </a>
        </div>
      </div>
    </>
  );
};

export default Partners;
