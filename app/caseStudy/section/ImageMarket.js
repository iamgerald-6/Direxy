import MarketImage1 from "@/public/MarketImage1.png";
import MarketImage2 from "@/public/MarketImage2.png";
import MarketImage3 from "@/public/MarketImage3.png";
import MarketImage4 from "@/public/MarketImage4.png";
import MarketImage5 from "@/public/MarketImage5.png";
import Image from "next/image";
const ImageMarket = () => {
  return (
    <div className="flex gap-6 justify-center mt-36">
      <div className="flex flex-col gap-10">
        <Image
          className=" w-[30vw]"
          src={MarketImage1}
          alt="Market imagery"
          width={300}
          height={80}
        />
        <div className="justify-end flex">
          <Image
            className=""
            src={MarketImage2}
            alt="Market imagery"
            width={300}
            height={80}
          />
        </div>
      </div>
      <div>
        <Image
          className="w-[30vw] mt-36"
          src={MarketImage5}
          alt="Market imagery"
          width={300}
          height={80}
        />
      </div>
      <div className="flex flex-col gap-10">
        <Image
          className="w-[30vw]"
          src={MarketImage4}
          alt="Market imagery"
          width={300}
          height={80}
        />
        <div>
          <Image
            src={MarketImage3}
            alt="Market imagery"
            width={300}
            height={80}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageMarket;
