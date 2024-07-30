'use client'
import TextBlock from "@/components/TextBlock";
import { motion } from "framer-motion";
import { fadeIn } from '@/utils/motion';
import styles from "@/styles";
import GetStarted from '@/sections/GetStarted';
import { WhatsNew } from "@/sections";

export default function StartupMarathon() {
    const whatYouNeedPoints = [
        {
            title: "Next Program",
            subtitle: "To be announced"
        },
        {
            title: "Question?",
            subtitle: "Contact Us!"
        }
    ]

    const rightForYou = [
        "Yes, if you have a startup idea and a team",
        "Yes, if you have a startup idea but no team",
        "Yes, if you don’t have a startup idea but want to be part of a startup team"
    ]
    return (
        <div className="bg-primary-black overflow-hidden min-h-[65vh] my-14 lg:my-32">
            <TextBlock title="Startup Marathon" desc="March 15-17 | SparkUp, Turku" />
            <motion.div
                initial='hidden'
                variants={fadeIn('up', 'spring', 0.75, 1)}
                animate='visible'
                whileInView='show'
                viewport={{ once: true }}
                className={`${styles.xPaddings} py-8 relative`}>
                {/* <GetStarted title="What is Startup Journey" desc="Startup Journey is an intensive 8-week startup accelerator program designed to help early-stage startups take a huge step forward in their development. Over the course of the program, you'll work closely with experienced mentors and industry experts to refine your business idea, create a prototype, conduct market research, and prepare for launch. At the end of the program, you'll have the opportunity to pitch your startup to investors and continue developing your idea with ongoing support and guidance from the Startup Journey community. "
                    imgSrc="/boost/sj.jpg" /> */}
                <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 mb-10`}>
                    <p className='font-bold text-3xl lg:text-5xl mt-20'>{`TRY OUT WHAT IT’S LIKE TO BE A STARTUP ENTREPRENEUR`}</p>
                    <p className='font-bold text-2xl lg:text-4xl mt-10'>{`Application closed! Join waiting list.`}</p>
                    <a href="https://azzb0glt6gr.typeform.com/to/Jp9mFUS0" className="bg-brand-red px-3 py-2 text-white font-bold text-2xl rounded-full text-center">Join Waiting List!</a>

                </div>
                <WhatsNew smallTitle="Registrations" title="Application Details" points={whatYouNeedPoints} imgSrc="/boost/sm-logo.png" />
                <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8 mb-10`}>
                    <p className='text-xl'>
                        {`Join the Startup Marathon, an idea hackathon specially crafted for students who are eager to experience what it's like to build a business from the ground up.`}
                        <br /><br />
                        {`Over the course of just 42 hours, you and your team will transform your startup concept into a concrete business plan with the guidance of our mentors. From validating your business idea to taking actionable steps, we've got you covered. By the end of the marathon, you'll acquire valuable tools, resources and new connections to support your future career endeavors. No need to have idea ready before the event but you can also bring your best idea!`}
                        <br /><br />
                        Get ready to unleash your entrepreneurial spirit and take the first step towards building your dream startup!
                        <br /><br />
                        Startup Marathon is an on-site event at SparkUp (Tykistökatu 4, Turku).
                    </p>
                </div>
                <GetStarted smallTitle="Is it right for you?" desc="The only thing you need is a curiosity about startups! No previous experience is necessary." title="STARTUP MARATHON" points={rightForYou} imgSrc="/boost/sm-1.jpg" />
            </motion.div>
        </div>
    )
}