import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";

import TextBlock from "@/components/TextBlock";
import styles from "@/styles";
import Link from "next/link";


const projectsQuery = groq`
*[_type == "projects"]{
  title,
  "slug": slug.current
}
`;

const Projects = async () => {
    const projects = await client.fetch(projectsQuery);

    if (!projects) {
        return {
            notFound: true
        }
    }

    return (
        <div className={`py-8 relative bg-primary-black overflow-hidden my-14 lg:my-32`}>
            <TextBlock title="Projects" />
            <div className={`${styles.innerWidth} mx-auto`}>
                {
                    projects?.map((project, i) => {
                        return (
                            <Link href={`/${project.slug}`} key={i}>
                                <div className={`my-5 bg-brand-red text-white font-bold text-2xl rounded-xl min-w-[300px] w-full py-4 text-center hover:scale-[1.02]`}>
                                    <h1>{project.title}</h1>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;