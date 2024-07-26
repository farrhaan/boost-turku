"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import Image from "next/image";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}>
    <div className='absolute w-[50%] inset-0 gradient-01' />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src='/boost/boost-logo-white.png'
        alt='search'
        className='object-contain z-30'
        width={120}
        height={40}
      />
    </div>
  </motion.nav>
);

export default Navbar;
