import Find1 from "@/public/Find1.png";
import Find2 from "@/public/Find2.png";
import Find3 from "@/public/Find3.png";
import Image from "next/image";
import Star from "@/assets/icons/Star copy.svg";
const FindAnswers = () => {
  return (
    <div className="bg-white text-black px-20 mt-8 pb-10">
      <div className="flex">
        <div>
          <div className="flex gap-3 pt-[350px] lg:ms-10">
            <Image
              className="w-5 h-auto"
              width=" 12"
              height="12"
              src={Star}
              alt="star icon"
            />
            <h4 className="font-sfbold">Research</h4>
          </div>
        </div>
        <div className="flex flex-col items-center w-full pt-24">
          <h1 className="text-7xl font-cdMedium text-center">
            Findings
            <br /> & <br />
            Answers
          </h1>
          <p className="text-primary-400 font-sfRegular text-lg w-[30vw] mt-10">
            In our search we found out that the website of our clients was not
            generating sales because they where not reaching the right audience,
            this helped us know what we needed to do to help us help (brand
            name) to reach the right audience and generate sales.
          </p>
          <div className="flex gap-40 mt-12">
            <div>
              <h3 className="text-lg underline underline-offset-4 font-sfBold mt-2">
                Research Method
              </h3>
              <ul className="text-primary-400 font-sfRegular mt-1">
                <li className="mt-2">User Interviews </li>
                <li className="my-2">Audience Research </li>
                <li>Surveys</li>
              </ul>
            </div>
            <div>
              <h3 className="mt-2 text-lg underline underline-offset-4 font-sfBold">
                Tools
              </h3>
              <ul className="text-primary-400 font-sfRegular mt-1">
                <li className="mt-2">Loom</li>
                <li className="my-2">Google analytics</li>
                <li>Google forms </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-10 justify-center">
        <Image
          className="w-[27vw]"
          width={400}
          height={80}
          src={Find1}
          alt="imagery"
        />
        <Image
          className="w-[27vw]"
          width={400}
          height={80}
          src={Find2}
          alt="imagery"
        />
        <Image
          className="w-[27vw]"
          width={400}
          height={80}
          src={Find3}
          alt="imagery"
        />
      </div>
    </div>
  );
};

export default FindAnswers;
