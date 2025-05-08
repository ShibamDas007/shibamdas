import Header from "../components/Header";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  return (
    <div className="flex flex-col bg-[#0D1117] w-screen md:h-screen overflow-hidden h-dvh overflow-y-auto">
      <Header />
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
