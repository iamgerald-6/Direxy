import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "./components/MainNav/MainNav";
import Footer from "./components/Footer/Footer";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Derexy",
  description: "This is Cnn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-100 text-primary-200`}>
        <Providers>
          <MainNav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
