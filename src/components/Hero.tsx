import { Link } from "react-router-dom";
import { Download, Info } from "lucide-react";
import { Game } from "../data/games";
import { motion } from "framer-motion";

interface HeroProps {
  game: Game;
}

export function Hero({ game }: HeroProps) {
  return (
    <div className="relative w-full h-[85vh] min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={game.banner}
          alt={game.title}
          className="w-full h-full object-cover object-center md:object-top"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 md:via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end md:justify-center pb-12 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="px-2 md:px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-primary text-white rounded-sm">
              Featured Launch
            </span>
            <span className="text-xs md:text-sm font-medium text-text-muted">
              {game.developer}
            </span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tighter text-text mb-4 md:mb-6 uppercase">
            {game.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-text-muted mb-8 md:mb-10 max-w-xl leading-relaxed line-clamp-3 md:line-clamp-none">
            {game.description}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
            <Link to={`/game/${game.id}`} className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95">
              <Download className="w-5 h-5 fill-current" />
              Download Free
            </Link>
            <Link to={`/game/${game.id}`} className="flex items-center justify-center gap-2 bg-surface/50 hover:bg-surface text-text px-6 md:px-8 py-3 md:py-4 rounded-full font-bold backdrop-blur-md transition-all duration-300 border border-border">
              <Info className="w-5 h-5" />
              View Details
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-4 md:p-8 hidden sm:block">
        <div className="flex items-center gap-4 bg-surface/80 backdrop-blur-md border border-border rounded-2xl p-3 md:p-4">
          <div className="text-right">
            <p className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider font-bold mb-1">Available Now</p>
            <p className="text-xl md:text-2xl font-display font-bold text-text">
              Free Download
            </p>
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden border border-white/20">
            <img src={game.image} alt="Thumbnail" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
