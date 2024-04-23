import Blog from "./components/Blog";

const page = () => {
  return (
    <>
      <header className=" bg-primary-150 h-[50vh] flex flex-col items-center justify-center">
        <div className=" bg-primary-100 px-10 py-24 ">
          <div className="text-center">
            <h3 className="text-4xl font-cdBold">Archives</h3>
            <small>
              <span className="text-primary-300 font-sfRegular underline cursor-pointer">
                Home
              </span>
              -Archive
            </small>
          </div>
        </div>
      </header>
      <Blog />
    </>
  );
};

export default page;
