import Button from "../Button";
import Plus from "@/assets/icons/plusBlack.svg";
import Image from "next/image";
const Body = () => {
  return (
    <main>
      <h1 className="text-primary-200 text-5xl font-cdBold">
        Market where Your
        <br /> audience Are.
      </h1>
      <p className="text-primary-400 text-sm mt-7 font-sfRegular">
        As we forge ahead we continue to push the boundaries of digital
        possibilities, empowering our
        <br /> clients to thrive in digital era with data-driven strategies,
        stunning designs, and engaging
        <br /> user experience.
      </p>
      <Button className="bg-primary-200 text-primary-100 flex text-sm px-3  mt-9 items-center justify-center font-sfSemiBold">
        <Image width="18" height="18" src={Plus} alt="plus icon" priority />
        Partner With Us
      </Button>
    </main>
  );
};

export default Body;
