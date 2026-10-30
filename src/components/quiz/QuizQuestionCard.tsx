import { AnswerOption } from './AnswerOption';

interface QuizQuestionCardProps {
  category: string;
  questionNumber: number;
  timeLeft: string;
  prompt: string;
  options: string[];
  selectedAnswer: number | null;
  onAnswerSelect: (optionIndex: number) => void;
}

export function QuizQuestionCard({
  category,
  questionNumber,
  timeLeft,
  prompt,
  options,
  selectedAnswer,
  onAnswerSelect,
}: QuizQuestionCardProps) {
  return (
    <div className="mt-4 rounded-[30px] bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-700">
          {category}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold text-slate-600">
          {timeLeft}
        </span>
      </div>

      <div className="mb-4 rounded-[26px] bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 p-4">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
          <span>Question {questionNumber}</span>
          <span>1/20</span>
        </div>
        <div className="mt-4 h-28 rounded-[22px] bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.25),_rgba(255,255,255,0.9)_58%)]" />
      </div>

      <h3 className="mb-4 text-lg font-bold leading-relaxed text-slate-900">{prompt}</h3>

      <div className="space-y-3">
        {options.map((option, index) => (
          <AnswerOption
            key={option}
            label={String.fromCharCode(65 + index)}
            text={option}
            isSelected={selectedAnswer === index}
            onSelect={() => onAnswerSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}
