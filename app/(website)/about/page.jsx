import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";

import { GetStarted } from '@/sections';
import Team from '@/sections/Team';
import TextBlock from "@/components/TextBlock";
import Partners from '@/components/Partners';
import { story, whatWeDoPoints, ourVisionPoints, keyPartners, partners, teamMembers } from '@/constants'


const aboutPageQuery = groq`
*[_type == "aboutPage"][0]{
  title,
  sections[]{
    _type == 'textBlockSection' => {
      _type,
      headingText, 
      descriptionText,
      points
    },
    _type == 'imageSection' => {
      _type,
      heading,
      subHeading,
      description,
      "imageUrl": image.asset->url,
      points[]
    },
    _type == 'teamSection' => {
      _type,
      teamTitle,
      teamMembers[]{
        name,
        title,
        "imgSrc": imgSrc.asset->url,
        email
      }
    },
    _type == 'partnersSection' => {
      _type,
      partnersDetail,
        partners[]{
          title,
          partners{
              partners[]{
              "imgSrc": asset->url
              }
          }
        }
    },
  }
}`;

const AboutPage = async () => {
  const aboutPageData = await client.fetch(aboutPageQuery);
  if (!aboutPageData) {
    return {
      notFound: true,
    };
  }

  return (
    <div className="bg-primary-black overflow-hidden my-14 lg:my-32">
      {
        aboutPageData?.sections?.map((section, index) => {
          switch (section._type) {
            case 'textBlockSection':
              return (
                <div key={index}>
                  <TextBlock
                    title={section.headingText}
                    desc={section.descriptionText}
                    points={section.points}
                  />
                </div>
              );
            case 'imageSection':
              return (
                <div key={index}>
                  <GetStarted
                    title={section.heading}
                    smallTitle={section.subHeading}
                    desc={section.description}
                    imgSrc={section.imageUrl}
                    points={section.points}
                  />
                </div>
              );
            case 'teamSection':

              return (
                <div key={index}>
                  <Team
                    teamMembers={section.teamMembers}
                    title={section.teamTitle}
                  />
                </div>
              );
            case 'partnersSection':
              return (
                <div className='bg-white py-10 mt-24 mb-14' key={index}>
                  {section?.partners?.map((partner, i) => {
                    return (
                      <div key={i}>
                        <Partners partnersList={partner.partners} title={partner.title} />
                      </div>
                    )
                  })}
                </div>
              );
            default:
              return null;
          }
        })
      }
      {/* <TextBlock title="Our Story" desc={story} />
      <div className="relative">
        <GetStarted
          smallTitle="How's it going"
          title="What we do"
          imgSrc='/boost/about-boost.png'
          desc="Boost Turku is a non-profit association that has been inspiring growth-minded young students and entrepreneurs since 2009."
          points={whatWeDoPoints}
        />
        <div className="gradient-04 z-0" />
        <TextBlock title="Boost's Vision" points={ourVisionPoints} />
        {teamMembers && <Team teamMembers={teamMembers} />}
        <div className='bg-white py-10 mt-24 mb-14'>
          <Partners partnersList={keyPartners} />
          <Partners partnersList={partners} />
        </div>
      </div> */}
    </div>
  )
}

export default AboutPage;