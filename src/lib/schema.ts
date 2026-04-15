import { z } from "zod";

/**
 * 50-type EMCD slide schema.
 * Claude returns JSON conforming to `deckSchema`; we parse + validate before
 * rendering. Any drift in shape = a clean validation error, not a runtime crash.
 *
 * All 50 types are grouped into families that share a React component via
 * variants. The `type` literal is the contract; layout components live in
 * `components/slides/*`.
 */

// ------------------------- Shared sub-schemas -------------------------
const meta = {
  eyebrow: z.string().max(60).optional(),
  topLeft: z.string().max(80).optional(),
  topRight: z.string().max(80).optional(),
};

const metric = z.object({
  value: z.string().min(1).max(16),
  label: z.string().min(1).max(80),
  accent: z.boolean().optional(),
});

// ============================ COVERS ============================
const cover = z.object({
  type: z.literal("cover"),
  ...meta,
  title: z.string().min(1).max(140),
  subtitle: z.string().max(200).optional(),
  date: z.string().max(40).optional(),
  bgImage: z.string().optional(),
});

const coverMinimal = z.object({
  type: z.literal("cover-minimal"),
  ...meta,
  title: z.string().min(1).max(140),
  subtitle: z.string().max(200).optional(),
});

const chapter = z.object({
  type: z.literal("chapter"),
  ...meta,
  number: z.string().min(1).max(4), // "01", "02", ...
  title: z.string().min(1).max(120),
  kicker: z.string().max(160).optional(),
});

const agenda = z.object({
  type: z.literal("agenda"),
  ...meta,
  title: z.string().min(1).max(80).default("Агенда"),
  items: z.array(z.string().min(1).max(120)).min(2).max(8),
});

// ============================ TEXT ============================
const statement = z.object({
  type: z.literal("statement"),
  ...meta,
  body: z.string().min(1).max(280),
  highlight: z.string().max(60).optional(),
});

const quote = z.object({
  type: z.literal("quote"),
  ...meta,
  body: z.string().min(1).max(280),
  author: z.string().min(1).max(80),
  role: z.string().max(80).optional(),
});

const tldr = z.object({
  type: z.literal("tldr"),
  ...meta,
  headline: z.string().min(1).max(80),
  body: z.string().min(1).max(260),
});

const manifesto = z.object({
  type: z.literal("manifesto"),
  ...meta,
  title: z.string().min(1).max(80),
  lines: z.array(z.string().min(1).max(120)).min(2).max(8),
});

const definition = z.object({
  type: z.literal("definition"),
  ...meta,
  term: z.string().min(1).max(40),
  body: z.string().min(1).max(240),
});

const thanks = z.object({
  type: z.literal("thanks"),
  ...meta,
  body: z.string().min(1).max(80).default("Спасибо"),
  footnote: z.string().max(120).optional(),
});

// ============================ LISTS ============================
const bullets = z.object({
  type: z.literal("bullets"),
  ...meta,
  title: z.string().min(1).max(120),
  items: z.array(z.string().min(1).max(140)).min(2).max(7),
});

const numberedList = z.object({
  type: z.literal("numbered"),
  ...meta,
  title: z.string().min(1).max(120),
  items: z.array(z.string().min(1).max(140)).min(2).max(7),
});

const checklist = z.object({
  type: z.literal("checklist"),
  ...meta,
  title: z.string().min(1).max(120),
  items: z
    .array(
      z.object({
        text: z.string().min(1).max(140),
        done: z.boolean().optional(),
      }),
    )
    .min(2)
    .max(7),
});

const twoColumns = z.object({
  type: z.literal("two-columns"),
  ...meta,
  title: z.string().min(1).max(120),
  left: z.object({
    heading: z.string().min(1).max(60),
    items: z.array(z.string().min(1).max(140)).min(1).max(6),
  }),
  right: z.object({
    heading: z.string().min(1).max(60),
    items: z.array(z.string().min(1).max(140)).min(1).max(6),
  }),
});

// ============================ NUMBERS ============================
const bigNumber = z.object({
  type: z.literal("big-number"),
  ...meta,
  value: z.string().min(1).max(16),
  label: z.string().min(1).max(80),
  body: z.string().max(200).optional(),
});

const bento = z.object({
  type: z.literal("bento"),
  ...meta,
  title: z.string().min(1).max(120),
  tiles: z
    .array(
      z.object({
        value: z.string().min(1).max(16),
        label: z.string().min(1).max(80),
        accent: z.boolean().optional(),
        span: z.union([z.literal(1), z.literal(2)]).optional(),
      }),
    )
    .min(2)
    .max(6),
});

const statRow = z.object({
  type: z.literal("stat-row"),
  ...meta,
  title: z.string().min(1).max(120),
  stats: z.array(metric).min(2).max(4),
});

const comparison = z.object({
  type: z.literal("comparison"),
  ...meta,
  title: z.string().min(1).max(120),
  before: metric.extend({ heading: z.string().min(1).max(60) }),
  after: metric.extend({ heading: z.string().min(1).max(60) }),
});

const prosCons = z.object({
  type: z.literal("pros-cons"),
  ...meta,
  title: z.string().min(1).max(120),
  pros: z.array(z.string().min(1).max(140)).min(1).max(6),
  cons: z.array(z.string().min(1).max(140)).min(1).max(6),
});

const progress = z.object({
  type: z.literal("progress"),
  ...meta,
  title: z.string().min(1).max(120),
  bars: z
    .array(
      z.object({
        label: z.string().min(1).max(80),
        value: z.number().min(0).max(100),
        caption: z.string().max(40).optional(),
      }),
    )
    .min(2)
    .max(6),
});

// ============================ FLOW / STRUCTURE ============================
const timeline = z.object({
  type: z.literal("timeline"),
  ...meta,
  title: z.string().min(1).max(120),
  steps: z
    .array(
      z.object({
        label: z.string().min(1).max(40),
        title: z.string().min(1).max(80),
        body: z.string().max(140).optional(),
      }),
    )
    .min(2)
    .max(6),
});

const roadmap = z.object({
  type: z.literal("roadmap"),
  ...meta,
  title: z.string().min(1).max(120),
  quarters: z
    .array(
      z.object({
        label: z.string().min(1).max(20), // "Q1"
        items: z.array(z.string().min(1).max(80)).min(1).max(5),
      }),
    )
    .min(2)
    .max(4),
});

const process = z.object({
  type: z.literal("process"),
  ...meta,
  title: z.string().min(1).max(120),
  steps: z
    .array(
      z.object({
        title: z.string().min(1).max(40),
        body: z.string().max(120).optional(),
      }),
    )
    .min(3)
    .max(6),
});

const pyramid = z.object({
  type: z.literal("pyramid"),
  ...meta,
  title: z.string().min(1).max(120),
  levels: z
    .array(
      z.object({
        label: z.string().min(1).max(60),
        caption: z.string().max(120).optional(),
      }),
    )
    .min(2)
    .max(5),
});

// ============================ VISUAL / PHOTO ============================
const photo = z.object({
  type: z.literal("photo"),
  ...meta,
  title: z.string().min(1).max(140),
  caption: z.string().max(200).optional(),
  image: z.string(),
});

const splitPhoto = z.object({
  type: z.literal("split-photo"),
  ...meta,
  title: z.string().min(1).max(120),
  body: z.string().max(300).optional(),
  image: z.string(),
  side: z.enum(["left", "right"]).optional(),
});

const photoGrid = z.object({
  type: z.literal("photo-grid"),
  ...meta,
  title: z.string().min(1).max(120),
  images: z
    .array(z.object({ image: z.string(), caption: z.string().max(60).optional() }))
    .min(3)
    .max(6),
});

const quotePhoto = z.object({
  type: z.literal("quote-photo"),
  ...meta,
  body: z.string().min(1).max(240),
  author: z.string().min(1).max(80),
  role: z.string().max(80).optional(),
  image: z.string(),
});

// ============================ PEOPLE ============================
const team = z.object({
  type: z.literal("team"),
  ...meta,
  title: z.string().min(1).max(120),
  members: z
    .array(
      z.object({
        name: z.string().min(1).max(60),
        role: z.string().min(1).max(60),
        image: z.string().optional(),
      }),
    )
    .min(3)
    .max(8),
});

const speaker = z.object({
  type: z.literal("speaker"),
  ...meta,
  name: z.string().min(1).max(60),
  role: z.string().min(1).max(80),
  bio: z.string().max(300).optional(),
  image: z.string().optional(),
});

// ============================ EXTRA (v2) ============================
const featureGrid = z.object({
  type: z.literal("feature-grid"),
  ...meta,
  title: z.string().min(1).max(120),
  features: z
    .array(
      z.object({
        glyph: z.string().min(1).max(3), // one short glyph / emoji / letter
        title: z.string().min(1).max(40),
        body: z.string().min(1).max(140),
      }),
    )
    .min(3)
    .max(6),
});

const logoWall = z.object({
  type: z.literal("logo-wall"),
  ...meta,
  title: z.string().min(1).max(120),
  caption: z.string().max(160).optional(),
  logos: z.array(z.string().min(1).max(20)).min(4).max(12),
});

const faq = z.object({
  type: z.literal("faq"),
  ...meta,
  title: z.string().min(1).max(120),
  items: z
    .array(
      z.object({
        q: z.string().min(1).max(120),
        a: z.string().min(1).max(220),
      }),
    )
    .min(2)
    .max(5),
});

const pricing = z.object({
  type: z.literal("pricing"),
  ...meta,
  title: z.string().min(1).max(120),
  plans: z
    .array(
      z.object({
        name: z.string().min(1).max(30),
        price: z.string().min(1).max(20),
        period: z.string().max(20).optional(),
        features: z.array(z.string().min(1).max(80)).min(2).max(6),
        accent: z.boolean().optional(),
      }),
    )
    .min(2)
    .max(3),
});

const kpiDashboard = z.object({
  type: z.literal("kpi-dashboard"),
  ...meta,
  title: z.string().min(1).max(120),
  hero: z.object({
    value: z.string().min(1).max(16),
    label: z.string().min(1).max(80),
    delta: z.string().max(16).optional(),
  }),
  supports: z.array(metric).min(2).max(4),
});

const problemSolution = z.object({
  type: z.literal("problem-solution"),
  ...meta,
  title: z.string().min(1).max(120),
  problem: z.object({
    heading: z.string().min(1).max(40),
    body: z.string().min(1).max(240),
  }),
  solution: z.object({
    heading: z.string().min(1).max(40),
    body: z.string().min(1).max(240),
  }),
});

const testimonialGrid = z.object({
  type: z.literal("testimonial-grid"),
  ...meta,
  title: z.string().min(1).max(120),
  quotes: z
    .array(
      z.object({
        body: z.string().min(1).max(180),
        author: z.string().min(1).max(60),
        role: z.string().max(60).optional(),
      }),
    )
    .min(2)
    .max(4),
});

const matrix2x2 = z.object({
  type: z.literal("matrix-2x2"),
  ...meta,
  title: z.string().min(1).max(120),
  xAxis: z.string().min(1).max(40),
  yAxis: z.string().min(1).max(40),
  quadrants: z
    .array(
      z.object({
        label: z.string().min(1).max(40),
        caption: z.string().max(80).optional(),
        accent: z.boolean().optional(),
      }),
    )
    .length(4),
});

const callout = z.object({
  type: z.literal("callout"),
  ...meta,
  glyph: z.string().min(1).max(3),
  title: z.string().min(1).max(80),
  body: z.string().min(1).max(280),
  cta: z.string().max(40).optional(),
});

const scorecard = z.object({
  type: z.literal("scorecard"),
  ...meta,
  title: z.string().min(1).max(120),
  rows: z
    .array(
      z.object({
        label: z.string().min(1).max(80),
        score: z.string().min(1).max(10),
        status: z.enum(["good", "warn", "bad"]).optional(),
      }),
    )
    .min(3)
    .max(6),
});

// ============================ EXTRA (v3) ============================
const funnel = z.object({
  type: z.literal("funnel"),
  ...meta,
  title: z.string().min(1).max(120),
  stages: z
    .array(
      z.object({
        label: z.string().min(1).max(40),
        value: z.string().min(1).max(16),
        caption: z.string().max(60).optional(),
      }),
    )
    .min(3)
    .max(5),
});

const venn = z.object({
  type: z.literal("venn"),
  ...meta,
  title: z.string().min(1).max(120),
  circles: z
    .array(
      z.object({
        label: z.string().min(1).max(30),
        caption: z.string().max(60).optional(),
      }),
    )
    .length(3),
  intersection: z.string().min(1).max(40),
});

const code = z.object({
  type: z.literal("code"),
  ...meta,
  title: z.string().min(1).max(120),
  language: z.string().max(20).optional(),
  body: z.string().min(1).max(900),
  caption: z.string().max(160).optional(),
});

const sectionDivider = z.object({
  type: z.literal("section-divider"),
  ...meta,
  label: z.string().min(1).max(40),
  title: z.string().min(1).max(80),
});

const heroMetrics = z.object({
  type: z.literal("hero-metrics"),
  ...meta,
  title: z.string().min(1).max(120),
  subtitle: z.string().max(200).optional(),
  metrics: z.array(metric).length(3),
});

const iconList = z.object({
  type: z.literal("icon-list"),
  ...meta,
  title: z.string().min(1).max(120),
  items: z
    .array(
      z.object({
        glyph: z.string().min(1).max(3),
        text: z.string().min(1).max(140),
      }),
    )
    .min(3)
    .max(6),
});

const releaseNotes = z.object({
  type: z.literal("release-notes"),
  ...meta,
  version: z.string().min(1).max(20),
  title: z.string().min(1).max(120),
  added: z.array(z.string().min(1).max(100)).min(1).max(5),
  fixed: z.array(z.string().min(1).max(100)).min(1).max(5),
});

const contacts = z.object({
  type: z.literal("contacts"),
  ...meta,
  title: z.string().min(1).max(120),
  people: z
    .array(
      z.object({
        name: z.string().min(1).max(40),
        role: z.string().min(1).max(40),
        contact: z.string().min(1).max(60),
      }),
    )
    .min(2)
    .max(4),
});

const principle = z.object({
  type: z.literal("principle"),
  ...meta,
  number: z.string().min(1).max(4),
  title: z.string().min(1).max(80),
  body: z.string().min(1).max(280),
});

const qrCta = z.object({
  type: z.literal("qr-cta"),
  ...meta,
  title: z.string().min(1).max(120),
  body: z.string().max(200).optional(),
  cta: z.string().min(1).max(40),
  url: z.string().min(1).max(80),
});

// ============================ UNION ============================
export const slideSchema = z.discriminatedUnion("type", [
  cover,
  coverMinimal,
  chapter,
  agenda,
  statement,
  quote,
  tldr,
  manifesto,
  definition,
  thanks,
  bullets,
  numberedList,
  checklist,
  twoColumns,
  bigNumber,
  bento,
  statRow,
  comparison,
  prosCons,
  progress,
  timeline,
  roadmap,
  process,
  pyramid,
  photo,
  splitPhoto,
  photoGrid,
  quotePhoto,
  team,
  speaker,
  featureGrid,
  logoWall,
  faq,
  pricing,
  kpiDashboard,
  problemSolution,
  testimonialGrid,
  matrix2x2,
  callout,
  scorecard,
  funnel,
  venn,
  code,
  sectionDivider,
  heroMetrics,
  iconList,
  releaseNotes,
  contacts,
  principle,
  qrCta,
]);

export const deckSchema = z.object({
  title: z.string().min(1).max(120),
  slides: z.array(slideSchema).min(1).max(50),
});

export type Slide = z.infer<typeof slideSchema>;
export type SlideType = Slide["type"];
export type Deck = z.infer<typeof deckSchema>;

/** Human-readable catalog used by the gallery page and prompt. */
export const SLIDE_TYPES: Array<{
  type: SlideType;
  family: string;
  title: string;
  description: string;
}> = [
  { type: "cover", family: "Openers", title: "Cover", description: "Титульник с большим фото-фоном, eyebrow и подзаголовком." },
  { type: "cover-minimal", family: "Openers", title: "Cover Minimal", description: "Минималистичный титульник без фона — только типографика." },
  { type: "chapter", family: "Openers", title: "Chapter", description: "Раздел: огромный номер + название главы." },
  { type: "agenda", family: "Openers", title: "Agenda", description: "План презентации в виде нумерованного списка." },
  { type: "statement", family: "Text", title: "Statement", description: "Одна мощная фраза на весь экран с лайм-highlight-ом." },
  { type: "quote", family: "Text", title: "Quote", description: "Цитата с автором и ролью." },
  { type: "tldr", family: "Text", title: "TL;DR", description: "Короткий хедлайн + одно предложение под ним." },
  { type: "manifesto", family: "Text", title: "Manifesto", description: "Многострочный манифест — ценности, принципы." },
  { type: "definition", family: "Text", title: "Definition", description: "Термин + его определение." },
  { type: "thanks", family: "Text", title: "Thanks", description: "Финальный слайд: короткое «Спасибо» + footnote." },
  { type: "bullets", family: "Lists", title: "Bullets", description: "Простой маркированный список (до 7 пунктов)." },
  { type: "numbered", family: "Lists", title: "Numbered List", description: "Нумерованный список с крупными цифрами." },
  { type: "checklist", family: "Lists", title: "Checklist", description: "Чеклист с отмеченными/неотмеченными пунктами." },
  { type: "two-columns", family: "Lists", title: "Two Columns", description: "Два списка бок о бок с заголовками." },
  { type: "big-number", family: "Numbers", title: "Big Number", description: "Одна гигантская метрика + короткий body." },
  { type: "bento", family: "Numbers", title: "Bento", description: "Сетка 2–6 плиток с числами, одна акцентная лаймовая." },
  { type: "stat-row", family: "Numbers", title: "Stat Row", description: "3–4 метрики в одну строку." },
  { type: "comparison", family: "Numbers", title: "Comparison", description: "До / После или A / B сравнение." },
  { type: "pros-cons", family: "Numbers", title: "Pros / Cons", description: "За и против — два столбца с тегами." },
  { type: "progress", family: "Numbers", title: "Progress", description: "Несколько progress-баров с процентами." },
  { type: "timeline", family: "Flow", title: "Timeline", description: "Горизонтальная линия шагов с датами." },
  { type: "roadmap", family: "Flow", title: "Roadmap", description: "Roadmap по кварталам." },
  { type: "process", family: "Flow", title: "Process", description: "Пошаговый процесс 3–6 шагов." },
  { type: "pyramid", family: "Flow", title: "Pyramid", description: "Пирамида приоритетов / иерархия." },
  { type: "photo", family: "Visual", title: "Photo", description: "Фото на весь экран + оверлей-заголовок." },
  { type: "split-photo", family: "Visual", title: "Split Photo", description: "Половина экрана — текст, половина — фото." },
  { type: "photo-grid", family: "Visual", title: "Photo Grid", description: "Сетка из 3–6 фото." },
  { type: "quote-photo", family: "Visual", title: "Quote + Photo", description: "Цитата поверх фото — hero-момент." },
  { type: "team", family: "People", title: "Team", description: "Команда — 3–8 человек с аватарами и ролями." },
  { type: "speaker", family: "People", title: "Speaker", description: "Один спикер: большое фото + био." },
  { type: "feature-grid", family: "Business", title: "Feature Grid", description: "Сетка 3–6 фич: глиф + заголовок + короткое описание." },
  { type: "logo-wall", family: "Business", title: "Logo Wall", description: "Стена партнёров / клиентов — буквенные логотипы." },
  { type: "faq", family: "Business", title: "FAQ", description: "2–5 пар «вопрос — ответ»." },
  { type: "pricing", family: "Business", title: "Pricing", description: "2–3 тарифные колонки с ценой и списком фич." },
  { type: "kpi-dashboard", family: "Business", title: "KPI Dashboard", description: "Hero-метрика + 2–4 поддерживающих KPI." },
  { type: "problem-solution", family: "Business", title: "Problem / Solution", description: "Две половины экрана: проблема и решение." },
  { type: "testimonial-grid", family: "Business", title: "Testimonials", description: "Сетка из 2–4 коротких цитат-отзывов." },
  { type: "matrix-2x2", family: "Business", title: "Matrix 2×2", description: "Стратегическая матрица 2×2 с осями и квадрантами." },
  { type: "callout", family: "Business", title: "Callout", description: "Боксированный акцент с глифом, заголовком и CTA." },
  { type: "scorecard", family: "Business", title: "Scorecard", description: "Таблица 3–6 строк: метрика + оценка + статус-бейдж." },
  { type: "funnel", family: "Advanced", title: "Funnel", description: "Воронка 3–5 стадий с числами — классический маркетинг." },
  { type: "venn", family: "Advanced", title: "Venn", description: "Диаграмма Венна из трёх кругов и надписи на пересечении." },
  { type: "code", family: "Advanced", title: "Code", description: "Блок кода с подсветкой-моноширинным шрифтом." },
  { type: "section-divider", family: "Advanced", title: "Section Divider", description: "Мини-разделитель: лейбл + короткий заголовок." },
  { type: "hero-metrics", family: "Advanced", title: "Hero Metrics", description: "Cover-hero с тремя оверлейными метриками." },
  { type: "icon-list", family: "Advanced", title: "Icon List", description: "Список пунктов с крупными глифами (вместо точек)." },
  { type: "release-notes", family: "Advanced", title: "Release Notes", description: "Версия + «добавили» и «починили»." },
  { type: "contacts", family: "Advanced", title: "Contacts", description: "Контактные карточки: имя, роль, email/telegram." },
  { type: "principle", family: "Advanced", title: "Principle", description: "Один принцип: огромный номер + заголовок + текст." },
  { type: "qr-cta", family: "Advanced", title: "QR / CTA", description: "Финальный CTA с QR-плейсхолдером и ссылкой." },
];
