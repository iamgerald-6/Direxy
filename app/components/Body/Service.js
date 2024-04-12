import Icon1 from "@/assets/icon6.svg";
import Icon2 from "@/assets/icon 7.svg";
import Icon3 from "@/assets/icon8.svg";
import ServiceRender from "./ServiceRender";
const Service = () => {
  const serviceData = [
    {
      id: 1,
      title: "Client Brief",
      description:
        "We formalize communication that outlines the specific goals, requirements, expectations, and constraints of a project",
      icon: Icon1,
    },
    {
      id: 2,
      title: "Research",
      description:
        "We formalize communication that outlines the specific goals, requirements, expectations, and constraints of a project",
      icon: Icon2,
    },
    {
      id: 3,
      title: "Finalization",
      description:
        "This is the conclusion stage, where the project is refined, reviewed, and approved for delivery.",
      icon: Icon3,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-7 px-5">
      {serviceData.map((service) => (
        <ServiceRender service={service} key={service.id} />
      ))}
    </div>
  );
};

export default Service;
