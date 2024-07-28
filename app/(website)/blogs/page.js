import { Suspense } from "react";
import Container from "@/components/container";
import Archive from "./archive";
import Loading from "@/components/loading";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function BlogsPage({ searchParams }) {
  return (
    <>
      <Container className="relative dark:text-white">
        <h1 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
          Latest Updates & Startup Stories
        </h1>
        <div className="text-center">
          <p className="mt-2 text-lg">
            You may find blog posts, news, articles and other stories written by Boost Turku throughout the years.
          </p>
        </div>
        <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <Archive searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

// export const revalidate = 60;
