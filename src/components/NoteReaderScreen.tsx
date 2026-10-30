import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  User,
  Play,
  Pause,
  HelpCircle,
  Calendar,
  ArrowRight,
  ChevronRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';

type SubjectKey = 'math' | 'georgian' | 'english';

interface QuestionOption {
  id: string;
  label: string;
  text: string;
  isCorrect?: boolean;
}

interface SubjectConfig {
  key: SubjectKey;
  label: string;
  tag: string;
  title: string;
  subtitle: string;
  duration: string;
  progress: number;
  image: string;
  imageLabel: string;
  conceptTitle: string;
  conceptText: string;
  highlights: Array<{ label: string; value: string }>;
  conceptNoteTitle: string;
  conceptNoteText: string;
  themes: Array<{ title: string; detail: string; badge: string }>;
  steps: Array<{ num: string; title: string; desc: string }>;
  quiz: {
    prompt: string;
    options: QuestionOption[];
  };
}

const subjectData: Record<SubjectKey, SubjectConfig> = {
  math: {
    key: 'math',
    label: 'მათემატიკა',
    tag: 'ალგებრა',
    title: 'კვადრატული განტოლებები და ფუნქციის თვისებები',
    subtitle: 'საშუალებით არაპირდაპირი სირთულეების ამოხსნა და პრაქტიკული მიდგომები',
    duration: '8 წუთი',
    progress: 62,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80',
    imageLabel: 'მათემატიკის გრაფიკული ილუსტრაცია • ფორმები და ფუნქციები',
    conceptTitle: 'კვადრატული განტოლების ამოხსნა',
    conceptText:
      'კვადრატული განტოლება არის ax² + bx + c = 0, სადაც a ≠ 0. ამოხსნისთვის ვიყენებთ დისკრიმინანტს D = b² − 4ac. D > 0 ნიშნავს ორ განსხვავებულ ფესვს, D = 0 ერთ მნიშვნელობას, D < 0 კი რეალურ oplossingen არ აქვს.',
    highlights: [
      { label: 'დისკრიმინანტი', value: 'D = b² − 4ac' },
      { label: 'ფორმულა', value: 'x = (-b ± √D) / 2a' },
    ],
    conceptNoteTitle: 'მნიშვნელოვანი რჩევა',
    conceptNoteText:
      'მიუხედავად იმისა, რომ ფორმულა ყოველთვის მუშაობს, უამრავი ამოცანა უფრო სწრაფად მოიხსნება factorization-ით ან completing the square მეთოდით.',
    themes: [
      { title: 'დისკრიმინანტი', detail: 'D = b² − 4ac; განსაზღვრავს ფესვების რაოდენობას და ტიპს.', badge: 'D' },
      { title: 'ვიერი თეორემა', detail: 'ფესვების ჯამი და პროდუქტი უკავშირდება კოეფიციენტებს.', badge: 'Vieta' },
      { title: 'ფუნქციის გრაფიკი', detail: ' parabola-ს სიმეტრია და წვერი განსაზღვრავს მაქსიმუმს ან მინიმუმს.', badge: 'Graph' },
      { title: 'განტოლებების სისტემები', detail: 'სწორი მეთოდები: ჩანაცვლება, დამატება-გამოკლება და გრაფიკული 해.', badge: 'Systems' },
    ],
    steps: [
      { num: '1', title: 'D-ის გამოთვლა', desc: 'განსაზღვრეთ a, b, c და გამოთვალეთ D. ეს პირველადი ნაბიჯია, რადგან D განსაზღვრავს ამოხსნის რაოდენობას.' },
      { num: '2', title: 'ფესვების პოვნა', desc: 'თუ D ≥ 0, გამოიყენეთ x = (-b ± √D) / 2a და მიიღეთ ფესვები.' },
      { num: '3', title: 'შედეგების შემოწმება', desc: 'ჩაანაცვლეთ თითოეული ფესვი თავდაპირველ განტოლებაში, რათა დარწმუნდეთ, რომ მიიღეთ სწორი პასუხი.' },
    ],
    quiz: {
      prompt: 'განტოლება x² − 5x + 6 = 0-ის ფესვებია?',
      options: [
        { id: 'A', label: 'A', text: 'x = 1 და x = 6' },
        { id: 'B', label: 'B', text: 'x = 2 და x = 3', isCorrect: true },
        { id: 'C', label: 'C', text: 'x = −2 და x = −3' },
      ],
    },
  },
  georgian: {
    key: 'georgian',
    label: 'ქართული',
    tag: 'ლიტერატურა',
    title: 'მცირე რომანი – ლექსიკური და სემანტიკური ანალიზი',
    subtitle: 'ლექსიკური იერარქიის, ნიშნის და პოეტური გამოსახულების ამოცნობა',
    duration: '10 წუთი',
    progress: 48,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    imageLabel: 'ქართული ლიტერატურის ანალიზი • ტექსტი და იერარქია',
    conceptTitle: 'ლექსიკური ნიშანი და ენობრივი სტილი',
    conceptText:
      'ქართული ენის ტექსტში მნიშვნელოვანია არა მხოლოდ მნიშვნელობა, ასევე წერის სტილი, ლექსიკური არჩევანი და საგნობრივი ნიუანსი. პოეტურ ტექსტებში მეორდება სიმბოლოები, მეტაფორები და ე.წ. სტილისტური ფიგურები, რომლებიც ხსნის ავტორის დამოკიდებულებას.',
    highlights: [
      { label: 'მეტაფორა', value: 'უანგარო მნიშვნელობის გადატანა' },
      { label: 'სინონიმები', value: 'მნიშვნელობით ახლოს მყოფი სიტყვები' },
    ],
    conceptNoteTitle: 'კონკრეტული რეკომენდაცია',
    conceptNoteText:
      'ტექსტის ანალიზის დროს ყურადღება მიაქციეთ წერის ტონს, სტილის ელემენტებს და ავტორის დამოკიდებულებას გმირებზე.',
    themes: [
      { title: 'ლექსიკა და სინტაქსი', detail: 'სიტყვების მნიშვნელობა, იერარქია, ბრუნება და წინადადების სტრუქტურა.', badge: 'Lex' },
      { title: 'სტილისტიკური გამოსახულებები', detail: 'მეტაფორა, epithet, გამეორება და პოეტური ჭარბწარმოება.', badge: 'Style' },
      { title: 'მოთხრობითი ტექნიკა', detail: 'სიუჟეტი, გმირი, გარემო და კონფლიქტი ტექსტის შიგნით.', badge: 'Plot' },
      { title: 'საგნობრივი აზროვნება', detail: 'ავტორის დამოკიდებულება, ტონი და ტექსტის მთავარიMensaje.', badge: 'Message' },
    ],
    steps: [
      { num: '1', title: 'სიუჟეტის იდენტიფიცირება', desc: 'გაიგეთ, რა ხდება, რა ვითარდება და რა არის მთავარი კონფლიქტი.' },
      { num: '2', title: 'ლექსიკური არჩევანის შეგრძნება', desc: 'შეაფასეთ სიტყვების შერჩევა, გამეორებები და მახასიათებელი epithet-ები.' },
      { num: '3', title: 'სტილის დასკვნა', desc: 'განსაზღვრეთ, თუ ავტორი იყენებს აღწერას, დიალოგს თუ პოეტურ გამოსახულებებს.' },
    ],
    quiz: {
      prompt: 'რომელი სიტყვა არის მეტაფორული გამოსახულება?',
      options: [
        { id: 'A', label: 'A', text: 'საგანი' },
        { id: 'B', label: 'B', text: 'მგლებივით ვხედავდი ღამეს', isCorrect: true },
        { id: 'C', label: 'C', text: 'მოკლე წინადადება' },
      ],
    },
  },
  english: {
    key: 'english',
    label: 'ინგლისური',
    tag: 'Grammar',
    title: 'Present Perfect vs Past Simple',
    subtitle: 'სწორი დროის არჩევა და ნიმუშების ამოცნობა',
    duration: '7 წუთი',
    progress: 71,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    imageLabel: 'English grammar study • sentence structure',
    conceptTitle: 'Present Perfect and Past Simple',
    conceptText:
      'Use Present Perfect for actions that started in the past and still connect to the present, or when the exact time is not important. Use Past Simple for finished actions in a definite past time.',
    highlights: [
      { label: 'Present Perfect', value: 'have/has + V3' },
      { label: 'Past Simple', value: 'V2 + time marker' },
    ],
    conceptNoteTitle: 'Quick rule',
    conceptNoteText:
      'If the sentence has words like yesterday, last year, or in 2019, prefer Past Simple. If it has already, yet, just, or since, prefer Present Perfect.',
    themes: [
      { title: 'Tenses map', detail: 'Present Perfect, Past Simple, and Present Continuous must be chosen by time logic.', badge: 'Tense' },
      { title: 'Time markers', detail: 'yesterday, last year, since, for, already, yet, just, and recently.', badge: 'Time' },
      { title: 'Reading strategy', detail: 'Find the clue word first, then match the tense to the event type.', badge: 'Read' },
      { title: 'Error traps', detail: 'Avoid mixing completed past time with unfinished present connection.', badge: 'Trap' },
    ],
    steps: [
      { num: '1', title: 'Find the time clue', desc: 'Look for a specific time or an unfinished period. This usually decides the tense.' },
      { num: '2', title: 'Choose the form', desc: 'Have/has + past participle for present relevance; past verb form for finished past events.' },
      { num: '3', title: 'Check meaning', desc: 'The sentence should reflect either a present connection or a finished past action.' },
    ],
    quiz: {
      prompt: 'Choose the correct sentence:',
      options: [
        { id: 'A', label: 'A', text: 'I have seen her yesterday.' },
        { id: 'B', label: 'B', text: 'I saw her yesterday.', isCorrect: true },
        { id: 'C', label: 'C', text: 'I has seen her yesterday.' },
      ],
    },
  },
};

const subjectOrder: SubjectKey[] = ['math', 'georgian', 'english'];

export const NoteReaderScreen: React.FC = () => {
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<number>(1);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [activeSubject, setActiveSubject] = useState<SubjectKey>('math');
  const [selectedAnswer, setSelectedAnswer] = useState<Record<SubjectKey, string | null>>({
    math: null,
    georgian: null,
    english: null,
  });

  const currentSubject = useMemo(() => subjectData[activeSubject], [activeSubject]);
  const currentSelected = selectedAnswer[activeSubject] ?? null;

  const handleFontDecrease = () => {
    setFontSizeMultiplier((prev) => Math.max(0.85, prev - 0.1));
  };

  const handleFontIncrease = () => {
    setFontSizeMultiplier((prev) => Math.min(1.3, prev + 0.1));
  };

  const goToSubject = (subject: SubjectKey) => {
    setActiveSubject(subject);
    setIsPlayingAudio(false);
  };

  const switchSubject = (direction: 1 | -1) => {
    const currentIndex = subjectOrder.indexOf(activeSubject);
    const nextIndex = (currentIndex + direction + subjectOrder.length) % subjectOrder.length;
    goToSubject(subjectOrder[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] pb-20 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <header className="sticky top-0 z-40 border-b border-indigo-100/60 bg-[#faf8ff]/90 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-md items-center justify-between">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-all hover:bg-slate-100 active:scale-95"
            onClick={() => window.history.back()}
            type="button"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs text-white shadow-sm">
              <BookOpen className="h-4 w-4" />
            </div>
            <span>კონსპექტის კითხვა</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-all ${
                isBookmarked ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-100'
              }`}
              type="button"
            >
              <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white shadow-sm"
            >
              <User className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="border-b border-slate-100 bg-white px-4 py-2.5">
        <div className="mx-auto flex max-w-md items-center justify-between text-xs">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {subjectOrder.map((subjectKey) => {
              const isActive = subjectKey === activeSubject;
              return (
                <button
                  key={subjectKey}
                  type="button"
                  onClick={() => goToSubject(subjectKey)}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-semibold transition-all ${
                    isActive ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {subjectData[subjectKey].label}
                </button>
              );
            })}
          </div>

          <div className="ml-3 flex items-center gap-1.5 rounded-lg border border-slate-200 p-0.5">
            <button
              onClick={handleFontDecrease}
              className="rounded px-2 py-0.5 font-medium text-slate-600 hover:text-indigo-600 active:bg-slate-50"
              title="შრიფტის შემცირება"
              type="button"
            >
              A-
            </button>
            <span className="h-3 w-px bg-slate-200" />
            <button
              onClick={handleFontIncrease}
              className="rounded px-2 py-0.5 font-medium text-slate-600 hover:text-indigo-600 active:bg-slate-50"
              title="შრიფტის გაზრდა"
              type="button"
            >
              A+
            </button>
          </div>
        </div>

        <div className="mx-auto mt-2 max-w-md">
          <div className="mb-1 flex justify-between text-[10px] font-semibold text-slate-400">
            <span>პროგრესი</span>
            <span>{currentSubject.progress}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${currentSubject.progress}%` }}
            />
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-md space-y-6 px-4 pt-5" style={{ fontSize: `${fontSizeMultiplier * 1}rem` }}>
        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-900 to-indigo-700 p-3.5 text-white shadow-md">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-indigo-900 shadow transition-all hover:scale-105 active:scale-95"
              type="button"
            >
              {isPlayingAudio ? <Pause className="h-4 w-4 fill-current" /> : <Play className="ml-0.5 h-4 w-4 fill-current" />}
            </button>
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-indigo-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                აუდიო-კონსპექტი
              </div>
              <h4 className="text-xs font-bold tracking-tight">{currentSubject.label} • {currentSubject.tag}</h4>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-5 items-end gap-0.5">
              <span className="h-2 w-1 rounded-full bg-white/40" />
              <span className="h-4 w-1 rounded-full bg-white/70" />
              <span className="h-5 w-1 rounded-full bg-white" />
              <span className="h-3 w-1 rounded-full bg-white/70" />
              <span className="h-2 w-1 rounded-full bg-white/50" />
            </div>
            <span className="font-mono text-[11px] text-indigo-200">{currentSubject.duration}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-amber-200/60 bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
              {currentSubject.tag}
            </span>
            <span className="text-xs text-slate-400">თემა #{Math.round(currentSubject.progress / 10)}</span>
          </div>
          <h1 className="text-2xl font-black leading-tight text-slate-900">{currentSubject.title}</h1>
          <p className="text-xs leading-relaxed text-slate-500">{currentSubject.subtitle}</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm">
          <img
            src={currentSubject.image}
            alt={currentSubject.imageLabel}
            className="h-48 w-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-lg bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-amber-400" />
            {currentSubject.imageLabel}
          </div>
        </div>

        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-4 w-1.5 rounded-full bg-indigo-600" />
            <h2 className="text-base font-bold text-slate-900">{currentSubject.conceptTitle}</h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-700">{currentSubject.conceptText}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {currentSubject.highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1.5 rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-900"
              >
                <Calendar className="h-3.5 w-3.5 text-indigo-600" />
                {item.label}: {item.value}
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-2 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 to-purple-50/50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
              <BookOpen className="h-4 w-4" />
              {currentSubject.conceptNoteTitle}
            </div>
            <span className="rounded bg-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-800">
              კონცეფცია
            </span>
          </div>
          <h3 className="text-sm font-bold text-slate-900">{currentSubject.label}</h3>
          <p className="text-xs leading-relaxed text-slate-600">{currentSubject.conceptNoteText}</p>
        </div>

        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <span className="h-4 w-1.5 rounded-full bg-emerald-600" />
            ძირითადი თემები
          </h3>

          <div className="space-y-2.5">
            {currentSubject.themes.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700">
                  {item.badge}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
            <span className="h-4 w-1.5 rounded-full bg-emerald-600" />
            ძირითადი ნაბიჯები
          </h3>

          <div className="space-y-2.5">
            {currentSubject.steps.map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                  {item.num}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700">
              <HelpCircle className="h-4 w-4" />
              სწრაფი თვითშემოწმება
            </div>
            <span className="text-[10px] font-medium text-slate-400">1 შეკითხვა</span>
          </div>

          <p className="text-xs font-bold leading-snug text-slate-900">{currentSubject.quiz.prompt}</p>

          <div className="space-y-2 pt-1">
            {currentSubject.quiz.options.map((opt) => {
              const isSelected = currentSelected === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelectedAnswer((prev) => ({ ...prev, [activeSubject]: opt.id }))}
                  className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left text-xs transition-all ${
                    isSelected
                      ? opt.isCorrect
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold'
                        : 'border-rose-400 bg-rose-50 text-rose-950 font-semibold'
                      : 'border-slate-100 bg-slate-50 text-slate-700 hover:bg-slate-100/70'
                  }`}
                  type="button"
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-lg text-[11px] font-bold ${
                      isSelected
                        ? opt.isCorrect
                          ? 'bg-emerald-600 text-white'
                          : 'bg-rose-600 text-white'
                        : 'border border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    {opt.label}
                  </span>
                  <span className="flex-1">{opt.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <button
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-4 py-3.5 text-xs font-bold text-white shadow-md shadow-indigo-200 transition-all hover:bg-indigo-700 active:scale-[0.98]"
            type="button"
            onClick={() => switchSubject(1)}
          >
            <HelpCircle className="h-4 w-4" />
            {subjectData[subjectOrder[(subjectOrder.indexOf(activeSubject) + 1) % subjectOrder.length]].label}–ის შემდეგი კითხვა
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 transition-all hover:bg-slate-50 active:scale-[0.98]"
            type="button"
            onClick={() => switchSubject(-1)}
          >
            წინა საგანი
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default NoteReaderScreen;
