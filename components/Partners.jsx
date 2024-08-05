"use client"
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from '../utils/motion';

export default function Partners({ partnersList, title }) {
    return (
        <motion.div
            initial='hidden'
            variants={fadeIn('up', 'spring', 0.75, 1)}
            animate='visible'
            whileInView='show'
            viewport={{ once: true }}
            className={`py-10 relative`}>
            <div className={`mx-auto flex flex-col gap-8`}>
                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div>
                        <h4 className='font-bold md:text-[64px] text-[44px] capitalize text-brand-red text-center'>
                            {title}
                        </h4>
                        <div className="flex gap-5 items-center justify-center w-screen">
                            {partnersList?.partners?.map((item, i) => {
                                return (
                                    <div key={i} className="p-6">
                                        <img src={item.imgSrc} className="w-32 md:w-64" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
