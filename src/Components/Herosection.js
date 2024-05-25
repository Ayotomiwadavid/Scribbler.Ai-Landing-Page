import React from "react";
import Header from "../Components/Header";
import copyWriter from "../Images/copywriter.png";
import TypewriterComponent, { TypewriterClass } from "typewriter-effect";

export default function Example() {
  return (
    <section className="bg-white">
      <Header />
      <section className="pt-16 md:pt-20 lg:pt-24 bg-white bg-[conic-gradient(from_90deg_at_2px_2px,#0000_90deg,#f8fafc_0),conic-gradient(from_90deg_at_1px_1px,#0000_90deg,#f8fafc_0)] dark:bg-[conic-gradient(from_90deg_at_2px_2px,#0000_90deg,#0c1324_0),conic-gradient(from_90deg_at_1px_1px,#0000_90deg,#0c1324_0)] bg-[length:100px_100px,calc(20px)_calc(20px)] dark:bg-slate-900 overflow-hidden">
                <div className="container px-3">
                    <div className="flex justify-center items-center flex-wrap -m-6">
                        <div className="p-6 w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
                            <div className="text-center">
                                <h1 className="text-3xl/snug sm:text-4xl/snug lg:text-5xl/tight font-bold text-slate-700 dark:text-white pb-4">
                                    Fastest Way To Write
                                    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent" >
                                        <TypewriterComponent
                                            options={{
                                                strings: ['Article', 'Rewrite Article', 'Ads Content', 'Video Script'],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </div>
                                </h1>
                                <p className="text-base/7 text-slate-600 dark:text-slate-300">Scribbler is you copywriter assistant that uses AI and a deep understanding of your content to help you write text faster.</p>
                                <div className="pt-6">
                                    <a href="/app/templates/writer/article-generator" className="inline-flex justify-center font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-6 py-3 rounded-md">
                                        Happy Writing
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 w-full lg:w-9/12 xl:w-7/12">
                                <img className="rounded-t-xl shadow-lg shadow-blue-100 dark:shadow-blue-950 border border-b-0 border-slate-200 dark:border-slate-800" src={copyWriter} alt="Hero img" />
                        </div>
                    </div>
                </div>
                <div className="absolute h-[1px] w-full bottom-0 start-0 bg-gradient-to-r from-transparent from-10% via-blue-100 dark:via-blue-950 to-transparent to-90% animate-[animateGradient_5s_ease-in-out_2]"></div>
            </section>
    </section>
  );
}
