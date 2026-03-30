import { useParams, Link } from "react-router-dom";
import { games } from "../data/games";
import { Download, Star, ArrowLeft } from "lucide-react";
import { GameCard } from "../components/GameCard";

export function GameDetails() {
  const { id } = useParams();
  const game = games.find(g => g.id === id);

  if (!game) return <div className="p-24 text-center text-2xl font-display text-text">Game not found</div>;

  const relatedGames = games.filter(g => g.id !== game.id && g.tags.some(t => game.tags.includes(t))).slice(0, 4);

  return (
    <div className="min-h-screen bg-background text-text pb-24">
      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <img src={game.banner} alt={game.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-text-muted hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Store
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {game.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-text mb-4">
            {game.title}
          </h1>
          <div className="flex items-center gap-6 text-sm font-medium text-text-muted">
            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-primary fill-primary" /> {game.rating} / 5.0</span>
            <span>Developer: {game.developer}</span>
            <span>Release: {game.releaseDate}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-gradient-primary">About This Game</h2>
            <p className="text-lg text-text-muted leading-relaxed">{game.description}</p>
            <p className="text-lg text-text-muted leading-relaxed mt-4">
              Experience the thrill of {game.title}. Download now for free and join millions of players worldwide. This version includes all latest updates and DLCs. No account required.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold mb-4 text-gradient-primary">System Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface p-6 rounded-2xl border border-border">
              <div>
                <h3 className="font-bold text-text mb-2">Minimum</h3>
                <ul className="text-sm text-text-muted space-y-2">
                  <li>OS: Windows 10 64-bit</li>
                  <li>Processor: Intel Core i5 / AMD Ryzen 5</li>
                  <li>Memory: 8 GB RAM</li>
                  <li>Graphics: NVIDIA GTX 1060 / AMD RX 580</li>
                  <li>Storage: 50 GB available space</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-text mb-2">Recommended</h3>
                <ul className="text-sm text-text-muted space-y-2">
                  <li>OS: Windows 11 64-bit</li>
                  <li>Processor: Intel Core i7 / AMD Ryzen 7</li>
                  <li>Memory: 16 GB RAM</li>
                  <li>Graphics: NVIDIA RTX 3060 / AMD RX 6700 XT</li>
                  <li>Storage: 50 GB SSD space</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-surface p-6 rounded-2xl border border-border sticky top-24">
            <img src={game.image} alt={game.title} className="w-full rounded-xl mb-6 aspect-video object-cover" />
            <div className="text-3xl font-display font-black text-text mb-6">Free Download</div>
            <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95">
              <Download className="w-5 h-5" />
              Download Now
            </button>
            <p className="text-xs text-text-muted text-center mt-4">
              By downloading, you agree to our Terms of Service. No account required.
            </p>
          </div>
        </div>
      </div>

      {/* Related Games */}
      {relatedGames.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <h2 className="text-3xl font-display font-black uppercase tracking-tighter text-text mb-8">
            Similar <span className="text-gradient-primary">Games</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedGames.map(rg => <GameCard key={rg.id} game={rg} />)}
          </div>
        </div>
      )}
    </div>
  );
}
