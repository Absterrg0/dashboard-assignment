"use client"

import { useState } from "react";
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
import macrosData from "../../lib/data.macros.json";

type TimePeriod = "last-24-hours" | "last-7-days" | "last-30-days";

interface MacroEntry {
  date: string;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
  fiber: number;
}

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
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("last-7-days");

  // Get data based on selected period
  const getData = (): MacroEntry[] => {
    switch (selectedPeriod) {
      case "last-24-hours":
        return macrosData.macros.last24hrs;
      case "last-7-days":
        return macrosData.macros.last7days;
      case "last-30-days":
        return macrosData.macros.last1month;
      default:
        return macrosData.macros.last7days;
    }
  };

  // Calculate average for each macro
  const calculateAverages = () => {
    const data = getData();
    if (data.length === 0) {
      return {
        carbs: 0,
        protein: 0,
        fat: 0,
        sugar: 0,
        fiber: 0,
      };
    }

    const totals = data.reduce(
      (acc, entry) => ({
        carbs: acc.carbs + entry.carbs,
        protein: acc.protein + entry.protein,
        fat: acc.fat + entry.fat,
        sugar: acc.sugar + entry.sugar,
        fiber: acc.fiber + entry.fiber,
      }),
      { carbs: 0, protein: 0, fat: 0, sugar: 0, fiber: 0 }
    );

    return {
      carbs: Math.round(totals.carbs / data.length),
      protein: Math.round(totals.protein / data.length),
      fat: Math.round(totals.fat / data.length),
      sugar: Math.round(totals.sugar / data.length),
      fiber: Math.round(totals.fiber / data.length),
    };
  };

  // Calculate total macros for display
  const calculateTotalMacros = () => {
    const averages = calculateAverages();
    return averages.carbs + averages.protein + averages.fat + averages.sugar + averages.fiber;
  };

  // Get period display text for calculations
  const getPeriodText = () => {
    switch (selectedPeriod) {
      case "last-24-hours":
        return "daily";
      case "last-7-days":
        return "weekly";
      case "last-30-days":
        return "monthly";
      default:
        return "weekly";
    }
  };

  const averages = calculateAverages();
  const totalMacros = calculateTotalMacros();

  // Create chart data from calculated averages
  const chartData = [
    { nutrient: "carbs", grams: averages.carbs, fill: "var(--chart-1)" },
    { nutrient: "protein", grams: averages.protein, fill: "var(--chart-2)" },
    { nutrient: "fats", grams: averages.fat, fill: "var(--chart-3)" },
    { nutrient: "sugar", grams: averages.sugar, fill: "var(--chart-4)" },
    { nutrient: "fiber", grams: averages.fiber, fill: "var(--chart-5)" },
  ];

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
            <Select 
              value={selectedPeriod} 
              onValueChange={(value: TimePeriod) => setSelectedPeriod(value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-24-hours">Last 24 hours</SelectItem>
                <SelectItem value="last-7-days">Last 7 days</SelectItem>
                <SelectItem value="last-30-days">Last 30 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartBarMixed data={chartData} config={chartConfig} />
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Average {getPeriodText()} intake: {totalMacros}g total macros <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              Breakdown: {averages.carbs}g carbs, {averages.protein}g protein, {averages.fat}g fat
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}