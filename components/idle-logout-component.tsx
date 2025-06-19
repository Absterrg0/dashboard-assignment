'use client';

import { useIdleTimer } from 'react-idle-timer';
import { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
// import { useRouter } from 'next/navigation';  
import { Button } from './ui/button';
import { AlertTriangle, Clock } from 'lucide-react';

export function IdleLogout({
  timeout = 15 * 60 * 1000, // 15 mins
  warningTimeout = 10 * 60 * 1000, // 10 mins for modal auto-redirect
}: {
  timeout?: number;
  warningTimeout?: number;
}) {
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(warningTimeout / 1000);

  const handleSignOut = () => {
    signOut();
  };

  const onIdle = () => {
    setShowWarning(true);
    setCountdown(warningTimeout / 1000);
  };

  const handleAcknowledge = () => {
    setShowWarning(false);
    handleSignOut();
  };

  const handleStayActive = () => {
    setShowWarning(false);
    reset(); // Reset the idle timer
  };

  const { reset } = useIdleTimer({
    timeout,
    onIdle,
    debounce: 500,
  });

  // Countdown timer for auto-redirect
  useEffect(() => {
    if (!showWarning) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSignOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showWarning]);

  return showWarning ? (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-lg shadow-xl max-w-md w-full p-8 text-center space-y-6 animate-in fade-in-0 zoom-in-95 duration-300">
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-foreground">
            Session Timeout Warning
          </h2>
          <p className="text-muted-foreground">
            You&apos;ve been inactive for a while. Your session will expire soon for security reasons.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Auto-logout in</span>
          </div>
          <div className="text-3xl font-bold text-destructive">
            {countdown}s
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={handleStayActive}
            variant="outline"
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Stay Active
          </Button>
          <Button
            onClick={handleAcknowledge}
            className="flex-1 bg-destructive hover:bg-destructive/90 text-destructive-foreground"
          >
            Sign Out Now
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Click &quot;Stay Active&quot; to continue your session or &quot;Sign Out Now&quot; to logout immediately.
        </p>
      </div>
    </div>
  ) : null;
}
