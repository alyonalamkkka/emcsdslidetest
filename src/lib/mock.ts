import type { Deck } from "./schema";

/**
 * Richer mock deck showcasing ~12 of the 30 slide types, used when
 * ANTHROPIC_API_KEY is missing so the UI stays fully browsable.
 */
export const mockDeck: Deck = {
  title: "EMCD — Q1 2026 Review",
  slides: [
    {
      type: "cover",
      eyebrow: "Q1 2026",
      title: "Итоги квартала",
      subtitle: "Финансы, продукт, команда",
      date: "Апрель 2026",
      bgImage: "/brand/photos/emcd-lens.jpg",
    },
    {
      type: "agenda",
      title: "О чём поговорим",
      items: [
        "Ключевые цифры квартала",
        "Продукт и новые фичи",
        "Операционная инфраструктура",
        "Команда и найм",
        "Планы на Q2",
      ],
    },
    {
      type: "statement",
      eyebrow: "Миссия",
      body: "Создать условия, в которых каждый способен использовать деньги для сотворчества и созидания.",
      highlight: "сотворчества и созидания",
    },
    {
      type: "big-number",
      eyebrow: "Ключевая метрика",
      value: "+38%",
      label: "прирост активных пользователей за Q1",
      body: "Рекордный квартал по приросту — первый раз в истории продукта мы перешли отметку в миллион активных кошельков.",
    },
    {
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
    {
      type: "timeline",
      eyebrow: "Календарь",
      title: "Как прошёл квартал",
      steps: [
        { label: "Январь", title: "Релиз Earn v2", body: "Новый UX депозитов и сторис." },
        { label: "Февраль", title: "1M пользователей", body: "Пересекли миллионный рубеж." },
        { label: "Март", title: "Мобильный релиз", body: "iOS и Android обновлены одновременно." },
      ],
    },
    {
      type: "photo",
      title: "Highly boost earn",
      caption: "Инфраструктура, которой мы гордимся",
      image: "/brand/photos/mining-rig.png",
    },
    {
      type: "two-columns",
      title: "Что мы запустили",
      left: {
        heading: "Продукт",
        items: [
          "Earn v2 с новым UX",
          "Push-уведомления по депозитам",
          "Виджет портфеля",
        ],
      },
      right: {
        heading: "Инфраструктура",
        items: [
          "Автоматический rollback",
          "Новая observability-стек",
          "99.98% аптайм за квартал",
        ],
      },
    },
    {
      type: "roadmap",
      eyebrow: "Планы",
      title: "Куда идём во втором квартале",
      quarters: [
        { label: "Q2 · Апрель", items: ["Beta крипто-карты", "API v2"] },
        { label: "Q2 · Май", items: ["Интеграция с банками", "Earn для бизнеса"] },
        { label: "Q2 · Июнь", items: ["Публичный релиз карты", "Referral 2.0"] },
      ],
    },
    {
      type: "quote",
      eyebrow: "Фидбэк",
      body: "Первая крипто-платформа, где я не боюсь держать больше месячной зарплаты. EMCD — это как Тинькофф, только для диджитал-денег.",
      author: "Ирина К.",
      role: "продуктовый маркетолог, пользователь с 2023",
    },
    {
      type: "stat-row",
      eyebrow: "Команда",
      title: "Мы выросли",
      stats: [
        { value: "+24", label: "новых сотрудников" },
        { value: "6", label: "новых команд", accent: true },
        { value: "4", label: "страны" },
      ],
    },
    {
      type: "thanks",
      body: "Спасибо",
      footnote: "emcd.io · @emcd_team",
    },
  ],
};
