"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ArrowLeftRight, Users, Trophy, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Transactions", icon: ArrowLeftRight, href: "/transactions" },
  { label: "Players", icon: Users, href: "/players" },
  { label: "Teams", icon: Trophy, href: "/teams" },
  { label: "Contracts", icon: FileText, href: "/contracts" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-56 shrink-0 border-r border-border flex flex-col py-6 px-3 gap-1">
      {navItems.map(({ label, icon: Icon, href }) => (
        <Link
          key={label}
          href={href}
          className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
            pathname === href
              ? "bg-muted text-foreground font-medium"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          <Icon size={16} />
          {label}
        </Link>
      ))}
    </aside>
  );
}

export default Sidebar;
