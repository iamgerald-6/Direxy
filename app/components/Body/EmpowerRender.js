const EmpowerRender = ({ empower }) => {
  return (
    <div className="border  xl:px-7 lg:px-4 px-7  py-4 rounded-xl ">
      <div>
        <p className="text-primary-300 lg:text-4xl md:text-3xl text-2xl font-cdBold">
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
