import Faith from "@/assets/faith.png";
import BlogRender from "./BlogRender";
const blogData = [
  {
    id: 1,
    title: "Elevate Your Online Presence: Digital Agency Insights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    image: Faith,
  },
  {
    id: 2,
    title: "Code and Creativity: Crafting Digital Excellence Together",
    image: Faith,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
  },
  {
    id: 3,
    title: "Pixels to Profits: Maximizing Returns with Digital Expertise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    image: Faith,
  },
  {
    id: 4,
    title: "Boosting Brands: Digital Strategies for Unparalleled Growth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    image: Faith,
  },
  {
    id: 5,
    title: "Designing Tomorrow : Innovating Digital Experiences with Precision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    image: Faith,
  },
  {
    id: 6,
    title: "Code and Creativity: Crafting Digital Excellence Together",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    image: Faith,
  },
];

const Blog = () => {
  return (
    <div className="grid grid-cols-3 gap-3 px-20 py-10">
      {blogData.map((blog) => (
        <BlogRender blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Blog;
