"use client"
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from '../utils/motion';

export default function TeamCard({ keyI, name, title, imgSrc, email }) {
    return (
        <motion.div
            initial='hidden'
            variants={fadeIn('up', 'spring', keyI * 0.10, 1)}
            animate='visible'
            whileInView='show'
            viewport={{ once: true }}
            key={keyI}
            className={`w-80 h-96 relative flex flex-col items-center bg-white rounded-2xl justify-between m-6`}>
            <img src={imgSrc} alt={name} className=" w-full px-16" />
            <div className="bg-brand-grey w-full h-[102px] rounded-b-2xl text-center mx-auto pt-5" >
                <h3 className="text-lg font-bold text-black">{name}</h3>
                {title && <p className="text-sm text-black">{title}</p>}
                {email && <a href={`mailto:${email}`} className="text-sm text-primary-blue text-black">{email}</a>}
            </div>
        </motion.div>
    )
}

