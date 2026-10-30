interface NoteCardProps {
  title: string;
  author: string;
  subject: string;
  readTime: string;
  accent?: string;
}

export function NoteCard({ title, author, subject, readTime, accent = 'from-indigo-500 to-purple-500' }: NoteCardProps) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className={`mb-4 h-24 rounded-2xl bg-gradient-to-br ${accent}`} />
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{subject}</p>
          <h3 className="mt-1 text-base font-bold text-slate-900">{title}</h3>
        </div>
        <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold text-indigo-700">
          {readTime}
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <span>{author}</span>
        <button type="button" className="font-semibold text-primary">
          Open
        </button>
      </div>
    </div>
  );
}
