import Button from "./components/Button";
import Link from "next/link";

const Error = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[60vh]">
      <h1 className="text-8xl text-primary-300 font-cdBold">404 </h1>
      <p className="text-3xl font-cdBold text-primary-200">Error!</p>
      <Link href="/">
        <Button className=" text-sm px-5 py-2 bg-primary-700 text-primary-300">
          Go back home:)
        </Button>
      </Link>
    </div>
  );
};

export default Error;
