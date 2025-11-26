import { useEffect, useRef } from "react";
import AppLayout from "@/components/Layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Home = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken =
      "pk.eyJ1IjoiZ3VzdGFza2siLCJhIjoiY21pNXo5OGFpMTdxbjJqcXZjdHpsOWQyZyJ9.VoxXZ9zeT2q8MMpXmTGY_w";

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [25.2797, 54.6872], // Vilnius coordinates
      zoom: 13,
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <AppLayout>
      <div className="relative h-screen">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-md mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-foreground">ParkWell</h1>
          </div>
        </div>

        {/* Map Container */}
        <div ref={mapContainer} className="absolute inset-0" />

        {/* Street Status Legend */}
        <Card className="absolute top-20 left-4 right-4 mx-auto max-w-sm p-4 bg-card/95 backdrop-blur-sm">
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">
              Street Availability
            </p>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-4 h-4 rounded-full bg-status-free" />
                <span className="text-sm text-muted-foreground">Free</span>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-4 h-4 rounded-full bg-status-limited" />
                <span className="text-sm text-muted-foreground">Limited</span>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="w-4 h-4 rounded-full bg-status-full" />
                <span className="text-sm text-muted-foreground">Full</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Free tier shows general street availability
            </p>
          </div>
        </Card>

        {/* Update Button */}
        <div className="absolute bottom-20 left-0 right-0 px-4">
          <Button
            className="w-full max-w-sm mx-auto block h-14 text-base font-semibold bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg"
            size="lg"
          >
            Update Parking Status
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
