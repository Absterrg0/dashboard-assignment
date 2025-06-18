import { Card, CardHeader } from "../ui/card";
import { FaWalking } from "react-icons/fa";
import { Select } from "../ui/select";
import { SelectTrigger } from "../ui/select";
import { SelectValue } from "../ui/select";
import { SelectContent } from "../ui/select";
import { SelectItem } from "../ui/select";
import { Progress } from "../ui/progress";


export default function StepProgress() {
  return (
    <Card className="h-fit">
    <CardHeader>
        <div className="flex items-center w-full justify-between gap-6">
            <div className="flex items-center gap-6">
            <span className="inline-flex items-center justify-center bg-blue-100 text-blue-600 rounded-full p-2 shadow-sm">
              <FaWalking className="w-5 h-5" />
            </span>
                <div>
                    <p className="text-sm text-xl font-semibold">Step Count</p>
                </div>
            </div>
            <div>
                <Select defaultValue={"last-24-hours"}>
                    <SelectTrigger>
                        <SelectValue/>
                        <SelectContent defaultValue={"last-24-hours"}>
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
      
            <span className="text-base font-semibold tracking-tight">Daily Progress</span>
          </div>
          <span className="text-lg font-bold text-blue-600 px-3 py-1 rounded-md shadow-sm">
            8,500<span className="text-gray-400 font-medium">/10,000</span> <span className="text-xs font-normal text-gray-400 ml-1">steps</span>
          </span>
        </div>
        <div className="mt-2 relative">
          <Progress value={85} className="h-3 rounded-full bg-gray-900" />
          <div className="absolute inset-0 top-3 flex justify-between items-center pointer-events-none">
            <div className="left-0 absolute h-4 w-[2px] bg-gradient-to-b from-transparent to-blue-400" />
            <div className="left-1/2 -translate-x-1/2 absolute h-4 w-[2px] bg-gradient-to-b from-transparent to-blue-400" />
            <div className="right-0 absolute h-4 w-[2px] bg-gradient-to-b from-transparent to-blue-400" />
          </div>
        </div>
        <div className="flex items-center mt-1 justify-between text-xs text-gray-400 font-medium">
          <span>0</span>
          <span>5k</span>
          <span>10k</span>
        </div>
        <div className="flex justify-end">
          <span className="text-sm text-gray-500/80  px-2 py-0.5 rounded">Avg. Distance: <span className="font-semibold text-blue-600">5.6km</span></span>
        </div>
      </div>
    </div>
</Card>     
  )
}   