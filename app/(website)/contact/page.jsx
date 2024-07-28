'use client'
import TextBlock from "@/components/TextBlock";
import { motion } from "framer-motion";
import { fadeIn } from '@/utils/motion';
import styles from "@/styles";

export default function ContactPage() {
    return (
        <div className="bg-primary-black overflow-hidden min-h-[80vh] my-14 lg:my-32">
            <motion.div
                initial='hidden'
                variants={fadeIn('right', 'spring', 0.75, 1)}
                animate='visible'
                whileInView='show'
                className={`${styles.xPaddings} py-8 relative z-10`}>
                <TextBlock title={`Let's get in touch!`} />
                <p className={`${styles.innerWidth} mx-auto text-2xl`}>Ask us anything at <a href="mailto:info@boostturku.com" className='text-brand-red'>info@boostturku.com</a></p>
            </motion.div>
            <div className="gradient-03 z-0" />
            <motion.div
                initial='hidden'
                variants={fadeIn('up', 'spring', 0.5, 1)}
                animate='visible'
                whileInView='show'
                className={`${styles.xPaddings} py-8 relative w-[320px] md:w-[600px] mx-auto border-2 border-brand-red rounded-xl my-10`}>
                <p className="text-2xl text-center text-brand-red my-10 font-bold">Send us a Quick Message!</p>
                <form action={process.env.CONTACT_FORM_KEY} className="flex flex-col">
                    <label for="fname" className="text-white text-lg">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="First Name" required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />

                    <label for="lname" className="text-white text-lg">Last Name</label>
                    <input type="text" id="lname" name="lname" placeholder="Last Name" required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />

                    <label for="email" className="text-white text-lg">Email</label>
                    <input type="text" id="email" name="email" placeholder="Email" required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />
                    <label for="message" className="text-white text-lg">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="If you have a startup idea and want to talk to us about it, send us a quick message:"
                        required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0"
                    ></textarea>

                    <button type="submit" className="bg-brand-red rounded-full text-xl py-2 my-10">Submit Form</button>
                </form>
            </motion.div>
            <motion.div
                initial='hidden'
                variants={fadeIn('up', 'spring', 0.5, 1)}
                animate='visible'
                whileInView='show'
                className={`${styles.xPaddings} py-8 relative flex gap-20 flex-wrap justify-evenly items-center my-40`}>
                <div>
                    <h4 className='font-bold md:text-[64px] text-[44px] text-white capitalize mb-10'>
                        Visit Us!
                    </h4>
                    <p className={`${styles.innerWidth} mx-auto text-2xl`}>
                        <b>SparkUp</b><br />
                        Tykistökatu 4B<br />
                        20520 Turku<br />
                        <br /><br />
                        <b>Hours</b><br />
                        Monday–Friday<br />
                        8:30am–4:30pm<br />
                    </p>
                </div>
                <div className="w-[350px] md:w-[600px] h-[450px] md:h-[500px]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.7137059018785!2d22.2933315!3d60.4499417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76e62c828c67%3A0x17fe9abb0e97b21c!2sSparkUp!5e0!3m2!1sen!2sfi!4v1722152400212!5m2!1sen!2sfi" width="100%" height="100%" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </motion.div>
        </div>
    )
}