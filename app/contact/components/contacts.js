import Button from "@/app/components/Button";
import PhoneLink from "./phoneLink";
import EmailLink from "./emailLink";
// import Image from "next/image";

const Contacts = () => {
  return (
    <section className="flex justify-between px-14 ">
      <div className="flex flex-col ps-10">
        <h1 className="text-6xl font-cdBold">
          Have any Question?
          <br /> Get in Touch!
        </h1>
        <p className=" text-primary-450 mt-3 font-sfRegular ">
          let embark on a journey to redefine your digital landscape. Contact us
          today
          <br />
          to take the first step towards digital excellence
        </p>
        <div className="flex flex-col gap-4">
          <p className="mt-5">
            <PhoneLink phoneNumber="+233555603511" />
          </p>

          <p className="text-lg underline">
            <EmailLink email="briony.l@digitalmojotechsol.com" />
          </p>
        </div>
        <div className="flex flex-col gap-1 mt-4 text-sm font-sfRegular">
          <p>6th Floor, - </p>
          <p>Okasrt Place,Circle,</p>
          <p>Accra, ghana</p>
        </div>
        <div>
          <p className="text-primary-300 font-sfRegular mt-20">
            Your Success is Our Mission"
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 font-sfRegular ">
        <div className="w-[40vw]">
          <p className="text-primary-400 font-sfRegular">
            At Direxy we&apos;re dedicated to transforming your digital presence
            into a dynamic force that drives success. Our team of innovative
            minds is ready to craft tailored solutions that resonates with your
            brand&apos;s vision and objectives. From cutting-edge web design and
            development to strategic digital marketing campaigns, we&apos;s here
            to amplify your online impact.
          </p>
        </div>
        <div>
          <h2 className="font-cdBold text-3xl">Contact Us!</h2>
        </div>
        <input
          type="text"
          className=" ps-2 w-[40vw] bg-transparent placeholder-primary-400 py-2.5 text-primary-200 border-b border-primary-300 outline-none"
          placeholder="Name"
        />
        <input
          type=""
          className=" ps-2 w-[40vw] bg-transparent placeholder-primary-400 py-2.5 text-primary-200 border-b border-primary-300 outline-none"
          placeholder="Brand name"
        />

        <div>
          <h3 className="text-primary-400 ps-2">Message</h3>
          <textarea
            type="text"
            className="ps-2  w-[40vw] bg-transparent h-[20vh]    text-primary-200 border-b border-primary-300 outline-none"
          ></textarea>
        </div>

        <Button className="bg-primary-300 flex justify-center items-center text-primary-100 px-7  font-sfBold mt-3">
          Send Message
        </Button>
      </div>
    </section>
  );
};

export default Contacts;
