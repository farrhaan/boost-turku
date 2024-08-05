'use client'
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from '../utils/motion';

export default function TextBlock({ title, desc, points }) {
    return (
        <motion.div
            initial='hidden'
            variants={fadeIn('right', 'spring', 0.75, 1)}
            animate='visible'
            whileInView='show'
            viewport={{ once: true }}
            className={`${styles.xPaddings} py-8 relative`}>
            <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div>
                        <h4 className='font-bold md:text-[64px] text-[44px] text-white capitalize'>
                            {title}
                        </h4>
                        {desc && <p className='text-white'>
                            {desc}
                        </p>}
                        {points && points?.map((point, i) => {
                            return (
                                <div key={i} className='flex items-center gap-2'>
                                    <div className='w-2 h-2 bg-brand-grey rounded-full'></div>
                                    <p className='text-white text-xl leading-[56px]'>{point}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

