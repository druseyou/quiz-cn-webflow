"use client";

interface ContinueButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ContinueButton = ({ text, onClick, disabled = false }: ContinueButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full min-h-[64px] rounded-[24px] px-6 py-5 
        font-bold text-base leading-6 text-center
        transition-all duration-300 relative overflow-hidden
        group
        ${
          disabled
            ? "bg-[#141029] text-surface-variant cursor-not-allowed opacity-50"
            : "bg-gradient-to-r from-[#00a8ff] to-[#0084ff] text-text-primary hover:from-[#00d4ff] hover:to-[#00a8ff] hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#00a8ff]/50 animate-pulse-glow"
        }
      `}
    >
      {!disabled && (
        <>
          <div className="absolute inset-0 shimmer group-hover:opacity-100 opacity-50" />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
        </>
      )}
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default ContinueButton;

