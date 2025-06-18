"use client"

import { useState, useMemo } from "react";
import { Card, CardHeader } from "../ui/card";
import { FaWalking } from "react-icons/fa";
import { Select } from "../ui/select";
import { SelectTrigger } from "../ui/select";
import { SelectValue } from "../ui/select";
import { SelectContent } from "../ui/select";
import { SelectItem } from "../ui/select";
import { Progress } from "../ui/progress";
import stepsData from "@/lib/data.steps.json";

export default function StepProgress() {
  const [selectedPeriod, setSelectedPeriod] = useState("last-24-hours");

  const stepMetrics = useMemo(() => {
    let data: Array<{ date: string; steps: number }> = [];
    
    switch (selectedPeriod) {
      case "last-24-hours":
        data = stepsData.steps.last24hrs;
        break;
      case "last-7-days":
        data = stepsData.steps.last7days;
        break;
      case "last-30-days":
        data = stepsData.steps.last1month;
        break;
      default:
        data = stepsData.steps.last24hrs;
    }

    // Calculate metrics
    const totalSteps = data.reduce((sum, entry) => sum + entry.steps, 0);
    const avgSteps = Math.round(totalSteps / data.length);
    const latestSteps = data[data.length - 1]?.steps || 0;
    
    // Calculate current day progress (using latest entry for daily goal)
    const dailyGoal = 10000;
    const currentSteps = selectedPeriod === "last-24-hours" ? latestSteps : avgSteps;
    const progressPercentage = Math.min((currentSteps / dailyGoal) * 100, 100);
    
    // Calculate average distance (assuming 0.65m per step)
    const avgDistance = ((avgSteps * 0.65) / 1000).toFixed(1); // Convert to km
    
    return {
      currentSteps,
      dailyGoal,
      progressPercentage,
      avgDistance,
      totalSteps,
      avgSteps,
      dataLength: data.length
    };
  }, [selectedPeriod]);

  const getDisplayText = () => {
    switch (selectedPeriod) {
      case "last-24-hours":
        return {
          progressLabel: "Today's Progress",
          stepsLabel: "steps today"
        };
      case "last-7-days":
        return {
          progressLabel: "Weekly Average",
          stepsLabel: "avg steps/day"
        };
      case "last-30-days":
        return {
          progressLabel: "Monthly Average", 
          stepsLabel: "avg steps/day"
        };
      default:
        return {
          progressLabel: "Daily Progress",
          stepsLabel: "steps"
        };
    }
  };

  const displayText = getDisplayText();

  return (
    <Card className="h-fit">
      <CardHeader>
        <div className="flex items-center w-full justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full p-2 shadow-sm">
              <FaWalking className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm text-xl font-semibold">Step Count</p>
            </div>
          </div>
          <div>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger>
                <SelectValue/>
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
      <div className="px-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-base font-semibold tracking-tight">{displayText.progressLabel}</span>
            </div>
            <span className="text-lg font-bold text-primary px-3 py-1 rounded-md shadow-sm">
              {stepMetrics.currentSteps.toLocaleString()}
              {selectedPeriod === "last-24-hours" && (
                <span className="text-muted-foreground font-medium">/{stepMetrics.dailyGoal.toLocaleString()}</span>
              )}
              <span className="text-xs font-normal text-muted-foreground ml-1">{displayText.stepsLabel}</span>
            </span>
          </div>
          <div className="mt-2 relative">
            <Progress value={stepMetrics.progressPercentage} className="h-3 rounded-full bg-muted" />
            <div className="absolute inset-0 top-3 flex justify-between items-center pointer-events-none">
              <div className="left-0 absolute h-4 w-[2px] bg-gradient-to-b from-transparent to-primary" />
              <div className="left-1/2 -translate-x-1/2 absolute h-4 w-[2px] bg-gradient-to-b from-transparent to-primary" />
              <div className="right-0 absolute h-4 w-[2px] bg-gradient-to-b from-transparent to-primary" />
            </div>
          </div>
          <div className="flex items-center mt-1 justify-between text-xs text-muted-foreground font-medium">
            <span>0</span>
            <span>5k</span>
            <span>{selectedPeriod === "last-24-hours" ? "10k" : `${Math.round(stepMetrics.dailyGoal/1000)}k`}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
          {selectedPeriod !== "last-24-hours" && (
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Total: {stepMetrics.totalSteps.toLocaleString()} steps</span>
            </div>
          )}
            <span className="text-sm text-muted-foreground px-2 py-0.5 rounded">
              Avg. Distance: <span className="font-semibold text-primary">{stepMetrics.avgDistance}km</span>
            </span>
      
          </div>
  
        </div>
      </div>
    </Card>     
  )
}