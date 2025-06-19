"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Plus, Check } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

import dynamic from "next/dynamic";

const TaskDialogComponent = dynamic(() => import("./task-dialog-component"), {
  ssr: false,
});

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoListComponent() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Morning workout routine", completed: false },
    { id: 2, text: "Review weekly meal plan", completed: true },
    { id: 3, text: "Take vitamin supplements", completed: false },
    { id: 4, text: "8 glasses of water", completed: true },
    { id: 5, text: "Evening meditation", completed: false },
  ]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const addTask = (taskText: string) => {
    const newTodo: Todo = {
      id: Math.max(...todos.map(t => t.id), 0) + 1,
      text: taskText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Card className="h-[260px]">
        <CardHeader className="">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Your ToDo&apos;s</CardTitle>
            <Button size="sm" className="h-8 px-3" onClick={() => setDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-1" />
              Add Task
            </Button>
          </div>
        </CardHeader>
        <CardContent className="">
          <ScrollArea className="h-[160px] pr-4">
            <div className="space-y-3">
              {todos.map((todo) => (
                <div key={todo.id} className="flex items-center gap-3">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex h-4 w-4 items-center justify-center rounded-sm border ${
                      todo.completed
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-muted-foreground/30"
                    }`}
                  >
                    {todo.completed && <Check className="h-3 w-3" />}
                  </button>
                  <span
                    className={`text-sm ${
                      todo.completed
                        ? "line-through text-muted-foreground"
                        : "text-foreground"
                    }`}
                  >
                  {todo.text}
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <TaskDialogComponent
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onAddTask={addTask}
      />
    </>
  );
}