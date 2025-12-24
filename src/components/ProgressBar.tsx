"use client";

import { useEffect, useState } from "react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  phase?: string;
}

const ProgressBar = ({ currentStep, totalSteps, phase }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const percentage = (currentStep / totalSteps) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="relative h-1 bg-primary-dark/30 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-[#00d4ff] via-[#00a8ff] to-[#0084ff] transition-all duration-500 ease-out shadow-lg shadow-[#00a8ff]/50"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-transparent to-white/20 animate-pulse" />
        </div>
      </div>
      {phase && (
        <div className="absolute top-2 right-4 text-xs font-medium text-text-primary/70 backdrop-blur-sm bg-primary-dark/50 px-3 py-1 rounded-full">
          {Math.round(percentage)}% • {phase}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;

