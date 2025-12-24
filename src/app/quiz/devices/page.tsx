"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1.webp";

export default function DevicesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/bedtime");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={BEDROOM_IMAGE} imageSize="medium">
      <QuestionHeader
        phase={translations.quiz.phase1.title}
        question={translations.quiz.phase1.devices.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="📱"
          text={translations.quiz.phase1.devices.always}
          onClick={() => setSelected("always")}
          selected={selected === "always"}
        />
        <QuestionButton
          emoji="⏰"
          text={translations.quiz.phase1.devices.often}
          onClick={() => setSelected("often")}
          selected={selected === "often"}
        />
        <QuestionButton
          emoji="📵"
          text={translations.quiz.phase1.devices.rarely}
          onClick={() => setSelected("rarely")}
          selected={selected === "rarely"}
        />
      </div>
    </QuizContainer>
  );
}

