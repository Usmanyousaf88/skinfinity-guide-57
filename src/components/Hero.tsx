import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-skin-cream min-h-[100vh] flex items-center px-4">
      <div className="container mx-auto max-w-lg">
        <div className="text-center animate-fadeIn space-y-6">
          <h1 className="text-4xl font-bold text-skin-charcoal leading-tight">
            Effortless Skincare,{" "}
            <span className="text-primary">Tailored for You</span>
          </h1>
          <p className="text-lg text-gray-600">
            Experience personalized skincare powered by AI. Get a custom routine
            based on your unique skin profile and goals.
          </p>
          <div className="flex flex-col gap-3">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-6 rounded-full flex items-center justify-center gap-2"
            >
              Start Your Skin Analysis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-2 border-primary text-primary hover:bg-primary/10 font-semibold py-6 rounded-full flex items-center justify-center gap-2"
            >
              Learn More
              <Sparkles className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};