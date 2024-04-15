import Image from "next/image";
import WorkWithUs from "@/assets/CupImage.png";
import Button from "../Button";

const ServiceForm = () => {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col ps-10">
        <h1 className="text-3xl font-cdBold">
          Work With
          <br /> Us
        </h1>
        <p className=" text-primary-450 mt-3 ">
          let us know who you are, your brand
          <br /> (company) what you do, and how we can help
          <br /> you and your business
        </p>
        <Image
          width="350"
          height="300"
          src={WorkWithUs}
          alt="work with us image"
          className="mt-8 w-[25vw] h-auto"
        />
      </div>
      <div className="flex flex-col gap-5 font-sfRegular ">
        <input
          type="email"
          className=" ps-2 w-[30vw] bg-secondary-400 rounded-md py-1.5 text-primary-200 border-none outline-none"
          placeholder="Your email"
        />
        <input
          type="text"
          className=" ps-2 w-[30vw] bg-secondary-400 rounded-md py-1.5 text-primary-200 border-none outline-none"
          placeholder="Your name"
        />
        <input
          type="text"
          className=" ps-2 w-[30vw] bg-secondary-400 rounded-md py-1.5 text-primary-200 border-none outline-none"
          placeholder="Brand name"
        />
        <input
          type="text"
          className=" ps-2 w-[30vw] bg-secondary-400 rounded-md py-1.5 text-primary-200 border-none outline-none"
          placeholder="Describe your idea"
        />
        <div>
          <h4 className="mt-2 text-lg">How can we help you</h4>
        </div>
        <div className=" flex gap-2 flex-wrap w-[40vw] ">
          <span className="px-2 py-0.5  text-sm rounded-full bg-secondary-400">
            L-Banners
          </span>
          <span className="px-2 py-0.5  text-sm rounded-full bg-secondary-400">
            LPMs
          </span>
          <span className="px-2 py-0.5  text-sm rounded-full bg-secondary-400">
            Video contents
          </span>
          <span className="px-2 py-0.5  text-sm rounded-full bg-secondary-400">
            Twitter trends
          </span>
          <span className="px-2 py-0.5  text-sm rounded-full bg-secondary-400">
            Reels & Shorts
          </span>
          <span className="px-2 py-0.5  text-sm rounded-full bg-secondary-400">
            Interviews & Documentary
          </span>
          <span className="px-2 py-0.5  text-sm rounded-full bg-secondary-400">
            Webisode
          </span>
          <span className="px-2 py-0.5  text-sm rounded-full bg-secondary-400">
            UI/UX
          </span>
          <span className="px-2 py-0.5  text-sm rounded-full bg-secondary-400">
            Digital Marketing
          </span>
        </div>
        <div>
          <Button className="bg-primary-300 text-primary-100 px-5 text-sm font-sfSemiBold">
            Submit your Idea
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceForm;
