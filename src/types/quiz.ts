export type TabId = 'home' | 'notes' | 'quiz' | 'progress';

export interface QuizQuestion {
  id: number;
  prompt: string;
  options: string[];
  correctIndex: number;
  category: string;
  image?: string;
}
