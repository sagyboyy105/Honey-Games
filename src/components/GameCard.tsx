import { Link } from "react-router-dom";
import { Star, Download } from "lucide-react";
import { Game } from "../data/games";
import { motion } from "framer-motion";

interface GameCardProps {
  game: Game;
  key?: string | number;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link to={`/game/${game.id}`} className="block h-full">
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative flex flex-col bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors duration-300 h-full"
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div className="flex flex-wrap gap-2">
              {game.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white rounded-md border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
              <Star className="w-3 h-3 text-primary fill-primary" />
              <span className="text-xs font-bold text-white">{game.rating}</span>
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-display font-bold text-xl leading-tight text-white line-clamp-2">
              {game.title}
            </h3>
            <p className="text-sm text-white/70 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {game.description}
            </p>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="p-5 pt-4 flex items-center justify-between bg-surface border-t border-border relative z-10 mt-auto">
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-text">
              Free Download
            </span>
          </div>

          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-primary text-text hover:text-white transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
            <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
          </button>
        </div>
      </motion.div>
    </Link>
  );
}
