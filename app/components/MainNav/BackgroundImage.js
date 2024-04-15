"use client";
// import Image from "next/image";
// import HomeVideo from "";

// import { useRouter } from "next/navigation";
const BackgroundImage = ({ videoPath, href }) => {
  //   const router = useRouter();
  //   const Home = router.pathname === "/";

  //   console.log("Current Path:", router.pathname);
  return (
    <>
      <div className={`${href ? "/" : href ? "/About" : hidden} `}>
        <video
          src={videoPath}
          autoPlay
          loop
          className="-z-10 absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className=" -z-10 absolute inset-0  bg-black opacity-50"></div>
      </div>
    </>
  );
};

export default BackgroundImage;
// <Video
//         className=""
//         loop
//         controls={false}
//         autoplay
//         src={HomeVideo}
//       />
//     </div>
