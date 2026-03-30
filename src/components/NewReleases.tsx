import { GameCard } from "./GameCard";
import { games } from "../data/games";
import { ChevronRight } from "lucide-react";

export function NewReleases() {
  // Just taking the last 4 games as "new releases" for demo purposes
  const newGames = [...games].reverse().slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-background border-y border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 md:w-8 h-1 bg-primary rounded-full" />
              <span className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm">Fresh Drops</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-text">
              New <span className="text-transparent bg-clip-text bg-gradient-to-r from-text to-text-muted">Releases</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-text-muted hover:text-primary font-bold uppercase tracking-wider text-sm transition-colors group">
            View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {newGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        
        <button className="md:hidden mt-6 w-full flex items-center justify-center gap-2 text-text-muted hover:text-primary font-bold uppercase tracking-wider text-sm transition-colors group py-3 border border-border rounded-xl bg-surface-hover">
          View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
