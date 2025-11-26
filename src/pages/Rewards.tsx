import AppLayout from "@/components/Layout/AppLayout";
import { Card } from "@/components/ui/card";
import { Award, Coffee, Fuel } from "lucide-react";

const Rewards = () => {
  const partners = [
    { name: "Caffeine", icon: Coffee, color: "text-orange-600" },
    { name: "Circle K", icon: Fuel, color: "text-red-600" },
  ];

  return (
    <AppLayout>
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Rewards</h1>
            <p className="text-muted-foreground">
              Earn points by updating parking status
            </p>
          </div>

          {/* Points Display */}
          <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-4xl font-bold text-foreground mb-2">
              0
            </div>
            <div className="text-muted-foreground">Points Available</div>
          </Card>

          {/* How to Earn */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-foreground">
              How to Earn Points
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-primary mt-0.5">+10</span>
                <span>Update parking status on a street</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-primary mt-0.5">+25</span>
                <span>Report exact parking spot (Premium)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-primary mt-0.5">+50</span>
                <span>Daily update streak bonus</span>
              </li>
            </ul>
          </Card>

          {/* Partner Rewards */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Redeem with Partners
            </h2>
            <div className="grid gap-4">
              {partners.map((partner) => (
                <Card
                  key={partner.name}
                  className="p-6 flex items-center gap-4 hover:border-primary/30 transition-colors cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-secondary flex items-center justify-center ${partner.color}`}
                  >
                    <partner.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Rewards available
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Rewards;
