"use client";

import { ReactNode } from "react";

interface QuestionButtonProps {
  emoji?: string;
  text: string | ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

const QuestionButton = ({ 
  emoji, 
  text, 
  onClick, 
  selected = false,
  disabled = false 
}: QuestionButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        min-h-[72px] border border-solid rounded-[24px] px-6 py-4 
        flex items-center gap-3 w-full transition-all duration-300
        font-bold text-sm leading-5 relative overflow-hidden
        group
        ${
          disabled
            ? "bg-[#141029] border-border-disabled text-surface-variant cursor-not-allowed"
            : selected
            ? "bg-primary border-border-active text-text-primary shadow-lg shadow-primary/30 scale-[1.02] animate-pulse-glow"
            : "bg-primary-dark border-border text-text-primary hover:border-border-active hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/20"
        }
      `}
    >
      {!disabled && !selected && (
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
      {emoji && (
        <span className={`text-[40px] leading-[40px] shrink-0 text-center transition-transform duration-300 ${selected ? 'scale-110' : 'group-hover:scale-110'}`}>
          {emoji}
        </span>
      )}
      <span className="flex-1 text-left whitespace-pre-wrap relative z-10">
        {text}
      </span>
      {selected && (
        <span className="text-2xl animate-bounce">✓</span>
      )}
    </button>
  );
};

export default QuestionButton;

