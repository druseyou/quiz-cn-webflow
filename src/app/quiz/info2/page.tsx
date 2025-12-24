"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ContinueButton from "@/components/ContinueButton";
import translations from "@/locales/en.json";

const WAVES_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-3.webp";

export default function Info2Page() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/quiz/silence");
  };

  return (
    <div className="relative w-[375px] min-h-[812px] bg-gradient-to-b from-gradient-start via-gradient-middle via-[57.747%] to-gradient-end overflow-hidden">
      {/* Картинка Beta/Alpha Waves */}
      <div className="relative w-full flex items-center justify-center pt-8 pb-4">
        <div className="relative w-[320px] h-[300px] animate-slide-up">
          <Image
            src={WAVES_IMAGE}
            alt="Beta and Alpha brain waves"
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
          {translations.quiz.info.whyMatters}
        </h1>

        {/* Інформаційна картка про binaural beats з лівою рамкою */}
        <div className="relative bg-[#1a3a5c]/60 rounded-xl p-4 pl-5 border-l-4 border-[#4ecdc4]">
          <p className="text-text-primary/90 text-[15px] leading-6">
            {translations.quiz.info.binauralBeats}
          </p>
        </div>

        {/* Рекомендація лікаря */}
        <div className="flex flex-col gap-3">
          {/* Заголовок з іконкою */}
          <div className="flex items-center justify-center gap-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-[#4ecdc4]"
              aria-hidden="true"
            >
              <path 
                d="M12 4.5C9.51 4.5 7.5 6.51 7.5 9C7.5 10.38 8.12 11.61 9.09 12.44C9.03 12.62 9 12.81 9 13C9 14.1 9.9 15 11 15H11.17C11.06 15.31 11 15.65 11 16V19C11 20.1 11.9 21 13 21C14.1 21 15 20.1 15 19V16C15 15.65 14.94 15.31 14.83 15H15C16.1 15 17 14.1 17 13C17 12.81 16.97 12.62 16.91 12.44C17.88 11.61 18.5 10.38 18.5 9C18.5 6.51 16.49 4.5 14 4.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 9V13" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
              <path 
                d="M10 11H14" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
            </svg>
            <h3 className="font-semibold text-[#4ecdc4] text-lg">
              {translations.quiz.info.recommendation}
            </h3>
          </div>
          
          {/* Цитата */}
          <div className="relative px-4">
            <span 
              className="absolute left-0 -top-1 text-5xl text-[#4ecdc4]/50 font-serif leading-none select-none"
              aria-hidden="true"
            >
              "
            </span>
            <p className="text-text-primary/90 text-[15px] leading-7 italic pl-6 pr-4">
              {translations.quiz.info.whiteNoise}
            </p>
            <span 
              className="absolute right-0 bottom-0 text-5xl text-[#4ecdc4]/50 font-serif leading-none select-none"
              aria-hidden="true"
            >
              "
            </span>
          </div>
        </div>

        {/* Кнопка */}
        <div className="mt-4">
          <ContinueButton
            text={translations.quiz.info.understood}
            onClick={handleContinue}
          />
        </div>
      </div>
    </div>
  );
}

