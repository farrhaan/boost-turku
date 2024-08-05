'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = ({ smallTitle, title, desc, points, imgSrc }) => (
  <section className={`${styles.paddings} relative z-10 my-20`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        viewport={{ once: true }}
        className="flex-[0.95] flex justify-center flex-col"
      >
        {smallTitle && <TypingText title={"| " + smallTitle} />}
        {title && <TitleText title={<> {title} </>} />}
        {desc && <p className='text-white'>
          {desc}
        </p>}
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {points?.map((feature, i) => (
            <div key={i}>
            <NewFeatures title={feature.title} description={feature.description} />
              </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        viewport={{ once: true }}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={imgSrc}
          alt={title}
          className="w-[90%] h-[90%] object-contain "
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
