"use client";

const BackgroundImage = ({ videoPath, href }) => {
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
