import { authOptions } from "@/auth";
import Chat from "@/components/Chat";
import Feed from "@/components/Feed";
import TinderCards from "@/components/TinderCards";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
        <div className="hidden md:block">
          <Feed />
        </div>
        <div>
          <TinderCards />
        </div>
      </div>
    </main>
  );
}
