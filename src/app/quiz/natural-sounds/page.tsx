"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionButton from "@/components/QuestionButton";
import translations from "@/locales/en.json";

const SOUND_IMAGE = "/images/Frame 223.webp";

export default function NaturalSoundsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selected) {
      const timer = setTimeout(() => {
        router.push("/quiz/earplugs");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selected, router]);

  return (
    <QuizContainer imageUrl={SOUND_IMAGE} imageSize="medium">
      <QuestionHeader
        phase={translations.quiz.phase4.title}
        question={translations.quiz.phase4.naturalSounds.question}
      />
      
      <div className="flex flex-col gap-3 w-full">
        <QuestionButton
          emoji="🌧️"
          text={translations.quiz.phase4.naturalSounds.rain}
          onClick={() => setSelected("rain")}
          selected={selected === "rain"}
        />
        <QuestionButton
          emoji="🌊"
          text={translations.quiz.phase4.naturalSounds.ocean}
          onClick={() => setSelected("ocean")}
          selected={selected === "ocean"}
        />
        <QuestionButton
          emoji="🌲"
          text={translations.quiz.phase4.naturalSounds.forest}
          onClick={() => setSelected("forest")}
          selected={selected === "forest"}
        />
        <QuestionButton
          emoji="🚫"
          text={translations.quiz.phase4.naturalSounds.none}
          onClick={() => setSelected("none")}
          selected={selected === "none"}
        />
      </div>
    </QuizContainer>
  );
}

