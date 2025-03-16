import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import BottomBar from "./components/shared/BottomBar";
import Brands from "./components/shared/Brands";
import Blogs from "./components/shared/Blogs";
import TopHits from "./components/shared/TopHits";
import TopFans from "./components/shared/TopFans";

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
        <div className="mx-5 md:container md:mx-auto">
          <header>
            <Navbar />
          </header>
          {/* <main>{children}</main> */}
          <main className="lg:flex gap-8">
            <div className="lg:w-1/6">
              <Brands />
              <TopHits />
              <TopFans/>
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
