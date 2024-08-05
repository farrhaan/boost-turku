'use client'
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from '../utils/motion';
import Link from "next/link";

export default function DescriptiveButton({ textBig, text, buttonText, buttonUrl, isButtonDisabled }) {
    console.log(isButtonDisabled)
    return (
        <motion.div
            initial='hidden'
            variants={fadeIn('right', 'spring', 0.75, 1)}
            animate='visible'
            whileInView='show'
            viewport={{ once: true }}
            className={`${styles.xPaddings} py-8 relative`}>
            <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 mb-10`}>
                {textBig && <p className='font-bold text-3xl lg:text-5xl mt-20'>{textBig}</p>}
                {text && <p className='font-bold text-2xl lg:text-4xl mt-10'>{text}</p>}
                {buttonText && <Link href={buttonUrl} className="bg-brand-red px-3 py-2 text-white font-bold text-2xl rounded-full text-center">{buttonText}</Link>}
            </div>
        </motion.div>
    )
}
