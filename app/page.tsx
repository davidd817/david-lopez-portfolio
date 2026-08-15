import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Navigation } from "@/components/Navigation";
import { Profile } from "@/components/Profile";
import { Publications } from "@/components/Publications";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Metrics />
        <Profile />
        <Expertise />
        <SelectedWork />
        <Experience />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
