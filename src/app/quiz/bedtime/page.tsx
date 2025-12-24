"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1.webp";

export default function BedtimePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/info1");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={BEDROOM_IMAGE} imageSize="small">
      <QuestionHeader
        phase={translations.quiz.phase1.title}
        question={translations.quiz.phase1.bedtime.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="🌅"
          text={translations.quiz.phase1.bedtime.before10}
          onClick={() => setSelected("before10")}
          selected={selected === "before10"}
        />
        <QuestionButton
          emoji="🌆"
          text={translations.quiz.phase1.bedtime["10to11"]}
          onClick={() => setSelected("10to11")}
          selected={selected === "10to11"}
        />
        <QuestionButton
          emoji="🌃"
          text={translations.quiz.phase1.bedtime["11to12"]}
          onClick={() => setSelected("11to12")}
          selected={selected === "11to12"}
        />
        <QuestionButton
          emoji="🌙"
          text={translations.quiz.phase1.bedtime["12to1"]}
          onClick={() => setSelected("12to1")}
          selected={selected === "12to1"}
        />
        <QuestionButton
          emoji="🌌"
          text={translations.quiz.phase1.bedtime.after1}
          onClick={() => setSelected("after1")}
          selected={selected === "after1"}
        />
      </div>
    </QuizContainer>
  );
}

