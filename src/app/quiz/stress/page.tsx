"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import Slider from "@/components/Slider";
import ContinueButton from "@/components/ContinueButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-8.webp";

export default function StressPage() {
  const [stress, setStress] = useState(3);
  const router = useRouter();

  const handleContinue = () => {
    router.push("/quiz/switch-off");
  };

  return (
    <QuizContainer imageUrl={BEDROOM_IMAGE} imageSize="large">
      <QuestionHeader
        phase={translations.quiz.phase3.title}
        question={translations.quiz.phase3.stress.question}
      />
      
      <div className="w-full">
        <Slider
          min={1}
          max={7}
          value={stress}
          onChange={setStress}
          label={stress.toString()}
        />
      </div>

      <ContinueButton
        text={translations.quiz.buttons.next}
        onClick={handleContinue}
      />
    </QuizContainer>
  );
}

