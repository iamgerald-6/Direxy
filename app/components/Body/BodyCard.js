import Icon1 from "@/assets/Icon 1.svg";
import Icon2 from "@/assets/Icon 2.svg";
import Icon3 from "@/assets/Icon 3.svg";
import Icon4 from "@/assets/Icon 4.svg";
import Icon5 from "@/assets/Icon 5.svg";
import Icon6 from "@/assets/Icon 6.svg";
import CardRender from "./CardRender";
import Body from "./Body";
const BodyCard = () => {
  const cardData = [
    {
      id: 1,
      title: "Our Crafting \nUnique Brand \nIdentities",
      description:
        "Designing distinct brand identities for memorable impressions.",
      icon: Icon1,
    },
    {
      id: 2,
      title: "Gen Z \nVideo \nProduction",
      description:
        'Producing captivating content for broad audience We craft stories and videos for all social channels for better interaction and less "BORING"',
      icon: Icon2,
    },
    {
      id: 3,
      title: "Creating\nInnovative \nWeb Design",
      description:
        "Creating striking user-friendly websites with advanced features.",
      icon: Icon3,
    },
    {
      id: 4,
      title: "Strategic Social Media & \nMarketing",
      description: "Implementing targeted, impactful social media campaign.",
      icon: Icon4,
    },
    {
      id: 5,
      title: "Strategic Data-\nDriven Analytics & Innovation",
      description:
        "Enhancing strategies with valuable, data-driven insights and informed decision-making.",
      icon: Icon5,
    },
    {
      id: 6,
      title: "Interactive & Immersive User Experience",
      description:
        "Designing immersive experiences for engaging user interactions.",
      icon: Icon6,
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-12   ">
      <div className="col-span-2">
        <Body />
      </div>

      {cardData.map((card) => (
        <CardRender card={card} key={card.id} />
      ))}
      {/* </div> */}
    </div>
  );
};

export default BodyCard;
