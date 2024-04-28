import EmpowerRender from "./EmpowerRender";
// import EmpoweringBody from "./EmpoweringBody";

const EmpowerList = () => {
  const empowerData = [
    { id: 1, number: "'11", details: "Your\n experience\n since 2012" },
    {
      id: 2,
      number: "100+",

      details: "Growing\n influencer\n Network",
    },
    { id: 3, number: "2.1k", details: "Clients All\nOver The\n World" },
  ];
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-6 md:gap-3 gap-3 mt-4">
      {empowerData.map((empower) => (
        <EmpowerRender empower={empower} key={empower.id} />
      ))}
    </div>
  );
};

export default EmpowerList;
