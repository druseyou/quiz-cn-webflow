"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ContinueButton from "@/components/ContinueButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-1.webp";

export default function Info1Page() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/quiz/goal");
  };

  return (
    <div className="relative w-[375px] min-h-[812px] bg-gradient-to-b from-gradient-start via-gradient-middle via-[57.747%] to-gradient-end overflow-hidden">
      {/* Картинка спальні - велика, по центру зверху */}
      <div className="relative w-full h-[300px] flex items-center justify-center pt-4">
        <div className="relative w-[280px] h-[280px] rounded-[24px] overflow-hidden shadow-2xl animate-slide-up">
          <Image
            src={BEDROOM_IMAGE}
            alt="Cozy bedroom"
            fill
            sizes="280px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Контент */}
      <div className="px-4 pt-6 pb-8 flex flex-col gap-5 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        {/* Заголовок */}
        <h1 className="font-bold text-2xl leading-8 text-text-primary text-center">
          {translations.quiz.info.whyMatters}
        </h1>

        {/* Інформаційна картка */}
        <div className="bg-primary-dark/40 rounded-2xl p-5 backdrop-blur-sm">
          <p className="text-text-primary text-sm leading-6">
            {translations.quiz.info.researchText}
          </p>
        </div>

        {/* Цитата з лікарем */}
        <div className="relative bg-primary-dark/30 rounded-2xl p-5">
          {/* Лапки */}
          <span className="absolute left-3 top-2 text-5xl text-[#00d4ff] opacity-30 leading-none font-serif">{'"'}</span>
          <span className="absolute right-3 bottom-2 text-5xl text-[#00d4ff] opacity-30 leading-none font-serif">{'"'}</span>
          
          <div className="relative z-10 pl-4">
            <p className="text-text-primary text-sm leading-6 italic">
              {translations.quiz.info.soundTherapy}
            </p>
            <p className="text-[#00d4ff] text-sm leading-5 mt-3 font-medium">
              {translations.quiz.info.doctor}
            </p>
          </div>
        </div>

        {/* Кнопка */}
        <div className="mt-2">
          <ContinueButton
            text={translations.quiz.buttons.continue}
            onClick={handleContinue}
          />
        </div>
      </div>
    </div>
  );
}

