"use client"

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, Settings2, GripVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface Exercise {
  id: number;
  name: string;
  recommendedTime: string;
  calorieBurnt: number;
  targetMuscle: string;
}

interface ColumnVisibility {
  name: boolean;
  recommendedTime: boolean;
  calorieBurnt: boolean;
  targetMuscle: boolean;
}

const initialExerciseData: Exercise[] = [
  { id: 1, name: "Push-ups", recommendedTime: "3 sets x 15 reps", calorieBurnt: 85, targetMuscle: "Chest, Triceps, Shoulders" },
  { id: 2, name: "Squats", recommendedTime: "3 sets x 20 reps", calorieBurnt: 95, targetMuscle: "Quadriceps, Glutes, Hamstrings" },
  { id: 3, name: "Plank", recommendedTime: "3 sets x 60 seconds", calorieBurnt: 45, targetMuscle: "Core, Abs, Back" },
  { id: 4, name: "Burpees", recommendedTime: "3 sets x 10 reps", calorieBurnt: 150, targetMuscle: "Full Body" },
  { id: 5, name: "Lunges", recommendedTime: "3 sets x 12 each leg", calorieBurnt: 75, targetMuscle: "Quadriceps, Glutes, Calves" },
  { id: 6, name: "Jumping Jacks", recommendedTime: "3 sets x 30 seconds", calorieBurnt: 65, targetMuscle: "Cardio, Legs, Arms" },
  { id: 7, name: "Mountain Climbers", recommendedTime: "3 sets x 20 reps", calorieBurnt: 80, targetMuscle: "Core, Cardio, Arms" },
  { id: 8, name: "Pull-ups", recommendedTime: "3 sets x 8 reps", calorieBurnt: 90, targetMuscle: "Back, Biceps, Lats" },
  { id: 9, name: "Deadlifts", recommendedTime: "3 sets x 10 reps", calorieBurnt: 110, targetMuscle: "Hamstrings, Glutes, Back" },
  { id: 10, name: "Bicycle Crunches", recommendedTime: "3 sets x 25 each side", calorieBurnt: 55, targetMuscle: "Abs, Obliques" },
];

const columnLabels = {
  name: "Name",
  recommendedTime: "Recommended Time",
  calorieBurnt: "Calories Burnt",
  targetMuscle: "Target Muscle",
};

export default function TableStackDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [exerciseData, setExerciseData] = useState<Exercise[]>(initialExerciseData);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [columnVisibility, setColumnVisibility] = useState<ColumnVisibility>({
    name: true,
    recommendedTime: true,
    calorieBurnt: true,
    targetMuscle: true,
  });

  const filteredExercises = useMemo(() => {
    return exerciseData.filter(exercise =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.targetMuscle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [exerciseData, searchTerm]);

  const toggleColumnVisibility = (column: keyof ColumnVisibility) => {
    setColumnVisibility(prev => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const visibleColumnsCount = Object.values(columnVisibility).filter(Boolean).length;

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragEnter = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex !== null && index !== draggedIndex) {
      setDragOverIndex(index);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    // Only clear dragOverIndex if we're leaving the table row entirely
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setDragOverIndex(null);
    }
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newExerciseData = [...exerciseData];
    const draggedItem = newExerciseData[draggedIndex];
    
    // Remove the dragged item
    newExerciseData.splice(draggedIndex, 1);
    
    // Insert at new position
    newExerciseData.splice(dropIndex, 0, draggedItem);
    
    // Reassign IDs sequentially based on new order
    const reorderedData = newExerciseData.map((exercise, index) => ({
      ...exercise,
      id: index + 1
    }));
    
    setExerciseData(reorderedData);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const getRowStyles = (originalIndex: number) => {
    let classes = "border-b border-border/50 transition-all duration-200 cursor-move";
    
    if (draggedIndex === originalIndex) {
      classes += " opacity-50 scale-95";
    } else if (draggedIndex !== null) {
      if (dragOverIndex === originalIndex) {
        classes += " bg-primary/10 border-primary/30 transform translate-y-1 shadow-md";
      } else {
        classes += " hover:bg-muted/30";
      }
    } else {
      classes += " hover:bg-muted/30";
    }
    
    return classes;
  };

  return (
    <Card className="h-fit">
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Exercise Details</CardTitle>

          </div>
          <div className="relative flex items-center gap-2">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search exercises or muscle groups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                  <Settings2 className="h-4 w-4 mr-2" />
                  Customise
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {Object.entries(columnLabels).map(([key, label]) => (
                  <DropdownMenuCheckboxItem
                    key={key}
                    checked={columnVisibility[key as keyof ColumnVisibility]}
                    onCheckedChange={() => toggleColumnVisibility(key as keyof ColumnVisibility)}
                    disabled={columnVisibility[key as keyof ColumnVisibility] && visibleColumnsCount === 1}
                  >
                    {label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="w-8 py-3 px-2"></th>
                {columnVisibility.name && (
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Name</th>
                )}
                {columnVisibility.recommendedTime && (
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Recommended Time</th>
                )}
                {columnVisibility.calorieBurnt && (
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Calories Burnt</th>
                )}
                {columnVisibility.targetMuscle && (
                  <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Target Muscle</th>
                )}
              </tr>
            </thead>
            <tbody>
              {filteredExercises.map((exercise, index) => {
                const originalIndex = exerciseData.indexOf(exercise);
                return (
                  <tr 
                    key={exercise.id} 
                    className={getRowStyles(originalIndex)}
                    draggable
                    onDragStart={(e) => handleDragStart(e, originalIndex)}
                    onDragOver={handleDragOver}
                    onDragEnter={(e) => handleDragEnter(e, originalIndex)}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, originalIndex)}
                    onDragEnd={handleDragEnd}
                  >
                    <td className="py-3 px-2 text-center">
                      <GripVertical className="h-4 w-4 text-muted-foreground mx-auto cursor-grab active:cursor-grabbing" />
                    </td>
                    {columnVisibility.name && (
                      <td className="py-3 px-2 text-sm font-medium">{exercise.name}</td>
                    )}
                    {columnVisibility.recommendedTime && (
                      <td className="py-3 px-2 text-sm text-muted-foreground">{exercise.recommendedTime}</td>
                    )}
                    {columnVisibility.calorieBurnt && (
                      <td className="py-3 px-2 text-sm">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {exercise.calorieBurnt} cal
                        </span>
                      </td>
                    )}
                    {columnVisibility.targetMuscle && (
                      <td className="py-3 px-2 text-sm text-muted-foreground">{exercise.targetMuscle}</td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filteredExercises.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No exercises found matching your search.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}