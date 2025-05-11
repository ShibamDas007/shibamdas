"use client";

import { useState } from "react";
import { DiReact, DiNodejs, DiPython } from "react-icons/di";
import { SiNextdotjs, SiExpress } from "react-icons/si";
import { VscMarkdown } from "react-icons/vsc";

export default function File() {
  const [file1, setFile1] = useState(true);
  const [file2, setFile2] = useState(false);
  const [file3, setFile3] = useState(false);
  const [file4, setFile4] = useState(false);
  const [file5, setFile5] = useState(false);
  const [file6, setFile6] = useState(false);
  const [file, setFile] = useState(true);

  return (
    <div className="border-t border-gray-600 border-l border-b h-full">
      <div>
        <p className="text-sm p-2 px-4 ">Explorer</p>
      </div>
      <div onClick={() => setFile1(!file1)} className="flex select-none cursor-pointer text-sm items-center">
        <p className={`px-4 transform transition-transform duration-200 ${file1 ? "rotate-90" : ""}`}>&gt;</p>
        <span className="text-xs">MY INTERESTS</span>
      </div>
      <div className={`ml-2 overflow-hidden ${file1 ? "max-h-[500px]" : "max-h-0"} transition-all ease duration-500`}>
        <div onClick={() => setFile2(!file2)} className="flex select-none cursor-pointer text-sm items-center hover:bg-gray-700 active:bg-gray-500">
            <p className={`px-4 transform transition-transform duration-200 ${file2 ? "rotate-90" : ""}`}>&gt;</p>
            <span className="text-xs flex gap-2 items-center"><DiReact size={16} color="aqua"/><span>ReactJS</span></span>
        </div>
        <div onClick={() => setFile3(!file3)} className="flex select-none cursor-pointer text-sm items-center hover:bg-gray-700 active:bg-gray-500">
            <p className={`px-4 transform transition-transform duration-200 ${file3 ? "rotate-90" : ""}`}>&gt;</p>
            <span className="text-xs flex gap-2"><SiNextdotjs size={16}/><span>NextJS</span></span>
        </div>
        <div onClick={() => setFile4(!file4)} className="flex select-none cursor-pointer text-sm items-center hover:bg-gray-700 active:bg-gray-500">
            <p className={`px-4 transform transition-transform duration-200 ${file4 ? "rotate-90" : ""}`}>&gt;</p>
            <span className="text-xs flex gap-2 items-center"><DiNodejs size={20} color="green"/><span>NodeJS</span></span>
        </div>
        <div onClick={() => setFile5(!file5)} className="flex select-none cursor-pointer text-sm items-center hover:bg-gray-700 active:bg-gray-500">
            <p className={`px-4 transform transition-transform duration-200 ${file5 ? "rotate-90" : ""}`}>&gt;</p>
            <span className="text-xs flex gap-2 items-center"><SiExpress size={14}/><span>Express</span></span>
        </div>
        <div onClick={() => setFile6(!file6)} className="flex select-none cursor-pointer text-sm items-center hover:bg-gray-700 active:bg-gray-500">
            <p className={`px-4 transform transition-transform duration-200 ${file6 ? "rotate-90" : ""}`}>&gt;</p>
            <span className="text-xs gap-2 flex"><DiPython size={16}/><span>Python</span></span>
        </div>
        <div onClick={() => setFile(!file)} className="flex select-none cursor-pointer text-sm items-center hover:bg-gray-700 active:bg-gray-500">
            <p className={`px-4 transform transition-transform duration-200 ${file ? "rotate-90" : ""}`}>&gt;</p>
            <span className="text-xs">⛱️ Free time</span>
        </div>
        <div className={`text-xs ml-8 flex flex-col gap-2 overflow-hidden transition-all ease duration-500 ${file ? "max-h-[500px]" : "max-h-0"}`}>
            <p className="flex gap-2 cursor-pointer active:bg-gray-700 hover:bg-gray-500"><VscMarkdown size={16} color="FFEF00"/><span>Playing_minceraft.md</span></p>
            <p className="flex gap-2 cursor-pointer active:bg-gray-700 hover:bg-gray-500"><VscMarkdown size={16} color="FFEF00"/><span>Playing_chess.md</span></p>
            <p className="flex gap-2 cursor-pointer active:bg-gray-700 hover:bg-gray-500"><VscMarkdown size={16} color="FFEF00"/><span>Scrolling_Insta.md</span></p>
            <p className="flex gap-2 cursor-pointer active:bg-gray-700 hover:bg-gray-500"><VscMarkdown size={16} color="FFEF00"/><span>Reading_books.md</span></p>
            <p className="flex gap-2 cursor-pointer active:bg-gray-700 hover:bg-gray-500"><VscMarkdown size={16} color="FFEF00"/><span>Quantum_Physics_Study.md</span></p>
            <p className="flex gap-2 cursor-pointer active:bg-gray-700 hover:bg-gray-500"><VscMarkdown size={16} color="FFEF00"/><span>AI_Research.md</span></p>
            <p className="flex gap-2 cursor-pointer active:bg-gray-700 hover:bg-gray-500"><VscMarkdown size={16} color="FFEF00"/><span>Tech_Articles.md</span> </p>
        </div>
      </div>
    </div>
  );
}
