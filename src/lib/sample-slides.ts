import type { Slide, SlideType } from "./schema";

/**
 * One sample payload per slide type — used by /templates gallery.
 * Kept tight and brandbook-accurate (sentence case, short labels).
 */
export const SAMPLE_SLIDES: Record<SlideType, Slide> = {
  cover: {
    type: "cover",
    eyebrow: "Q1 2026",
    title: "Итоги квартала",
    subtitle: "Финансы, продукт, команда",
    date: "Апрель 2026",
    bgImage: "/brand/photos/emcd-lens.jpg",
  },
  "cover-minimal": {
    type: "cover-minimal",
    eyebrow: "Внутренняя презентация",
    title: "Новая стратегия роста",
    subtitle: "4 блока · 60 минут",
  },
  chapter: {
    type: "chapter",
    eyebrow: "Раздел",
    number: "02",
    title: "Продукт и рынок",
    kicker: "Как мы растём в странах MENA и SEA.",
  },
  agenda: {
    type: "agenda",
    title: "О чём поговорим",
    items: [
      "Ключевые цифры квартала",
      "Продукт и новые фичи",
      "Инфраструктура",
      "Команда",
      "Планы на Q2",
    ],
  },
  statement: {
    type: "statement",
    eyebrow: "Миссия",
    body: "Создать условия, в которых каждый способен использовать деньги для сотворчества и созидания.",
    highlight: "сотворчества и созидания",
  },
  quote: {
    type: "quote",
    eyebrow: "Фидбэк",
    body: "Первая крипто-платформа, где я не боюсь держать больше месячной зарплаты.",
    author: "Ирина К.",
    role: "продуктовый маркетолог",
  },
  tldr: {
    type: "tldr",
    headline: "Мы выросли на 38% за квартал",
    body: "Рекордный прирост активных кошельков — впервые перешли отметку в миллион. Основные драйверы — Earn v2 и мобильный релиз.",
  },
  manifesto: {
    type: "manifesto",
    title: "Во что мы верим",
    lines: [
      "Деньги — инструмент созидания, а не выживания.",
      "Продукт должен быть честным — без звёздочек в договоре.",
      "Скорость важнее идеала — доставили быстрее, чем идеально.",
      "Команда важнее процесса.",
    ],
  },
  definition: {
    type: "definition",
    term: "EMCD Earn",
    body: "Гибридный депозит в криптовалюте с ежедневным начислением процентов, выводом за 15 минут и защитой от волатильности.",
  },
  thanks: {
    type: "thanks",
    body: "Спасибо",
    footnote: "emcd.io · @emcd_team",
  },
  bullets: {
    type: "bullets",
    title: "Что мы запустили в Q1",
    items: [
      "Earn v2 с новым UX",
      "Мобильный релиз iOS и Android",
      "Push-уведомления по депозитам",
      "Виджет портфеля на главной",
      "Партнёрская программа v2",
    ],
  },
  numbered: {
    type: "numbered",
    title: "Пять приоритетов Q2",
    items: [
      "Крипто-карта — публичный релиз",
      "Earn для бизнеса",
      "Интеграция с банками",
      "API v2",
      "Referral 2.0",
    ],
  },
  checklist: {
    type: "checklist",
    title: "Готовность к релизу карты",
    items: [
      { text: "Договор с платёжным провайдером", done: true },
      { text: "KYC v2 для карт", done: true },
      { text: "3DS flow", done: true },
      { text: "Публичный лендинг", done: false },
      { text: "Поддержка 24/7", done: false },
    ],
  },
  "two-columns": {
    type: "two-columns",
    title: "Что мы запустили",
    left: {
      heading: "Продукт",
      items: [
        "Earn v2 с новым UX",
        "Push-уведомления",
        "Виджет портфеля",
      ],
    },
    right: {
      heading: "Инфраструктура",
      items: [
        "Автоматический rollback",
        "Новая observability",
        "99.98% аптайм",
      ],
    },
  },
  "big-number": {
    type: "big-number",
    eyebrow: "Ключевая метрика",
    value: "+38%",
    label: "прирост активных пользователей за квартал",
    body: "Рекордный квартал в истории продукта — впервые пересекли отметку в миллион активных кошельков.",
  },
  bento: {
    type: "bento",
    eyebrow: "Ключевые цифры",
    title: "Квартал в одном экране",
    tiles: [
      { value: "14%", label: "годовых по депозиту", accent: true, span: 2 },
      { value: "1.2M", label: "активных пользователей" },
      { value: "+38%", label: "прирост за Q1" },
      { value: "24/7", label: "поддержка" },
      { value: "99.98%", label: "аптайм платформы" },
    ],
  },
  "stat-row": {
    type: "stat-row",
    eyebrow: "Команда",
    title: "Мы выросли",
    stats: [
      { value: "+24", label: "новых сотрудника" },
      { value: "6", label: "новых команд", accent: true },
      { value: "4", label: "страны" },
    ],
  },
  comparison: {
    type: "comparison",
    title: "До и после Earn v2",
    before: { heading: "До", value: "12%", label: "годовых на депозите" },
    after: { heading: "После", value: "14%", label: "годовых на депозите", accent: true },
  },
  "pros-cons": {
    type: "pros-cons",
    title: "Перейти на новую архитектуру?",
    pros: [
      "Быстрее деплой (в 3 раза)",
      "Меньше инфра-расходов",
      "Лучше observability",
    ],
    cons: [
      "Миграция займёт ~2 месяца",
      "Нужен контракт с новым провайдером",
    ],
  },
  progress: {
    type: "progress",
    title: "Готовность фич к Q2",
    bars: [
      { label: "Крипто-карта", value: 78, caption: "бета" },
      { label: "Earn для бизнеса", value: 55 },
      { label: "API v2", value: 90, caption: "RC" },
      { label: "Referral 2.0", value: 32 },
    ],
  },
  timeline: {
    type: "timeline",
    title: "Как прошёл квартал",
    steps: [
      { label: "Январь", title: "Релиз Earn v2", body: "Новый UX депозитов." },
      { label: "Февраль", title: "1M пользователей", body: "Рекордная отметка." },
      { label: "Март", title: "Мобильный релиз", body: "iOS и Android." },
    ],
  },
  roadmap: {
    type: "roadmap",
    title: "Куда идём во втором квартале",
    quarters: [
      { label: "Q2 · Апрель", items: ["Beta крипто-карты", "API v2"] },
      { label: "Q2 · Май", items: ["Earn для бизнеса", "Банки"] },
      { label: "Q2 · Июнь", items: ["Публичный релиз карты", "Referral 2.0"] },
    ],
  },
  process: {
    type: "process",
    title: "Как работает Earn",
    steps: [
      { title: "Депозит", body: "Переводишь крипту в EMCD кошелёк." },
      { title: "Размещение", body: "Средства автоматически распределяются." },
      { title: "Начисление", body: "Проценты ежедневно." },
      { title: "Вывод", body: "В любой момент, до 15 минут." },
    ],
  },
  pyramid: {
    type: "pyramid",
    title: "Наши приоритеты",
    levels: [
      { label: "Безопасность", caption: "Ничто не важнее" },
      { label: "Скорость", caption: "Быстрее, чем ожидает пользователь" },
      { label: "Прозрачность", caption: "Без звёздочек" },
      { label: "Масштаб", caption: "Везде, где есть интернет" },
    ],
  },
  photo: {
    type: "photo",
    title: "Highly boost earn",
    caption: "Инфраструктура, которой мы гордимся",
    image: "/brand/photos/mining-rig.png",
  },
  "split-photo": {
    type: "split-photo",
    title: "Мы — инженеры",
    body: "На 85% команда EMCD состоит из инженеров и продакт-людей. Никаких «менеджеров-менеджеров».",
    image: "/brand/photos/data-bokeh.jpg",
    side: "right",
  },
  "photo-grid": {
    type: "photo-grid",
    title: "Наша экосистема",
    images: [
      { image: "/brand/photos/mining-rig.png", caption: "Майнинг" },
      { image: "/brand/photos/data-bokeh.jpg", caption: "Данные" },
      { image: "/brand/photos/phone-app.png", caption: "Мобайл" },
      { image: "/brand/photos/emcd-lens.jpg", caption: "Бренд" },
    ],
  },
  "quote-photo": {
    type: "quote-photo",
    body: "EMCD — это как Тинькофф, только для диджитал-денег.",
    author: "Ирина К.",
    role: "продуктовый маркетолог",
    image: "/brand/photos/data-bokeh.jpg",
  },
  team: {
    type: "team",
    title: "Команда продукта",
    members: [
      { name: "Алёна К.", role: "Head of Events" },
      { name: "Дмитрий Н.", role: "Product" },
      { name: "Никита К.", role: "Chief of Staff" },
      { name: "Ирина К.", role: "Marketing" },
    ],
  },
  speaker: {
    type: "speaker",
    name: "Алёна Квашнина",
    role: "Head of Events · EMCD",
    bio: "Отвечает за стратегию внешних ивентов, партнёрств и продакт-маркетинга. В EMCD с 2023 года.",
  },
  "feature-grid": {
    type: "feature-grid",
    eyebrow: "Что внутри",
    title: "Четыре опоры продукта",
    features: [
      { glyph: "◆", title: "Earn", body: "Ежедневные проценты на крипто-депозит." },
      { glyph: "▲", title: "Pool", body: "Майнинг-пул с прозрачной статистикой." },
      { glyph: "●", title: "Card", body: "Крипто-карта для ежедневных трат." },
      { glyph: "✦", title: "Coinhold", body: "Кошелёк с мгновенным обменом." },
    ],
  },
  "logo-wall": {
    type: "logo-wall",
    eyebrow: "Партнёры",
    title: "С нами работают",
    caption: "Платёжные провайдеры, биржи и инфраструктурные сервисы",
    logos: ["Binance", "OKX", "Bybit", "Mastercard", "Visa", "KuCoin", "Telegram", "Tron"],
  },
  faq: {
    type: "faq",
    title: "Частые вопросы",
    items: [
      { q: "Когда начисляются проценты?", a: "Каждый день в 00:00 UTC. Не нужно ничего подтверждать вручную." },
      { q: "Есть ли минимальная сумма?", a: "Минимум 10 USDT — ниже нет смысла из-за сетевых комиссий." },
      { q: "Можно ли вывести раньше срока?", a: "Да. Вывод занимает до 15 минут, без штрафов и блокировок." },
    ],
  },
  pricing: {
    type: "pricing",
    eyebrow: "Тарифы",
    title: "Выбери план Earn",
    plans: [
      {
        name: "Flex",
        price: "10%",
        period: "годовых",
        features: ["Вывод в любой момент", "Без минимальной суммы", "Ежедневное начисление"],
      },
      {
        name: "Pro",
        price: "14%",
        period: "годовых",
        features: ["Срок от 30 дней", "Повышенная ставка", "Бонус при продлении", "Личный менеджер"],
        accent: true,
      },
      {
        name: "Business",
        price: "16%",
        period: "годовых",
        features: ["Для юридических лиц", "API-интеграция", "Индивидуальные условия"],
      },
    ],
  },
  "kpi-dashboard": {
    type: "kpi-dashboard",
    eyebrow: "Q1 2026",
    title: "Панель показателей",
    hero: { value: "1.2M", label: "активных пользователей", delta: "+38%" },
    supports: [
      { value: "14%", label: "годовых по Earn" },
      { value: "99.98%", label: "аптайм платформы" },
      { value: "24/7", label: "поддержка" },
    ],
  },
  "problem-solution": {
    type: "problem-solution",
    eyebrow: "Зачем это нужно",
    title: "Крипта без стресса",
    problem: {
      heading: "Проблема",
      body: "Классические депозиты дают 6–8% в рублях, а крипто-рынок пугает волатильностью и сложным UX.",
    },
    solution: {
      heading: "Решение",
      body: "Earn v2 — фиксированная ставка 14% в стейблкоинах, вывод за 15 минут и защита от скачков.",
    },
  },
  "testimonial-grid": {
    type: "testimonial-grid",
    title: "Что говорят пользователи",
    quotes: [
      {
        body: "Первая крипто-платформа, где я держу больше месячной зарплаты и не нервничаю.",
        author: "Ирина К.",
        role: "маркетинг",
      },
      {
        body: "Вывод реально за 15 минут. Проверял трижды — работает.",
        author: "Дмитрий Н.",
        role: "разработчик",
      },
      {
        body: "UX на уровне Тинькофф — в крипте такое большая редкость.",
        author: "Алексей П.",
        role: "продакт",
      },
    ],
  },
  "matrix-2x2": {
    type: "matrix-2x2",
    title: "Где мы на рынке",
    xAxis: "Простота UX",
    yAxis: "Доходность",
    quadrants: [
      { label: "EMCD", caption: "Высокая доходность + простой UX", accent: true },
      { label: "Классические биржи", caption: "Доходность есть, UX сложный" },
      { label: "Банковские вклады", caption: "Просто, но низкая ставка" },
      { label: "Новые кошельки", caption: "Просто, но ставка низкая" },
    ],
  },
  callout: {
    type: "callout",
    glyph: "✦",
    title: "Важно знать",
    body: "Earn — не банковский депозит. Защита средств обеспечивается мульти-подписью и резервным фондом EMCD, а не АСВ.",
    cta: "Подробнее в договоре",
  },
  scorecard: {
    type: "scorecard",
    eyebrow: "Health check",
    title: "Состояние продукта",
    rows: [
      { label: "Активные пользователи", score: "A+", status: "good" },
      { label: "Аптайм платформы", score: "A", status: "good" },
      { label: "Время отклика API", score: "B", status: "warn" },
      { label: "Конверсия в депозит", score: "B+", status: "warn" },
      { label: "Скорость онбординга", score: "C", status: "bad" },
    ],
  },
  funnel: {
    type: "funnel",
    eyebrow: "Воронка онбординга",
    title: "От визита до депозита",
    stages: [
      { label: "Визиты", value: "820K", caption: "уникальные" },
      { label: "Регистрации", value: "112K", caption: "14%" },
      { label: "KYC", value: "78K", caption: "70%" },
      { label: "Первый депозит", value: "41K", caption: "53%" },
    ],
  },
  venn: {
    type: "venn",
    title: "Что делает Earn уникальным",
    circles: [
      { label: "Доходность", caption: "14% годовых" },
      { label: "Ликвидность", caption: "вывод за 15 мин" },
      { label: "Безопасность", caption: "мульти-подпись" },
    ],
    intersection: "EMCD Earn",
  },
  code: {
    type: "code",
    title: "API v2 — создание депозита",
    language: "ts",
    body: `const deposit = await emcd.earn.create({
  asset: "USDT",
  amount: 1000,
  plan: "pro",
});

console.log(deposit.apy); // 0.14`,
    caption: "Один вызов — активный депозит через секунду.",
  },
  "section-divider": {
    type: "section-divider",
    label: "Часть 03",
    title: "Команда и культура",
  },
  "hero-metrics": {
    type: "hero-metrics",
    eyebrow: "Q1 2026 · итоги",
    title: "Квартал в трёх цифрах",
    subtitle: "Главное, что мы унесли с собой в Q2",
    metrics: [
      { value: "1.2M", label: "пользователей" },
      { value: "+38%", label: "прирост", accent: true },
      { value: "99.98%", label: "аптайм" },
    ],
  },
  "icon-list": {
    type: "icon-list",
    eyebrow: "Что получаешь",
    title: "Преимущества Earn v2",
    items: [
      { glyph: "◆", text: "Ежедневные проценты без ручных подтверждений" },
      { glyph: "▲", text: "Вывод за 15 минут без штрафов" },
      { glyph: "●", text: "Защита от волатильности в стейблкоинах" },
      { glyph: "✦", text: "Прозрачный расчёт ставки в договоре" },
    ],
  },
  "release-notes": {
    type: "release-notes",
    version: "v2.4",
    title: "Что нового в апрельском релизе",
    added: [
      "Виджет портфеля на главном экране",
      "Push-уведомления по депозитам",
      "Поддержка TON в Earn",
    ],
    fixed: [
      "Ускорили KYC на 40%",
      "Исправили double-tap при выводе",
      "Поправили расчёт APY в RUB",
    ],
  },
  contacts: {
    type: "contacts",
    eyebrow: "Связаться",
    title: "С кем говорить по вопросам",
    people: [
      { name: "Алёна Квашнина", role: "Events & Partnerships", contact: "@a_kvashina" },
      { name: "Дмитрий Н.", role: "Product", contact: "d@emcd.io" },
      { name: "Никита К.", role: "Chief of Staff", contact: "n@emcd.io" },
    ],
  },
  principle: {
    type: "principle",
    number: "01",
    title: "Скорость важнее идеала",
    body: "Мы доставляем фичу, как только она даёт ценность, и доводим её в проде. Один недоделанный релиз лучше трёх идеальных, но будущих.",
  },
  "qr-cta": {
    type: "qr-cta",
    title: "Попробуй Earn прямо сейчас",
    body: "Наведи камеру — откроется мобильное приложение EMCD с активированным промокодом на +1% к ставке.",
    cta: "Скачать приложение",
    url: "emcd.io/earn",
  },
};
