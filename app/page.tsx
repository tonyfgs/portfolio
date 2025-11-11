import {Navigation} from "@/component/navigation";
import {Presentation} from "@/component/presentation";
import {About} from "@/component/about";
import {Work} from "@/component/work";

export default function Home() {
  return (
      <main className="min-h-screen">
          <Navigation/>
          <Presentation/>
          <About/>
          <Work/>
      </main>
  );
}
