import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface RoutineSteps {
  morning: string[];
  evening: string[];
}

export const DailyRoutine = ({ routine }: { routine?: RoutineSteps }) => {
  if (!routine) return null;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Morning Routine</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {routine.morning.map((step, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Evening Routine</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {routine.evening.map((step, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};