import BodyCard from "../components/Body/BodyCard";
import BackgroundImage from "../components/MainNav/BackgroundImage";
import Image from "next/image";

import Star from "@/assets/icons/Star.svg";
import ServiceForm from "../components/Body/ServiceForm";

import VideoComponent from "../components/VideoComponent";

const page = () => {
  return (
    <div>
      <BackgroundImage href="/" videoPath="/ServicePage.mp4" />
      <main>
        <div className="px-20 ">
          <h1 className="text-primary-200 text-6xl mt-52 font-cdBold">
            Niche Platform
            <br /> Advertising
          </h1>
          <p className="text-primary-200 text-sm mt-7 font-sfSemiBold">
            With global footprint we are proud to have impacted business
            worldwide, and
            <br /> our passion for innovation drive us to create an even
            brighter future in digital
            <br />
            realm.
          </p>
          <section className="mt-56 ">
            {/* <Body /> */}
            <BodyCard />
          </section>
        </div>
        <section className="mt-52 px-10">
          <h1 className="text-4xl font-cdBold">Works</h1>
          <div className="flex flex-col items-center">
            <div className="flex w-[100%] gap-7 relative mt-10">
              <div className="">
                <VideoComponent
                  videoPathName="/ServiceVid2.mp4"
                  className="border-[20px] border-primary-300 w-[70%] h-[90vh]
                object-cover "
                />

                <h3 className="mt-4 text-primary-200 font-cdMedium">
                  Samsung A105 -
                  <span className="text-primary-400">
                    Nano Influencers video Ad
                  </span>
                </h3>
              </div>

              <div className="absolute right-0 top-[20%]">
                <div className="pb-28">
                  <div className="flex gap-4">
                    <Image
                      className="w-5 h-auto"
                      width=" 12"
                      height="12"
                      src={Star}
                      alt="star icon"
                    />
                    <h4 className=" text-sm">Featured Projects</h4>
                  </div>
                  <p className="mt-5 text-sm text-primary-400">
                    Highlights of cases that we passionately <br />
                    built with forward thinking clients and
                    <br /> friends over the year
                  </p>
                </div>
                <div className="">
                  <VideoComponent
                    videoPathName="/ServiceVid2.mp4"
                    className="border-[20px] border-secondary-300 w-[42vw]
                  h-[90vh] object-cover "
                  />

                  <h3 className="mt-4 text-primary-200 font-cdMedium">
                    Samsung A105 -
                    <span className="text-primary-400">
                      With Nano Influencers
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex gap-7">
              <div className="mt-20">
                <VideoComponent
                  videoPathName="/ServiceVid2.mp4"
                  className="border-[20px] border-secondary-100 w-[70vw] h-[90vh]
                object-cover  "
                />

                <h3 className="mt-4 text-primary-200 font-cdMedium">
                  Samsung -
                  <span className="text-primary-400">
                    Friendly gen z emotion
                  </span>
                </h3>
              </div>
              <div className=" mt-96">
                <VideoComponent
                  videoPathName="/ServiceVid1.mp4"
                  className="border-[20px] w-[60vw] h-[60vh] object-cover  border-secondary-200"
                />
                <h3 className=" text-primary-200 font-sfBold mt-4">
                  Viva-
                  <span className="text-primary-400">
                    luxury brand video ad
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-24 px-5 ">
          <ServiceForm />
        </section>
      </main>
    </div>
  );
};

export default page;
// ;
