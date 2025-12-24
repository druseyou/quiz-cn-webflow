"use client";

import AnimatedNumber from "./AnimatedNumber";

interface StatsCardProps {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatsCard = ({ icon, value, suffix = "", label, delay = 0 }: StatsCardProps) => {
  return (
    <div 
      className="flex-1 bg-primary-dark/30 rounded-2xl p-4 flex flex-col items-center gap-2 animate-slide-up hover:bg-primary-dark/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="text-3xl animate-bounce relative z-10" style={{ animationDelay: `${delay + 0.5}s` }}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#00d4ff] to-[#0084ff] bg-clip-text relative z-10">
        <AnimatedNumber value={value} suffix={suffix} />
      </div>
      <div className="text-xs text-text-primary/70 text-center relative z-10">
        {label}
      </div>
    </div>
  );
};

export default StatsCard;

