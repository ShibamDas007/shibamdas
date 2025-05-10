const aboutMe = {
  name: "Shibam Das",
  role: "Full Stack Developer",
  technologies: ["React", "Node.js", "TypeScript", "SQL", "MongoDB"],
  experience: 5, // years of development experience
  education: "Bachelor of Computer Science",
  interests: [
    "Web Development",
    "System Design",
    "Cloud Architecture",
    "DevOps",
  ],
  currentlyLearning: "Kubernetes",
  contactInfo: {
    email: "shibam@example.com",
    github: "github.com/shibam-das",
  },
};

export default function About() {
  return (
    <div className="bg-[#0D1117] text-gray-300 font-mono text-sm h-full p-10 md:p-20 overflow-hidden">
      <div className="overflow-x-auto pb-4 scroll">
        <div className="min-w-[380px]">
          <div className="flex gap-2">
            <div className="text-purple-600 text-h">const</div>
            <div className="flex flex-col gap-[10px]">
              <span className="text-yellow-600">
                aboutMe <span className="text-white">=</span> {"{"}
              </span>
              <div className="flex gap-2">
                <p className="text-red-600">{"name:"}</p>
                <span className="text-green-600">{'"Shibam Das"'}</span>
                {","}
              </div>

              <div className="flex gap-2">
                <p className="text-red-600">{"role:"}</p>
                <span className="text-green-600">
                  {'"Full Stack Developer"'}
                </span>
                {","}
              </div>

              <div className="flex gap-2">
                <p className="text-red-600">{"technologies:"}</p>
                <span className="text-green-600">
                  {'["'}
                  {aboutMe.technologies.map((tech, index) => (
                    <span key={index} className="text-green-600">
                      {tech}
                      {index < aboutMe.technologies.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  {'"],'}
                </span>
              </div>

              <div className="flex gap-2">
                <p className="text-red-600">{"experience:"}</p>
                <span className="text-green-600">{'"😐"'}</span>
                {","}
              </div>

              <div className="flex gap-2">
                <p className="text-red-600">{"education:"}</p>
                <span className="text-green-600">
                  {'"Bachelor of Computer Science"'}
                </span>
                {","}
              </div>

              <div className="flex gap-2">
                <p className="text-red-600">{"interests:"}</p>
                <span className="text-green-600">
                  {'["'}
                  {aboutMe.interests.map((interest, index) => (
                    <span key={index} className="text-green-600">
                      {interest}
                      {index < aboutMe.interests.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  {'"]'}
                </span>
              </div>

              <div>
                <p className="text-red-600">{"contactInfo:"}</p>{" "}
                <span className="text-violet-500">&nbsp;&nbsp;&nbsp;{"{"}</span>
                <div className="ml-6">
                  <p>
                    <span className="text-red-600">&nbsp;&nbsp;&nbsp;{"email:"}</span>{" "}
                    <span className="text-green-600">
                      {'"example123@gmail.com"'}
                    </span>
                    {","}
                  </p>
                  <p>
                    <span className="text-red-600">&nbsp;&nbsp;&nbsp;{"github:"}</span>{" "}
                    <span className="text-green-600">
                      {'"github.com/shibam-das"'}
                    </span>
                    {","}
                  </p>
                </div>
                <p className="text-violet-400">&nbsp;&nbsp;&nbsp;{"}"}</p>
              </div>

              <p className="text-yellow-600">{"}"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
