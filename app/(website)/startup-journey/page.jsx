'use client'
import TextBlock from "@/components/TextBlock";
import { motion } from "framer-motion";
import { fadeIn } from '@/utils/motion';
import styles from "@/styles";
import GetStarted from '@/sections/GetStarted';
import { Feedback, WhatsNew } from "@/sections";

export default function StartupJourney() {
    const whatYouNeedPoints = [
        {
            title: "Scalable startup idea",
            subtitle: "Having done research on the competitive landscape and gathering initial traction from potential customers and partners boosts your chances of being accepted."
        },
        {
            title: "Committed team",
            subtitle: "Full-time commitment from at least one of the founders for the summer. The more team members can work full-time on the startup, the better is your chance at being accepted."
        },
        {
            title: "Motivation ",
            subtitle: "The more passion the better!"
        }
    ]
    return (
        <div className="bg-primary-black overflow-hidden min-h-[65vh] my-14 lg:my-32">
            <TextBlock title="Startup Journey" desc="June 28 - August 15 | Turku" />
            <motion.div
                initial='hidden'
                variants={fadeIn('up', 'spring', 0.75, 1)}
                animate='visible'
                whileInView='show'
                className={`${styles.xPaddings} py-8 relative`}>
                <GetStarted title="What is Startup Journey" desc="Startup Journey is an intensive 8-week startup accelerator program designed to help early-stage startups take a huge step forward in their development. Over the course of the program, you'll work closely with experienced mentors and industry experts to refine your business idea, create a prototype, conduct market research, and prepare for launch. At the end of the program, you'll have the opportunity to pitch your startup to investors and continue developing your idea with ongoing support and guidance from the Startup Journey community. "
                    imgSrc="/boost/sj.jpg" />
                <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 mb-10`}>
                    <p className='font-bold text-3xl'>{`Join us on this exciting journey to turn your startup idea into a reality!`}</p>
                    <a href="https://azzb0glt6gr.typeform.com/to/qGsJlJHN" className="bg-brand-red px-3 py-2 text-white font-bold text-2xl rounded-full text-center">Apply Here!</a>

                    <p className='font-bold text-4xl mt-20'>{`Are you Ready to get serious about your startup?`}</p>
                    <p className='text-xl'>Startup Journey is an early-stage startup accelerator taking place every summer. The goal of the program is to enable you and your team to take a huge step forward in your startup’s early development. This usually means creating a prototype, making a ton of testings, launching your product and getting your first round of investment.
                        <br />
                        <br />
                        This year Startup Journey is an on-site program taking place in Turku from 28 June until 15 August 2024.
                    </p>
                </div>

                <WhatsNew smallTitle="Apply Fast" title="What you need to apply" points={whatYouNeedPoints} imgSrc="/boost/sj-white.png" />

                <Feedback name="Venla Elovaara, StuDisco" title="Startup Journey 19 alumna" message="Journey was the key element to push our team forward and the best way to start building our network in the startup world and game industry." imgSrc="/boost/sj-2.jpg" />
            </motion.div>
        </div>
    )
}