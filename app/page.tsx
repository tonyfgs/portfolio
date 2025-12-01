import {Navigation} from "@/component/navigation";
import {Presentation} from "@/component/presentation";
import {About} from "@/component/about";
import {Work} from "@/component/work";
import {Contact} from "lucide-react";
import {ContactSection} from "@/component/contact-section";

export default function Home() {
  return (
      <main className="min-h-screen">
          <Navigation/>
          <Presentation/>
          <About/>
          <Work/>
          <ContactSection/>
      </main>
  );
}
