import Image from "next/image";
import Work from "@/assets/Work.png";
import Button from "../components/Button";
import { Select } from "@chakra-ui/react";
const page = () => {
  return (
    <section className="flex justify-between px-20 mt-32">
      <div className="flex flex-col ps-10">
        <h1 className="text-5xl font-cdBold">
          Work With
          <br /> Us
        </h1>
        <p className=" text-primary-450 mt-3 font-sfRegular ">
          Before we get started we would like to know your business
          <br /> and what we can do to help, your business/
          <br /> brand :)
        </p>
        <Image
          width="350"
          height="300"
          src={Work}
          alt="work with us image"
          className="mt-8 w-[25vw] h-auto"
        />
      </div>
      <div className="flex flex-col gap-5 font-sfRegular ">
        <input
          type="email"
          className=" ps-2 w-[37vw] placeholder-primary-400  bg-secondary-400 rounded-md py-2.5 text-primary-200 border-none outline-none"
          placeholder="Your email"
        />
        <input
          type="text"
          className=" ps-2 w-[37vw] placeholder-primary-400 bg-secondary-400 rounded-md py-2.5 text-primary-200 border-none outline-none"
          placeholder="Your name"
        />
        <input
          type="text"
          className=" ps-2 w-[37vw] placeholder-primary-400 bg-secondary-400 rounded-md py-2.5 text-primary-200 border-none outline-none"
          placeholder="Brand name"
        />
        <div className="bg-secondary-400 w-[37vw] ps-2 pe-1 rounded-md py-2.5 flex justify-between items-center">
          <input
            type="text"
            className="bg-transparent text-primary-200 border-none outline-none placeholder-primary-400"
            placeholder=" Project brief"
          />
          <p className="text-xs text-primary-400  ">
            *Please include influencer niche in your brief
          </p>
        </div>
        <div>
          <h4 className="mt-2 text-lg font-sfRegular">Select video type:</h4>
        </div>
        <div className=" flex gap-3 flex-wrap w-[40vw] font-sfRegular">
          <span className="px-5 py-1.5  text-sm rounded-full bg-secondary-400">
            TikTok/Reel
          </span>
          <span className="px-5 py-1.5  text-sm rounded-full text-primary-300 bg-secondary-400">
            YT Shorts
          </span>
          <span className="px-5 py-1.5  text-sm rounded-full bg-secondary-400">
            Custom content
          </span>
        </div>
        <div>
          <div className=" font-sfMedium py-3">
            <label>
              Does the project come with products that needs to be used?
            </label>
            <Select
              bg="#1E1E1E"
              color="#737373"
              placeholder="Select"
              // variant="unstyled"
              borderColor="#1E1E1E"
              width="37vw"
              height="8vh"
              className="mt-3"
              paddingBottom="10px"
            >
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                Yes
              </option>
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                No
              </option>
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                Mojo should handle it for us
              </option>
            </Select>
          </div>

          <div className=" font-sfMedium py-3">
            <label>Do you have an in-house digital team?</label>
            <Select
              bg="#1E1E1E"
              color="#737373"
              placeholder="Select"
              // variant="unstyled"
              borderColor="#1E1E1E"
              width="37vw"
              height="8vh"
              className="mt-3"
              paddingBottom="10px"
            >
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                Yes
              </option>
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                No
              </option>
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                Mojo should handle it for us
              </option>
            </Select>
          </div>
          <div className=" font-sfMedium py-3">
            <label>Estimated total number of Influencers</label>
            <Select
              bg="#1E1E1E"
              color="#737373"
              placeholder="Select"
              // variant="unstyled"
              borderColor="#1E1E1E"
              width="37vw"
              height="8vh"
              className="mt-3"
              paddingBottom="10px"
            >
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                1-5
              </option>
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                5-10
              </option>
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                &gt;20
              </option>
            </Select>
          </div>
          <div className=" font-sfMedium py-3">
            <label className=" font-sfMedium mt-4">How many months?</label>
            <Select
              bg="#1E1E1E"
              color="#737373"
              placeholder="Select"
              // variant="unstyled"
              borderColor="#1E1E1E"
              width="37vw"
              height="8vh"
              className="mt-3"
              paddingBottom="10px"
            >
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                1-5
              </option>
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                1 month
              </option>
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                3-6 months retainer (5% off)
              </option>
              <option
                variant="unstyled"
                className="bg-black text-black"
                value="option1"
              >
                12-month retainer (20% off)
              </option>
            </Select>
          </div>
        </div>
        <div>
          <Button className="bg-primary-300 text-primary-100 px-5 text-sm font-sfBold">
            Submit your Idea
          </Button>
        </div>
      </div>
    </section>
  );
};

export default page;
