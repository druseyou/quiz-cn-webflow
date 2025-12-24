"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-8.webp";

export default function RacingThoughtsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/stress");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={BEDROOM_IMAGE} imageSize="large">
      <QuestionHeader
        phase={translations.quiz.phase3.title}
        question={translations.quiz.phase3.racingThoughts.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="😰"
          text={translations.quiz.phase3.racingThoughts.yes}
          onClick={() => setSelected("yes")}
          selected={selected === "yes"}
        />
        <QuestionButton
          emoji="😌"
          text={translations.quiz.phase3.racingThoughts.no}
          onClick={() => setSelected("no")}
          selected={selected === "no"}
        />
      </div>
    </QuizContainer>
  );
}

