import { Footer, Navbar } from "@/components";
import "../styles/globals.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Roboto } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "Boost Turku",
  description:
    "Entrepreneurship society of Turku inspiring startups since 2009."
};
const RootLayout = ({ children }) => (
  <html
    lang="en"
    suppressHydrationWarning
    className={cx(inter.variable, roboto.variable)}>
    <body>
      <Providers>
        <div className="overflow-hidden bg-primary-black">
          <Navbar />
          {children}
          <Footer />
        </div>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
