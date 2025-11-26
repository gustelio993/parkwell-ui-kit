import { NavLink } from "@/components/NavLink";
import { Map, Award, User, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const navItems = [
    { to: "/", icon: Map, label: "Map" },
    { to: "/premium", icon: Crown, label: "Premium" },
    { to: "/rewards", icon: Award, label: "Rewards" },
    { to: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground transition-colors"
            activeClassName="text-primary"
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-6 h-6 mb-1", isActive && "stroke-[2.5]")} />
                <span className="text-xs font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
