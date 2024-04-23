import Image from "next/image";
const BlogRender = ({ blog }) => {
  return (
    <section className="mt-10">
      <div>
        <Image
          className="w-[27vw] h-auto cursor-pointer"
          width="300"
          height="200"
          src={blog.image}
          loading="lazy"
          alt="Faith Image"
        />
        <h2 className="text-xl font-sfBold mt-4">{blog.title}</h2>
        <p className="text-sm font-sfRegular mt-3">{blog.description}</p>
      </div>
      <div className=" mt-7">
        <span className="text-primary-300 text-sm font-sfSemiBold cursor-pointer ">
          Read More
        </span>
      </div>
    </section>
  );
};
export default BlogRender;
