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
    setIsHovered((isHovered) => !isHovered);
  };

  const handleMouseLeave = () => {
    setIsHovered((isHovered) => !isHovered);
  };

  const videoClasses = cn(className);

  return (
    <video
      src={videoPathName}
      autoPlay={isHovered}
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
