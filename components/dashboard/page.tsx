"use client"
import Header from "./header"
import StepProgress from "./step-progress"
import SleepTracking from "./sleep-tracking"
import CalorieTracker from "./calorie-tracker"
import MacrosChart from "./macros-chart"
import TodoListComponent from "./todo-list-component"
import TableStackDetails from "./table-stack-details"
import { motion } from "motion/react"

export default function Dashboard() {

  return (
    <motion.div 
    initial={{ opacity: 0, filter: "blur(10px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="flex flex-col gap-4 p-4"
    >
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
    </motion.div>
  )
}
