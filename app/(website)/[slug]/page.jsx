// pages/[slug].js
import { client } from '@/lib/sanity/client';
import { groq } from 'next-sanity';

import { GetStarted } from "@/sections";
const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  pageBuilder[]{
    _type == 'imageSection' => {
      _type,
      heading,
      subHeading,
      description,
      "image": image.asset->url
    },
    // Add other components here
  }
}`;


export async function generateStaticParams() {
  const paths = await client.fetch(groq`*[_type == "page" && defined(slug.current)][].slug.current`);

  return paths.map(slug => ({ slug }));
}

export default async function Page({ params }) {
  const page = await client.fetch(pageQuery, { slug: params.slug });

  if (!page) {
    return {
      notFound: true,
    };
  }

  return (
    <div>
      {page.pageBuilder.map((component, index) => {
        switch (component._type) {
          case 'imageSection':
            return (
              <GetStarted
                key={index}
                title={component.heading}
                smallTitle={component.subHeading}
                desc={component.description}
                imgSrc={component.image}
              />
            );
          // Add other components
          default:
            return null;
        }
      })}
    </div>
  );
};
