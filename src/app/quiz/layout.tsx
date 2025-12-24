import { ReactNode } from "react";

export default function QuizLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end">
      {children}
    </div>
  );
}

