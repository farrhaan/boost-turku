"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Image from "next/image";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}>
    <div className='footer-gradient' />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className='flex items-center justify-between flex-wrap gap-5'>
        <div>
          <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
            Join us on Telegram
          </h4>
          <p className='text-white'>
            Subscribe to Boost on Telegram and be the first one to get the
            latest news and opportunities!
          </p>
        </div>
        <a
          href='https://t.me/boostturku'
          className='flex items-center h-fit py-2 px-4 bg-brand-red rounded-[30px]'>
          <img
            src='/boost/telegram.svg'
            alt='headset'
            className='h-9 object-contain'
          />
          <span className='font-normal text-[16px] text-white'>Subscribe</span>
        </a>
      </div>

      <div className='flex flex-col'>
        <div className='mb-[50px] h-[2px] bg-white opacity-10' />

        <div className='flex items-center justify-between flex-wrap gap-4'>
          <Image
            src='/boost/boost-logo.png'
            alt='Boost Logo'
            width={120}
            height={40}
          />

          <p className='font-normal text-[14px] text-white opacity-50'>
            Copyright © 2024. All rights reserved.
          </p>

          <div className='flex gap-4'>
            {socials.map((social) => (
              <a key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className='w-[24px] h-[24px] object-contain'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
