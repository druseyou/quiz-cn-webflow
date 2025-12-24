"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-7.webp";

export default function TimeToSleepPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/night-waking");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={BEDROOM_IMAGE} imageSize="medium">
      <QuestionHeader
        phase={translations.quiz.phase2.title}
        question={translations.quiz.phase2.timeToSleep.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="⚡"
          text={translations.quiz.phase2.timeToSleep.less15}
          onClick={() => setSelected("less15")}
          selected={selected === "less15"}
        />
        <QuestionButton
          emoji="⏱️"
          text={translations.quiz.phase2.timeToSleep["15to30"]}
          onClick={() => setSelected("15to30")}
          selected={selected === "15to30"}
        />
        <QuestionButton
          emoji="⏰"
          text={translations.quiz.phase2.timeToSleep["30to60"]}
          onClick={() => setSelected("30to60")}
          selected={selected === "30to60"}
        />
        <QuestionButton
          emoji="😰"
          text={translations.quiz.phase2.timeToSleep.over60}
          onClick={() => setSelected("over60")}
          selected={selected === "over60"}
        />
      </div>
    </QuizContainer>
  );
}

