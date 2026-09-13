import type { Lang } from "./config";

export type Localized = Record<Lang, string>;
export type LocalizedList = Record<Lang, string[]>;

export type ProgramSlug =
  | "peacebuilding"
  | "child-protection"
  | "sport-acrobatics-arts"
  | "environment";

export interface Program {
  slug: ProgramSlug;
  icon: "peace" | "shield" | "sparkles" | "leaf";
  title: Localized;
  short: Localized;
  full: Localized;
  focus: LocalizedList;
}

export const PROGRAMS: Program[] = [
  {
    slug: "peacebuilding",
    icon: "peace",
    title: {
      fr: "Consolidation de la paix et résilience communautaire",
      en: "Peacebuilding & community resilience",
    },
    short: {
      fr: "Cohésion sociale, dialogue communautaire et participation des jeunes.",
      en: "Social cohesion, community dialogue and youth participation.",
    },
    full: {
      fr: "Ce pilier soutient la coexistence pacifique et la résilience des communautés du Nord-Kivu à travers des activités sensibles aux conflits, le dialogue communautaire, le leadership des jeunes et l'usage du sport et des arts comme vecteurs de paix.",
      en: "This pillar supports peaceful coexistence and community resilience in North Kivu through conflict-sensitive activities, community dialogue, youth leadership, and the use of sport and the arts as vehicles for peace.",
    },
    focus: {
      fr: [
        "Coexistence pacifique",
        "Cohésion sociale",
        "Participation des jeunes",
        "Dialogue communautaire",
        "Résilience communautaire",
        "Activités sensibles aux conflits",
        "Le sport au service de la paix",
        "Les arts au service de la paix",
        "Leadership des jeunes",
      ],
      en: [
        "Peaceful coexistence",
        "Social cohesion",
        "Youth participation",
        "Community dialogue",
        "Community resilience",
        "Conflict-sensitive activities",
        "Sport for peace",
        "Arts for peace",
        "Youth leadership",
      ],
    },
  },
  {
    slug: "child-protection",
    icon: "shield",
    title: { fr: "Protection et bien-être de l'enfant", en: "Child protection & well-being" },
    short: {
      fr: "Des espaces sûrs et inclusifs, la sensibilisation et la participation des enfants.",
      en: "Safe and inclusive spaces, awareness and child participation.",
    },
    full: {
      fr: "Ce pilier crée des espaces sûrs et inclusifs, sensibilise à la protection de l'enfance, développe les compétences de vie et favorise la participation des enfants. L'organisation ne fournit pas de services cliniques, médicaux ou de protection spécialisée, sauf mention explicite approuvée par l'administration.",
      en: "This pillar creates safe and inclusive spaces, raises child protection awareness, builds life skills and encourages child participation. The organization does not provide clinical, medical or specialized protection services unless explicitly stated and approved by the administrators.",
    },
    focus: {
      fr: [
        "Espaces sûrs et inclusifs",
        "Sensibilisation à la protection de l'enfance",
        "Activités récréatives",
        "Compétences de vie",
        "Inclusion",
        "Participation des enfants",
        "Orientation vers les services compétents lorsque cela est pertinent",
        "Bien-être psychosocial par des activités approuvées",
      ],
      en: [
        "Safe and inclusive spaces",
        "Child protection awareness",
        "Recreational activities",
        "Life skills",
        "Inclusion",
        "Child participation",
        "Referral pathways where appropriate",
        "Psychosocial well-being through approved activities",
      ],
    },
  },
  {
    slug: "sport-acrobatics-arts",
    icon: "sparkles",
    title: { fr: "Sport, acrobatie, cirque et arts", en: "Sport, acrobatics, circus & arts" },
    short: {
      fr: "Acrobatie, cirque, danse, théâtre et musique pour révéler les talents.",
      en: "Acrobatics, circus, dance, theatre and music that reveal talent.",
    },
    full: {
      fr: "Le cœur créatif de l'organisation : acrobatie, cirque, sports, danse, théâtre, musique et arts créatifs. Les activités développent la discipline, la confiance, le travail d'équipe et l'expression créative des enfants et des jeunes.",
      en: "The creative heart of the organization: acrobatics, circus, sports, dance, theatre, music and creative arts. Activities build discipline, confidence, teamwork and creative expression among children and young people.",
    },
    focus: {
      fr: [
        "Acrobatie",
        "Cirque",
        "Sports",
        "Danse",
        "Théâtre",
        "Musique",
        "Arts créatifs",
        "Spectacles de jeunes",
        "Développement des talents",
        "Travail d'équipe",
        "Discipline",
        "Confiance",
        "Expression créative",
      ],
      en: [
        "Acrobatics",
        "Circus",
        "Sports",
        "Dance",
        "Theatre",
        "Music",
        "Creative arts",
        "Youth performances",
        "Talent development",
        "Teamwork",
        "Discipline",
        "Confidence",
        "Creative expression",
      ],
    },
  },
  {
    slug: "environment",
    icon: "leaf",
    title: { fr: "Environnement et développement durable", en: "Environment & sustainable development" },
    short: {
      fr: "Éducation environnementale, reboisement et action climatique des jeunes.",
      en: "Environmental education, tree planting and youth climate action.",
    },
    full: {
      fr: "Ce pilier mobilise les jeunes autour de l'éducation environnementale, du reboisement, des assainissements communautaires, de la gestion des déchets et de la sensibilisation au climat et à la conservation.",
      en: "This pillar mobilizes young people around environmental education, tree planting, community cleanups, waste awareness, and climate and conservation awareness.",
    },
    focus: {
      fr: [
        "Éducation environnementale",
        "Plantation d'arbres",
        "Assainissement communautaire",
        "Sensibilisation aux déchets",
        "Sensibilisation à la conservation",
        "Action environnementale des jeunes",
        "Sensibilisation au climat",
        "Initiatives communautaires durables",
      ],
      en: [
        "Environmental education",
        "Tree planting",
        "Community cleanups",
        "Waste awareness",
        "Conservation awareness",
        "Youth environmental action",
        "Climate awareness",
        "Sustainable community initiatives",
      ],
    },
  },
];

export const VALUES: { title: Localized; body: Localized }[] = [
  {
    title: { fr: "Paix", en: "Peace" },
    body: {
      fr: "Agir pour une coexistence pacifique et durable.",
      en: "Working for peaceful and lasting coexistence.",
    },
  },
  {
    title: { fr: "Dignité", en: "Dignity" },
    body: { fr: "Respecter chaque personne accompagnée.", en: "Respecting every person we work with." },
  },
  {
    title: { fr: "Inclusion", en: "Inclusion" },
    body: { fr: "Des activités ouvertes à toutes et à tous.", en: "Activities open to everyone." },
  },
  {
    title: { fr: "Intégrité", en: "Integrity" },
    body: { fr: "Honnêteté dans nos actes et nos rapports.", en: "Honesty in our actions and reporting." },
  },
  {
    title: { fr: "Redevabilité", en: "Accountability" },
    body: { fr: "Rendre compte aux communautés et aux partenaires.", en: "Accountable to communities and partners." },
  },
  {
    title: { fr: "Protection de l'enfance", en: "Child protection" },
    body: { fr: "La sécurité de l'enfant avant toute activité.", en: "Child safety before any activity." },
  },
  {
    title: { fr: "Participation", en: "Participation" },
    body: { fr: "Les jeunes décident avec nous.", en: "Young people decide with us." },
  },
  {
    title: { fr: "Créativité", en: "Creativity" },
    body: { fr: "L'art et le mouvement comme langage commun.", en: "Art and movement as a shared language." },
  },
  {
    title: { fr: "Responsabilité environnementale", en: "Environmental responsibility" },
    body: { fr: "Protéger le milieu de vie des communautés.", en: "Protecting the environment communities live in." },
  },
];

export const APPROACH: { title: Localized; body: Localized }[] = [
  {
    title: { fr: "Participation communautaire", en: "Community participation" },
    body: {
      fr: "Les activités sont conçues avec les communautés, les familles et les jeunes concernés.",
      en: "Activities are designed together with the communities, families and young people concerned.",
    },
  },
  {
    title: { fr: "Inclusion", en: "Inclusion" },
    body: {
      fr: "Filles et garçons, enfants en situation de handicap, jeunes déplacés : chacun a sa place.",
      en: "Girls and boys, children with disabilities, displaced young people: everyone has a place.",
    },
  },
  {
    title: { fr: "Protection de l'enfance", en: "Child safeguarding" },
    body: {
      fr: "Des règles claires, des adultes formés et des procédures de signalement accessibles.",
      en: "Clear rules, trained adults and accessible reporting procedures.",
    },
  },
  {
    title: { fr: "Le sport et les arts pour le développement", en: "Sport and arts for development" },
    body: {
      fr: "L'acrobatie, le cirque et les arts servent d'outils d'apprentissage et de cohésion.",
      en: "Acrobatics, circus and the arts act as tools for learning and cohesion.",
    },
  },
  {
    title: { fr: "Consolidation de la paix", en: "Peacebuilding" },
    body: {
      fr: "Chaque activité est pensée pour être sensible aux conflits.",
      en: "Every activity is designed to be conflict-sensitive.",
    },
  },
  {
    title: { fr: "Responsabilité environnementale", en: "Environmental responsibility" },
    body: {
      fr: "Les programmes intègrent la protection de l'environnement local.",
      en: "Programs integrate protection of the local environment.",
    },
  },
];

export const IMPACT_INDICATORS: { label: Localized }[] = [
  { label: { fr: "Enfants et jeunes touchés", en: "Children and youth reached" } },
  { label: { fr: "Communautés engagées", en: "Communities engaged" } },
  { label: { fr: "Activités réalisées", en: "Activities conducted" } },
  { label: { fr: "Projets achevés", en: "Projects completed" } },
  { label: { fr: "Animateurs formés", en: "Facilitators trained" } },
  { label: { fr: "Activités environnementales", en: "Environmental activities" } },
];

export const RESOURCE_CATEGORIES: Localized[] = [
  { fr: "Rapports annuels", en: "Annual reports" },
  { fr: "Politiques", en: "Policies" },
  { fr: "Plans stratégiques", en: "Strategic plans" },
  { fr: "Rapports de programme", en: "Program reports" },
  { fr: "Recherche", en: "Research" },
  { fr: "Documents légaux", en: "Legal documents" },
  { fr: "Brochures", en: "Brochures" },
  { fr: "Supports de formation", en: "Training materials" },
  { fr: "Ressources environnementales", en: "Environmental resources" },
  { fr: "Autres publications", en: "Other publications" },
];
