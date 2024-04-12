import AboutEmpowerRender from "./AboutEmpowerRender";

const AboutEmpower = () => {
  const empowerData = [
    { id: 1, number: "'11", details: "Quality\nCampaign\nReports" },
    {
      id: 2,
      number: "400",

      details: "Influencer\nManagement",
    },
    { id: 3, number: "2.1k", details: "The Hip-\nAnd-Fun" },
  ];
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      {empowerData.map((empower) => (
        <AboutEmpowerRender empower={empower} key={empower.id} />
      ))}
    </div>
  );
};

export default AboutEmpower;
