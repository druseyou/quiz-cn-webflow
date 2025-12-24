"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const HABITS_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-6.webp";

export default function ExercisePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/naps");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={HABITS_IMAGE} imageSize="medium">
      <QuestionHeader
        phase={translations.quiz.phase5.title}
        question={translations.quiz.phase5.exercise.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="🏃"
          text={translations.quiz.phase5.exercise.yes}
          onClick={() => setSelected("yes")}
          selected={selected === "yes"}
        />
        <QuestionButton
          emoji="🛋️"
          text={translations.quiz.phase5.exercise.no}
          onClick={() => setSelected("no")}
          selected={selected === "no"}
        />
      </div>
    </QuizContainer>
  );
}

