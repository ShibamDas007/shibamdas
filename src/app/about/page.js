import Header from "../components/Header";
import About from "../components/about";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import File from "../components/fileShower";

export const metadata = {
  title: "About me | Shibam Das",
  description: "About Shibam Das - Full Stack Developer",
};

export default function Page() {
  return (
    <>
      <div className="hidden md:flex flex-col w-screen h-screen">
        <Header/>
        <div className="flex flex-grow min-h-0">
          <div className="flex flex-col w-full min-h-0">
            <Navbar />
            <div className="flex-grow">
              <About />
            </div>
          </div>
          <div className="flex-shrink-0 w-60 bg-[#010409]"><File/></div>
        </div>
        <Footer />
      </div>
      

      <div className="md:hidden flex flex-col bg-[#0D1117] w-screen md:h-screen overflow-hidden h-dvh overflow-y-auto">
        <Header />
        <Navbar />
        <div className="h-full">
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}
