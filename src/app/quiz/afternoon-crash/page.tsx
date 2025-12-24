"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-7.webp";

export default function AfternoonCrashPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/info3");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={BEDROOM_IMAGE} imageSize="medium">
      <QuestionHeader
        phase={translations.quiz.phase2.title}
        question={translations.quiz.phase2.afternoonCrash.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="😴"
          text={translations.quiz.phase2.afternoonCrash.yes}
          onClick={() => setSelected("yes")}
          selected={selected === "yes"}
        />
        <QuestionButton
          emoji="🤔"
          text={translations.quiz.phase2.afternoonCrash.sometimes}
          onClick={() => setSelected("sometimes")}
          selected={selected === "sometimes"}
        />
        <QuestionButton
          emoji="💪"
          text={translations.quiz.phase2.afternoonCrash.no}
          onClick={() => setSelected("no")}
          selected={selected === "no"}
        />
      </div>
    </QuizContainer>
  );
}

