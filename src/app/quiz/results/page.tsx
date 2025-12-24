"use client";

import { useState } from "react";
import Image from "next/image";
import ContinueButton from "@/components/ContinueButton";
import Confetti from "@/components/Confetti";
import translations from "@/locales/en.json";

const PHONE_IMAGE = "/images/Phone Sound Waves 3D Illustration (1) 1.webp";
const ICON_IMAGE = "/images/icon 1.svg";

export default function ResultsPage() {
  const [showConfetti, setShowConfetti] = useState(true);

  const handleGetPlan = () => {
    console.log("Get plan clicked");
  };

  return (
    <div className="relative w-full max-w-[375px] mx-auto min-h-screen bg-gradient-to-b from-gradient-start via-gradient-middle via-[57.747%] to-gradient-end overflow-y-auto pb-40">
      {showConfetti && <Confetti />}
      
      {/* Header Image */}
      <div className="relative w-full h-[180px] overflow-hidden animate-slide-up">
        <Image
          src={PHONE_IMAGE}
          alt="Sound waves"
          fill
          sizes="375px"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="px-5 py-6 space-y-6">
        
        {/* Personal Soundscape Section */}
        <h1 className="font-bold text-[26px] leading-8 text-text-primary text-center animate-slide-up">
          {translations.quiz.results.personalPlan.title}
        </h1>
        
        <div className="bg-[#1a3a5c]/60 rounded-xl p-5 space-y-3 animate-slide-up border-l-4 border-[#4ecdc4]">
          <p className="text-text-primary/90 text-[15px] leading-6">
            {translations.quiz.results.personalPlan.intro}
          </p>
          <p className="text-text-primary/90 text-[15px] leading-6">
            {translations.quiz.results.personalPlan.prepared}
          </p>
          <p className="text-text-primary text-xl font-bold leading-7">
            {translations.quiz.results.personalPlan.combination}
          </p>
          <p className="text-text-primary/80 text-[15px] leading-6">
            {translations.quiz.results.personalPlan.purpose}
          </p>
        </div>

        {/* Quote */}
        <div className="relative px-3">
          <span className="absolute -left-1 -top-2 text-5xl text-[#4ecdc4]/60 font-serif leading-none select-none" aria-hidden="true">"</span>
          <p className="text-[#4ecdc4] text-[15px] leading-7 italic pl-6 pr-6">
            {translations.quiz.results.recommendation}
          </p>
          <span className="absolute right-0 bottom-0 text-5xl text-[#4ecdc4]/60 font-serif leading-none select-none" aria-hidden="true">"</span>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-4"></div>

        {/* Comparison Table */}
        <h2 className="font-bold text-[24px] leading-8 text-text-primary text-center">
          {translations.quiz.results.comparison.title}
        </h2>

        <div className="space-y-2">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-2">
            <div></div>
            <div className="bg-[#2a4a6c]/80 rounded-lg p-3">
              <p className="text-yellow-400 text-xs leading-4 text-center font-medium">
                {translations.quiz.results.comparison.without}
              </p>
            </div>
            <div className="bg-[#2a4a6c]/80 rounded-lg p-3">
              <p className="text-[#4ecdc4] text-xs leading-4 text-center font-medium">
                {translations.quiz.results.comparison.with}
              </p>
            </div>
          </div>

          {/* Time to fall asleep */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#1a3a5c]/60 rounded-lg p-3 flex items-center">
              <p className="text-text-primary text-xs leading-4 font-medium">
                {translations.quiz.results.comparison.timeToSleep}
              </p>
            </div>
            <div className="bg-[#3d5a80]/60 rounded-lg p-3 flex items-center justify-center">
              <p className="text-text-primary/80 text-sm text-center">
                {translations.quiz.results.comparison.timeWithout}
              </p>
            </div>
            <div className="bg-[#2a4a6c]/60 rounded-lg p-3 flex items-center justify-center">
              <p className="text-text-primary text-sm text-center">
                {translations.quiz.results.comparison.timeWith}
              </p>
            </div>
          </div>

          {/* Deep sleep quality */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#1a3a5c]/60 rounded-lg p-3 flex items-center">
              <p className="text-text-primary text-xs leading-4 font-medium">
                {translations.quiz.results.comparison.quality}
              </p>
            </div>
            <div className="bg-[#8b4a6b]/50 rounded-lg p-3 flex items-center justify-center">
              <p className="text-red-300 text-sm text-center">
                {translations.quiz.results.comparison.qualityWithout}
              </p>
            </div>
            <div className="bg-[#2a5a5c]/60 rounded-lg p-3 flex items-center justify-center">
              <p className="text-[#4ecdc4] text-sm text-center">
                {translations.quiz.results.comparison.qualityWith}
              </p>
            </div>
          </div>

          {/* Morning feeling */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#1a3a5c]/60 rounded-lg p-3 flex items-center">
              <p className="text-text-primary text-xs leading-4 font-medium">
                {translations.quiz.results.comparison.morning}
              </p>
            </div>
            <div className="bg-[#8b4a6b]/50 rounded-lg p-3 flex items-center justify-center">
              <p className="text-red-300 text-sm text-center">
                {translations.quiz.results.comparison.morningWithout}
              </p>
            </div>
            <div className="bg-[#2a5a5c]/60 rounded-lg p-3 flex items-center justify-center">
              <p className="text-[#4ecdc4] text-sm text-center">
                {translations.quiz.results.comparison.morningWith}
              </p>
            </div>
          </div>

          {/* Daytime focus */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#1a3a5c]/60 rounded-lg p-3 flex items-center">
              <p className="text-text-primary text-xs leading-4 font-medium">
                {translations.quiz.results.comparison.focus}
              </p>
            </div>
            <div className="bg-[#8b4a6b]/50 rounded-lg p-3 flex items-center justify-center">
              <p className="text-red-300 text-sm text-center">
                {translations.quiz.results.comparison.focusWithout}
              </p>
            </div>
            <div className="bg-[#2a5a5c]/60 rounded-lg p-3 flex items-center justify-center">
              <p className="text-[#4ecdc4] text-sm text-center">
                {translations.quiz.results.comparison.focusWith}
              </p>
            </div>
          </div>
        </div>

        {/* App Icon */}
        <div className="flex justify-center py-4">
          <div className="relative w-[100px] h-[100px]">
            <Image
              src={ICON_IMAGE}
              alt="App icon"
              fill
              sizes="100px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Plan Features */}
        <h3 className="font-bold text-[22px] leading-8 text-text-primary">
          {translations.quiz.results.planIncludes}
        </h3>

        <div className="space-y-4">
          <div className="flex gap-3 items-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="text-xl shrink-0">🎚️</span>
            <p className="text-text-primary text-[15px] leading-6 font-medium">
              {translations.quiz.results.feature1}
            </p>
          </div>
          <div className="flex gap-3 items-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="text-xl shrink-0">🎯</span>
            <p className="text-text-primary text-[15px] leading-6 font-medium">
              {translations.quiz.results.feature2}
            </p>
          </div>
          <div className="flex gap-3 items-start animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <span className="text-xl shrink-0">⏰</span>
            <p className="text-text-primary text-[15px] leading-6 font-medium">
              {translations.quiz.results.feature3}
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a4a] via-[#1a1a4a]/95 to-transparent p-4 pt-6">
        <div className="max-w-[375px] mx-auto space-y-3">
          <p className="text-[#ff6b6b] text-base font-semibold text-center">
            {translations.quiz.results.cta}
          </p>
          <ContinueButton
            text={translations.quiz.buttons.downloadApp}
            onClick={handleGetPlan}
          />
        </div>
      </div>
    </div>
  );
}

