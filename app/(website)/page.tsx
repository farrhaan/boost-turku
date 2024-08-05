import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";

import { About, Explore, Hero } from "@/sections";

export const metadata: Metadata = {
  title: "Boost Turku",
  description:
    "Entrepreneurship society of Turku inspiring startups since 2009."
};

const homePageQuery = groq`
*[_type == "home"][0]{
  title,
  sections[]{
    _type == 'heroSection' => {
      _type,
      mainText, 
      subText,
      "imageUrl": image.asset->url
    },
    _type == 'aboutSectionHome' => {
      _type,
      aboutText,
    },
    _type == 'exploreSection' => {
      _type,
      title,
      exploreMore[]{
        card_id,
        title,
        "imageUrl": image.asset->url,
        url
      }
    },
    _type == 'imageSection' => {
      _type,
      heading,
      subHeading,
      description,
      "imageUrl": image.asset->url,
      points[]{
        point
      }
    },
    _type == 'imageSection2' => {
      _type,
      heading,
      subHeading,
      description,
      bulletPoints[]{
        title,
        description
      },
      "imageUrl": image.asset->url,
      image{
        alt
      }
    },
    _type == 'textBlockSection' => {
      _type,
      headingText, 
      descriptionText,
      points[]{
        point
      }
    }
  }
}`;

const Page = async () => {
  const homePageData = await client?.fetch(homePageQuery);

  const heroSectionData = homePageData?.sections?.find(
    section => section._type === "heroSection"
  );
  const aboutSectionData = homePageData?.sections?.find(
    section => section._type === "aboutSectionHome"
  );
  const exploreSectionData = homePageData?.sections?.find(
    section => section._type === "exploreSection"
  );

  return (
    <div className="overflow-hidden bg-primary-black">
      <Hero
        mainText={heroSectionData?.mainText}
        subText={heroSectionData?.subText}
        imgAlt={"Boost Turku"}
        imgSrc={heroSectionData?.imageUrl}
      />
      <div className="relative">
        <About aboutText={aboutSectionData?.aboutText} />
        <div className="gradient-03 z-0" />
        <Explore exploreLinks={exploreSectionData?.exploreMore} />
      </div>
    </div>
  );
};

export default Page;
