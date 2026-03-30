import { Hero } from "../components/Hero";
import { BentoGrid } from "../components/BentoGrid";
import { StoreGrid } from "../components/StoreGrid";
import { NewReleases } from "../components/NewReleases";
import { games } from "../data/games";

export function Home() {
  const featuredGame = games[0]; // Counter-Strike 2

  return (
    <main className="min-h-screen bg-background text-text">
      <Hero game={featuredGame} />
      <NewReleases />
      <BentoGrid />
      <StoreGrid />
    </main>
  );
}
