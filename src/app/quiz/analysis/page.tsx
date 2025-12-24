"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ContinueButton from "@/components/ContinueButton";
import AnimatedNumber from "@/components/AnimatedNumber";
import translations from "@/locales/en.json";

const ANALYSIS_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-5.webp";

export default function AnalysisPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/quiz/results");
  };

  return (
    <div className="relative w-[375px] min-h-[812px] bg-gradient-to-b from-gradient-start via-gradient-middle via-[57.747%] to-gradient-end overflow-hidden">
      {/* Картинка */}
      <div className="relative w-full flex items-center justify-center pt-8 pb-4">
        <div className="relative w-[320px] h-[280px] animate-slide-up">
          <Image
            src={ANALYSIS_IMAGE}
            alt="Analysis Complete"
            fill
            sizes="320px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Контент */}
      <div className="px-5 pt-2 pb-8 flex flex-col gap-5 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        {/* Заголовок */}
        <h1 className="font-bold text-[28px] leading-9 text-text-primary text-center">
          {translations.quiz.results.complete}
        </h1>

        {/* Блок з результатом та лівою рамкою */}
        <div className="relative bg-[#1a3a5c]/60 rounded-xl p-5 pl-5 border-l-4 border-[#4ecdc4]">
          <p className="text-text-primary font-semibold text-base mb-2">
            {translations.quiz.results.match}
          </p>
          <p className="text-text-primary text-4xl font-bold my-2">
            <AnimatedNumber value={82} suffix="%" />
          </p>
          <p className="text-text-primary/90 text-[15px] leading-6">
            {translations.quiz.results.matchText}
          </p>
        </div>

        {/* Цитата з лапками */}
        <div className="relative px-2">
          <span 
            className="absolute -left-1 -top-2 text-5xl text-[#4ecdc4]/60 font-serif leading-none select-none"
            aria-hidden="true"
          >
            {'"'}
          </span>
          <p className="text-[#4ecdc4] text-[15px] leading-7 italic pl-6 pr-6">
            {translations.quiz.results.recommendation}
          </p>
          <span 
            className="absolute right-0 bottom-0 text-5xl text-[#4ecdc4]/60 font-serif leading-none select-none"
            aria-hidden="true"
          >
            {'"'}
          </span>
        </div>

        {/* Кнопка */}
        <div className="mt-4">
          <ContinueButton
            text={translations.quiz.buttons.viewPlan}
            onClick={handleContinue}
          />
        </div>
      </div>
    </div>
  );
}

