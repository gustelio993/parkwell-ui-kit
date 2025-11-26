import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Car } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
              <Car className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground">ParkWell</h1>
        </div>

        <div className="space-y-4 py-8">
          <p className="text-lg text-foreground font-medium">
            Find parking fast. Help others. Earn rewards.
          </p>
          <p className="text-muted-foreground">
            Your smart parking companion in Vilnius
          </p>
        </div>

        <Button
          onClick={() => navigate("/home")}
          className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary-dark text-primary-foreground"
          size="lg"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
