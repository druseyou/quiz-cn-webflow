"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-7.webp";

export default function GoalPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/time-to-sleep");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={BEDROOM_IMAGE} imageSize="medium">
      <QuestionHeader
        phase={translations.quiz.phase2.title}
        question={translations.quiz.phase2.goal.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="😴"
          text={translations.quiz.phase2.goal.fallAsleep}
          onClick={() => setSelected("fallAsleep")}
          selected={selected === "fallAsleep"}
        />
        <QuestionButton
          emoji="🛌"
          text={translations.quiz.phase2.goal.stayAsleep}
          onClick={() => setSelected("stayAsleep")}
          selected={selected === "stayAsleep"}
        />
        <QuestionButton
          emoji="☀️"
          text={translations.quiz.phase2.goal.wakeUpRefreshed}
          onClick={() => setSelected("wakeUpRefreshed")}
          selected={selected === "wakeUpRefreshed"}
        />
        <QuestionButton
          emoji="😌"
          text={translations.quiz.phase2.goal.reduceStress}
          onClick={() => setSelected("reduceStress")}
          selected={selected === "reduceStress"}
        />
      </div>
    </QuizContainer>
  );
}

