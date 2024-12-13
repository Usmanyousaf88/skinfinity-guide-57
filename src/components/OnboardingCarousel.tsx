import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const cards = [
  {
    image: "/lovable-uploads/d838174b-9d6e-4585-b4dd-e159de441762.png",
    heading: "Effortless Skincare Starts Here",
    subheading: "Snap a photo of your face, and let us take care of the rest.",
  },
  {
    image: "/lovable-uploads/b4b7315f-1bef-42f9-84cd-d5c811c3060f.png",
    heading: "Advanced Skin Analysis",
    subheading: "Identify your skin concerns and discover personalized solutions designed just for you.",
  },
  {
    image: "/lovable-uploads/f78bdcb9-020b-4bc6-abb6-195f9a4cef5f.png",
    heading: "Achieve Your Skin Goals",
    subheading: "Whether it's glowing skin or reducing wrinkles, we'll create a routine tailored to you.",
  },
];

export const OnboardingCarousel = () => {
  const navigate = useNavigate();
  const carouselApi = useRef<any>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Carousel 
        className="flex-1 w-full"
        setApi={(api) => {
          carouselApi.current = api;
        }}
      >
        <CarouselContent>
          {cards.map((card, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col h-screen">
                <div className="relative flex-1">
                  <img
                    src={card.image}
                    alt={card.heading}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
                </div>
                <div className="bg-white rounded-t-[32px] -mt-8 px-6 pt-8 pb-10 relative z-10 min-h-[240px] flex flex-col justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-skin-charcoal mb-3">
                      {card.heading}
                    </h1>
                    <p className="text-lg text-gray-600">
                      {card.subheading}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex gap-2">
                      {cards.map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            i === index ? "w-8 bg-primary" : "w-2 bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    {index === cards.length - 1 ? (
                      <Button
                        size="lg"
                        onClick={() => navigate("/quiz")}
                        className="w-32 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full"
                      >
                        Get Started
                      </Button>
                    ) : (
                      <Button
                        size="lg"
                        onClick={() => {
                          if (carouselApi.current) {
                            carouselApi.current.scrollNext();
                          }
                        }}
                        className="w-32 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full"
                      >
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};