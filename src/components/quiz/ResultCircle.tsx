interface ResultCircleProps {
  score: number;
  total: number;
}

export function ResultCircle({ score, total }: ResultCircleProps) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / total) * 100;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <svg className="h-32 w-32 -rotate-90 transform" viewBox="0 0 120 120" aria-label="Quiz result progress">
        <circle cx="60" cy="60" r={radius} stroke="#e2e8f0" strokeWidth="10" fill="none" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#4f46e5"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-3xl font-extrabold text-slate-900">{score}</div>
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">/{total}</div>
      </div>
    </div>
  );
}
