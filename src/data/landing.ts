export type LandingPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  hero: string;
  answerTitle: string;
  answer: string;
  introTitle: string;
  intro: string[];
  whoFor: string[];
  included: string[];
  sections: { heading: string; body: string[] }[];
  process: { title: string; copy: string }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

import { page as groupTravelPages_0 } from './landing-pages/clubs-communities';
import { page as groupTravelPages_1 } from './landing-pages/hiking-clubs';
import { page as groupTravelPages_2 } from './landing-pages/dive-communities';
import { page as groupTravelPages_3 } from './landing-pages/wellness-yoga';
import { page as groupTravelPages_4 } from './landing-pages/businesses-teams';
import { page as groupTravelPages_5 } from './landing-pages/social-affinity';
import { page as learnToPages_0 } from './landing-pages/scuba-diving';
import { page as learnToPages_1 } from './landing-pages/mountaineering';
import { page as learnToPages_2 } from './landing-pages/wilderness-skills';
import { page as learnToPages_3 } from './landing-pages/skiing';
import { page as activePages_0 } from './landing-pages/supported-trekking';
import { page as activePages_1 } from './landing-pages/beginner-active-trips';
import { page as culturalPages_0 } from './landing-pages/hosted-cruises';
import { page as culturalPages_1 } from './landing-pages/cultural-group-travel';

export const groupTravelPages: LandingPage[] = [groupTravelPages_0, groupTravelPages_1, groupTravelPages_2, groupTravelPages_3, groupTravelPages_4, groupTravelPages_5];
export const learnToPages: LandingPage[] = [learnToPages_0, learnToPages_1, learnToPages_2, learnToPages_3];
export const activePages: LandingPage[] = [activePages_0, activePages_1];
export const culturalPages: LandingPage[] = [culturalPages_0, culturalPages_1];
