"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import Slider from "@/components/Slider";
import ContinueButton from "@/components/ContinueButton";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1.webp";

export default function AgePage() {
  const [age, setAge] = useState(25);
  const router = useRouter();

  const handleContinue = () => {
    router.push("/quiz/workday");
  };

  return (
    <QuizContainer imageUrl={BEDROOM_IMAGE} imageSize="large">
      <QuestionHeader
        phase={translations.quiz.phase1.title}
        question={translations.quiz.phase1.age.question}
      />
      
      <div className="w-full">
        <Slider
          min={18}
          max={80}
          value={age}
          onChange={setAge}
          label={age.toString()}
        />
      </div>

      <ContinueButton
        text={translations.quiz.buttons.next}
        onClick={handleContinue}
      />
    </QuizContainer>
  );
}

