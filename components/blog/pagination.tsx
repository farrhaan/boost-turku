/* eslint-disable react/jsx-no-bind */

"use client";

import { useRouter, useSearchParams } from "next/navigation";
export default function Pagination({
  pageIndex,
  isFirstPage,
  isLastPage
}) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const params = searchParams
    ? new URLSearchParams(searchParams)
    : new URLSearchParams();

  // Define functions for navigating to the next and previous pages
  // These functions update the page query parameter in the URL
  const handleNextPage = () => {
    params.set("page", (pageIndex + 1).toString());
    const query = params.toString();

    router.push(`/posts?${query}`);
  };

  const handlePrevPage = () => {
    params.set("page", (pageIndex - 1).toString());
    const query = params.toString();

    router.push(`/posts?${query}`);
  };

  return (
    <div className="mt-10 flex items-center justify-center">
      <nav
        className="isolate inline-flex gap-2 -space-x-px rounded-md shadow-sm"
        aria-label="Pagination">
        <button
          disabled={isFirstPage}
          onClick={handlePrevPage}
          className={`rounded-full border-brand-red bg-brand-red px-3 py-1 text-white `}>
          <span>Previous</span>
        </button>
        <button
          onClick={handleNextPage}
          disabled={isLastPage}
          className={`rounded-full border-brand-red bg-brand-red px-3 py-1 text-white `}>
          <span>Next</span>
        </button>
      </nav>
    </div>
  );
}
