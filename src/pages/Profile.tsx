import AppLayout from "@/components/Layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  CreditCard,
  Gift,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";

const Profile = () => {
  const menuItems = [
    { icon: User, label: "Edit Profile", to: "#" },
    { icon: CreditCard, label: "Manage Subscription", to: "#" },
    { icon: Gift, label: "Reward History", to: "#" },
    { icon: HelpCircle, label: "Help & Support", to: "#" },
  ];

  return (
    <AppLayout>
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-md mx-auto space-y-6">
          {/* Profile Header */}
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  U
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground">
                  User Name
                </h2>
                <p className="text-sm text-muted-foreground">user@email.com</p>
                <div className="mt-2 inline-flex items-center gap-1 text-xs bg-secondary px-2 py-1 rounded-full">
                  <span className="text-muted-foreground">Free Plan</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">0</div>
              <div className="text-sm text-muted-foreground">Updates</div>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">0</div>
              <div className="text-sm text-muted-foreground">Points</div>
            </Card>
          </div>

          {/* Menu Items */}
          <Card className="divide-y divide-border">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors"
              >
                <item.icon className="w-5 h-5 text-muted-foreground" />
                <span className="flex-1 text-left text-foreground">
                  {item.label}
                </span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </Card>

          {/* Logout */}
          <button className="w-full flex items-center justify-center gap-2 p-4 text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
