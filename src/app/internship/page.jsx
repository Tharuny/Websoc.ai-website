"use client";
import Navbar from "../home/components/Navbar";
import Footer from "../home/components/footer";
import InternshipSection from "../internship/components/internshipsection";
import MarqueeSection from "./components/MarqueeSection";
import FaqSection from "./components/faq";
import StudentReview from "./components/StudentReview";
import iDetails from "./constants/internship.json"
import ScrollToTop from "../home/components/ScrollToTop";
import FSDetails from "./components/FSDetails";
import { myLenis } from "../utils";
import WhyWebSoc from "./components/WhyWebSoc";
const Home = () => {

  myLenis();

  return (
    <div className="container mx-auto bg-black text-white" style={{ overflowX: "hidden" }}>
      <Navbar />
      {/* <h1 className="text-[60px] font-bold mb-8 text-center font-Altform"></h1> */}
      <div className="h-[100vh]">
        <MarqueeSection />
      </div>

      {/* <div className="m-10">
        <InternshipSection
          jobTitle={iDetails.IS1.title}
          jobDescription={<p>{iDetails.IS1.description}</p>}
          jobFeaturesHeading={iDetails.IS1.featuresHeading}
          jobFeatures={iDetails.IS1.features}
        />
      </div>

      <div className="m-10">
        <InternshipSection
          jobTitle={iDetails.IS2.title}
          jobDescription={<p>{iDetails.IS2.description}</p>}
          jobFeaturesHeading={iDetails.IS2.featuresHeading}
          jobFeatures={iDetails.IS2.features}
        />
      </div>

      <div className="m-10">
        <InternshipSection
          jobTitle={iDetails.IS3.title}
          jobDescription={<p>{iDetails.IS3.description}</p>}
          jobFeaturesHeading={iDetails.IS3.featuresHeading}
          jobFeatures={iDetails.IS3.features}
        />
      </div>

      <div className="m-10">
        <InternshipSection
          jobTitle={iDetails.IS4.title}
          jobDescription={<p>{iDetails.IS4.description}</p>}
          jobFeaturesHeading={iDetails.IS4.featuresHeading}
          jobFeatures={iDetails.IS4.features}
        />
      </div> */}

      <div>
        {/* <FaqSection /> */}
      </div>
      <FSDetails />
      <WhyWebSoc />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Home;
