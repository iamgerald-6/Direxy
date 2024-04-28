import Image from "next/image";
import Eclipse from "@/public/Ellipse.svg";
import Star from "@/assets/icons/Star.svg";
const MarketPlace = () => {
  return (
    <div className=" mt-20 px-20 ">
      <div className="flex gap-8">
        <div className="">
          <Image
            className="w-[8vw] lg:ms-16"
            width={200}
            height={80}
            src={Eclipse}
          />
          <div className="flex gap-4 pt-36">
            <Image
              className="w-5 h-auto"
              width=" 12"
              height="12"
              src={Star}
              alt="star icon"
            />
            <h4 className="  font-sfRegular">Problem</h4>
          </div>
        </div>
        <div>
          <h1 className="text-6xl font-cdMedium">
            Market Where
            <br /> Your audiences
            <br /> Are.
          </h1>
          <p className="font-sfRegular mt-[72px] w-[23vw] text-primary-400">
            Brand name is a real estate agency and has over 200 housing units in
            accra, kumasi and the northern parts of Ghana, they have been around
            for 15 years+
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
