import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkinCareChart } from "@/components/skincare/SkinCareChart";
import { RecommendedProducts } from "@/components/skincare/RecommendedProducts";
import { DailyRoutine } from "@/components/skincare/DailyRoutine";
import { toast } from "sonner";

export const SkinCarePlan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers;

  const { data: skinCarePlan, isLoading } = useQuery({
    queryKey: ["skinCarePlan", answers],
    queryFn: async () => {
      if (!answers) throw new Error("No quiz answers found");
      
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("OPENAI_API_KEY")}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content: "You are a skincare expert AI that creates personalized skincare plans. Respond with a JSON object containing: routineSteps (morning and evening arrays of steps), productRecommendations (array of product types and their importance scores), skinConcerns (array of concerns and their severity scores 1-10), and additionalAdvice (string)."
            },
            {
              role: "user",
              content: `Create a personalized skincare plan based on these quiz answers: ${JSON.stringify(answers)}`
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error("Failed to generate skin care plan");
      }

      const data = await response.json();
      return JSON.parse(data.choices[0].message.content);
    },
    enabled: !!answers && !!localStorage.getItem("OPENAI_API_KEY"),
    retry: false,
    onError: (error) => {
      toast.error("Failed to generate your skin care plan. Please try again.");
      console.error("Error generating skin care plan:", error);
    }
  });

  if (!answers) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">No Quiz Data Found</h1>
        <Button onClick={() => navigate("/quiz")}>Take the Quiz</Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <p className="ml-2">Generating your personalized skin care plan...</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-screen">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Personalized Skin Care Plan</h1>
        
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Skin Concerns Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <SkinCareChart data={skinCarePlan?.skinConcerns || []} />
            </CardContent>
          </Card>

          <DailyRoutine routine={skinCarePlan?.routineSteps} />
          
          <RecommendedProducts products={skinCarePlan?.productRecommendations} />

          <Card>
            <CardHeader>
              <CardTitle>Additional Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{skinCarePlan?.additionalAdvice}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
};