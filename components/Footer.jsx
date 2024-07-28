"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";
import Image from "next/image";
import ThemeSwitch from "@/components/themeSwitch";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8`}>
    <div className="footer-gradient" />
    <div
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <div>
          <h4 className="text-[44px] font-bold text-white md:text-[64px]">
            Join us on Telegram
          </h4>
          <p className="text-white">
            Subscribe to Boost on Telegram and be the first one to get
            the latest news and opportunities!
          </p>
        </div>
        <a
          href="https://t.me/boostturku"
          className="flex h-fit items-center rounded-[30px] bg-brand-red px-4 py-2">
          <img
            src="/boost/telegram.svg"
            alt="headset"
            className="h-9 object-contain"
          />
          <span className="text-[16px] font-normal text-white">
            Subscribe
          </span>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/">
            <Image
              src="/boost/boost-logo.png"
              alt="Boost Logo"
              width={120}
              height={40}
            />
          </Link>

          <p className="text-[14px] font-normal text-white opacity-50">
            Copyright © 2024. All rights reserved.
          </p>

          <div className="flex gap-4">
            <ThemeSwitch />
            {socials.map(social => (
              <a key={social.name} href={social.link}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="h-[24px] w-[24px] object-contain"
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
