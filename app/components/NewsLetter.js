import Image from "next/image";
import NewLetters from "@/assets/Newsletter.svg";
const NewsLetter = () => {
  return (
    <div className="w-[100%] flex flex-col items-center relative">
      <input
        type="email"
        className="border-b font-sfSemiBold border-primary-300 py-3 w-[100%] outline-none bg-transparent text-primary-200 mt-8"
        placeholder="Enter Your email Address"
      />
      <Image
        className="absolute -z-10 top-0"
        loading="lazy"
        src={NewLetters}
        alt="NewsLetter"
      />
    </div>
  );
};

export default NewsLetter;
