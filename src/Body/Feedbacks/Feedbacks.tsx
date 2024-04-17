import Title from "../../components/Title";
import Modal from "./Modal";

const FeedbacksSection = () => {
  return (
    <section className="flex flex-col justify-center items-center p-4 sm:p-6 md:p-12 ">
      <Title title="Feedbacks" />
      <Modal />
    </section>
  );
};

export default FeedbacksSection;
