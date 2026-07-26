import AnnouncementBar from "@/components/layout/Announcementbar";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import Creations from "@/components/home/Creations";
import Treats from "@/components/home/Treats";
import PriceCTA from "@/components/home/PriceCTA";
import About from "@/components/home/AboutSection";
import QuoteCTA from "@/components/home/QuoteCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar/>
      <Navbar/>

      <main>
        <Container>
          <Hero/>
        </Container>

        <Ticker/>

        <Container>
          <Creations/>
          <Treats/>
          <PriceCTA />
          <About/>
          <QuoteCTA/>
        </Container>

        <Footer/>
      </main>
    </>
    
  );
}
