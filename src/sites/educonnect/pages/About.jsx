import PageHeaderSection from "./about/PageHeaderSection";
import StorySection from "./about/StorySection";
import ValuesSection from "./about/ValuesSection";
import useDocumentMeta from "../../../shared/hooks/useDocumentMeta";

// Narrative order: introduce EduConnect, tell the origin story, then the
// concrete promises that explain how the guidance actually works. No
// closing CTA — EduConnectApp already renders ContactCmp below every
// non-contact route.
const About = () => {
  useDocumentMeta(
    "About | EduConnect",
    "We're a small study abroad team in Guntur, Andhra Pradesh, part of JMonkDevops. When you come to us, one of us takes your case and stays on it until you've landed."
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
