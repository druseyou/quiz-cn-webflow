"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-7.webp";

export default function NightWakingPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/triggers");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={BEDROOM_IMAGE} imageSize="medium">
      <QuestionHeader
        phase={translations.quiz.phase2.title}
        question={translations.quiz.phase2.nightWaking.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="✨"
          text={translations.quiz.phase2.nightWaking.never}
          onClick={() => setSelected("never")}
          selected={selected === "never"}
        />
        <QuestionButton
          emoji="1️⃣"
          text={translations.quiz.phase2.nightWaking.once}
          onClick={() => setSelected("once")}
          selected={selected === "once"}
        />
        <QuestionButton
          emoji="2️⃣"
          text={translations.quiz.phase2.nightWaking["2to3"]}
          onClick={() => setSelected("2to3")}
          selected={selected === "2to3"}
        />
        <QuestionButton
          emoji="😵"
          text={translations.quiz.phase2.nightWaking.moreThan3}
          onClick={() => setSelected("moreThan3")}
          selected={selected === "moreThan3"}
        />
      </div>
    </QuizContainer>
  );
}

