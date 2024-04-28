import Button from "../Button";
import Image from "next/image";
import Plus from "@/assets/icons/plusOrange.svg";
const EmpoweringBody = ({ title, detail1, detail2 }) => {
  return (
    <div className=" w-[70%]">
      <h1 className="lg:text-5xl text-3xl md:text-4xl text-primary-200 font-cdBold ">
        {title}
      </h1>
      <hr className="border-primary-400 w-[6vw] mt-12" />
      <div className="lg:text-sm text-xs text-primary-400 sm:flex  flex-col gap-4 sm:gap-4 mt-10 font-sfRegular sm:w-[90%]">
        <p className=" whitespace-normal">{detail1}</p>
        <p className=" whitespace-normal sm:mt-0 mt-2">{detail2}</p>
      </div>
      <Button className="flex text-primary-300 text-sm gap-2 items-center mt-8 p-0 font-sfSemiBold">
        <Image src={Plus} width="18" height="18" alt="plus icon" priority />
        More About Us
      </Button>
    </div>
  );
};

export default EmpoweringBody;
