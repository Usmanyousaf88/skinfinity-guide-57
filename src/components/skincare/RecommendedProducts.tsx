import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Product {
  type: string;
  importance: number;
}

export const RecommendedProducts = ({ products }: { products?: Product[] }) => {
  if (!products?.length) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{product.type}</span>
                <span className="text-gray-500">{product.importance}/10</span>
              </div>
              <Progress value={product.importance * 10} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};