'use client'
import TextBlock from "@/components/TextBlock";
import { motion } from "framer-motion";
import { fadeIn } from '@/utils/motion';
import styles from "@/styles";
import { TypingText, TitleText } from '@/components/CustomTexts';
import { GetStarted, WhatsNew } from "@/sections";

export default function JoinPage() {
    const whyJoin = [
        "You'll be the first to know when something cool is happening",
        "Access to Boost’s network of investors, startups, coaches and other relevant people",
        "Right to participate and vote during our General Meetings",
        "Opportunity to become a board member",
        "Awesome events",
        "There is no membership fee",
    ]
    return (
        <div className="bg-primary-black overflow-hidden min-h-[80vh]">
            <motion.div
                initial='hidden'
                variants={fadeIn('right', 'spring', 0.75, 1)}
                animate='visible'
                whileInView='show'
                className={`${styles.xPaddings} py-8 relative`}>
                {/* <TypingText title="| Are you ready to start building?" textStyles={"text-center"} /> */}
                <TextBlock title="Join the Community & get involved" />
            </motion.div>
            <div className="gradient-04 z-0" />
            <GetStarted
                smallTitle="Why Join?"
                title="Become a Member"
                desc="Join the Boost community and start building your dreams."
                points={whyJoin}
                imgSrc={"/boost/why-boost.jpg"}
            />
            <motion.div
                initial='hidden'
                variants={fadeIn('up', 'spring', 0.5, 1)}
                animate='visible'
                whileInView='show'
                className={`${styles.xPaddings} py-8 relative w-[320px] md:w-[600px] mx-auto border-2 border-brand-red rounded-xl my-10`}>
                <p className="text-2xl text-center text-brand-red my-10 font-bold">Fill in the Form to Join our Community </p>
                <form action={process.env.JOIN_FORM_KEY} className="flex flex-col">
                    <label for="fname" className="text-white text-lg">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="First Name" required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />

                    <label for="lname" className="text-white text-lg">Last Name</label>
                    <input type="text" id="lname" name="lname" placeholder="Last Name" required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />

                    <label for="email" className="text-white text-lg">Email</label>
                    <input type="text" id="email" name="email" placeholder="Email" required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />

                    <label for="phone" className="text-white text-lg">Phone</label>
                    <input type="text" id="phone" name="phone" placeholder="Phone" required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />

                    <label for="place" className="text-white text-lg">Place of Residence</label>
                    <input type="text" id="place" name="place" placeholder="Name of the city where you live." required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />

                    <label for="country" className="text-white text-lg">Country of Origin</label>
                    <input type="text" id="country" name="country" placeholder="Country of Origin" required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />

                    <label for="gender" className="text-white text-lg">Gender</label>
                    <div className="mt-2">
                        <select
                            id="gender"
                            name="gender"
                            className="block flex-1 w-full border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0"
                        >
                            <option className="text-brand-grey" disabled selected value>Select Gender</option>
                            <option className="text-brand-red">Male</option>
                            <option className="text-brand-red">Female</option>
                            <option className="text-brand-red">Prefer not to Answer</option>
                        </select>
                    </div>
                    <label for="university" className="text-white text-lg">Select University</label>
                    <div className="mt-2">
                        <select
                            id="university"
                            name="university"
                            className="block flex-1 w-full border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0"
                        >
                            <option className="text-brand-grey" disabled selected value>{`What's your university`}</option>
                            <option className="text-brand-red">University of Turku</option>
                            <option className="text-brand-red">Turku University of Applied Sciences</option>
                            <option className="text-brand-red">Abo Akademi</option>
                            <option className="text-brand-red">Novia</option>
                            <option className="text-brand-red">Humak</option>
                            <option className="text-brand-red">Other</option>
                        </select>
                    </div>

                    <label for="otherUni" className="text-white text-lg">{`If you chose "other", state your university here`}</label>
                    <input type="text" id="otherUni" name="otherUni" placeholder="University Name" required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />


                    <label for="major" className="text-white text-lg">{`What's your major?`}</label>
                    <input type="text" id="major" name="major" placeholder="Major" required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />

                    <label for="prog" className="text-white text-lg">Have you ever participated in our programs?</label>
                    <div className="mt-2">
                        <select
                            id="prog"
                            name="prog"
                            className="block flex-1 w-full border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0"
                        >
                            <option className="text-brand-grey" disabled selected value>{`Select Option`}</option>
                            <option className="text-brand-red">Yes</option>
                            <option className="text-brand-red">No</option>
                        </select>
                    </div>

                    <div className="my-10 space-y-10">
                        <fieldset>
                            <legend className="text-white text-lg">If yes, which ones?</legend>
                            <div className="mt-6 space-y-6">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="elevate"
                                            name="elevate"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="elevate" className="text-white text-lg">
                                            Elevate
                                        </label>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="startup-maratho"
                                            name="startup-maratho"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="startup-maratho" className="text-white text-lg">
                                            Startup Marathon
                                        </label>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="sj-pa"
                                            name="sj-pa"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="sj-pa" className="text-white text-lg">
                                            Startup Journey pre-accelerator
                                        </label>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="sj-a"
                                            name="sj-a"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="sj-a" className="text-white text-lg">
                                            Startup Journey accelerator
                                        </label>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="other-program"
                                            name="other-program"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="other-program" className="text-white text-lg">
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <label for="whyBoost" className="text-white text-lg">Why are you applying for Boost membership?</label>
                    <textarea
                        id="whyBoost"
                        name="whyBoost"
                        placeholder=""
                        required
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0"
                    ></textarea>


                    <label for="telegram" className="text-white text-lg">{`Do you want to join our Telegram Channel?`}</label>
                    <input type="text" id="telegram" name="telegram" placeholder="Enter your Telegram username"
                        className="block flex-1 border-2 pl-2 text-lg rounded-lg border-white bg-transparent py-2 mt-2 mb-5 text-white placeholder:text-brand-grey focus:ring-0" />

                    <label for="pledge" className="text-white text-lg">{`I pledge to give the Boost community one hour of my time`}</label>
                    <input
                        id="pledge"
                        name="pledge"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 my-2"
                        required
                    />
                    <label for="privacy" className="text-white text-lg">{`I accept Privacy Policy Terms`}</label>
                    <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        required
                    />

                    <button type="submit" className="bg-brand-red rounded-full text-xl py-2 my-10">Submit Form</button>
                </form>

            </motion.div>
        </div>
    )
}