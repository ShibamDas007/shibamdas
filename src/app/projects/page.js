import _project from "../components/projects";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div className="flex flex-col w-screen md:h-screen h-dvh">
      <Header />
      <div className="flex flex-grow min-h-0">
        <div className="flex flex-col w-full min-h-0">
          <Navbar />
          <div className="flex-grow overflow-y-auto">
            <_project />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
