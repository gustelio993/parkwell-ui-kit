import AppLayout from "@/components/Layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Crown } from "lucide-react";

const Premium = () => {
  const features = {
    free: [
      { text: "General street availability", included: true },
      { text: "Basic map view", included: true },
      { text: "Exact parking spot locations", included: false },
      { text: "Real-time updates", included: false },
      { text: "Premium rewards", included: false },
    ],
    premium: [
      { text: "General street availability", included: true },
      { text: "Basic map view", included: true },
      { text: "Exact parking spot locations", included: true },
      { text: "Real-time updates", included: true },
      { text: "Premium rewards", included: true },
    ],
  };

  return (
    <AppLayout>
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
              <Crown className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              ParkWell Premium
            </h1>
            <p className="text-muted-foreground">
              Upgrade for exact parking locations and exclusive benefits
            </p>
          </div>

          {/* Price Card */}
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-foreground">$2.99</div>
              <div className="text-muted-foreground">per month</div>
            </div>
          </Card>

          {/* Comparison */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4">
              <h3 className="font-semibold text-center mb-4 text-foreground">
                Free
              </h3>
              <ul className="space-y-3">
                {features.free.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-status-free flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-4 border-primary/30 bg-primary/5">
              <h3 className="font-semibold text-center mb-4 text-foreground flex items-center justify-center gap-1">
                Premium
                <Crown className="w-4 h-4 text-primary" />
              </h3>
              <ul className="space-y-3">
                {features.premium.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Button
            className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary-dark text-primary-foreground"
            size="lg"
          >
            Upgrade to Premium
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Premium;
