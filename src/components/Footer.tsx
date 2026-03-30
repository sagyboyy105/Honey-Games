import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">H</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-text">
                HONEY<span className="text-primary">GAMES</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm max-w-sm">
              The ultimate digital pulse for gamers. Download, play, and experience the highest fidelity entertainment.
            </p>
          </div>
          
          <div>
            <h3 className="text-text font-display font-bold uppercase tracking-wider text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-text-muted hover:text-primary text-sm transition-colors">Store</Link></li>
              <li><Link to="/community" className="text-text-muted hover:text-primary text-sm transition-colors">Community</Link></li>
              <li><Link to="/support" className="text-text-muted hover:text-primary text-sm transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-text font-display font-bold uppercase tracking-wider text-sm mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-muted hover:text-primary text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary text-sm transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary text-sm transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Honey Games Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social icons placeholders */}
            <div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
              <span className="text-text-muted text-xs">X</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
              <span className="text-text-muted text-xs">IG</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-surface-hover flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
              <span className="text-text-muted text-xs">YT</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
