interface QuestionHeaderProps {
  phase: string;
  question: string;
}

const QuestionHeader = ({ phase, question }: QuestionHeaderProps) => {
  return (
    <div className="flex flex-col gap-3 text-text-primary text-center w-full animate-slide-up">
      <p className="font-medium text-sm leading-5 uppercase tracking-wider opacity-80 inline-flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
        {phase}
        <span className="inline-block w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" style={{ animationDelay: '0.5s' }} />
      </p>
      <h1 className="font-bold text-2xl leading-8 whitespace-pre-wrap">
        {question}
      </h1>
    </div>
  );
};

export default QuestionHeader;

