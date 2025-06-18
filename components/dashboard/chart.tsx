"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Import calories data
import caloriesData from "@/lib/data.calories.json"

export const description = "An interactive calories tracking chart"

const chartConfig = {
  calories: {
    label: "Calories",
  },
  caloriesBurnt: {
    label: "Calories Burnt",
    color: "var(--chart-1)",
  },
  caloriesEaten: {
    label: "Calories Eaten",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const getFilteredData = () => {
    let data;
    
    if (timeRange === "7d") {
      data = caloriesData.calories.last7days
    } else if (timeRange === "30d") {
      // Get last 30 entries from the last1month data
      data = caloriesData.calories.last1month.slice(0, 30)
    } else {
      // 90d - use all data from last1month
      data = caloriesData.calories.last1month
    }
    
    // Sort by date to ensure proper chronological order
    return data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }

  const filteredData = getFilteredData()

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Calories Tracking - Interactive</CardTitle>
          <CardDescription>
            Showing calories burnt vs eaten over time
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillCaloriesBurnt" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-caloriesBurnt)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-caloriesBurnt)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillCaloriesEaten" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-caloriesEaten)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-caloriesEaten)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="caloriesEaten"
              type="natural"
              fill="url(#fillCaloriesEaten)"
              stroke="var(--color-caloriesEaten)"
              stackId="a"
            />
            <Area
              dataKey="caloriesBurnt"
              type="natural"
              fill="url(#fillCaloriesBurnt)"
              stroke="var(--color-caloriesBurnt)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
