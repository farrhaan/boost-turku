import { notFound } from 'next/navigation';
import { client } from '@/lib/sanity/client';
import { groq } from 'next-sanity';

import { GetStarted, Feedback, WhatsNew } from "@/sections";
import PlainText from "@/components/PlainText";
import TextBlock from "@/components/TextBlock";
import DescriptiveButton from "@/components/DescriptiveButton";

const pageQuery = groq`
*[_type == "projects" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  pageBuilder[]{
    ...,
    _type == 'plainText' => {
      _type,
      text
    },
    _type == 'imageSection' => {
      _type,
      heading,
      subHeading,
      description,
      points,
      "image": image.asset->url
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
      "image": image.asset->url
    },
    _type == 'textBlockSection' => {
      _type,
      headingText,
      descriptionText,
      points
    },
    _type == 'feedBackSection' => {
      _type,
      personName,
      title,
      message,
      "image":image.asset->url
    },
    _type == 'descriptiveButton' => {
      _type,
      buttonText,
      text,
      textBig,
      buttonUrl, 
      buttonDisabled
    }
  }
}
`;


export async function generateStaticParams() {
  const paths = await client.fetch(groq`*[_type == "page" && defined(slug.current)][].slug.current`);

  return paths.map(slug => ({ slug }));
}

export default async function Page({ params }) {
  const page = await client.fetch(pageQuery, { slug: params.slug });

  if (!page || page?.length === 0) {
    notFound();
  }

  return (
    <div className='my-28'>
      {page.pageBuilder.map((component, index) => {
        switch (component._type) {
          case 'plainText':
            return (
              <div key={index}>
                <PlainText text={component.text} />
              </div>
            )
          case 'imageSection':
            return (
              <div key={index}>
                <GetStarted
                  key={index}
                  title={component.heading}
                  smallTitle={component.subHeading}
                  desc={component.description}
                  imgSrc={component.image}
                  points={component.points}
                />
              </div>
            );
          case 'imageSection2':
            return (
              <div key={index}>
                <WhatsNew
                  smallTitle={component.subHeading}
                  title={component.heading}
                  points={component.bulletPoints}
                  desc={component.description}
                  imgSrc={component.image} />
              </div>
            );
          case 'feedBackSection':
            return (
              <div key={index}>
                <Feedback
                  name={component.personName}
                  title={component.title}
                  message={component.message}
                  imgSrc={component.image} />
              </div>

            );
          case 'descriptiveButton':
            return (
              <div key={index}>
                <DescriptiveButton
                  textBig={component.textBig}
                  text={component.text}
                  buttonText={component.buttonText}
                  buttonUrl={component.buttonUrl}
                  isButtonDisabled={component.isButtonDisabled} />
              </div>
            );
          case 'textBlockSection':
            return (
              <div key={index}>
                <TextBlock
                  title={component.headingText}
                  desc={component.descriptionText}
                  points={component?.points} />
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};
