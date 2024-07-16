import React from "react";
import jerPic from "../../media/images/jer_headshot.jpg";
import { setDocTitle } from "../../utils/functions";

export default function Home() {
  document.title = setDocTitle("Home").fullTitle;

  const picSize = 800;
  const jerImg = (
    <img
      alt="A professional headshot of Jeremiah Cadet"
      width={picSize}
      height={picSize}
      src={jerPic}
      className="rounded-full object-contain"
    />
  );

  return (
    <div className="md:flex sm:justify-between">
      <div className="md:hidden mb-8">{jerImg}</div>
      <div className="mb-2 space-y-4">
        <div className="flex text-left">
          <div>
            <h1 className="text-slate-300 sm:text-7xl text-4xl">
              Jeremiah Cadet
            </h1>
            <h2 className="text-slate-400 sm:text-4xl text-2xl">
              Northeastern University New Graduate, aspiring Software Developer
            </h2>
            <h2 className="text-slate-400 sm:text-4xl text-2xl">
              Graduated May 2024
            </h2>
          </div>
        </div>
        <p className="text-left text-lg">
          I began studying at Northeastern University in 2020. I graduded in May 2024 with a Bachelor's degree in Computer Science with a concentration in Human-Centered Computing. During college, I completed two co-ops. My first co-op was at{" "}
          {
            <a className="text-teal-200 hover:text-teal-600" href="/experience">
              Optum
            </a>
          }
          , and my second co-op was at{" "}
          {
            <a className="text-teal-200 hover:text-teal-600" href="/experience">
              Hydrow
            </a>
          }
          .
        </p>
      </div>
      <div className="hidden md:inline-block">
        {jerImg}
      </div>
    </div>
  );
}
