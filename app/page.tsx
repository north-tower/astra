import TinderCards from "@/components/TinderCards";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
        <div className="hidden md:block">01</div>
        <div>
          <TinderCards />
        </div>
      </div>
    </main>
  );
}
