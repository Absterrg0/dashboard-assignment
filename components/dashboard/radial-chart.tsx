"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A mixed bar chart"

interface MacroData {
  nutrient: string;
  grams: number;
  fill: string;
}

interface ChartBarMixedProps {
  data?: MacroData[];
  config?: ChartConfig;
}

const defaultChartData = [
  { nutrient: "chrome", grams: 275, fill: "var(--color-chrome)" },
  { nutrient: "safari", grams: 200, fill: "var(--color-safari)" },
  { nutrient: "firefox", grams: 187, fill: "var(--color-firefox)" },
  { nutrient: "edge", grams: 173, fill: "var(--color-edge)" },
  { nutrient: "other", grams: 90, fill: "var(--color-other)" },
]

const defaultChartConfig = {
  grams: {
    label: "Grams",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartBarMixed({ data = defaultChartData, config = defaultChartConfig }: ChartBarMixedProps) {
  return (
    <ChartContainer config={config}>
    <BarChart
      accessibilityLayer
      data={data}
      layout="vertical"
      margin={{
        left: 0,
      }}
    >
      <YAxis
        dataKey="nutrient"
        type="category"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(value) =>
          config[value as keyof typeof config]?.label || value
        }
      />
      <XAxis dataKey="grams" type="number" hide />
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent hideLabel />}
      />
      <Bar dataKey="grams" layout="vertical" radius={5} />
    </BarChart>
  </ChartContainer>
  )
}
