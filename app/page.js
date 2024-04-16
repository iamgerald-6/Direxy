import Image from "next/image";
import BackgroundImage from "./components/MainNav/BackgroundImage";
import LBanner from "@/assets/LBanner Image.png";
import Absolute from "@/assets/Absolute.png";
import BodyCard from "./components/Body/BodyCard";
import EmpoweringBody from "./components/Body/EmpoweringBody";
import EmpowerList from "./components/Body/EmpowerList";
import Brand from "@/assets/Brand Identity.png";
import WebUiImage from "@/assets/WebUiImage.png";
import Client from "@/assets/ClientImage.png";
import Service from "./components/Body/Service";
import Faith from "@/assets/faith.png";
import Briony from "@/assets/Briony.png";
import Bread from "@/assets/Bread.png";
import A05Blog from "@/assets/A05Blog.png";
import LBannerBlog from "@/assets/LBannerBlog.png";
import TwitterTrend from "@/assets/TwitterTrend.png";
import NewsLetter from "./components/NewsLetter";
import Horizontal from "./components/Horizontal";

export default function Home() {
  return (
    <>
      <BackgroundImage href="/" videoPath="/HomePage.mp4" />
      {/* <Horizontal direction={-1400} height="40rem"> */}
      <main>
        <div className="px-20 ">
          <h1 className="text-primary-200 text-7xl mt-60 font-cdBold">
            Elevate Your Digital
            <br /> Presence With GenMz
            <br /> Marketing Experience
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
          <section className="mt-52 flex  gap-16 ">
            <EmpoweringBody
              title={` Empowering Your
        Digital Success.`}
              detail1={`
              A Gen Mz group of individuals, who continue 
              to empower our clients 360 marketing &
              advertising with data driven content 
              productions, commercial placement,
              influencer TikTok content and stunning"
              `}
              detail2={`designs to engage the audience as part of
              TOMA and middle funnel strategy for better value for strategic marketing and
          advertising`}
            />
            <div>
              <h1 className="text-2xl mt-14 font-cdSemiBold">
                Mojo in Numbers
              </h1>
              <EmpowerList />
            </div>
          </section>
          <section className="mt-52 flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl font-cdBold">
              Brands Get Enhanced by
              <br />
              Digital Visionary Experience
            </h1>
            <div className="">
              <div className="flex gap-4 relative mt-10">
                <div>
                  <h3 className="text-primary-300 font-sfBold">
                    LBanner & LPM show
                  </h3>
                  <Image
                    className="mt-4 w-[35vw] h-auto"
                    width="700"
                    height="700"
                    src={LBanner}
                    loading="lazy"
                    alt="LBanner Image"
                  />
                </div>
                <div>
                  <h3 className=" mt-24 text-primary-300 font-sfBold">
                    Website UI work
                  </h3>
                  <Image
                    className="absolute top-32 mt-3 w-[35vw] h-auto"
                    width="700"
                    height="700"
                    src={WebUiImage}
                    loading="lazy"
                    alt="Website UI Image"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-20">
                  <h3 className="mt-4 text-primary-300 font-sfBold">
                    Absolute Creativity
                  </h3>
                  <Image
                    className="mt-4 w-[35vw] h-auto"
                    width="700"
                    height="700"
                    src={Absolute}
                    loading="lazy"
                    alt="Creativity Image"
                  />
                </div>
                <div className=" mt-80">
                  <h3 className="mt-64 text-primary-300 font-sfBold">
                    Brand Identity
                  </h3>
                  <Image
                    className="mt-4 w-[35vw] h-auto"
                    width="700"
                    height="700"
                    loading="lazy"
                    src={Brand}
                    alt="Brand Image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="mt-32 flex ">
            <NewsLetter />
          </section>
        </div>
        <section className="mt-32 px-0 ">
          <div className="bg-primary-150 flex gap-6 ">
            <div>
              <Image
                className="w-[43vw] h-auto"
                width="700"
                height="700"
                src={Client}
                alt="Image"
              />
            </div>

            <div className="w-[53%]">
              <h1 className="mt-48 px-5 text-4xl font-semibold text-primary-300 font-cdBold">
                We Offer Our Customers
                <br />
                Our Best Offers
              </h1>
              <p className=" px-5 mt-9 text-primary-400 text-sm font-sfRegular">
                In the realm of digital marketing, our agency crafted ingenious
                strategies tailored to each client's unique needs, driving
                exponential growth, expanding their own online presence, and
                fostering lasting connections with their audience Through
                data-driven insights, cutting-edge technologies, and creative
                brilliance, we revolutionized their digital landscape, yielding
                remarkable results that exceeded expectations
              </p>
              <div className="mt-9">
                <Service />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-28 px-20">
          <div>
            <h1 className="text-4xl py-14 font-cdBold border-b">
              Unleashing Digital Magic
              <br /> with Our Expert Team.
            </h1>
            <div className="grid grid-cols-4 gap-4  mt-10">
              <div>
                <Image
                  className="w-auto h-auto"
                  width="450"
                  height="450"
                  src={Faith}
                  loading="lazy"
                  alt="Faith Image"
                />
                <div className="text-center mt-3 font-sfRegular">
                  <h3>Faith</h3>
                  <span className="text-primary-400">
                    Digital marketing Strategist
                  </span>
                </div>
              </div>
              <div>
                <Image
                  className=""
                  width="450"
                  height="450"
                  src={Briony}
                  loading="lazy"
                  alt="Briony Image"
                />
                <div className="text-center mt-3 font-sfRegular">
                  <h3> Briony</h3>
                  <span className="text-primary-400"> Business Manager</span>
                </div>
              </div>

              <div className="">
                <Image
                  className=""
                  width="450"
                  height="450"
                  src={Bread}
                  loading="lazy"
                  alt="Bread Image"
                />
                <div className="text-center mt-3 font-sfRegular">
                  <h3>Breadman</h3>
                  <span className="text-primary-400">Ui/Ux Designer</span>
                </div>
              </div>
              <div className="">
                <Image
                  className=""
                  width="450"
                  height="450"
                  loading="lazy"
                  src={Bread}
                  alt="Jones Image"
                />
                <div className="text-center mt-3 font-sfRegular">
                  <h3>Jones</h3>
                  <span className="text-primary-400"> Business Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-32 px-20">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl py-14 font-bold text-center font-cdBold">
              Unveiling Digital Excellence:Insights, Trends
              <br /> and Strategies Unleashed.
            </h1>
            <div className="grid grid-cols-3 gap-6  mt-10">
              <div>
                <Image
                  className=""
                  width="450"
                  height="450"
                  src={A05Blog}
                  loading="lazy"
                  alt="Blog1 Image"
                />
                <div className=" mt-3 flex flex-col">
                  <h3 className="font-sfBold">AO5 Blog</h3>
                  <span className="text-primary-400 text-sm mt-4 font-sfRegular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                  <span className="text-primary-300 text-sm font-semibold mt-4 font-sfSemiBold">
                    Read More
                  </span>
                </div>
              </div>
              <div>
                <Image
                  className=""
                  width="450"
                  height="450"
                  src={LBannerBlog}
                  loading="lazy"
                  alt="Blog2 Image"
                />
                <div className=" mt-3 flex flex-col">
                  <h3 className=" font-sfBold">LBannecr Blog</h3>
                  <span className="text-primary-400 text-sm mt-4 font-sfRegular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                  <span className="text-primary-300 text-sm font-sfSemiBold mt-4">
                    Read More
                  </span>
                </div>
              </div>

              <div className="">
                <Image
                  className=""
                  width="450"
                  height="450"
                  src={TwitterTrend}
                  loading="lazy"
                  alt="Blog3 Image"
                />
                <div className=" mt-3 flex flex-col">
                  <h3 className="font-sfBold">
                    Twitter Trend & TikTok strategy
                  </h3>
                  <span className="text-primary-400 text-sm mt-4 font-sfRegular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                  <span className="text-primary-300 text-sm font-semibold mt-4">
                    Read More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* </Horizontal> */}
    </>
  );
}
