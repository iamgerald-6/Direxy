import Image from "next/image";
import Star from "@/assets/icons/Star.svg";

const Concept = () => {
  return (
    <div>
      <div className="flex justify-center gap-20">
        <div>
          <div className="flex gap-4 pt-[298px] ms-16">
            <Image
              className="w-5 h-auto"
              width=" 12"
              height="12"
              src={Star}
              alt="star icon"
            />
            <h4 className="font-sfRegular">Conceptualization</h4>
          </div>
        </div>
        <div className="flex flex-col mt-20 item-center">
          <h1 className="text-6xl font-cdMedium">
            Our Concepts
            <br /> And
            <br /> Approach
          </h1>
          <p className="font-sfRegular text-lg text-primary-400 w-[30vw] mt-10">
            In our search we found out that the website of our clients was not
            generating sales because they where not reaching the right audience,
            this helped us know what we needed to do to help us help (brand
            name) to reach the right audience and generate sales.
          </p>
        </div>
      </div>
      <div className="flex gap-10 mt-16 justify-center">
        <div>
          <span className="px-5 py-1.5 text-sm rounded-full bg-secondary-400">
            Product Research
          </span>
        </div>
        <div className="mt-14">
          <span className="px-5 py-1.5  text-sm rounded-full bg-secondary-400">
            Customer Journey map
          </span>
        </div>
        <div>
          <span className="px-5 py-1.5  text-sm rounded-full bg-secondary-400">
            Brand Research & Design
          </span>
        </div>
        <div className="mt-14">
          <span className="px-5 py-1.5  text-sm rounded-full bg-secondary-400">
            Wireframing
          </span>
        </div>
        <div>
          <span className="px-5 py-1.5  text-sm rounded-full bg-secondary-400">
            High Fidelity Wireframe
          </span>
        </div>
      </div>
    </div>
  );
};

export default Concept;
