import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ChartAreaInteractive } from "./chart";



export default function CalorieTracker() {
  return (
    
    <Card className="h-fit">
    <CardContent>
      <ChartAreaInteractive />
    </CardContent>
    <CardFooter>
      <div className="flex w-full items-start gap-2 text-sm">
        <div className="flex flex-col justify-end items-end w-full gap-2">
          <div className="flex items-center gap-2 leading-none font-medium">
            Net deficit of 350 calories today <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground flex  gap-2 leading-none">
            Weekly average: 2,100 calories
          </div>
        </div>
      </div>
    </CardFooter>
  </Card>       
  )
}