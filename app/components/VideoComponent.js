"use client";
import cn from "classnames";
const VideoComponent = ({ className, videoPathName, ...rest }) => {
  const videoClasses = cn(className);
  return (
    <video
      src={videoPathName}
      autoPlay
      loop
      className={videoClasses}
      {...rest}
    />
  );
};

export default VideoComponent;
