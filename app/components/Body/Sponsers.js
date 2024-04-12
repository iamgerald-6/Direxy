import Image from "next/image";
import Samsung from "@/assets/Samsung.svg";
import Stovoo from "@/assets/StoVoo.svg";
import Hype from "@/assets/HyperMedia.svg";
import Client4 from "@/assets/Client 4.svg";
import Client8 from "@/assets/Client 8.svg";
import Frame from "@/assets/Frame 92.svg";
import Image1 from "@/assets/image 1.svg";
import Image2 from "@/assets/image 2.svg";
const Sponsers = () => {
  return (
    <>
      <div className="grid grid-cols-4 items-center">
        <Image src={Samsung} alt="Samsung image" />
        <Image src={Stovoo} alt="Sponsor Image" />
        <Image src={Hype} alt="Sponsor Image" />
        <Image src={Client4} alt="Sponsor Image" />
      </div>
      <div className="me-20 grid grid-cols-4 items-center">
        <Image width="250" src={Client8} alt="Sponsor Image" />
        <Image width="250" src={Frame} alt="Sponsor Image" />
        <Image width="170" src={Image1} alt="Sponsor Image" />
        <Image width="250" src={Image2} alt="Sponsor Image" />
      </div>
    </>
  );
};

export default Sponsers;
