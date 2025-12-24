"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const HABITS_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-6.webp";

export default function BedroomUsePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/ritual");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={HABITS_IMAGE} imageSize="medium">
      <QuestionHeader
        phase={translations.quiz.phase5.title}
        question={translations.quiz.phase5.bedroomUse.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="🛏️"
          text={translations.quiz.phase5.bedroomUse.sleepOnly}
          onClick={() => setSelected("sleepOnly")}
          selected={selected === "sleepOnly"}
        />
        <QuestionButton
          emoji="💼"
          text={translations.quiz.phase5.bedroomUse.multiple}
          onClick={() => setSelected("multiple")}
          selected={selected === "multiple"}
        />
      </div>
    </QuizContainer>
  );
}

