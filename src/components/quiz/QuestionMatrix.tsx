interface QuestionMatrixProps {
  total: number;
  currentQuestion: number;
  answered: number[];
  onSelect: (questionNumber: number) => void;
}

export function QuestionMatrix({ total, currentQuestion, answered, onSelect }: QuestionMatrixProps) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {Array.from({ length: total }, (_, index) => {
        const number = index + 1;
        const isCurrent = number === currentQuestion;
        const isAnswered = answered.includes(number);

        return (
          <button
            key={number}
            type="button"
            onClick={() => onSelect(number)}
            className={`flex h-10 items-center justify-center rounded-xl border text-sm font-semibold transition ${
              isCurrent
                ? 'border-indigo-600 bg-indigo-600 text-white shadow-sm'
                : isAnswered
                  ? 'border-emerald-200 bg-emerald-100 text-emerald-700'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
            }`}
          >
            {number}
          </button>
        );
      })}
    </div>
  );
}
