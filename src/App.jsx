import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Reason from "./components/Reason";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home(){

  return (
    <>
    <Navbar />
    <Hero />
    <Gallery />
    <Reason />
    <Testimonials />
    <Footer />
    </>
  )
}