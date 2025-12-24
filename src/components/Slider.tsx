"use client";

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
}

const Slider = ({ min, max, value, onChange, label }: SliderProps) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="w-full py-6">
      {/* Велике число зверху */}
      {label && (
        <div className="text-center mb-8">
          <span className="font-bold text-[56px] leading-none text-transparent bg-gradient-to-r from-[#00d4ff] to-[#0084ff] bg-clip-text drop-shadow-lg">
            {label}
          </span>
        </div>
      )}
      
      {/* Простий слайдер з динамічним градієнтом */}
      <div className="px-4">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full"
          style={{
            background: `linear-gradient(90deg, #00d4ff 0%, #00d4ff ${percentage}%, #4e557e ${percentage}%, #4e557e 100%)`
          }}
        />
      </div>
      
      {/* Мін/Макс */}
      <div className="flex justify-between px-4 mt-3">
        <span className="text-sm text-text-primary/60">{min}</span>
        <span className="text-sm text-text-primary/60">{max}</span>
      </div>
    </div>
  );
};

export default Slider;
