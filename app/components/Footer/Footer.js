import Image from "next/image";
import Logo from "@/assets/Digita-Mojo.svg";
import Facebook from "@/assets/icons/Facebook (1).svg";
import Twitter from "@/assets/icons/Twitter.svg";
import Youtube from "@/assets/icons/Youtube.svg";
const Footer = () => {
  return (
    <footer className="bg-primary-150 text-primary-600 mt-24 px-10 py-3 pt-6">
      <div className="flex justify-evenly items-center text-sm">
        <Image width="200" height="200" src={Logo} alt="logo image" />
        <div className="mt-6">
          <h3 className="text-primary-200 text-lg font-sfBold">Office</h3>
          <ul>
            <li className="mt-1 font-sfRegular">Ghana</li>
            <li className="mt-1 font-sfRegular">99 Elms Street,Accra</li>
            <li className="mt-1 font-sfRegular"> Circle, Accra</li>
            <li className="mt-4 font-sfRegular">DigitalMojo@gmail.com</li>
            <li className="mt-4 font-sfRegular">+123-4567890</li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-primary-200 text-lg">Link</h3>
          <ul>
            <li className="mt-1 font-sfRegular">Home</li>
            <li className="mt-1 font-sfRegular">About Us</li>
            <li className="mt-1 font-sfRegular"> Service</li>
            <li className="mt-1 font-sfRegular">Our Team</li>
            <li className="mt-1 font-sfRegular">Portfolio</li>
            <li className="mt-1 font-sfRegular">Blog</li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-primary-200 text-lg font-sfBold">Service</h3>
          <ul>
            <li className="mt-1 font-sfRegular">Identity Brand</li>
            <li className="mt-1 font-sfRegular">Creative Content </li>
            <li className="mt-1 font-sfRegular">Web Design</li>
            <li className="mt-1 font-sfRegular">Social Media Marketing</li>
            <li className="mt-1 font-sfRegular">Dta Analytics</li>
            <li className="mt-1 font-sfRegular">User Experience</li>
          </ul>
        </div>
      </div>
      <div className=" px-24 ">
        <div className="flex border-t justify-between border-primary-200 mt-20 ">
          <p className="text-xs mt-5 font-sfRegular">
            CopyRight &copy; Breadman.All Rights Reserved Digital-mojo.
          </p>
          <div className="flex mt-4">
            <Image src={Facebook} alt="facebook icon" />
            <Image src={Twitter} alt="twitter icon" />
            <Image src={Youtube} alt="youtube icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
