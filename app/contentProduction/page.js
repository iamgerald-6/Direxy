// import { animals } from "./data";
import WorkWithUs from "../components/Body/WorkWithUs";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import BackgroundImage from "../components/MainNav/BackgroundImage";
import Button from "../components/Button";
import Image from "next/image";
import HandDrawn from "@/assets/Hand-drawn shapes.svg";

import All from "../components/All";
import Instagram from "../components/Instagram";
import Youtube from "../components/Youtube";
import Link from "next/link";
const page = () => {
  return (
    <>
      <BackgroundImage href="/portfolio" videoPath="/Portfolio.mp4" />
      <main className="relative z-20">
        <div className="px-20">
          <h1 className="text-primary-200 text-[70px] leading-none pt-72 font-cdBold">
            Influencer
            <br /> Video Content
          </h1>
          <p className="text-primary-200 text-[16px] mt-7 font-sfSemiBold">
            With global footprint we are proud to have impacted business
            worldwide, and
            <br /> our passion for innovation drive us to create an even
            brighter future in digital
            <br />
            realm.
          </p>
        </div>
        <div className="flex justify-between mt-48 ">
          <div className=" mx-5">
            <Tabs position="relative" variant="unstyled" className=" text-sm">
              <TabList fontSize="xx">
                <Tab className="w-[1vw] ">All</Tab>
                <Tab className="w-[5vw] mx-4">Instagram</Tab>
                <Tab className="w-[4vw] mx-3">Youtube</Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="1px"
                padding="-3px"
                className="bg-white "
              />
              <TabPanels>
                <TabPanel>
                  <All />
                </TabPanel>
                <TabPanel>
                  <Instagram />
                </TabPanel>
                <TabPanel>
                  <Youtube />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          <Select placeholder="Recent" variant="unstyled" width="7vw">
            <option
              variant="unstyled"
              className="bg-black text-black"
              value="option1"
            >
              Test
            </option>
          </Select>
        </div>
        <WorkWithUs />
      </main>
    </>
  );
};

export default page;
