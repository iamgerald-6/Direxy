import AboutEmpower from "../components/Body/AboutEmpower";

import EmpoweringBody from "../components/Body/EmpoweringBody";
import Service from "../components/Body/Service";
import Sponsers from "../components/Body/Sponsers";
import BackgroundImage from "../components/MainNav/BackgroundImage";

import NewsLetter from "../components/NewsLetter";
import VideoComponent from "../components/VideoComponent";

const page = () => {
  return (
    <div>
      <BackgroundImage href="/" videoPath="/AboutPage.mp4" />
      <main>
        <div className="px-20 ">
          <h1 className="text-primary-200 text-[70px] leading-none mt-64 font-cdBold">
            How The Mojo
            <br /> Magic Started
          </h1>
          <p className="text-primary-200 text-[16px] mt-7 font-sfSemiBold">
            With global footprint we are proud to have impacted business
            worldwide, and
            <br /> our passion for innovation drive us to create an even
            brighter future in digital
            <br />
            realm.
          </p>

          <section className=" mt-80 flex  gap-16 ">
            <EmpoweringBody
              title={`Kicking Off Digital Mojo\n with 2 inspired women`}
              detail1={`Founded 2012,our digital agency\n has been a trailblazer in the ever-evolving\ndigital landscape. With unwavering\n dedication and creative prowess,we have\n catered to over\n 2000 clients globally, spanning`}
              detail2={`diverse industries. Our commitment to\n excellence has been recognized through\n more than 400 prestigious awards,\ncelebrating our innovative solutions,\n groundbreaking campaigns, and unparalleled achievements.`}
            />
            <div>
              <h1 className="text-2xl mt-14 font-cdSemiBold">
                Explore the Era Where "content is King"
              </h1>
              <AboutEmpower />
            </div>
          </section>
        </div>
        <section className="mt-32 px-0 ">
          <div className="bg-primary-150 flex gap-6 ">
            <div className="w-[43%]">
              <VideoComponent videoPathName="/AboutEmpower.mp4" />
            </div>

            <div className="w-[53%]">
              <h1 className="mt-64 px-5 text-4xl font-semibold text-primary-300 font-cdBold">
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
        <section className="mt-36 px-20 ">
          <h2 className=" font-cdSemiBold text-xl text-center pb-3 text-primary-300">
            Joining Forces for Success
          </h2>
          <Sponsers />
        </section>
        <section className="mt-40 px-20">
          <NewsLetter />
        </section>
      </main>
    </div>
  );
};

export default page;
