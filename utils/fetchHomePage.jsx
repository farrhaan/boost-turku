import { client } from '@/lib/sanity/client';
import { groq } from 'next-sanity';

// Define the GROQ query
const homePageQuery = groq`
*[_type == "home"][0]{
  title,
  sections[]{
    _type == 'heroSection' => {
      _type,
      title,
      subtitle,
      "imageUrl": image.asset->url
    },
    _type == 'aboutSectionHome' => {
      _type,
      heading,
      description
    },
    _type == 'exploreSection' => {
      _type,
      title,
      "imageUrl": image.asset->url
    },
    _type == 'imageSection' => {
      _type,
      heading,
      subHeading,
      description,
      "imageUrl": image.asset->url
    },
    _type == 'imageSection2' => {
      _type,
      heading,
      description,
      "imageUrl": image.asset->url
    },
    _type == 'textBlockSection' => {
      _type,
      text
    }
  }
}`;

// Function to fetch the homepage data
export async function fetchHomePageData() {
    const homePageData = await client.fetch(homePageQuery);
    return homePageData;
}
