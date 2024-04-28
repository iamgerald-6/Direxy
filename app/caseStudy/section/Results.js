import Result from "@/public/Results.png";
import Results2 from "@/public/Results2.png";
import Results3 from "@/public/Results3.png";
import Results4 from "@/public/Results4.png";
import Results5 from "@/public/Results5.png";
import Results6 from "@/public/Results6.png";
import Results7 from "@/public/Results7.png";
import Star from "@/assets/icons/Star.svg";
import Image from "next/image";
const Results = () => {
  return (
    <div className=" mt-7">
      <div className="flex gap-4 pt-[298px] ms-16">
        <Image
          className="w-5 h-auto"
          width=" 12"
          height="12"
          src={Star}
          alt="star icon"
        />
        <h4 className="font-sfRegular">Results</h4>
      </div>
      <div className="">
        <div className="flex gap-3">
          <Image
            src={Result}
            alt="Image Results"
            width={450}
            height={80}
            className="w-[26vw]"
          />
          <Image
            src={Results7}
            alt="Image Results"
            width={450}
            height={80}
            className="w-[45vw]"
          />
          <Image
            src={Results3}
            alt="Image Results"
            width={450}
            height={80}
            className="w-[26vw]"
          />
        </div>

        <div className="flex gap-3 mt-3 px-3">
          <Image
            src={Results6}
            alt="Image Results"
            width={450}
            height={80}
            className="w-[50vw]"
          />
          <Image
            src={Results5}
            alt="Image Results"
            width={450}
            height={80}
            className="w-[50vw]"
          />
        </div>

        <div className="flex gap-3">
          <Image
            src={Results4}
            alt="Image Results"
            width={450}
            height={80}
            className="w-[26vw]"
          />
          <Image
            src={Results3}
            alt="Image Results"
            width={450}
            height={80}
            className="w-[45vw]"
          />
          <Image
            src={Results2}
            alt="Image Results"
            width={450}
            height={80}
            className="w-[26vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Results;
