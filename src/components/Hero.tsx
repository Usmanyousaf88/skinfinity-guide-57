import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-skin-cream min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-skin-charcoal mb-6">
            Effortless Skincare,{" "}
            <span className="text-primary">Tailored for You</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Experience personalized skincare powered by AI. Get a custom routine
            based on your unique skin profile and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-6 rounded-full flex items-center gap-2"
            >
              Start Your Skin Analysis
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 rounded-full flex items-center gap-2"
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