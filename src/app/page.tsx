"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/quiz/gender");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-text-primary text-xl">Loading...</p>
    </div>
  );
}

