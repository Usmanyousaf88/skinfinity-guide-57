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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-skin-charcoal mb-16">
          Your Path to Healthier Skin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-skin-cream hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-skin-charcoal mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};