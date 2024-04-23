import Image from "next/image";

const ServiceRender = ({ service }) => {
  return (
    <div className="bg-primary-500 flex flex-col gap-8 justify-between h-[48vh] px-4 py-6 rounded-lg">
      <h1 className="text-primary-300 text-lg font-sfBold  ">
        {service.title}
      </h1>

      {/* <div className="mt-9"> */}
      <p className=" border-t border-primary-400 pt-5 text-sm text-primary-400 font-sfRegular ">
        {service.description}
      </p>
      <div className=" flex justify-end">
        <Image
          width="40"
          height="40"
          src={service.icon}
          alt="Card Image"
          priority
        />
      </div>
    </div>
    // </div>px-4   py-4 rounded-lg
  );
};

export default ServiceRender;
