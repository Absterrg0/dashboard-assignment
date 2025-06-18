"use client"

import { TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { ChartBarMixed } from "./radial-chart";

const chartData = [
  { nutrient: "carbs", grams: 85, fill: "var(--color-carbs)" },
  { nutrient: "protein", grams: 65, fill: "var(--color-protein)" },
  { nutrient: "fats", grams: 45, fill: "var(--color-fats)" },
  { nutrient: "sugar", grams: 25, fill: "var(--color-sugar)" },
  { nutrient: "fiber", grams: 18, fill: "var(--color-fiber)" },
];

const chartConfig = {
  grams: {
    label: "Grams",
  },
  carbs: {
    label: "Carbs",
    color: "var(--chart-1)",
  },
  protein: {
    label: "Protein",
    color: "var(--chart-2)",
  },
  fats: {
    label: "Fats",
    color: "var(--chart-3)",
  },
  sugar: {
    label: "Sugar",
    color: "var(--chart-4)",
  },
  fiber: {
    label: "Fiber",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export default function MacrosChart() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Macro Nutrients</CardTitle>
            <CardDescription>
              Track your daily macronutrient intake
            </CardDescription>
          </div>
          <div>
            <Select defaultValue={"last-7-days"}>
              <SelectTrigger>
                <SelectValue />
                <SelectContent>
                  <SelectItem value="last-24-hours">Last 24 hours</SelectItem>
                  <SelectItem value="last-7-days">Last 7 days</SelectItem>
                  <SelectItem value="last-30-days">Last 30 days</SelectItem>
                </SelectContent>
              </SelectTrigger>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartBarMixed />
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Daily intake: 238g total macros <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Weekly average: 225g macronutrients
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}