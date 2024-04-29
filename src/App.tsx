import ConheçaINS from "./Body/ConheçaINS/ConheçaINSSection";
import FeedbacksSection from "./Body/Feedbacks/Feedbacks";
import FerramentasSections from "./Body/Ferramentas/FerramentasSections";
import SejaQuemSection from "./Body/SejaQuemSection";
import ServicesSection from "./Body/Serviços/ServicesSection";
import Slider from "./Body/Slider";
import Footer from "./Footer/Footer";
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
      <FerramentasSections />
      <Footer />
    </>
  );
}

export default App;
