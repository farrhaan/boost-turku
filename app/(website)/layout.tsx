import { Inter, Roboto } from "next/font/google";
import { cx } from "@/utils/all";
import { Footer, Navbar } from "@/components";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"]
});

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, roboto.variable)}>
      <body>
        <Providers>
          <NextTopLoader showSpinner={false} color="#C52127" />
          <div className="overflow-hidden bg-primary-black">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
