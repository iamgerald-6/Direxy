"use client";

const BackgroundImage = ({ videoPath, href }) => {
  return (
    <>
      <div className={`${href ? "/" : href ? "/About" : hidden} `}>
        <video
          src={videoPath}
          autoPlay
          loop
          className="z-0  absolute top-0 left-0 lg:min-w-[100%] h-[42.5rem] object-cover"
        />
        <div className="z-10  absolute inset-0 h-[42.5rem] w-full bg-black opacity-50"></div>
      </div>
    </>
  );
};

export default BackgroundImage;
