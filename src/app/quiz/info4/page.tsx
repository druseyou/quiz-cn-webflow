"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ContinueButton from "@/components/ContinueButton";
import translations from "@/locales/en.json";

const PRODUCTIVITY_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-4.webp";

export default function Info4Page() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/quiz/coffee");
  };

  return (
    <div className="relative w-[375px] min-h-[812px] bg-gradient-to-b from-gradient-start via-gradient-middle via-[57.747%] to-gradient-end overflow-hidden">
      {/* Картинка Productivity */}
      <div className="relative w-full flex items-center justify-center pt-8 pb-4">
        <div className="relative w-[340px] h-[320px] animate-slide-up">
          <Image
            src={PRODUCTIVITY_IMAGE}
            alt="From Burnout to Productivity"
            fill
            sizes="340px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Контент */}
      <div className="px-5 pt-2 pb-8 flex flex-col gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        {/* Заголовок */}
        <h1 className="font-bold text-[28px] leading-10 text-text-primary text-center">
          {translations.quiz.info.productivity.title}
        </h1>

        {/* Зірки рейтингу */}
        <div className="flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#FFD700"
              className="drop-shadow-lg"
              aria-hidden="true"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          ))}
        </div>

        {/* Рейтинг текст */}
        <p className="text-text-primary text-base text-center font-medium">
          {translations.quiz.info.productivity.rating}
        </p>

        {/* Цитата */}
        <div className="relative px-2 mt-2">
          <span 
            className="absolute -left-1 -top-2 text-6xl text-[#4ecdc4]/60 font-serif leading-none select-none"
            aria-hidden="true"
          >
            "
          </span>
          <p className="text-text-primary/90 text-[15px] leading-7 italic pl-8 pr-6">
            {translations.quiz.info.productivity.text}
          </p>
          <span 
            className="absolute right-0 bottom-0 text-6xl text-[#4ecdc4]/60 font-serif leading-none select-none"
            aria-hidden="true"
          >
            "
          </span>
        </div>

        {/* Кнопка */}
        <div className="mt-6">
          <ContinueButton
            text={translations.quiz.info.productivity.almostThere}
            onClick={handleContinue}
          />
        </div>
      </div>
    </div>
  );
}

