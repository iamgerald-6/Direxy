import Image from "next/image";

const ServiceRender = ({ service }) => {
  return (
    <div className="bg-primary-500 flex flex-col justify-between h-[48vh] px-4 py-2 rounded-lg">
      <h1 className="text-primary-300 text-lg font-sfBold  pb-5">
        {service.title}
      </h1>

      {/* <div className="mt-9"> */}
      <p className=" border-t border-primary-400 py-4 text-sm text-primary-400 font-sfRegular ">
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
