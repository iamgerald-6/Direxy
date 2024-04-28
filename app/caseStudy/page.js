import HeroCaseStudy from "./section/HeroCaseStudy";
import MarketPlace from "./section/MarketPlace";
import ImageMarket from "./section/ImageMarket";
import FindAnswer from "./section/FindAnswers";
import Concept from "./section/Concept";
import Results from "./section/Results";
import WorkWithUs from "../components/Body/WorkWithUs";
const CaseStudy = () => {
  return (
    <div>
      <HeroCaseStudy />
      <MarketPlace />
      <ImageMarket />
      <FindAnswer />
      <Concept />
      <Results />
      <WorkWithUs />
    </div>
  );
};

export default CaseStudy;
