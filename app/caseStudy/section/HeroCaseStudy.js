import React from "react";

const HeroCaseStudy = () => {
  return (
    <div className="bg-caseStudy bg-no-repeat bg-center bg-cover min-h-[46rem]  w-[100%]">
      <div className="pt-72 px-20">
        <h1 className="text-6xl font-cdBold">Brand Name</h1>
        <small className="mt-3 text-sm font-sfRegular">
          Real Estate Agency{" "}
        </small>
        <p className="mt-5 w-[40vw] font-sfRegular text-lg ">
          Brand name is a real estate agency and has over 200 housing units in
          accra, kumasi and the northern parts of Ghana, they have been around
          for 15 years+
        </p>
        <div className="mt-32 flex gap-48">
          <div className=" flex flex-col gap-2 ">
            <h3 className="text-lg underline font-sfMedium underline-offset-4">
              Client
            </h3>
            <ul className="font-sfRegular">
              <li className="text-sm">Brand name </li>
            </ul>
          </div>
          <div className=" flex flex-col gap-2 ">
            <h3 className="text-lg underline font-sfMedium underline-offset-4">
              Services
            </h3>
            <ul className="font-sfRegular text-sm">
              <li>UI & UX Design </li>
              <li className="my-1">Logo Design & Branding</li>
              <li>Development</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-2 ">
            <h3 className="text-lg underline font-sfMedium underline-offset-4">
              Date{" "}
            </h3>
            <ul className="font-sfRegular text-sm">
              <li className="mb-1">Start : 23 July 2023</li>
              <li>Completion : 20 August 2023</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCaseStudy;
