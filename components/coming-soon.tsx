"use client"

import { Card, CardContent } from "./ui/card";
import { Clock, Rocket, Sparkles } from "lucide-react";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({ 
  title = "Coming Soon", 
  description = "This feature is currently in development and will be available soon." 
}: ComingSoonProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="text-center space-y-6">
            {/* Icon Section */}
            <div className="relative mx-auto w-20 h-20">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-primary/20 rounded-full animate-pulse delay-75"></div>
              <div className="absolute inset-4 bg-primary/30 rounded-full flex items-center justify-center">
                <Rocket className="h-8 w-8 text-primary animate-bounce" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed px-4">
              {description}
            </p>

            {/* Features Preview */}
            <div className="bg-muted/30 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Exciting features coming your way</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-2 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="h-2 bg-primary/30 rounded-full animate-pulse delay-100"></div>
                <div className="h-2 bg-primary/20 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Development in Progress
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 