import React from "react";
import { AIChatBot, AdsContent, ArticleGeneratorIcon, CodeGenerator, GrammarChecker, ImageGenerator, NameGenerator, RewriteArticleIcon, TagsGenerator, VideoScript, WriteDescription, WriteTitle } from "./Svg";

const Template = () => {
    const data = [
        {
            id: "01",
            icon: <ArticleGeneratorIcon />,
            link: "/app/templates/writer/article-generator",
            slug: "article-generator",
            name: "Article Generator",
            status: "active",
            prompt: "Generate Article for [title]",
            api: "Text",
            aimodel: "davinci",
            description:
                "Article Generator uses advanced algorithms to automatically create articles, saving effort for writers and marketers.",
        },
        {
            id: "02",
            icon: <RewriteArticleIcon />,
            link: "/app/templates/writer/rewrite-article",
            slug: "rewrite-article",
            name: "Rewrite Article",
            status: "active",
            prompt: "Rewrite Article for [title]",
            api: "Text",
            aimodel: "davinci",
            description:
                "Instructions to paraphrase an article while preserving its meaning, structure, and tone without infringing on plagiarism.",
        },
        {
            id: "03",
            icon: <TagsGenerator/>,
            link: "/app/templates/writer/tags-generator",
            slug: "tags-generator",
            name: "Tags Generator",
            status: "active",
            prompt: "Generate Tags for this blog [title]",
            api: "Text",
            aimodel: "davinci",
            description:
                "A tool that generates relevant and popular tags for online content, such as blog posts, videos, and social media.",
        },
        {
            id: "04",
            icon: <AdsContent />,
            link: "/app/templates/writer/ads-content",
            slug: "ads-content",
            name: "Ads Content",
            status: "active",
            prompt: "Generate Ads description for [title]",
            api: "Text",
            aimodel: "davinci",
            description:
                "Automatically creates advertising copy any platforms, such as Google, Facebook, and Instagram, to attract customers.",
        },
        {
            id: "05",
            icon: <ImageGenerator />,
            link: "/app/templates/image",
            slug: "/app/templates/image",
            name: "Image Generator",
            status: "active",
            prompt: "Generate Image for [title]",
            api: "Image",
            aimodel: "dall-e",
            description:
                "Generates images using algorithms, machine learning, or other techniques, often used for creative or practical purposes.",
        },
        {
            id: "06",
            icon: <AIChatBot />,
            link: "/app/templates/chatbot",
            slug: "/app/templates/chatbot",
            name: "AI Chat Bot",
            status: "active",
            prompt: "Chat with [title]",
            api: "Chat",
            aimodel: "gpt-4",
            description:
                "An AI Simulates human conversation through text or voice interfaces, often used for customer service or information retrieval.",
        },
        {
            id: "07",
            icon: <WriteTitle />,
            link: "/app/templates/writer/write-title",
            slug: "write-title",
            name: "Write Title",
            status: "active",
            prompt: "Write Title for [title]",
            api: "Text",
            aimodel: "davinci",
            description:
                "Creates compelling written content that accurately and creatively describes AI products, highlighting their unique features and benefits.",
        },
        {
            id: "08",
            icon: <WriteDescription />,
            link: "/app/templates/writer/write-description",
            slug: "write-description",
            name: "Write Description",
            status: "active",
            prompt: "Write Description for [title]",
            api: "Text",
            aimodel: "davinci",
            description:
                "Description Writer is a tool that generates concise, informative summaries on various topics, providing key details efficiently and effectively.",
        },
        {
            id: "09",
            icon: <VideoScript />,
            link: "/app/templates/writer/video-script",
            slug: "video-script",
            name: "Video Script",
            status: "active",
            prompt: "Video Script for [title]",
            api: "Text",
            aimodel: "motion",
            description:
                "Video Script Writer is a tool that creates engaging and effective scripts for videos, ensuring clear and compelling storytelling.",
        },
        {
            id: "10",
            icon: <GrammarChecker />,
            link: "/app/templates/writer/grammar-checker",
            slug: "grammar-checker",
            name: "Grammar Checker",
            status: "active",
            prompt: "Check Grammar for [title]",
            api: "Text",
            aimodel: "davinci",
            description:
                "AI Grammar Checker: Instantly corrects grammar, spelling, and punctuation errors for more accurate and polished written content.",
        },
        {
            id: "11",
            icon: <NameGenerator />,
            link: "/app/templates/writer/name-generator",
            slug: "name-generator",
            name: "Name Generator",
            status: "disabled",
            prompt: "Generat Name for [title]",
            api: "Text",
            aimodel: "davinci",
            description:
                "Name Generator is a tool that generates creative and unique names for individuals, businesses, products, or any other naming needs.",
        },
        {
            id: "12",
            icon: <CodeGenerator />,
            link: "/app/templates/code",
            slug: "/app/templates/code",
            name: "Code Generator",
            prompt: "Generate Code for [title]",
            status: "active",
            api: "Code",
            aimodel: "codex",
            description:
                "Code Generator automates the process of generating code snippets or complete programs, streamlining development tasks and improving productivity.",
        },
        {
            id: "13",
            icon: <ImageGenerator />,
            link: "/app/templates/image-s2",
            slug: "/app/templates/image-s2",
            name: "Image Generator S2",
            status: "active",
            prompt: "Generate Image for [title]",
            api: "Image",
            aimodel: "dall-e",
            description:
                "A new design for using algorithms, machine learning, or other techniques, often used for creative or practical purposes.",
        },
        {
            id: "14",
            icon: <AIChatBot />,
            link: "/app/templates/chatbot-s2",
            slug: "/app/templates/chatbot-s2",
            name: "AI Chat Bot S2",
            status: "active",
            prompt: "Chat with [title]",
            api: "Chat",
            aimodel: "gpt-4",
            description:
                "A multimodal chatbot UI offers versatile interaction through text, and images providing intuitive communication.",
        },
    ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center pb-8 lg:pb-12">
        <div className="w-full sm:w-4/5 md:w-3/5 xl:w-2/5 text-center mx-auto">
          <div className="text-xs inline-flex font-medium text-white bg-gradient-to-r from-blue-600 to-pink-500 px-3 py-1 tracking-wider rounded mb-2">
            Templates
          </div>
          <h3 className="text-3xl sm:text-[2rem] leading-tight font-bold text-slate-700 dark:text-white mb-3">
            Things you can do with our awesome tools
          </h3>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {data.slice(0, 12).map((item, index) => (
          <a
            href={item.link}
            className="bg-white dark:bg-slate-900 p-6 border border-slate-100 dark:border-slate-800 shadow rounded-2xl hover:ring-2 hover:ring-blue-600 transition-all"
          >
            <div className="flex flex-col gap-x-3 mb-2">
              <div className="h-8 mb-2">{item.icon}</div>
              <h6 className="text-lg font-bold text-slate-700 dark:text-white">
                {item.name}
              </h6>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Template;
