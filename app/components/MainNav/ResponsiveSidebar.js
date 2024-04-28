import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../Button";
import Image from "next/image";
import Plus from "@/assets/icons/plusBlack.svg";

const ResponsiveSidebar = () => {
  const ItemVariants = {
    closed: {
      y: 0,
      opacity: 2,
      transition: {
        duration: 1,
      },
    },
    open: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <>
      <motion.div
        className="lg:hidden relative"
        initial={{
          y: -1000,

          transition: {
            staggeredChildren: 0.1,
            delay: 0.1,
            type: "spring",
            stiffness: 200,
            damping: 25,
          },
        }}
        animate={{
          y: 0,
          transition: {
            staggeredChildren: 0.05,
            staggeredDirection: -1,
            delay: 0.1,
            type: "spring",
            stiffness: 200,
            damping: 25,
          },
        }}
      >
        <motion.div className=" absolute top-[20%]    max-h-[calc(100vh-9vh)] pb-9  bg-primary-100 left-0  w-[100%] overflow-auto z-35">
          <motion.ul className="px-10 py-6 mt-16">
            <motion.li className=" font-sfMedium" variants={ItemVariants}>
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 "
              variants={ItemVariants}
            >
              <Link href="/About">About</Link>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 "
              variants={ItemVariants}
            >
              <Link href="/advertising">Advertising</Link>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 "
              variants={ItemVariants}
            >
              <Link href="/contentProduction">Content Production</Link>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 "
              variants={ItemVariants}
            >
              <Link href="/blog">Blog</Link>
            </motion.li>
            <motion.li
              className="mt-3 font-sfMedium hoverNav2 "
              variants={ItemVariants}
            >
              <Link href="/contact">Contacts</Link>
            </motion.li>
          </motion.ul>
          <div className="mt-4 mx-10 ">
            <Button className="bg-primary-300 text-primary-100 flex md:hidden text-sm font-sfBold   items-center justify-center px-3 ">
              <Image
                width="18"
                height="18"
                src={Plus}
                alt="plus icon"
                priority
              />
              Get a Quote
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
export default ResponsiveSidebar;
