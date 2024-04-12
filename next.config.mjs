/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = {
  /* config options here */
  output: "export",
};

export default {
  ...nextConfig,
  ...withVideos(),
};

// module.exports = {
//   // Add the output configuration
//   experimental: {
//     output: "export",
//   },
//   // Other Next.js configurations can go here
// };
