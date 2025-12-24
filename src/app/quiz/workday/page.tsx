"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1.webp";

export default function WorkdayPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/devices");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={BEDROOM_IMAGE} imageSize="large">
      <QuestionHeader
        phase={translations.quiz.phase1.title}
        question={translations.quiz.phase1.workday.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="💼"
          text={translations.quiz.phase1.workday.sedentary}
          onClick={() => setSelected("sedentary")}
          selected={selected === "sedentary"}
        />
        <QuestionButton
          emoji="🚶"
          text={translations.quiz.phase1.workday.moderate}
          onClick={() => setSelected("moderate")}
          selected={selected === "moderate"}
        />
        <QuestionButton
          emoji="🏃"
          text={translations.quiz.phase1.workday.active}
          onClick={() => setSelected("active")}
          selected={selected === "active"}
        />
      </div>
    </QuizContainer>
  );
}

