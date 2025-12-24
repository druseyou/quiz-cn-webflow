"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizContainer from "@/components/QuizContainer";
import QuestionHeader from "@/components/QuestionHeader";
import GenderCard from "@/components/GenderCard";
import translations from "@/locales/en.json";

const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1.webp";

export default function GenderPage() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (selectedGender) {
      const timer = setTimeout(() => {
        router.push("/quiz/age");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedGender, router]);

  return (
    <QuizContainer 
      imageUrl={BEDROOM_IMAGE} 
      imageSize="large"
      currentStep={1}
      totalSteps={25}
      phase="Phase 1"
    >
      <QuestionHeader
        phase={translations.quiz.phase1.title}
        question={translations.quiz.phase1.gender.question}
      />
      
      <div className="flex gap-2 w-full">
        <GenderCard
          emoji="💁‍♀️"
          label={translations.quiz.phase1.gender.female}
          onClick={() => setSelectedGender("female")}
          selected={selectedGender === "female"}
        />
        <GenderCard
          emoji="🙋‍♂️"
          label={translations.quiz.phase1.gender.male}
          onClick={() => setSelectedGender("male")}
          selected={selectedGender === "male"}
        />
      </div>
    </QuizContainer>
  );
}

