import { images } from './assets';

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  date: string;
  updated: string;
  readTime: string;
  image: string;
  answer: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export const resourceCategories = [
  { slug:'group-travel-planning', title:'Group Travel Planning', description:'Practical guidance for organizers comparing formats, group sizes, planning support, logistics, and the decisions that determine whether a group trip is viable.', image:images.group },
  { slug:'trip-preparation', title:'Trip Preparation', description:'Fitness, packing, documents, equipment, readiness, and the practical work that helps travelers arrive prepared instead of surprised.', image:images.packing },
  { slug:'learn-to-travel', title:'Learn-To Travel', description:'How skill-based trips work, what beginners should expect, and how travel can be designed around instruction and progression.', image:images.surf },
  { slug:'trekking-active-travel', title:'Trekking & Active Travel', description:'Route design, difficulty, support, pacing, guided versus independent formats, and preparation for active group journeys.', image:images.trekking },
  { slug:'cultural-hosted-travel', title:'Cultural & Hosted Travel', description:'Building cultural, cruise, and social group trips that balance shared structure with enough freedom to enjoy the destination.', image:images.culture },
  { slug:'organizer-resources', title:'Organizer Resources', description:'How to shape, explain, launch, fill, and run a trip for a club, community, business, studio, or affinity group.', image:images.planning }
] as const;

import { article as article_0 } from './article-pages/is-a-travel-planner-worth-it-for-a-group-trip';
import { article as article_1 } from './article-pages/guided-trekking-vs-planning-it-yourself';
import { article as article_2 } from './article-pages/how-big-should-a-group-be-for-a-custom-trip';
import { article as article_3 } from './article-pages/learn-to-trips-vs-active-vacations';
import { article as article_4 } from './article-pages/what-support-is-included-in-a-fully-supported-trip';
import { article as article_5 } from './article-pages/how-to-fill-a-group-trip';
import { article as article_6 } from './article-pages/planning-a-trip-for-mixed-ability-levels';
import { article as article_7 } from './article-pages/how-to-prepare-for-your-first-trekking-trip';
import { article as article_8 } from './article-pages/what-is-active-travel';
import { article as article_9 } from './article-pages/how-to-organize-a-group-trip';
import { article as article_10 } from './article-pages/what-documents-do-you-need-for-international-group-travel';
import { article as article_11 } from './article-pages/how-do-learn-to-trips-work-for-beginners';
import { article as article_12 } from './article-pages/how-to-choose-a-destination-for-a-learn-to-trip';
import { article as article_13 } from './article-pages/how-fit-do-you-need-to-be-for-a-trekking-trip';
import { article as article_14 } from './article-pages/group-cruise-vs-cultural-land-tour';
import { article as article_15 } from './article-pages/how-hosted-cruise-group-travel-works';
import { article as article_16 } from './article-pages/how-to-plan-cultural-group-travel-without-over-scheduling';
import { article as article_17 } from './article-pages/what-support-does-a-group-trip-organizer-need';

export const articles: Article[] = [article_0, article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8, article_9, article_10, article_11, article_12, article_13, article_14, article_15, article_16, article_17];

export const getArticle = (slug:string) => articles.find((article) => article.slug === slug);
