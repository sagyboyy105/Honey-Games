import { motion } from "framer-motion";
import { Zap, Globe, Shield, Trophy } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-text mb-4">
            Why <span className="text-gradient-primary">Honey Games</span>?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl">
            Experience the next generation of digital distribution. Built for gamers, engineered for performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 row-span-2 relative overflow-hidden rounded-3xl bg-surface border border-border p-8 flex flex-col justify-end min-h-[400px] group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 p-8">
              <Zap className="w-12 h-12 text-primary opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-text mb-4">
                Lightning Fast Downloads
              </h3>
              <p className="text-text-muted text-lg max-w-md">
                Our global CDN ensures you get your games at maximum speed, no matter where you are.
              </p>
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-3xl bg-surface border border-border p-8 flex flex-col justify-between min-h-[200px] group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-text mb-2">Global Community</h3>
              <p className="text-sm text-text-muted">Connect with millions of players worldwide.</p>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div
            whileHover={{ y: -5 }}
            className="relative overflow-hidden rounded-3xl bg-surface border border-border p-8 flex flex-col justify-between min-h-[200px] group"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-text mb-2">Secure Platform</h3>
              <p className="text-sm text-text-muted">Industry-leading security for your account and downloads.</p>
            </div>
          </motion.div>

          {/* Wide Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-3 relative overflow-hidden rounded-3xl bg-surface border border-border p-8 flex flex-col md:flex-row items-center justify-between group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-6 relative z-10 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-text mb-2">Exclusive Rewards</h3>
                <p className="text-text-muted">Earn points on every download and unlock premium content.</p>
              </div>
            </div>
            <button className="relative z-10 px-6 py-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-text rounded-full font-bold border border-border transition-colors">
              Join the Club
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
