interface DailyGoalCardProps {
  completed: number;
  total: number;
}

export function DailyGoalCard({ completed, total }: DailyGoalCardProps) {
  const progress = (completed / total) * 100;
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Daily Goal</p>
          <h3 className="mt-1 text-xl font-extrabold text-slate-900">{completed}/{total}</h3>
        </div>

        <div className="relative h-20 w-20">
          <svg className="h-20 w-20 -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r={radius} stroke="#e2e8f0" strokeWidth="8" fill="none" />
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#4f46e5"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-800">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
