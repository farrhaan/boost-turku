'use client'
import { Inter, Roboto } from "next/font/google";
import { cx } from "@/utils/all";
import { Footer, Navbar } from "@/components";
import { Providers } from "./providers";
import "../styles/globals.css";
import { usePathname } from 'next/navigation';

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
  const router = usePathname();
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, roboto.variable)}>
      <body>
        <Providers>
          {router?.includes("studio")
            ? <div className="overflow-hidden bg-primary-black">
              {children}
            </div>
            : <div className="overflow-hidden bg-primary-black">
              <Navbar />
              {children}
              <Footer />
            </div>}
        </Providers>
      </body>
    </html>
  )
}
export default RootLayout;
