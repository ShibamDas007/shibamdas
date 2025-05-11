"use client";

import repos from "../data/github";

export default function _project() {
  return (
    <div className="bg-[#0D1117] gap-12 flex flex-col justify-center items-center lg:grid lg:grid-cols-2 p-10 xl:px-30">
      {repos.map((project, _) => (
        <div
          key={project.id}
          className="w-90 md:w-140 px-6 sm:p-0 lg:w-120 xl:w-140 h-full px-2 cursor-pointer select-none flex flex-col gap-2"
        >
          <div className="flex flex-col justify-between gap-2 bg-[#0D1117] border-2 border-[#17212C] rounded-lg w-full p-6 shadow-lg h-60 transition-all duration-300 hover:scale-[1.02] hover:border-sky-500 hover:shadow-sky-700/50 active:scale-[1.02] active:border-sky-500 active:shadow-sky-700/50">
            <div className="flex justify-between">
              <p className="text-yellow-600">{project.name}</p>
              <p className="text-gray-600">Commits {project.commits}</p>
            </div>
            <div className="text-sm bg-[#0A0D12] p-2 text-gray-500 border border-[#080B10] shadow-lg rounded-lg text-sm flex-grow overflow-y-auto">
              <p>{"/**"}</p>
              <p>
                &nbsp;{"*"} {project.description}
              </p>
              <p>{"*/"}</p>
            </div>
            <div></div>
          </div>
          <p className="text-sm px-8">{project.description}</p>
          <div className="w-full flex justify-center items-center">
            <button onClick={() => window.open(`${project.html_url}`, "_blank")} type="click"  className="border border-gray-600 p-2 rounded-full px-4 text-sky-500 cursor-pointer hover:opacity-50 active:scale-90 shadow-lg shadow-blue-500/20 hover:shadow-md">
              Check in GitHub
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
