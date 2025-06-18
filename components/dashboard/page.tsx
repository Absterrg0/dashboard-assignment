import { Button } from "../ui/button";
import SearchBar from "./search-bar";
import { Bed, Moon, Plus } from "lucide-react";
import { ModeToggle } from "./theme-toggle-button";
import Header from "./header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { GiNightSleep } from "react-icons/gi";
import { FaBed, FaWalking } from "react-icons/fa";
import { Progress } from "../ui/progress";
import { TrendingUp } from "lucide-react";
import { ChartAreaInteractive } from "./chart";
import StepProgress from "./step-progress";
import SleepTracking from "./sleep-tracking";
import CalorieTracker from "./calorie-tracker";
import MacrosChart from "./macros-chart";
import TodoListComponent from "./todo-list-component";
import TableStackDetails from "./table-stack-details";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Header />
      <div>
        <div className="grid grid-cols-10 gap-4 grid-rows-[auto_auto]">
          <div className="col-span-10 md:col-span-5 lg:col-span-3 row-span-1">
            <StepProgress />
          </div>
          <div className="col-span-10 md:col-span-5 lg:col-span-3 row-span-1">
            <SleepTracking />
          </div>
          <div className="col-span-10 md:col-span-5 lg:col-span-4 row-span-2">
            <MacrosChart />
          </div>
          <div className="col-span-10 md:col-span-5 lg:col-span-6 row-span-2">
            <CalorieTracker />
          </div>
          <div className="col-span-10 md:col-span-5 lg:col-span-4 row-span-1">
            <TodoListComponent />
          </div>
          <div className="col-span-10 md:col-span-5 lg:col-span-10 row-span-1">
            <TableStackDetails />
          </div>
        </div>
      </div>
    </div>
  );
}