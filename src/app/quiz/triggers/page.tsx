"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-7.webp";

export default function TriggersPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/afternoon-crash");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={BEDROOM_IMAGE} imageSize="small">
      <QuestionHeader
        phase={translations.quiz.phase2.title}
        question={translations.quiz.phase2.triggers.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="🔊"
          text={translations.quiz.phase2.triggers.noise}
          onClick={() => setSelected("noise")}
          selected={selected === "noise"}
        />
        <QuestionButton
          emoji="🤯"
          text={translations.quiz.phase2.triggers.thoughts}
          onClick={() => setSelected("thoughts")}
          selected={selected === "thoughts"}
        />
        <QuestionButton
          emoji="😣"
          text={translations.quiz.phase2.triggers.discomfort}
          onClick={() => setSelected("discomfort")}
          selected={selected === "discomfort"}
        />
        <QuestionButton
          emoji="❓"
          text={translations.quiz.phase2.triggers.unknown}
          onClick={() => setSelected("unknown")}
          selected={selected === "unknown"}
        />
      </div>
    </QuizContainer>
  );
}

