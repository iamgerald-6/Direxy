import Contacts from "./components/contacts";

const page = () => {
  return (
    <>
      <header className=" bg-primary-150 h-[50vh] flex flex-col items-center justify-center">
        <div className=" bg-primary-100 px-10 py-24 ">
          <div className="text-center">
            <h3 className="text-4xl font-cdBold">Contact</h3>
            <small>
              <span className="text-primary-300 font-sfRegular underline cursor-pointer">
                Home
              </span>
              -Contact
            </small>
          </div>
        </div>
      </header>
      <div className="mt-20">
        <Contacts />
      </div>
    </>
  );
};

export default page;
