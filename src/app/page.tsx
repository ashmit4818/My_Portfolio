
import Navbar from "@/components/Navbar";
import { Aurora_Background } from "@/components/AuroraBackground";
import {Projects} from "@/components/Projects";
import {Skills} from "@/components/Skills";
import {ContactForm} from "@/components/ContactForm";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="bg-[#050709]">

      <Navbar />
      <Aurora_Background/>
      <Projects/>
      <Skills/>
      <ContactForm/>
      <Footer/>

    </div>
  );
}
