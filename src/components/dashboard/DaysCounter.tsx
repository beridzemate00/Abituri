interface DaysCounterProps {
  daysLeft: number;
  examName: string;
}

export function DaysCounter({ daysLeft, examName }: DaysCounterProps) {
  return (
    <div className="rounded-[28px] bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-5 text-white shadow-lg shadow-indigo-200/50">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-200">{examName}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <div>
          <p className="text-4xl font-extrabold leading-none">{daysLeft}</p>
          <p className="mt-1 text-sm text-slate-300">დღე რჩება</p>
        </div>
        <div className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-indigo-100">
          90% Focus
        </div>
      </div>
    </div>
  );
}
