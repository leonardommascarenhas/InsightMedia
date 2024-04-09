import ConheçaINS from "./Body/ConheçaINS/ConheçaINSSection";
import FeedbacksSection from "./Body/Feedbacks/Feedbacks";
import SejaQuemSection from "./Body/SejaQuemSection";
import ServicesSection from "./Body/Serviços/ServicesSection";
import Slider from "./Body/Slider";
import Header from "./Header/Header";

function App() {
  return (
    <>
      <Header />
      <SejaQuemSection />
      <Slider />
      <ConheçaINS />
      <ServicesSection />
      <FeedbacksSection />
    </>
  );
}

export default App;
