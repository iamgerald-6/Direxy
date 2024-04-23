import Image from "next/image";
import VideoComponent from "./VideoComponent";
import ArrowUp from "@/assets/icons/arrow-up.svg";

const Instagram = () => {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center gap-4">
        <div className=" w-[28vw]  ">
          <VideoComponent hoverPlay={false} lazy videoPathName="/Quick.mp4" />
          <span className="flex justify-between items-center">
            <h4>Samsung A105 Ad</h4>

            <h4 className="flex text-xs items-center text-primary-400">
              Reel
              <span>
                <Image className="w-6" src={ArrowUp} alt="arrow-up icon" />
              </span>
            </h4>
          </span>
        </div>
        <div className=" w-[28vw]   ">
          <VideoComponent
            hoverPlay={false}
            lazy
            videoPathName="/Samsung+.mp4"
          />
          <span className="flex justify-between items-center">
            <h4>Samsung A105 Ad</h4>

            <h4 className="flex text-xs items-center text-primary-400">
              Reel
              <span>
                <Image className="w-6" src={ArrowUp} alt="arrow-up icon" />
              </span>
            </h4>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className=" w-[28vw]  ">
          <VideoComponent hoverPlay={false} lazy videoPathName="/Quick.mp4" />
          <span className="flex justify-between items-center ">
            <h4>Samsung A105 Ad</h4>
            <h4 className="flex text-xs items-center text-primary-400">
              Reel
              <span>
                <Image className="w-6" src={ArrowUp} alt="arrow-up icon" />
              </span>
            </h4>
          </span>
        </div>
        <div className=" w-[28vw]   ">
          <VideoComponent
            hoverPlay={false}
            lazy
            videoPathName="/Samsung+.mp4"
          />
          <span className="flex justify-between items-center ">
            <h4>Samsung A105 Ad</h4>
            <h4 className="flex text-xs items-center text-primary-400">
              Reel
              <span>
                <Image className="w-6" src={ArrowUp} alt="arrow-up icon" />
              </span>
            </h4>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
