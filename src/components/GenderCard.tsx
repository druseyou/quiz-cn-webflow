"use client";

interface GenderCardProps {
  emoji: string;
  label: string;
  onClick?: () => void;
  selected?: boolean;
}

const GenderCard = ({ emoji, label, onClick, selected = false }: GenderCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1 min-h-[145px] bg-primary-dark border border-solid rounded-[24px] 
        px-6 py-6 flex flex-col items-center justify-between
        font-bold text-text-primary transition-all duration-300
        group relative overflow-hidden
        ${selected 
          ? "border-border-active bg-primary shadow-lg shadow-primary/30 scale-[1.05] animate-pulse-glow" 
          : "border-border hover:border-border-active hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20"
        }
      `}
    >
      {!selected && (
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
      <span className={`text-[64px] leading-[64px] text-center transition-transform duration-300 ${selected ? 'scale-110 animate-bounce' : 'group-hover:scale-110'}`}>
        {emoji}
      </span>
      <span className="text-base leading-6 text-center whitespace-pre-wrap relative z-10">
        {label}
      </span>
      {selected && (
        <div className="absolute top-2 right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white text-xs">✓</span>
        </div>
      )}
    </button>
  );
};

export default GenderCard;

