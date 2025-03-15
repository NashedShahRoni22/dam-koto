import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import BottomBar from "./components/shared/BottomBar";
import Brands from "./components/home/Brands";
import Blogs from "./components/home/Blogs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dam Koto?",
  description: "Dam Koto App Meta Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="mx-4 md:mx-8 lg:mx-12">
          <header>
            <Navbar />
          </header>
          {/* <main>{children}</main> */}
          <main className="lg:flex gap-8">
            <div className="lg:w-1/6">
              <Brands />
            </div>
            <div className="lg:w-3/6">{children}</div>
            <div className="lg:w-2/6">
              <Blogs />
            </div>
          </main>
          <footer>
            <BottomBar />
          </footer>
        </div>
      </body>
    </html>
  );
}
