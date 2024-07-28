"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Startup Marathon",
    href: "/startup-marathon",
  },
  {
    title: "Startup Journey",
    href: "/startup-journey",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Join Us",
    href: "/join",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  useEffect(() => {
    console.log({ isNavOpen })
  }, [isNavOpen])

  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative z-50`}>
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8 relative`}>
        <Link href="/">
          <Image
            src='/boost/boost-logo-white.png'
            alt='search'
            className='object-contain z-30'
            width={120}
            height={40}
          />
        </Link>
        <div>
          <button onClick={toggleNav} className='text-white text-2xl lg:hidden'>
            <Image src="/boost/menu.svg" width={30} height={30} alt="Menu" className="invert" />
          </button>
          {isNavOpen && <ul className={`absolute flex flex-col bg-black bg-opacity-70 font-4xl z-100 w-60 text-center right-0 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl`}>
            {navLinks.map((link, index) => (
              <li key={index} className="text-white font-4xl py-4">
                <Link href={link.href} onClick={() => toggleNav()}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>}
          <ul className={`hidden lg:flex gap-8 text-white font-4xl`}>
            {navLinks.map((link, index) => (
              <li key={index} className="text-white font-4xl">
                <Link href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </motion.nav>
  )
};

export default Navbar;
