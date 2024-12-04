import Intro from "./components/Intro";
import ServiceArea from "./components/ServiceArea1";
import Services from "./components/Services";
import Environment from "./components/Environment";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials1";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";

const Home = () => (
  <div>
    <Intro />
    <ServiceArea />
    <Roadmap />
    <Services />
    <Environment />
    <Partners />
    <Testimonials />
    <Footer />
  </div>
);

export default Home;
