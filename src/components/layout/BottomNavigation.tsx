import { BarChart3, BookOpen, HelpCircle, Home } from 'lucide-react';
import type { TabId } from '../../types/quiz';

interface BottomNavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    { id: 'home', label: 'მთავარი', icon: Home },
    { id: 'notes', label: 'კონსპექტები', icon: BookOpen },
    { id: 'quiz', label: 'ტესტები', icon: HelpCircle },
    { id: 'progress', label: 'პროგრესი', icon: BarChart3 },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-[430px] border-t border-slate-100 bg-white/95 px-6 py-2.5 backdrop-blur-md">
      <div className="flex items-center justify-between">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 rounded-xl px-3 py-2 transition-colors ${
                isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className="text-[11px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
