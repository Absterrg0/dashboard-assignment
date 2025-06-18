"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Select } from "../ui/select";
import { SelectTrigger } from "../ui/select";
import { SelectValue } from "../ui/select";
import { SelectContent } from "../ui/select";
import { SelectItem } from "../ui/select";
import { Moon } from "lucide-react";
import { Bed } from "lucide-react";
import sleepData from "../../lib/data.sleep.json";

type TimePeriod = "last-24-hours" | "last-7-days" | "last-30-days";

interface SleepEntry {
  date: string;
  hours: number;
  quality: number;
}

export default function SleepTracking() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("last-24-hours");

  // Get data based on selected period
  const getData = (): SleepEntry[] => {
    switch (selectedPeriod) {
      case "last-24-hours":
        return sleepData.sleep.last24hrs;
      case "last-7-days":
        return sleepData.sleep.last7days;
      case "last-30-days":
        return sleepData.sleep.last1month;
      default:
        return sleepData.sleep.last24hrs;
    }
  };

  // Calculate average sleep hours
  const calculateAverageHours = (): string => {
    const data = getData();
    if (data.length === 0) return "0.0";
    
    const totalHours = data.reduce((sum, entry) => sum + entry.hours, 0);
    const average = totalHours / data.length;
    return average.toFixed(1);
  };

  // Calculate average sleep quality
  const calculateAverageQuality = (): string => {
    const data = getData();
    if (data.length === 0) return "0";
    
    const totalQuality = data.reduce((sum, entry) => sum + entry.quality, 0);
    const average = totalQuality / data.length;
    return `${average.toFixed(1)}/10`;
  };

  // Calculate max sleep hours
  const calculateMaxHours = (): string => {
    const data = getData();
    if (data.length === 0) return "0.0";
    
    const max = Math.max(...data.map(entry => entry.hours));
    return max.toFixed(1);
  };


  const averageHours = calculateAverageHours();
  const averageQuality = calculateAverageQuality();
  const maxHours = calculateMaxHours();
  return (
    <Card className="h-fit">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Moon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Sleep Tracking</h3>
            </div>
          </div>
          <Select 
            value={selectedPeriod} 
            onValueChange={(value: TimePeriod) => setSelectedPeriod(value)}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-24-hours">Last 24 hours</SelectItem>
              <SelectItem value="last-7-days">Last 7 days</SelectItem>
              <SelectItem value="last-30-days">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="pt-5">
        <div className="grid grid-cols-2 items-center justify-center text-center gap-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mt-1">
              <Moon className="h-4 w-4 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">{averageQuality}</p>
              <p className="text-sm text-muted-foreground">Sleep Quality</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mt-1">
              <Bed className="h-4 w-4 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-primary">{averageHours}h</p>
              <p className="text-sm text-muted-foreground">Avg Sleep Hours</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end items-center">
        <span className="text-xs text-muted-foreground">
          Most Sleep: <span className="font-semibold text-primary">{maxHours}h</span>
        </span>
      </CardFooter>
    </Card>       
  )
}