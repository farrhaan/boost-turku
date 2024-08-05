"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";

const ExploreCard = ({ card_id, imageUrl, title, url, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    viewport={{ once: true }}
    className={`relative ${active === card_id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(card_id)}>
    <img
      src={imageUrl}
      alt={title}
      className='absolute w-full h-full object-cover rounded-[24px]'
    />

    {active !== card_id ? (
      <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
        {title}
      </h3>
    ) : (
      <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
        <Link href={url}>
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism mb-[16px] rounded-[12px]`}>
            <Image
              src='/boost/info-icon-w.png'
              alt='headset'
              className='object-cotain'
              width={25}
              height={35}
            />
          </div>
          <p className='font-normal text-[16px] leading-[20.16px] text-white uppercase'>
            Explore more...
          </p>
          <h2 className='mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white'>
            {title}
          </h2>
        </Link>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
