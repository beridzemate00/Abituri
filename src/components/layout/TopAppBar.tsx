import { ArrowLeft, Bell } from 'lucide-react';

interface TopAppBarProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
  avatarText?: string;
}

export function TopAppBar({
  title,
  subtitle,
  showBack = false,
  avatarText = 'ნ',
}: TopAppBarProps) {
  return (
    <header className="flex items-center justify-between px-5 pt-5 pb-4">
      <div className="flex items-center gap-3">
        {showBack ? (
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50">
            <ArrowLeft size={18} className="text-slate-700" />
          </button>
        ) : null}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            {subtitle || 'AbituriApp'}
          </p>
          <h1 className="text-xl font-extrabold text-slate-900">{title}</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50">
          <Bell size={18} className="text-slate-700" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-sm">
          {avatarText}
        </div>
      </div>
    </header>
  );
}
