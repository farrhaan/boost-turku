"use client"
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from '../utils/motion';
import TeamCard from "@/components/TeamCard";

export default function Team({ teamMembers }) {
    return (
        <div
            className={`${styles.xPaddings} py-8 relative flex flex-col items-center`}>
            <motion.div
                initial='hidden'
                variants={fadeIn('up', 'spring', 0, 1)}
                animate='visible'
                viewport={{ once: true }}
                whileInView='show' >
                <h4 className='font-bold md:text-[64px] text-[44px] text-white'>
                    Our Team
                </h4>
            </motion.div>
            {
                teamMembers?.map((item, i) => {
                    return (
                        <div key={i} className="my-10">
                            <motion.div
                                initial='hidden'
                                variants={fadeIn('up', 'spring', 0, 1)}
                                animate='visible'
                                viewport={{ once: true }}
                                whileInView='show' >
                                <h2 className="text-brand-red text-4xl font-black text-center mb-10">{item.teamTitle}</h2>
                            </motion.div>
                            <div className="flex flex-wrap justify-center items-center">
                                {
                                    item.teamMembers.map((member, i) => {
                                        return (
                                            <TeamCard key={i} keyI={i} name={member.name} title={member.title} imgSrc={member.imgSrc} email={member.email} />
                                        )
                                    })
                                }
                            </div>

                        </div>
                    )

                })
            }
        </div >
    )
}
