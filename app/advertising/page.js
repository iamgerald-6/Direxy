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
      <main className="relative z-20">
        <div className="px-20 ">
          <h1 className="text-primary-200 text-[70px] leading-none pt-72 font-cdBold">
            Niche Platform
            <br /> Advertising
          </h1>
          <p className="text-primary-200 text-[16px] mt-7 font-sfSemiBold">
            With global footprint we are proud to have impacted business
            worldwide, and
            <br /> our passion for innovation drive us to create an even
            brighter future in digital
            <br />
            realm.
          </p>
          <section className="mt-72 ">
            <BodyCard />
          </section>
        </div>
        <section className="mt-52 px-10">
          <h1 className="text-4xl font-cdBold px-20">Works</h1>
          <div className="flex flex-col items-center">
            <div className="flex w-[100%]  gap-14 px-20 relative mt-10">
              <div className="">
                <VideoComponent
                  videoPathName="/ServiceVid2.mp4"
                  className="border-[20px] border-primary-300 w-[39vw] h-[90vh]
                object-cover "
                />

                <h3 className="mt-4 text-primary-200 font-cdMedium">
                  Samsung A105 -
                  <span className="text-primary-400">
                    Nano Influencers video Ad
                  </span>
                </h3>
              </div>

              <div className="absolute right-[5.7%] top-[18%]">
                <div className="pb-24">
                  <div className="flex gap-4">
                    <Image
                      className="w-5 h-auto"
                      width=" 12"
                      height="12"
                      src={Star}
                      alt="star icon"
                    />
                    <h4 className="  font-sfRegular">Featured Projects</h4>
                  </div>
                  <p className="mt-5  text-primary-400 font-sfRegular">
                    Highlights of cases that we passionately <br />
                    built with forward thinking clients and
                    <br /> friends over the year
                  </p>
                </div>
                <div className="">
                  <VideoComponent
                    videoPathName="/ServiceVid2.mp4"
                    className="border-[20px] border-secondary-300 w-[38.9vw]
                  h-[90vh] object-cover "
                    hoverPlay={true}
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
            <div className="flex gap-16 px-20">
              <div className="mt-20">
                <VideoComponent
                  videoPathName="/ServiceVid2.mp4"
                  className="border-[20px] border-secondary-100 w-[39vw] h-[90vh]
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
                  className="border-[20px] w-[39vw] h-[60vh] object-cover  border-secondary-200"
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
        <section className="mt-24 px-20 ">
          <ServiceForm />
        </section>
      </main>
    </div>
  );
};

export default page;
// ;
