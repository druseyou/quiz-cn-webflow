"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ContinueButton from "@/components/ContinueButton";
import translations from "@/locales/en.json";

const CHARACTER_IMAGE = "/images/Cute-Cozy-Bedroom-Diorama-1.webp";

export default function Info3Page() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/quiz/racing-thoughts");
  };

  return (
    <div className="relative w-[375px] min-h-[812px] bg-gradient-to-b from-gradient-start via-gradient-middle via-[57.747%] to-gradient-end overflow-hidden">
      {/* Картинка персонажа з радугою */}
      <div className="relative w-full h-[320px] flex items-center justify-center pt-8">
        <div className="relative w-[300px] h-[300px] animate-slide-up">
          <Image
            src={CHARACTER_IMAGE}
            alt="Character with rainbow"
            fill
            sizes="300px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Контент */}
      <div className="px-6 pt-2 pb-8 flex flex-col gap-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        {/* Заголовок */}
        <h1 className="font-bold text-2xl leading-8 text-text-primary text-center">
          {translations.quiz.info.testimonial1.title}
        </h1>

        {/* Testimonial з великими лапками */}
        <div className="relative bg-transparent rounded-2xl py-2">
          {/* Великі лапки */}
          <div className="absolute -left-2 -top-4 text-[80px] text-text-primary opacity-20 font-serif leading-none">{'"'}</div>
          <div className="absolute -right-2 -bottom-8 text-[80px] text-text-primary opacity-20 font-serif leading-none">{'"'}</div>
          
          <div className="relative z-10 px-4 py-2">
            <p className="text-text-primary text-sm leading-6 italic text-left">
              {translations.quiz.info.testimonial1.text}
            </p>
            <p className="text-text-primary text-sm leading-5 mt-4 font-normal text-left">
              {translations.quiz.info.testimonial1.author}
            </p>
          </div>
        </div>

        {/* Кнопка */}
        <div className="mt-2">
          <ContinueButton
            text="I want these results!"
            onClick={handleContinue}
          />
        </div>
      </div>
    </div>
  );
}

