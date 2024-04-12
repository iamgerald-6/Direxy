import Button from "../Button";
import Image from "next/image";
import Plus from "@/assets/icons/plusOrange.svg";
const EmpoweringBody = ({ title, detail1, detail2 }) => {
  return (
    <div className=" w-[70%]">
      <h1 className="text-5xl text-primary-200 font-cdBold ">{title}</h1>
      <hr className="border-primary-400 w-[6vw] mt-12" />
      <div className="text-sm text-primary-400 flex gap-4 mt-10 font-sfRegular w-[100%]">
        <p className=" whitespace-normal">{detail1}</p>
        <p className=" whitespace-normal">{detail2}</p>
      </div>
      <Button className="flex text-primary-300 text-sm gap-2 items-center mt-8 p-0 font-sfSemiBold">
        <Image src={Plus} width="18" height="18" alt="plus icon" priority />
        More About Us
      </Button>
    </div>
  );
};

export default EmpoweringBody;
