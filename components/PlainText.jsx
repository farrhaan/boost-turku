'use client'
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from '../utils/motion';

export default function PlainText({ text }) {
    return (
        <motion.div
            initial='hidden'
            variants={fadeIn('right', 'spring', 0.75, 1)}
            animate='visible'
            whileInView='show'
            viewport={{ once: true }}
            className={`${styles.xPaddings} relative`}>
            <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
                <p className='text-xl my-3 md:my-4'>
                    {text}
                </p>
            </div>
        </motion.div>
    )
}
