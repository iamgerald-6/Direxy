import Image from "next/image";

const ServiceRender = ({ service }) => {
  return (
    <div className="bg-primary-500 px-5 w-[16vw] h-[45vh] py-4 rounded-lg">
      <h1 className="text-primary-300 text-lg font-sfBold whitespace-pre-line pb-5">
        {service.title}
      </h1>

      <div className="mt-9">
        {/* <hr className="mt-4" /> */}
        <p className=" border-t border-primary-400 py-4 text-xs text-primary-400 font-sfRegular">
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
    </div>
  );
};

export default ServiceRender;
