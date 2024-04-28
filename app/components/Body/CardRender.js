import Image from "next/image";
const CardRender = ({ card }) => {
  return (
    <div className="bg-primary-150 px-5 flex flex-col py-4     rounded-xl">
      <div className="flex justify-between">
        <h1 className="text-primary-200 xl:text-lg lg:text-base font-bold whitespace-pre-line pb-5 font-sfBold">
          {card.title}
          {/*  */}
        </h1>
        <Image
          width="40"
          height="40"
          src={card.icon}
          alt="Card Image"
          priority
          className="lg:w-10 md:w-6 h-auto"
        />
      </div>

      <div className="mt-6 border-t pt-3 border-primary-400">
        <p className="   py-4 text-sm text-primary-400 font-sfRegular">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default CardRender;
