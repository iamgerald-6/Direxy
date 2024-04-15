import Image from "next/image";
const CardRender = ({ card }) => {
  return (
    <div className="bg-primary-150 px-5 w-[19vw] h-[45vh] py-4 rounded-xl">
      <div className="flex justify-between">
        <h1 className="text-primary-200 text-lg font-bold whitespace-pre-line pb-5 font-sfBold">
          {card.title}
        </h1>
        <Image
          width="40"
          height="40"
          src={card.icon}
          alt="Card Image"
          priority
          className="w-10 h-auto"
        />
      </div>

      <div className="mt-6 ">
        {/* <hr className="mt-4" /> */}
        <p className=" border-t border-primary-400 py-4 text-sm text-primary-400 font-sfRegular">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default CardRender;
