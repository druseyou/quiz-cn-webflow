import { ReactNode } from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

interface QuizContainerProps {
  children: ReactNode;
  imageUrl: string;
  imageSize?: "large" | "small" | "medium";
  currentStep?: number;
  totalSteps?: number;
  phase?: string;
}

const QuizContainer = ({ 
  children, 
  imageUrl,
  imageSize = "large",
  currentStep,
  totalSteps,
  phase
}: QuizContainerProps) => {
  // Розміри та позиціонування згідно з Figma
  const sizeConfig = {
    large: {
      width: 328,
      height: 328,
      top: 20,
      contentTop: 364, // 20 + 328 + 16
    },
    medium: {
      width: 280,
      height: 280,
      top: 20,
      contentTop: 316, // 20 + 280 + 16
    },
    small: {
      width: 220,
      height: 220,
      top: 20,
      contentTop: 256, // 20 + 220 + 16
    },
  };
  
  const config = sizeConfig[imageSize];
  const imageLeft = (375 - config.width) / 2; // Центруємо по горизонталі
  
  return (
    <div className="relative w-[375px] min-h-[812px] bg-gradient-to-b from-gradient-start via-gradient-middle via-[57.747%] to-gradient-end overflow-hidden animate-fade-in">
      {currentStep && totalSteps && (
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} phase={phase} />
      )}
      {/* Картинка спальні */}
      <div 
        className="absolute rounded-[24px] overflow-hidden shadow-2xl animate-slide-up"
        style={{
          left: `${imageLeft}px`,
          top: `${config.top}px`,
          width: `${config.width}px`,
          height: `${config.height}px`,
        }}
      >
        <Image
          src={imageUrl}
          alt="Bedroom illustration"
          fill
          sizes={`${config.width}px`}
          className="object-cover"
          priority
        />
      </div>
      {/* Контент */}
      <div 
        className="absolute left-4 right-4 flex flex-col items-center gap-6 animate-slide-up" 
        style={{ 
          top: `${config.contentTop}px`, 
          animationDelay: '0.1s' 
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default QuizContainer;

