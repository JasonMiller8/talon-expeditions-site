export type FAQGroup = { slug:string; title:string; description:string; eyebrow:string; groups:{ title:string; items:{q:string;a:string}[] }[] };

export const faqPages: FAQGroup[] = [
  {
    slug:'private-group-travel',
    title:'Private Group Travel FAQ',
    description:'Answers to common questions about custom private group trips, group size, pricing, organizer responsibilities, participant communication, and how Talon Expeditions plans group travel.',
    eyebrow:'Private group travel questions',
    groups:[
      {title:'Starting the trip',items:[
        {q:'How much do we need to know before contacting Talon Expeditions?',a:'Very little. A useful first conversation can start with the group, the kind of experience you want, likely dates, a destination idea, or even only a shared interest. We do not need a finished itinerary before planning begins.'},
        {q:'Do we need a final headcount?',a:'No. An estimated range is usually enough to begin. We can look at how the trip changes at a minimum, target, and practical maximum group size.'},
        {q:'Can you work with a trip we already started planning?',a:'Yes. We can begin with a partial itinerary, a destination, existing reservations, or supplier ideas and determine what still needs to be coordinated.'},
        {q:'Do you only work with formal clubs and businesses?',a:'No. Private groups can include friends, families, alumni, social communities, affinity groups, studios, teams, and other organizers bringing people together.'}
      ]},
      {title:'Cost, booking, and group structure',items:[
        {q:'How is group-trip pricing determined?',a:'Pricing depends on destination, dates, group size, rooming, transport, activities, supplier terms, support level, and any air arrangements. A proposal should state what is included, what is excluded, and which assumptions affect price.'},
        {q:'What happens if the group size changes?',a:'Some costs are fixed and shared across the group while others are per traveler, so price or inclusions can change when headcount moves. We aim to identify important thresholds before the trip is launched.'},
        {q:'Can travelers pay separately?',a:'Depending on the trip structure, individual payment arrangements may be possible. The payment model and deadlines are defined for the specific departure.'},
        {q:'Can people join from different cities?',a:'Often yes. We can structure the trip around a common arrival point or coordinated arrival window when practical.'}
      ]},
      {title:'During planning and preparation',items:[
        {q:'Can Talon help us present the trip to members or participants?',a:'Yes. Organizer support can include structuring the information people need to understand the trip, including purpose, dates, inclusions, activity level, readiness, and the decision process.'},
        {q:'Can a trip support mixed ability levels?',a:'Often. Optional activities, split groups, shorter routes, rest options, and different support levels may be possible, but the itinerary must still have a clear minimum participation standard.'},
        {q:'Who handles traveler preparation?',a:'Talon can provide trip-specific guidance around documents, equipment, fitness, arrival details, and other preparation. Specialist providers may also issue requirements for activities such as diving or mountaineering.'},
        {q:'Is every trip accompanied by a Talon employee?',a:'Not necessarily. The on-trip support model varies. A journey may use Talon staff, local operators, specialist guides or instructors, hosts, or a combination depending on the itinerary.'}
      ]}
    ]
  },
  {
    slug:'learn-to-trips',
    title:'Learn-To Trips FAQ',
    description:'Common questions about skill-based travel, beginner suitability, instruction, certification, equipment, mixed-experience groups, and how Talon Expeditions structures learn-to trips.',
    eyebrow:'Learn-to travel questions',
    groups:[
      {title:'How learn-to travel works',items:[
        {q:'What makes a trip a “Learn-To Trip”?',a:'Learning is central to the itinerary. The trip is designed around instruction, practice, progression, and the destination rather than adding one short lesson to an ordinary vacation.'},
        {q:'What skills can a trip be built around?',a:'Current and developing formats include scuba diving, skiing, mountaineering, wilderness skills, sailing, surfing, and other activities where qualified instruction can be integrated into travel.'},
        {q:'Does every learn-to trip include a certification?',a:'No. Some activities have recognized certification pathways, while others are designed around practical instruction and progression without a formal credential.'},
        {q:'Who provides the instruction?',a:'Instruction is delivered by appropriate qualified local or specialist providers selected for the trip. Talon coordinates the travel and program structure around them.'}
      ]},
      {title:'Participants and prerequisites',items:[
        {q:'Can complete beginners join?',a:'Yes when the specific program is designed for beginners. Some activities still have medical, fitness, age, swimming, or other prerequisites that must be confirmed before booking.'},
        {q:'Can experienced participants join too?',a:'Often. Mixed-level programs need enough instructor capacity, terrain, or activity options to serve different participants without compromising the beginner progression.'},
        {q:'How fit do I need to be?',a:'That depends entirely on the activity and itinerary. We describe the practical physical demands and preparation expectations for the specific trip.'},
        {q:'What if I decide the activity is not for me after arriving?',a:'Options depend on the destination, provider terms, and itinerary. Where possible, we favor destinations that still offer a worthwhile travel experience outside the core learning program.'}
      ]},
      {title:'Equipment and preparation',items:[
        {q:'Do I need to buy specialist equipment?',a:'Not always. Many programs use rental or provider-supplied specialist equipment, while travelers bring personal clothing and other basics. The exact list is trip-specific.'},
        {q:'Can pre-course learning happen before travel?',a:'Sometimes. Scuba theory and other academic components may be completed before departure when the training provider allows it.'},
        {q:'Is insurance required?',a:'Travel and activity insurance requirements vary by trip and provider. Any mandatory coverage is stated before confirmation.'},
        {q:'How much free time is included?',a:'That depends on the learning program. We try to preserve enough recovery and destination time that the journey still feels like travel rather than a compressed training course.'}
      ]}
    ]
  },
  {
    slug:'trip-preparation',
    title:'Trip Preparation FAQ',
    description:'Answers to common questions about passports, visas, insurance, fitness, gear, packing, rooming, medical information, payments, and preparing for active group travel.',
    eyebrow:'Before you travel',
    groups:[
      {title:'Documents and travel readiness',items:[
        {q:'How early should I check my passport?',a:'As soon as you are considering an international trip. Many destinations require validity beyond the travel dates and may have blank-page or visa requirements. Requirements depend on citizenship and itinerary.'},
        {q:'Will Talon tell me if I need a visa?',a:'We can provide trip-specific guidance and direct travelers to authoritative requirements, but each traveler remains responsible for maintaining valid travel documents and complying with entry rules.'},
        {q:'Should I buy travel insurance?',a:'Insurance may be required for some trips or activities and is strongly worth evaluating for higher-cost or active travel. Required coverage is stated for the specific trip.'},
        {q:'What medical information do I need to provide?',a:'That depends on the activity and supplier. Some specialist programs use medical questionnaires or require physician clearance. Travelers should also carry appropriate medication and disclose information when required for safe participation.'}
      ]},
      {title:'Fitness and equipment',items:[
        {q:'How do I know whether I am fit enough?',a:'Use the trip’s real demands: daily duration, elevation, terrain, altitude, technical skills, consecutive active days, expected pack weight, and recovery. We avoid relying only on vague labels such as moderate.'},
        {q:'When should I start training?',a:'That depends on your current level and the trip. Consistent preparation over several months is often more useful than trying to compensate with intense last-minute training.'},
        {q:'Can I rent technical equipment?',a:'Often, but not always. Rental availability, quality, sizing, and what is included vary by destination and activity. The final equipment guidance will distinguish personal items from rental or provider equipment.'},
        {q:'Should I break in new footwear before the trip?',a:'Yes. Important footwear and pack systems should be used in training so fit problems appear before departure.'}
      ]},
      {title:'Final travel logistics',items:[
        {q:'When do I receive final trip information?',a:'Major planning information is shared throughout the process. Final operational details are normally consolidated closer to departure after supplier schedules and traveler information are confirmed.'},
        {q:'Can I arrive early or stay later?',a:'Often. Extensions can be considered during planning, although they may be arranged separately depending on the trip.'},
        {q:'What if my flight is delayed?',a:'Contact the designated trip support channel as soon as possible. The available solution depends on the delay, destination, onward transport, and supplier terms.'},
        {q:'How is rooming handled?',a:'The rooming model is stated for the trip. Options may include shared rooms, single supplements, couples rooms, cabins, huts, or other destination-specific arrangements.'}
      ]}
    ]
  }
];

export const mainFaqGroups = [
  {title:'About Talon Expeditions',items:[
    {q:'What is Talon Expeditions?',a:'Talon Expeditions is a U.S.-based group travel planning company for private groups, clubs, communities, businesses, and travelers seeking active, skill-based, cultural, and experience-led journeys. We help connect itinerary design, travel coordination, organizer support, and traveler preparation.'},
    {q:'Where does Talon Expeditions operate?',a:'We serve U.S.-based and international groups traveling to destinations worldwide. The company’s U.S. correspondence address is in Miami Beach, Florida.'},
    {q:'Is Talon Expeditions only for adventure travel?',a:'No. Active and outdoor travel are important parts of the brand, but trips can also center on culture, cruises, wellness, wildlife, learning, social groups, and comfort-forward travel.'},
    {q:'Is Talon Expeditions the same as Talon Travel?',a:'No. Talon Expeditions is positioned around group-first, active, experience-led and specialist journeys. Talon Travel serves a broader conventional travel role within the Talon ecosystem.'}
  ]},
  {title:'Planning a trip',items:[
    {q:'Can I contact you before I know where we want to go?',a:'Yes. We can begin with the group, activity, budget range, timing, or the kind of experience you want to create.'},
    {q:'Do you plan trips for individuals?',a:'Private groups and organizer-led travel are the primary focus. Individuals may join selected departures or request travel support where the trip fits the Expeditions model.'},
    {q:'How far in advance should we start?',a:'Earlier is better for complex, seasonal, long-haul, permit-limited, or larger group trips. The useful lead time depends on destination, airfare, supplier terms, and how long participants need to make a decision.'},
    {q:'Can you arrange flights?',a:'Air planning can be included or coordinated depending on the trip structure. Some departures may instead use a common destination meeting point so travelers can choose their own routing.'},
    {q:'Can you plan around a specific event?',a:'Yes, subject to availability and the event’s booking conditions. Major events often require longer lead times and more restrictive supplier terms.'}
  ]},
  {title:'Travel style and support',items:[
    {q:'What does “fully supported” mean?',a:'It means the major planning and travel dependencies are coordinated and the organizer has a clearer support path. Exact inclusions vary by trip and are stated in the proposal and travel documents.'},
    {q:'Are trips always guided?',a:'No. Some trips use qualified local guides or instructors throughout, some use them only for specific activities, and others use lighter logistical support.'},
    {q:'Can trips be beginner-friendly?',a:'Yes. Beginner-friendly formats are available where the activity and destination allow them, with clear preparation and participation requirements.'},
    {q:'Do you offer luxury travel?',a:'Trips can include premium accommodation, private transport, upgraded services, and comfort-forward pacing when that fits the group. We do not treat luxury as a separate identity from the experience itself.'},
    {q:'Can we combine several travel styles?',a:'Yes. Trekking can be paired with culture, a learn-to program can be followed by relaxation, and a cruise can include active pre- or post-trip extensions.'}
  ]},
  {title:'Booking, payments, and changes',items:[
    {q:'How do we receive a quote?',a:'Start with a planning inquiry. Once the trip scope is clear enough, we can develop a proposed structure and pricing based on real supplier availability and group assumptions.'},
    {q:'Are deposits required?',a:'Most travel arrangements involve supplier deposits or payment milestones. The amounts and deadlines depend on the trip and are disclosed before confirmation.'},
    {q:'What happens if a traveler cancels?',a:'Cancellation terms depend on the specific booking and suppliers. Travelers should review the written terms that apply before making payment.'},
    {q:'Can an itinerary change after booking?',a:'Yes. Weather, airlines, suppliers, local conditions, safety considerations, or group changes can require adjustments. We communicate material changes and available options when they occur.'}
  ]}
];
