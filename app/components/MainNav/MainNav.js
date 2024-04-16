import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Digita-Mojo.svg";
import Button from "../Button";
import Plus from "@/assets/icons/plusBlack.svg";
// import BackgroundImage from "./BackgroundImage";

const MainNav = () => {
  return (
    <>
      <header className="bg-transparent relative z-20">
        {/* <BackgroundImage href="/" /> */}
        <nav className="flex justify-between px-5 items-center py-2 ">
          <Link href="/">
            <Image
              className="w-[10vw] h-auto"
              width="150"
              height="150"
              src={Logo}
              alt="Digital Mojo"
              priority
            />
          </Link>
          <ul className="text-primary-200 text-sm flex gap-14 font-sfSemiBold">
            <Link href="/">Home</Link>
            <Link href="/About"> Pages</Link>
            <Link href="/ourservice">Portfolio</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
          </ul>
          <div>
            <Button className="bg-primary-300 text-primary-100 flex text-sm font-sfSemiBold  items-center justify-center px-3 ">
              <Image
                width="18"
                height="18"
                src={Plus}
                alt="plus icon"
                priority
              />
              Get a Quote
            </Button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MainNav;
