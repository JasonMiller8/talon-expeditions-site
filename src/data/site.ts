import { images } from './assets';

export const business = {
  name: 'Talon Expeditions',
  legalName: 'Talon Global LLC dba Talon Expeditions',
  email: 'sales@talonexpeditions.com',
  phone: '+1 305 709 6099',
  phoneHref: '+13057096099',
  address: {
    street: '407 Lincoln Rd, Suite 6H166',
    city: 'Miami Beach',
    region: 'FL',
    postalCode: '33139',
    country: 'US'
  },
  serviceArea: 'United States and worldwide destinations',
  description: 'Talon Expeditions is a U.S.-based group travel planning company for private groups, clubs, communities, businesses, and travelers seeking active, experience-led journeys with practical support from early planning through departure.',
  tagline: 'Small groups. Big adventures.'
} as const;

export const primaryNav = [
  { label: 'Experiences', href: '/experiences/' },
  { label: 'Group Travel', href: '/group-travel/' },
  { label: 'Trips', href: '/join-a-trip/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Why Talon', href: '/why-talon/' },
  { label: 'About', href: '/about/' }
] as const;

export const experienceLinks = [
  { label: 'Private Group Travel', href: '/private-group-travel/' },
  { label: 'Custom Group Trip Planning', href: '/custom-group-trip-planning/' },
  { label: 'Learn-To Trips', href: '/learn-to-trips/' },
  { label: 'Trekking & Active Travel', href: '/trekking-active-travel/' },
  { label: 'Cultural & Cruise Travel', href: '/cultural-cruise-travel/' },
  { label: 'Join a Trip', href: '/join-a-trip/' }
] as const;

export const supportLinks = [
  { label: 'How Group Travel Planning Works', href: '/how-it-works/' },
  { label: 'Travel Planning Services', href: '/services/' },
  { label: 'Support & What’s Included', href: '/support/' },
  { label: 'Trip Leaders & Local Partners', href: '/trip-leaders-partners/' },
  { label: 'Where We Serve', href: '/where-we-serve/' },
  { label: 'Frequently Asked Questions', href: '/faq/' },
  { label: 'Trip Planning Examples', href: '/trip-examples/' }
] as const;

export const audienceLinks = [
  { label: 'Clubs & Outdoor Communities', href: '/group-travel/clubs-communities/' },
  { label: 'Hiking & Trekking Clubs', href: '/group-travel/hiking-clubs/' },
  { label: 'Dive & Watersports Communities', href: '/group-travel/dive-communities/' },
  { label: 'Wellness & Yoga Communities', href: '/group-travel/wellness-yoga/' },
  { label: 'Businesses & Teams', href: '/group-travel/businesses-teams/' },
  { label: 'Social & Affinity Groups', href: '/group-travel/social-affinity/' }
] as const;

export const resourceLinks = [
  { label: 'Group Travel Planning', href: '/resources/group-travel-planning/' },
  { label: 'Trip Preparation', href: '/resources/trip-preparation/' },
  { label: 'Learn-To Travel', href: '/resources/learn-to-travel/' },
  { label: 'Trekking & Active Travel', href: '/resources/trekking-active-travel/' },
  { label: 'Cultural & Hosted Travel', href: '/resources/cultural-hosted-travel/' },
  { label: 'Organizer Resources', href: '/resources/organizer-resources/' }
] as const;

export const trustSignals = [
  { title: 'Group-first planning', copy: 'The organizer, traveler mix, pace, and purpose of the trip shape the plan from the beginning.' },
  { title: 'Worldwide coordination', copy: 'Trips can combine flights, lodging, local operators, activities, ground transport, and traveler preparation.' },
  { title: 'Practical preparation', copy: 'Active and skill-based travel works better when expectations, equipment, documents, fitness, and timing are clear early.' },
  { title: 'One planning relationship', copy: 'Instead of asking the organizer to coordinate every supplier separately, Talon helps connect the moving parts into one workable trip.' }
] as const;

export const coreExperienceCards = [
  {
    title: 'Private Group Travel',
    href: '/private-group-travel/',
    image: images.group,
    eyebrow: 'Groups, clubs, communities',
    copy: 'Custom trips shaped around the people traveling, with planning and coordination that reduce the burden on the organizer.'
  },
  {
    title: 'Learn-To Trips',
    href: '/learn-to-trips/',
    image: images.surf,
    eyebrow: 'Travel built around a skill',
    copy: 'Trips where diving, skiing, mountaineering, sailing, surfing, or wilderness capability is part of the reason to go.'
  },
  {
    title: 'Trekking & Active Travel',
    href: '/trekking-active-travel/',
    image: images.trekking,
    eyebrow: 'Trails, mountains, movement',
    copy: 'Supported active journeys for groups that want meaningful days outside without having to engineer the logistics themselves.'
  },
  {
    title: 'Cultural & Cruise Travel',
    href: '/cultural-cruise-travel/',
    image: images.culture,
    eyebrow: 'Culture, coastlines, connection',
    copy: 'Structured but unhurried journeys for groups that want discovery, comfort, social time, and selected active experiences.'
  }
] as const;
