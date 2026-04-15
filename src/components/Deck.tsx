"use client";

import type { Deck as DeckType } from "@/lib/schema";
import { Cover } from "./slides/Cover";
import { Chapter } from "./slides/Chapter";
import { Agenda } from "./slides/Agenda";
import {
  Statement,
  Quote,
  Tldr,
  Manifesto,
  Definition,
  Thanks,
} from "./slides/TextSlides";
import {
  Bullets,
  Numbered,
  Checklist,
  TwoColumns,
} from "./slides/ListSlides";
import {
  BigNumber,
  Bento,
  StatRow,
  Comparison,
  ProsCons,
  Progress,
} from "./slides/NumberSlides";
import {
  Timeline,
  Roadmap,
  Process,
  Pyramid,
} from "./slides/FlowSlides";
import {
  Photo,
  SplitPhoto,
  PhotoGrid,
  QuotePhoto,
} from "./slides/PhotoSlides";
import { Team, Speaker } from "./slides/PeopleSlides";
import {
  FeatureGrid,
  LogoWall,
  Faq,
  Pricing,
  KpiDashboard,
  ProblemSolution,
  TestimonialGrid,
  Matrix2x2,
  Callout,
  Scorecard,
  Funnel,
  Venn,
  Code,
  SectionDivider,
  HeroMetrics,
  IconList,
  ReleaseNotes,
  Contacts,
  Principle,
  QrCta,
} from "./slides/BusinessSlides";

/**
 * Dispatcher — renders each slide through the component matching its `type`.
 * The discriminated union guarantees exhaustive coverage at compile time.
 */
export function Deck({ deck }: { deck: DeckType }) {
  const total = deck.slides.length;

  return (
    <div className="deck" aria-label={deck.title}>
      {deck.slides.map((slide, i) => {
        const key = `${slide.type}-${i}`;
        const base = { index: i, total };
        switch (slide.type) {
          case "cover":
          case "cover-minimal":
            return <Cover key={key} slide={slide} {...base} />;
          case "chapter":
            return <Chapter key={key} slide={slide} {...base} />;
          case "agenda":
            return <Agenda key={key} slide={slide} {...base} />;

          case "statement":
            return <Statement key={key} slide={slide} {...base} />;
          case "quote":
            return <Quote key={key} slide={slide} {...base} />;
          case "tldr":
            return <Tldr key={key} slide={slide} {...base} />;
          case "manifesto":
            return <Manifesto key={key} slide={slide} {...base} />;
          case "definition":
            return <Definition key={key} slide={slide} {...base} />;
          case "thanks":
            return <Thanks key={key} slide={slide} {...base} />;

          case "bullets":
            return <Bullets key={key} slide={slide} {...base} />;
          case "numbered":
            return <Numbered key={key} slide={slide} {...base} />;
          case "checklist":
            return <Checklist key={key} slide={slide} {...base} />;
          case "two-columns":
            return <TwoColumns key={key} slide={slide} {...base} />;

          case "big-number":
            return <BigNumber key={key} slide={slide} {...base} />;
          case "bento":
            return <Bento key={key} slide={slide} {...base} />;
          case "stat-row":
            return <StatRow key={key} slide={slide} {...base} />;
          case "comparison":
            return <Comparison key={key} slide={slide} {...base} />;
          case "pros-cons":
            return <ProsCons key={key} slide={slide} {...base} />;
          case "progress":
            return <Progress key={key} slide={slide} {...base} />;

          case "timeline":
            return <Timeline key={key} slide={slide} {...base} />;
          case "roadmap":
            return <Roadmap key={key} slide={slide} {...base} />;
          case "process":
            return <Process key={key} slide={slide} {...base} />;
          case "pyramid":
            return <Pyramid key={key} slide={slide} {...base} />;

          case "photo":
            return <Photo key={key} slide={slide} {...base} />;
          case "split-photo":
            return <SplitPhoto key={key} slide={slide} {...base} />;
          case "photo-grid":
            return <PhotoGrid key={key} slide={slide} {...base} />;
          case "quote-photo":
            return <QuotePhoto key={key} slide={slide} {...base} />;

          case "team":
            return <Team key={key} slide={slide} {...base} />;
          case "speaker":
            return <Speaker key={key} slide={slide} {...base} />;

          case "feature-grid":
            return <FeatureGrid key={key} slide={slide} {...base} />;
          case "logo-wall":
            return <LogoWall key={key} slide={slide} {...base} />;
          case "faq":
            return <Faq key={key} slide={slide} {...base} />;
          case "pricing":
            return <Pricing key={key} slide={slide} {...base} />;
          case "kpi-dashboard":
            return <KpiDashboard key={key} slide={slide} {...base} />;
          case "problem-solution":
            return <ProblemSolution key={key} slide={slide} {...base} />;
          case "testimonial-grid":
            return <TestimonialGrid key={key} slide={slide} {...base} />;
          case "matrix-2x2":
            return <Matrix2x2 key={key} slide={slide} {...base} />;
          case "callout":
            return <Callout key={key} slide={slide} {...base} />;
          case "scorecard":
            return <Scorecard key={key} slide={slide} {...base} />;

          case "funnel":
            return <Funnel key={key} slide={slide} {...base} />;
          case "venn":
            return <Venn key={key} slide={slide} {...base} />;
          case "code":
            return <Code key={key} slide={slide} {...base} />;
          case "section-divider":
            return <SectionDivider key={key} slide={slide} {...base} />;
          case "hero-metrics":
            return <HeroMetrics key={key} slide={slide} {...base} />;
          case "icon-list":
            return <IconList key={key} slide={slide} {...base} />;
          case "release-notes":
            return <ReleaseNotes key={key} slide={slide} {...base} />;
          case "contacts":
            return <Contacts key={key} slide={slide} {...base} />;
          case "principle":
            return <Principle key={key} slide={slide} {...base} />;
          case "qr-cta":
            return <QrCta key={key} slide={slide} {...base} />;

          default: {
            // Exhaustiveness check — TS error if a new type is added to the
            // union without a case above.
            const _exhaustive: never = slide;
            void _exhaustive;
            return null;
          }
        }
      })}
    </div>
  );
}
