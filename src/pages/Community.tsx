export function Community() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background text-text px-4">
      <h1 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-text mb-4 text-center">
        The <span className="text-gradient-primary">Community</span>
      </h1>
      <p className="text-text-muted text-base md:text-lg max-w-md text-center">
        Connect with millions of players worldwide, join discussions, and share your gaming moments.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-surface border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-surface-hover rounded-full mb-4 flex items-center justify-center">
              <span className="text-text-muted">User {i}</span>
            </div>
            <h3 className="text-text font-bold mb-2">Discussion Topic {i}</h3>
            <p className="text-sm text-text-muted">Join the conversation about the latest updates and strategies.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
