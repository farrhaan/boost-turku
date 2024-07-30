'use client'
import TextBlock from "@/components/TextBlock";
import { motion } from "framer-motion";
import { fadeIn } from '@/utils/motion';
import styles from "@/styles";

export default function EventsPage() {
    const eventsText = "Ignite your entrepreneurial spirit, connect, and conquer together in our vibrant community of innovators. "
    const eventTextII = "Boost actively organizes and participates in multitude of events and programs, whether spearheaded by us or collaboratively co-created with our partners."
    return (
        <div className="bg-primary-black overflow-hidden min-h-[65vh] my-14 lg:my-32">
            <TextBlock title="Events" />
            <motion.div
                initial='hidden'
                variants={fadeIn('up', 'spring', 0.75, 1)}
                animate='visible'
                whileInView='show'
                viewport={{ once: true }}
                className={`${styles.xPaddings} py-8 relative`}>
                <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 mb-10`}>
                    <p className='font-bold text-3xl'>{eventsText}</p>
                    <p className='text-lg text-brand-grey'>{eventTextII}</p>
                </div>
                <div className="gradient-04 z-0" />

                <TextBlock title="Stay connected for future events" />
                <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 mb-10 z-10 relative`}>

                    <p className='text-2xl'>You can find all of our events in <a href="lu.ma/boost" className='text-brand-red'>lu.ma/boost</a></p>

                    <div className='w-[320px] md:w-[450px] h-[420px] md:h-[600px] mx-auto my-6'>
                        <iframe src="https://lu.ma/embed/calendar/cal-DFTEOW6z93AOspN/events" width={"100%"} height={"100%"} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}