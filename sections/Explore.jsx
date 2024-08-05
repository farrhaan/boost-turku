'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';

const Explore = ({exploreLinks}) => {
  const [active, setActive] = useState('card-2');

  return (
    <section className={`${styles.paddings} relative z-10`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Explore our World" textStyles="text-center" />
        <TitleText title={<>Choose what you want <br className="md:block hidden " />to Explore More</>} textStyles="text-center" />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreLinks.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
