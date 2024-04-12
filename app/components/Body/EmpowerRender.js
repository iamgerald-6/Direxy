const EmpowerRender = ({ empower }) => {
  return (
    <div className="border  px-7 py-4 rounded-xl ">
      <div>
        <p className="text-primary-300 text-4xl font-cdBold">
          {empower.number}
        </p>
        <p className="text-primary-400 text-sm  mt-5 font-sfSemiBold">
          {empower.details}
        </p>
      </div>
    </div>
  );
};

export default EmpowerRender;
