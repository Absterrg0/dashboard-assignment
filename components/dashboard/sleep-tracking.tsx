import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Select } from "../ui/select";
import { SelectTrigger } from "../ui/select";
import { SelectValue } from "../ui/select";
import { SelectContent } from "../ui/select";
import { SelectItem } from "../ui/select";
import { Moon } from "lucide-react";
import { Bed } from "lucide-react";



export default function SleepTracking() {
  return (
    <Card className="h-fit">
    <CardHeader className="pb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <Moon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Sleep Health</h3>
          </div>
        </div>
        <Select defaultValue="last-24-hours">
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
            <p className="text-2xl font-bold text-primary">6/10</p>
            <p className="text-sm text-muted-foreground">Sleep Quality</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 mt-1">
            <Bed className="h-4 w-4 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-primary">6.5h</p>
            <p className="text-sm text-muted-foreground">Avg Sleep Hours</p>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex justify-end items-center">
      <span className="text-xs text-muted-foreground">Avg Sleep: <span className="font-semibold text-primary">6.5h</span></span>
    </CardFooter>
  </Card>       
  )
}