import PageHeaderSection from "./about/PageHeaderSection";
import StorySection from "./about/StorySection";
import ValuesSection from "./about/ValuesSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

const About = () => {
  useDocumentMeta(
    "About | DigiConnect",
    "DigiConnect is JMonkDevops' software and cloud engineering practice, run out of Guntur, Andhra Pradesh. We keep the group small enough that the people who scope your project are the same people who ship it."
  );

  return (
    <>
      <PageHeaderSection />
      <StorySection />
      <ValuesSection />
    </>
  );
};

export default About;
