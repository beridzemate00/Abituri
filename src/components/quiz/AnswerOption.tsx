interface AnswerOptionProps {
  label: string;
  text: string;
  isSelected: boolean;
  onSelect: () => void;
}

export function AnswerOption({ label, text, isSelected, onSelect }: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all ${
        isSelected
          ? 'border-indigo-600 bg-indigo-50 shadow-sm'
          : 'border-slate-100 bg-white hover:border-slate-200'
      }`}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition-colors ${
          isSelected ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-900'
        }`}
      >
        {label}
      </div>

      <span className="flex-1 text-sm font-medium leading-relaxed text-slate-800">{text}</span>

      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors ${
          isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-200'
        }`}
      >
        {isSelected ? <div className="h-2 w-2 rounded-full bg-white" /> : null}
      </div>
    </button>
  );
}
