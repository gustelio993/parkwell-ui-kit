import { ReactNode } from "react";
import BottomNav from "./BottomNav";

interface AppLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

const AppLayout = ({ children, showNav = true }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-16 max-w-md mx-auto">{children}</main>
      {showNav && <BottomNav />}
    </div>
  );
};

export default AppLayout;
