import ConheçaINS from "./Body/ConheçaINS/ConheçaINSSection";
import FeedbacksSection from "./Body/Feedbacks/Feedbacks";
import FerramentasSections from "./Body/Ferramentas/FerramentasSections";
import SejaQuemSection from "./Body/SejaQuemSection";
import ServicesSection from "./Body/Serviços/ServicesSection";
import Slider from "./Body/Slider";

const Home = () => {
  return (
    <div>
      <SejaQuemSection />
      <Slider />
      <div
        className="h-[100px]"
        id="conhecaINS"
      ></div>
      <ConheçaINS />
      <ServicesSection />
      <FeedbacksSection />
      <FerramentasSections />
    </div>
  );
};

export default Home;
