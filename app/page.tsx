const Home = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-[#0a1628] via-[#0d2257] to-[#0a1628] border-b border-yellow-500/30 py-16 px-6 flex flex-col items-center text-center gap-3">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Cap Cruncher
        </h1>
        <p className="text-white/70 text-lg max-w-xl">
          PWHL player contracts, cap hits, and roster data — all in one place.
        </p>
      </div>

      {/* Table placeholder */}
      <div className="flex-1 w-full max-w-6xl mx-auto px-6 py-10">
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="bg-muted px-4 py-3 text-sm font-medium text-muted-foreground">
            Players
          </div>
          <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
            Player data coming soon.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-4 text-center text-xs text-muted-foreground">
        Cap Cruncher © {new Date().getFullYear()}
      </footer>
    </main>
  );
}

export default Home;
