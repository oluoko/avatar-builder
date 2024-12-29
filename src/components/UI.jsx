import { useEffect } from "react";
import { pb, useConfiguratorStore } from "../store";

const AssetsBox = () => {
  const { categories, currentCategory, fetchCategories, setCurrentCategory } =
    useConfiguratorStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="rounded-2xl bg-white drop-shadow-md p-6 gap-6 flex flex-col">
      <div className="flex items-center gap-6 pointer-events-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setCurrentCategory(category)}
            className={`transition-colors duration-200 font-medium ${
              currentCategory.name === category.name
                ? "text-indigo-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {currentCategory?.assets.map((asset, index) => (
          <button
            key={index}
            className={`size-14 md:size-20 rounded-md overflow-hidden bg-gray-200 pointer-events-auto hover:opacity-100 transi border-2 duration-500`}
          >
            <img src={pb.files.getUrl(asset, asset.thumbnail)} />
          </button>
        ))}
      </div>
    </div>
  );
};

const DownloadButton = () => {
  return (
    <button className="rounded-xl bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 text-white font-medium p-[10px] pointer-events-auto">
      Download
    </button>
  );
};

export const UI = () => {
  return (
    <main className="pointer-events-none fixed z-10 inset-0 p-10">
      <div className="mx-auto h-full max-w-scree-xl w-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <a href="/" className="pointer-events-auto">
            <h1 className="font-extrabold text-2xl text-white">
              Avart<span className="text-blue-700 font-mono">ISTRY</span>
            </h1>
          </a>
          <DownloadButton />
        </div>
        <div className="flex flex-col gap-6">
          <AssetsBox />
        </div>
      </div>
    </main>
  );
};
