const aboutData = [
  "Passionate developer who loves solving complex problems.",
  "Skilled in Python, JavaScript, React, and AI.",
  "Building a personal AI-powered search engine project.",
  "Enjoys football, cricket, chess, and theoretical physics.",
  "Right winger in football, loves scoring goals.",
  "Learns fast, adapts quickly, and thinks creatively.",
  "Interested in backend, frontend, and full-stack development.",
  "Dreams of impactful work in tech and research.",
];

export default function _about() {
  return (
    <div className="h-full w-full p-10 md:p-25 bg-[#0D1117]">
      <div className="flex flex-col text-sm justify-center items-center">
        <div className="flex flex-col">
          <p className="opacity-10">11</p>
          <p className="opacity-30">12</p>
          <p className="opacity-70">13</p>
          {aboutData.map((lines, index) => {
            return (
              <div key={index} className="flex gap-4">
                <span>{index + 14}</span>
                <span>{lines}</span>
              </div>
            );
          })}
          <p className="opacity-70">22</p>
          <p className="opacity-30">23</p>
          <p className="opacity-10">25</p>
        </div>
      </div>
    </div>
  );
}
