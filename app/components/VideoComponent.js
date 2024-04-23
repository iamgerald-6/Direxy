"use client";
import cn from "classnames";
import { useState } from "react";

const VideoComponent = ({
  className,
  videoPathName,
  hoverPlay = false,

  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log("Mouse entered");
    if (hoverPlay) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    console.log("Mouse left");
    if (hoverPlay) {
      setIsHovered(false);
    }
  };

  const videoClasses = cn(className);

  return (
    <video
      src={videoPathName}
      autoPlay={!hoverPlay || isHovered}
      lazy
      loop
      controls={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={videoClasses}
      {...rest}
      muted
    />
  );
};

export default VideoComponent;
