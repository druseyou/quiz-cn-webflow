"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const SOUND_IMAGE = "/images/Frame 223.webp";

export default function SilencePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/sharp-noises");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={SOUND_IMAGE} imageSize="medium">
      <QuestionHeader
        phase={translations.quiz.phase4.title}
        question={translations.quiz.phase4.silence.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="😰"
          text={translations.quiz.phase4.silence.uncomfortable}
          onClick={() => setSelected("uncomfortable")}
          selected={selected === "uncomfortable"}
        />
        <QuestionButton
          emoji="😐"
          text={translations.quiz.phase4.silence.neutral}
          onClick={() => setSelected("neutral")}
          selected={selected === "neutral"}
        />
        <QuestionButton
          emoji="🤫"
          text={translations.quiz.phase4.silence.prefer}
          onClick={() => setSelected("prefer")}
          selected={selected === "prefer"}
        />
      </div>
    </QuizContainer>
  );
}

