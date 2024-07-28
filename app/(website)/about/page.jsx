"use client"
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../../../sections';
import { motion } from "framer-motion";
import styles from "../../../styles";
import TextBlock from "@/components/TextBlock";
import Partners from '@/components/Partners';

import { story, whatWeDoPoints, ourVisionPoints, keyPartners, partners, teamMembers } from '../../../constants'
import TeamCard from '@/components/TeamCard';
import Team from '@/sections/Team';

export default function AboutPage() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <TextBlock title="Our Story" desc={story} />
      <div className="relative">
        <GetStarted smallTitle="How's it going" title="What we do" imgSrc=
          '/boost/about-boost.png'
          desc="Boost Turku is a non-profit association that has been inspiring growth-minded young students and entrepreneurs since 2009."
          points={whatWeDoPoints}
        />
        <div className="gradient-04 z-0" />
        <TextBlock title="Boost's Vision" points={ourVisionPoints} />
        {teamMembers && <Team teamMembers={teamMembers} />}
        <div className='bg-white mt-24 mb-14'>
          <Partners partnersList={keyPartners} />
          <Partners partnersList={partners} />
        </div>
      </div>
    </div>
  )
}