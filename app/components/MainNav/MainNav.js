"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Digita-Mojo.svg";
import Button from "../Button";
import Plus from "@/assets/icons/plusBlack.svg";
import ToggleButton from "./ToggleButton";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import ResponsiveSidebar from "./ResponsiveSidebar";

const MainNav = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  const openSidebar = () => {
    setOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeSidebar = () => {
    setOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    const handleRouteChange = () => {
      console.log(`App is changing to ${pathname}?${searchParams}`);
      // Close the sidebar when navigating to another page
      if (open) {
        closeSidebar();
      }
    };

    // Subscribe to route change events
    window.addEventListener("routeChangeStart", handleRouteChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("routeChangeStart", handleRouteChange);
    };
  }, [pathname, searchParams, open]);
  return (
    <>
      <header className="bg-transparent absolute top-0 z-30 w-full">
        <nav className="flex justify-between lg:px-5 md:px-2 px-0 items-center py-[3px] ">
          <Link href="/">
            <Image
              className="md:w-[8vw] sm:w-[12vw] w-[20vw] z-20 "
              width="150"
              height="150"
              src={Logo}
              alt="Digital Mojo"
              priority
            />
          </Link>
          <ul className="text-primary-200 text-sm md:flex lg:gap-14  hidden gap-8 font-sfSemiBold">
            <Link href="/">Home</Link>
            <Link href="/About"> About</Link>
            <Link href="/advertising">Advertising</Link>
            <Link href="/contentProduction">Content Production</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </ul>
          <div>
            <Button className="bg-primary-300 text-primary-100 md:flex hidden text-sm font-sfBold   items-center justify-center px-3 ">
              <Image
                width="18"
                height="18"
                src={Plus}
                alt="plus icon"
                priority
              />
              Get a Quote
            </Button>
            <motion.div
              className=" md:hidden block relative z-40"
              animate={open ? "open" : "closed"}
            >
              <ToggleButton setOpen={open ? closeSidebar : openSidebar} />
            </motion.div>
          </div>
        </nav>
      </header>
      {open ? (
        <motion.div className="w-full h-full bg-[rgba(0,0,0,0.4)] fixed z-20 ">
          <ResponsiveSidebar />
        </motion.div>
      ) : null}
    </>
  );
};

export default MainNav;
