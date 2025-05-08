"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";

export default function Container() {
  const [MobileEmblaRef, MobileEmblaApi] = useEmblaCarousel({ loop: true });
  const [PcEmblaRef, PcEmblaApi] = useEmblaCarousel({ loop: true });
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const username = "ShibamDas007";
    const cacheKey = "githubData";
    const cached = localStorage.getItem(cacheKey);
    const oneDay = 24 * 60 * 60 * 1000;
    const GITHUB_TOKEN = process.env.GITHUB_API_TOKEN;

    if (cached) {
      const parsed = JSON.parse(cached);
      const isFresh = Date.now() - parsed.timestamp < oneDay;
      if (isFresh) {
        setRepos(parsed.repos);
        return;
      }
    }

    fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const repoPromises = data.map((repo) =>
          fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`)
            .then((res) => res.json())
            .then((commits) => ({
              name: repo.name,
              description: repo.description || "No description provided",
              commits: Array.isArray(commits) ? commits.length : 0,
            }))
        );

        Promise.all(repoPromises).then((fetchedRepos) => {
          setRepos(fetchedRepos);
          localStorage.setItem(
            cacheKey,
            JSON.stringify({
              repos: fetchedRepos,
              timestamp: Date.now(),
            })
          );
        });
      });
  }, []);

  useEffect(() => {
    if (!MobileEmblaApi) return;
    const autoplay = setInterval(() => MobileEmblaApi.scrollNext(), 3000);
    return () => clearInterval(autoplay);
  }, [MobileEmblaApi]);

  useEffect(() => {
    if (!PcEmblaApi) return;
    const autoplay = setInterval(() => PcEmblaApi.scrollNext(), 3000);
    return () => clearInterval(autoplay);
  }, [PcEmblaApi]);

  const renderProjectCards = () =>
    repos.length > 0
      ? repos.map((project, i) => (
          <div key={i} className="min-w-full px-2 cursor-pointer select-none">
            <div className="flex flex-col justify-between gap-2 bg-[#0D1117] border-2 border-[#17212C] rounded-lg w-full p-6 shadow-lg h-60">
              <div className="flex justify-between">
                <p className="text-yellow-600">{project.name}</p>
                <p className="text-gray-600">Commits {project.commits}</p>
              </div>
              <div className="text-sm bg-[#0A0D12] p-2 text-gray-500 border border-[#080B10] shadow-lg rounded-lg text-sm overflow-y-auto">
                <p>{'/**'}</p>
                <p>&nbsp;{'*'} {project.description}</p>
                <p>{'*/'}</p>
              </div>
              <div
                className="bg-yellow-500 rounded-[2px]"
                onClick={() =>
                  window.open(
                    `${`https://github.com/ShibamDas007/${project.name}`}`,
                    "_blank"
                  )
                }
              >
                {"see the project"}
              </div>
            </div>
          </div>
        ))
      : [1, 2, 3].map((project, i) => (
          <div key={i} className="min-w-full px-2 cursor-pointer select-none">
            <div className="flex flex-col gap-2 bg-[#0D1117] border-2 border-[#17212C] rounded-lg w-full p-6 shadow-lg h-full">
              <div className="flex justify-between">
                <p className="text-yellow-600">Project {project}</p>
                <p className="text-gray-600">Commits {project * 2}</p>
              </div>
              <div className="text-sm bg-[#0A0D12] p-2 text-gray-500 border border-[#080B10] shadow-lg rounded-lg">
                <p>{"/**"}</p>
                <p>&nbsp;{"* React NodeJs SQL"}</p>
                <p>&nbsp;{"* Auth API"}</p>
                <p>&nbsp;{"* JWT + Session"}</p>
                <p>&nbsp;{"* Sequelize ORM"}</p>
                <p>{"**/"}</p>
              </div>
              <div className="bg-yellow-500 rounded-[2px] text-gray-600">
                {"see the project"}
              </div>
            </div>
          </div>
        ));

  return (
    <div className="flex justify-center items-center w-full h-full px-10 md:p-10">
      <div className="hidden md:flex flex-row gap-10">
        <div className="lg:w-[520px] h-[400px] flex flex-col justify-center items-center gap-30 p-10">
          <div>
            <p className="text-green-500 text-sm">Hello Im</p>
            <a
              href="https://github.com/ShibamDas007"
              className="lg:text-6xl text-5xl text-white"
            >
              Shibam Das
            </a>
            <p className="text-blue-400 text-xl">A full stack developer.</p>
          </div>
          <div>
            <p className="text-gray-700">
              {"// write the code below to continue:"}
            </p>
            <div className="flex gap-2 relative w-fit">
              <p className="text-purple-500 text-lg">&gt;</p>
              <input
                placeholder="whois"
                className="text-white outline-none placeholder-purple-500 bg-transparent"
              />
              <span className="absolute ml-5 left-0 bottom-0 h-[2px] bg-purple-300 w-2 animate-blinkUnderline"></span>
            </div>
          </div>
        </div>

        <div className="w-[400px] h-full flex justify-center items-center overflow-hidden">
          <div className="w-full mt-22" ref={PcEmblaRef}>
            <div className="flex">{renderProjectCards()}</div>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col w-full mt-4 p-6 justify-center items-center">
        <div className="flex flex-col justify-center gap-4 items-center w-full h-full">
          <div className="w-full flex flex-col justify-between h-55">
            <div className="w-full h-30 flex flex-col justify-center">
              <p className="text-sm text-green-500">Hello! I am</p>
              <p className="text-4xl text-white">Shibam Das</p>
              <p className="text-md text-blue-400">A full stack developer.</p>
            </div>
            <div className="">
              <p className="text-gray-700">
                {"// write the code below to continue:"}
              </p>
              <div className="flex gap-2 relative w-fit">
                <p className="text-purple-500 text-lg">&gt;</p>
                <input
                  placeholder="whois"
                  className="text-white outline-none placeholder-purple-500 bg-transparent"
                />
                <span className="absolute ml-5 left-0 bottom-0 h-[2px] bg-purple-300 w-2 animate-blinkUnderline"></span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden mb-[10px]">
            <div className="w-80" ref={MobileEmblaRef}>
              <div className="flex">{renderProjectCards()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
