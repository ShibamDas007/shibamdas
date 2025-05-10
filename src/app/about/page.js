import Header from "../components/Header";
import About from "../components/about";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col bg-[#0D1117] w-screen md:h-screen overflow-hidden h-dvh overflow-y-auto">
      <Header />
      <Navbar />
      <div className="h-full">
        <About />
      </div>
        <Footer />
    </div>
  );
}
