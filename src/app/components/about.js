/**
 * ABOUT ME
 * A brief introduction to who I am
 */

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
    <div className="bg-[#0D1117] text-gray-300 font-mono text-sm h-full md:h-[494px] p-20 overflow-y-auto">
      <div className="flex gap-2">
        <div className="text-purple-600">const</div>
        <div className="flex flex-col gap-[10px]">
          <span className="text-yellow-600">aboutMe <span className="text-white">=</span> {"{"}</span>
          <div>
            name: <span>"Shibam Das",</span>
          </div>
          <div>
            role: <span>"Full Stack Developer",</span>
          </div>
          <div>
            technologies:
            <span>
              {' ["'}
              {aboutMe.technologies.map((tech, index) => (
                <span key={index}>{tech}, </span>
              ))}
              {'"'}
            </span>
          </div>
          <div className="flex gap-2">
            experience: <p>{'"😐",'}</p>
          </div>
          <div className="flex gap-2">
            education: <p>{'"Bachelor of Computer Science",'}</p>
          </div>
          <div>
            interests:
            <span>
              {' ["'}
              {aboutMe.interests.map((tech, index) => (
                <span key={index}>{tech}, </span>
              ))}
              {'"]'}
            </span>
          </div>
          <div className="">
            contactInfo: {"{"}
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'email: "example123@gmail.com",'}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'github: "github.com/shibam-das",'}</p>
          </div>
          <p>&nbsp;&nbsp;&nbsp;{'}'}</p>
          <p>{'}'}</p>
        </div>
      </div>
    </div>
  );
}
