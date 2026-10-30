interface SubjectFilterProps {
  subjects: string[];
  active: string;
  onChange: (subject: string) => void;
}

export function SubjectFilter({ subjects, active, onChange }: SubjectFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {subjects.map((subject) => {
        const isActive = active === subject;

        return (
          <button
            key={subject}
            type="button"
            onClick={() => onChange(subject)}
            className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? 'border-primary bg-primary text-white shadow-sm'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
            }`}
          >
            {subject}
          </button>
        );
      })}
    </div>
  );
}
