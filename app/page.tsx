import { ArrowLeftRight, Users, Trophy, FileText } from "lucide-react";

const navItems = [
  { label: "Transactions", icon: ArrowLeftRight },
  { label: "Players", icon: Users },
  { label: "Teams", icon: Trophy },
  { label: "Contracts", icon: FileText },
];

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-[#0a1628] via-[#0d2257] to-[#0a1628] border-b border-white/10 py-8 px-6 flex flex-col items-center text-center gap-3">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Cap Cruncher
        </h1>
        <p className="text-white/70 text-lg max-w-xl">
          PWHL player contracts, cap hits, and roster data — all in one place.
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-1">
        {/* Left nav */}
        <aside className="w-56 shrink-0 border-r border-border flex flex-col py-6 px-3 gap-1">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors w-full text-left"
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </aside>

        {/* Main content */}
        <div className="flex-1 px-6 py-10">
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-muted px-4 py-3 text-sm font-medium text-muted-foreground">
              Transactions
            </div>
            <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
              Transaction data coming soon.
            </div>
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
