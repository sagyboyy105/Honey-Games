import { useState, useRef } from "react";
import { GameCard } from "./GameCard";
import { games } from "../data/games";
import { Filter, ArrowUpDown, Calendar, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StoreGrid() {
  const [activeTag, setActiveTag] = useState("All");
  const [sortBy, setSortBy] = useState("rating"); // rating, title, date, price
  const [priceFilter, setPriceFilter] = useState("all"); // all, under20, over20
  
  const gridRef = useRef<HTMLElement>(null);

  const scrollToGrid = () => {
    setTimeout(() => {
      if (gridRef.current) {
        const yOffset = -100; // Account for sticky navbar
        const y = gridRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
        
        // Only scroll if the user has scrolled past the top of the grid
        if (window.scrollY > y) {
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }, 100);
  };

  const handleTagChange = (tag: string) => {
    setActiveTag(tag);
    scrollToGrid();
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceFilter(e.target.value);
    scrollToGrid();
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    scrollToGrid();
  };

  const tags = ["All", "Action", "RPG", "FPS", "Open World", "Indie"];

  let filteredGames = activeTag === "All" 
    ? games 
    : games.filter(game => game.tags.includes(activeTag));

  if (priceFilter === "under20") {
    filteredGames = filteredGames.filter(game => game.price < 20);
  } else if (priceFilter === "over20") {
    filteredGames = filteredGames.filter(game => game.price >= 20);
  }

  filteredGames = [...filteredGames].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "date") return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    if (sortBy === "price") return a.price - b.price;
    return 0;
  });

  return (
    <section ref={gridRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-text mb-2 lg:mb-0">
            Featured <span className="text-gradient-primary">Games</span>
          </h2>

          {/* Filters & Sorting */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto flex-wrap">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto hide-scrollbar">
              <div className="flex items-center gap-2 mr-2 text-text-muted">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Tag:</span>
              </div>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagChange(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                    activeTag === tag
                      ? "bg-primary text-white border-primary"
                      : "bg-surface text-text-muted hover:bg-surface-hover hover:text-text border border-border"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto flex-wrap">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-text-muted" />
                <select
                  value={priceFilter}
                  onChange={handlePriceChange}
                  className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider bg-surface text-text border border-border focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="all">All Prices</option>
                  <option value="under20">Under $20</option>
                  <option value="over20">$20 & Above</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-text-muted" />
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider bg-surface text-text border border-border focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="rating">Top Rated</option>
                  <option value="date">Newest</option>
                  <option value="title">Alphabetical</option>
                  <option value="price">Price: Low to High</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredGames.map((game) => (
              <motion.div
                key={game.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GameCard game={game} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
