import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import HandDrawn from "@/assets/Hand-drawn shapes.svg";
const WorkWithUs = () => {
  return (
    <div className="ps-48 relative  pt-36 pb-20">
      <h1 className="text-7xl font-cdBold tracking-wide uppercase relative">
        We Know you
        <br />
        Love what
        <br />
        You See
        <span className="absolute top-[44%] ms-4 ">
          <Link href="/Workwithus">
            <Button className="bg-primary-300 text-black px-5 text-lg font-sfBold tracking-tight ">
              Work with us
            </Button>
          </Link>
        </span>
        <br />
        <span className=" text-primary-600">To create art</span>
      </h1>
      <span className=" absolute top-0 left-[52%]">
        <Image className="w-[35vw]" src={HandDrawn} alt="hand-drawn shape" />
      </span>
    </div>
  );
};

export default WorkWithUs;
