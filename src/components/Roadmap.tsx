import "./roadmap.css";

const Roadmap = () => {
  return (
    <div id="roadmap">
      <h3>Your roadmap to quality services:</h3>
      <div id="steps">
        <div className="step">
          <h4>1. Get in touch</h4>
          <hr />
          <p>
            Contact us by filling out the form or using the phone number or
            email address provided below
          </p>
        </div>
        <div className="step">
          <h4>2. System sizing</h4>
          <hr />
          <p>
            Determine the system size based on your requirements (a site visit
            may be necessary) and present you with various options to choose
            from.
          </p>
        </div>
        <div className="step">
          <h4>3. Quoting</h4>
          <hr />
          <p>
            We prepare and send you a quote detailing the items included in your
            system and their costs. Upon payment of a 50% deposit, we schedule
            the installation date.
          </p>
        </div>
        <div className="step">
          <h4>4. Installation and commissioning</h4>
          <hr />
          <p>
            Technicians arrive on-site with the materials and perform the
            installation. Necessary documents are signed, and the warranty
            period commences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
