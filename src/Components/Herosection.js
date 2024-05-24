import React from "react";
import Header from "../Components/Header";
import copyWriter from "../Images/copywriter.png";

export default function Example() {
  return (
    <section className="bg-white">
      <Header />
      <aside className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-2 sm:py-48 lg:py-2">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#334155] sm:text-6xl">
              Fastest Way To Write
            </h1>
            <h1 className="text-3xl font-bold tracking-tight text-[#2563EB] sm:text-4xl py-3">
              Ads Content
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Scribbler is you copywriter assistant that uses AI and a deep
              understanding of your content to help you write text faster.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://drive.google.com/drive/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Happy Writting
              </a>
            </div>
          </div>
          <div>
            <img src={copyWriter} alt="Hero Img" />
          </div>
        </div>
      </aside>
    </section>
  );
}
