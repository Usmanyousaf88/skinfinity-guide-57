import { Camera, Sparkles, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Skin Analysis",
    description:
      "Upload a selfie and get instant insights about your skin's health and needs.",
  },
  {
    icon: Shield,
    title: "Custom Routines",
    description:
      "Receive personalized skincare routines tailored to your unique skin profile.",
  },
  {
    icon: Sparkles,
    title: "Progress Tracking",
    description:
      "Track your skin's improvement over time with our advanced AI technology.",
  },
  {
    icon: Heart,
    title: "Product Recommendations",
    description:
      "Get personalized product suggestions that match your skin type and concerns.",
  },
];

export const Features = () => {
  return (
    <section className="py-12 bg-white px-4">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-2xl font-bold text-center text-skin-charcoal mb-8">
          Your Path to Healthier Skin
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-skin-cream hover:shadow-lg transition-shadow duration-300 flex items-start gap-4"
            >
              <feature.icon className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-skin-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};