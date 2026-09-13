import type { Lang } from "./config";

export const ORG = {
  name: "VIRUNGA ACROBAT CLUB",
  short: "VIR.ACRO CLUB",
  province: "Nord-Kivu",
  country: { fr: "République démocratique du Congo", en: "Democratic Republic of Congo" },
};

const fr = {
  meta: {
    siteName: "VIRUNGA ACROBAT CLUB",
    legalForm: "ASBL — organisation à but non lucratif",
    location: "Nord-Kivu, République démocratique du Congo",
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    programs: "Programmes",
    projects: "Projets",
    impact: "Impact",
    stories: "Témoignages",
    news: "Actualités",
    events: "Événements",
    resources: "Ressources",
    partners: "Partenaires",
    getInvolved: "S'engager",
    safeguarding: "Protection de l'enfance",
    report: "Signaler une préoccupation",
    contact: "Contact",
    search: "Recherche",
    menu: "Menu",
    close: "Fermer",
    openMenu: "Ouvrir le menu de navigation",
  },
  common: {
    learnMore: "En savoir plus",
    readMore: "Lire la suite",
    viewAll: "Tout voir",
    discoverOurWork: "Découvrir notre travail",
    partnerWithUs: "Devenir partenaire",
    supportOurMission: "Soutenir notre mission",
    contactUs: "Nous contacter",
    backHome: "Retour à l'accueil",
    skipToContent: "Aller au contenu principal",
    language: "Langue",
    changeLanguage: "Changer de langue",
    breadcrumb: "Fil d'Ariane",
    loading: "Chargement…",
    filters: "Filtres",
    all: "Tout",
    search: "Rechercher",
    searchPlaceholder: "Rechercher sur le site…",
    noResultsTitle: "Aucun contenu publié pour le moment",
    noResultsBody:
      "Ce contenu sera publié dès qu'il aura été saisi et approuvé par l'administration de l'organisation.",
    pendingContent: "Contenu en attente de publication",
    required: "obligatoire",
    optional: "facultatif",
    submit: "Envoyer",
    formNotConnectedTitle: "Formulaire bientôt actif",
    formNotConnectedBody:
      "L'enregistrement sécurisé des formulaires sera activé avec l'espace administrateur. En attendant, écrivez-nous directement.",
  },
  home: {
    heroTitle:
      "Construire des communautés pacifiques et résilientes par le sport, l'acrobatie, le cirque et les arts.",
    heroBody:
      "VIRUNGA ACROBAT CLUB promeut une paix et un développement durables, renforce le bien-être des enfants et des communautés touchées par les crises et contribue à la protection de l'environnement.",
    heroMediaNote: "Emplacement réservé à une photographie ou vidéo officielle approuvée.",
    whoWeAreTitle: "Qui sommes-nous",
    whoWeAreBody:
      "VIRUNGA ACROBAT CLUB (VIR.ACRO CLUB) est une ASBL congolaise basée au Nord-Kivu. L'organisation travaille avec les enfants, les jeunes et les communautés touchées par les crises, en utilisant le sport, l'acrobatie, le cirque et les arts comme outils de paix, de protection et de développement.",
    missionTitle: "Notre mission",
    mission:
      "Promouvoir une paix et un développement durables, améliorer le bien-être des enfants et des communautés touchées par les crises et protéger l'environnement.",
    visionTitle: "Notre vision",
    vision:
      "Des communautés résilientes et pacifiques où chaque enfant et chaque jeune, grâce au sport, à l'acrobatie, au cirque et aux arts, bénéficie d'un environnement sûr et inclusif, développe son potentiel et devient un acteur de la cohésion sociale, de la protection de l'enfance et de la préservation de l'environnement.",
    programsTitle: "Nos domaines de programme",
    programsBody: "Quatre piliers complémentaires au service des enfants, des jeunes et des communautés.",
    impactTitle: "Notre impact en un coup d'œil",
    impactBody:
      "Seules des données vérifiées et approuvées sont publiées, avec leur période de référence et leur statut de vérification.",
    featuredProjectsTitle: "Projets à la une",
    approachTitle: "Notre approche",
    approachBody: "La manière dont nous travaillons compte autant que ce que nous réalisons.",
    storiesTitle: "Témoignages de la communauté",
    storiesBody: "Des récits publiés uniquement avec consentement et validation en matière de protection.",
    newsTitle: "Dernières actualités",
    eventsTitle: "Prochains événements",
    partnersTitle: "Partenaires et soutiens",
    partnersBody: "Les logos ne sont publiés qu'avec l'autorisation écrite de chaque partenaire.",
    getInvolvedTitle: "S'engager à nos côtés",
    newsletterTitle: "Restez informé",
    newsletterBody: "Recevez nos actualités et publications institutionnelles.",
    finalCtaTitle:
      "Ensemble, nous pouvons bâtir des communautés plus sûres, plus pacifiques et plus résilientes.",
  },
  newsletter: {
    email: "Adresse e-mail",
    firstName: "Prénom",
    subscribe: "S'abonner",
    consent:
      "J'accepte de recevoir les communications de VIRUNGA ACROBAT CLUB. Je peux me désabonner à tout moment.",
  },
  about: {
    title: "À propos de l'organisation",
    lead:
      "VIRUNGA ACROBAT CLUB est une organisation de la société civile congolaise qui accompagne les enfants, les jeunes et les communautés du Nord-Kivu.",
    storyTitle: "Notre histoire",
    storyBody:
      "L'historique détaillé de l'organisation sera publié par l'administration. Aucun élément factuel n'est inventé ici.",
    valuesTitle: "Nos valeurs",
    valuesNote: "Valeurs proposées, à confirmer officiellement par l'administration.",
    approachTitle: "Notre approche",
    whySportTitle: "Pourquoi le sport et les arts",
    whySportBody:
      "Le sport, l'acrobatie, le cirque et les arts créent des espaces sûrs, favorisent la confiance, la discipline et la coopération, et permettent d'aborder la paix, la protection et l'environnement avec les enfants et les jeunes.",
    geographyTitle: "Où nous intervenons",
    geographyBody:
      "Province du Nord-Kivu, République démocratique du Congo. Les localités précises ne sont publiées que lorsqu'elles sont approuvées.",
    leadershipTitle: "Direction",
    governanceTitle: "Gouvernance",
    governanceBody:
      "La structure de gouvernance, les organes de décision et les instances de contrôle seront décrits par l'administration.",
    legalTitle: "Statut légal",
    safeguardingTitle: "Engagement de protection",
  },
  legalFields: {
    organization: "Organisation",
    abbreviation: "Sigle",
    legalForm: "Forme juridique",
    country: "Pays",
    province: "Province",
    registrationNumber: "Numéro d'enregistrement",
    authorizationNumber: "Numéro d'autorisation",
    issuingAuthority: "Autorité compétente",
    registrationDate: "Date d'enregistrement",
    authorizationDate: "Date d'autorisation",
    headquarters: "Siège social",
    taxNumber: "Références fiscales",
    notProvided: "À saisir par l'administration",
    note:
      "Les informations légales sensibles ne sont publiées qu'après saisie et approbation explicites. Seuls les documents marqués « public » peuvent être téléchargés.",
  },
  programs: {
    title: "Nos programmes",
    lead: "Quatre piliers de programme, complémentaires et ancrés dans les communautés.",
    context: "Contexte",
    objectives: "Objectifs",
    activities: "Activités",
    targetGroups: "Groupes cibles",
    geography: "Zone d'intervention",
    outcomes: "Résultats attendus",
    achievements: "Réalisations vérifiées",
    relatedProjects: "Projets liés",
    relatedStories: "Témoignages liés",
    gallery: "Galerie",
  },
  projects: {
    title: "Projets",
    lead: "Les projets mis en œuvre par l'organisation, avec leur statut et leur zone d'intervention.",
    status: { planned: "Planifié", active: "En cours", completed: "Terminé", suspended: "Suspendu", archived: "Archivé" },
    locationNote: "Les coordonnées précises ne sont jamais publiées par défaut.",
  },
  impact: {
    title: "Impact",
    lead:
      "Nous ne publions que des indicateurs vérifiés. Chaque chiffre publié indique sa période de référence et son statut de vérification.",
    noData:
      "Aucun indicateur vérifié n'est publié pour le moment. Les données seront ajoutées par l'administration après vérification.",
    period: "Période de référence",
    verification: "Statut de vérification",
  },
  stories: { title: "Témoignages", lead: "Des récits de la communauté, publiés avec consentement et validation." },
  news: { title: "Actualités", lead: "Communications officielles de l'organisation." },
  events: { title: "Événements", lead: "Activités publiques, formations et rencontres communautaires.", register: "S'inscrire" },
  resources: {
    title: "Ressources",
    lead: "Rapports, politiques et documents publics de l'organisation.",
    category: "Catégorie",
    year: "Année",
    language: "Langue",
    download: "Télécharger",
  },
  partners: {
    title: "Partenaires et soutiens",
    lead: "Nous travaillons avec des institutions, des organisations et des communautés locales.",
    cta: "Devenir partenaire de VIRUNGA ACROBAT CLUB",
  },
  getInvolved: {
    title: "S'engager",
    lead: "Plusieurs manières de soutenir les enfants, les jeunes et les communautés du Nord-Kivu.",
    partner: "Devenir partenaire",
    partnerBody: "Collaborations institutionnelles, techniques et financières.",
    volunteer: "Devenir bénévole",
    volunteerBody: "Mettre vos compétences au service des programmes.",
    support: "Soutenir notre travail",
    supportBody: "Soutien financier, matériel ou en nature.",
    attend: "Participer aux événements",
    share: "Partager notre mission",
  },
  support: {
    title: "Soutenir notre travail",
    lead: "Les dons en ligne ne sont pas encore activés.",
    donationsDisabled:
      "Les paiements en ligne seront activés lorsque des coordonnées de paiement officielles auront été autorisées par l'organisation. Aucune information bancaire n'est inventée.",
    ways: "Différentes façons de soutenir",
  },
  safeguarding: {
    title: "Protection de l'enfance",
    lead:
      "La sécurité, la dignité et le bien-être des enfants et des personnes vulnérables passent avant tout.",
    commitment: "Notre engagement",
    principles: "Principes de sécurité",
    expectations: "Attentes envers le personnel et les bénévoles",
    raising: "Comment signaler une préoccupation",
    confidentiality: "Confidentialité",
    contact: "Contact protection",
    emergency:
      "Ce site ne remplace pas les services d'urgence. En cas de danger immédiat, contactez les autorités locales compétentes en matière de protection ou d'urgence.",
  },
  report: {
    title: "Signaler une préoccupation",
    lead:
      "Ce formulaire sécurisé est distinct des demandes ordinaires. Il est traité uniquement par les personnes autorisées.",
    warning:
      "Ce formulaire ne doit pas être utilisé lorsqu'une personne est en danger immédiat. Contactez les autorités locales de protection ou d'urgence compétentes.",
    anonymous: "Vous pouvez signaler de manière anonyme. Aucun champ d'identification n'est obligatoire.",
  },
  contact: {
    title: "Contact",
    lead: "Écrivez-nous pour toute question générale, partenariat ou demande d'information.",
    details: "Coordonnées",
    safeguardingNotice:
      "Pour toute préoccupation en matière de protection ou toute situation grave, utilisez notre formulaire sécurisé « Signaler une préoccupation ».",
    hours: "Horaires",
    notProvided: "À saisir par l'administration",
  },
  search: {
    title: "Recherche",
    lead: "Rechercher dans les programmes, projets, actualités, témoignages, événements et ressources.",
    empty: "La recherche portera sur le contenu publié une fois la bibliothèque de contenu alimentée.",
  },
  complaints: {
    title: "Plaintes et retours",
    lead:
      "Vos retours nous aident à améliorer nos programmes. Les situations graves de protection relèvent du formulaire sécurisé dédié.",
  },
  legalPages: {
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
    cookies: "Cookies",
    accessibility: "Accessibilité",
    reviewNotice: "RÉVISION JURIDIQUE REQUISE — texte provisoire à valider par un professionnel du droit.",
  },
  footer: {
    tagline:
      "Paix, protection de l'enfance, sport et arts, environnement — au Nord-Kivu, République démocratique du Congo.",
    explore: "Explorer",
    engage: "S'engager",
    legal: "Informations légales",
    rights: "Tous droits réservés.",
    social: "Réseaux sociaux",
  },
  notFound: {
    title: "Page introuvable",
    body: "La page recherchée n'existe pas ou a été déplacée.",
  },
} as const;

type Dict = typeof fr;

const en: Dict = {
  meta: {
    siteName: "VIRUNGA ACROBAT CLUB",
    legalForm: "ASBL — nonprofit organization",
    location: "North Kivu, Democratic Republic of Congo",
  },
  nav: {
    home: "Home",
    about: "About",
    programs: "Programs",
    projects: "Projects",
    impact: "Impact",
    stories: "Stories",
    news: "News",
    events: "Events",
    resources: "Resources",
    partners: "Partners",
    getInvolved: "Get involved",
    safeguarding: "Safeguarding",
    report: "Report a concern",
    contact: "Contact",
    search: "Search",
    menu: "Menu",
    close: "Close",
    openMenu: "Open navigation menu",
  },
  common: {
    learnMore: "Learn more",
    readMore: "Read more",
    viewAll: "View all",
    discoverOurWork: "Discover our work",
    partnerWithUs: "Partner with us",
    supportOurMission: "Support our mission",
    contactUs: "Contact us",
    backHome: "Back to home",
    skipToContent: "Skip to main content",
    language: "Language",
    changeLanguage: "Change language",
    breadcrumb: "Breadcrumb",
    loading: "Loading…",
    filters: "Filters",
    all: "All",
    search: "Search",
    searchPlaceholder: "Search the site…",
    noResultsTitle: "No published content yet",
    noResultsBody:
      "This content will appear once it has been entered and approved by the organization's administrators.",
    pendingContent: "Awaiting publication",
    required: "required",
    optional: "optional",
    submit: "Send",
    formNotConnectedTitle: "Form coming online soon",
    formNotConnectedBody:
      "Secure form storage is activated together with the administration area. In the meantime, please write to us directly.",
  },
  home: {
    heroTitle:
      "Building peaceful, resilient communities through sport, acrobatics, circus and the arts.",
    heroBody:
      "VIRUNGA ACROBAT CLUB promotes sustainable peace and development, strengthens the well-being of children and communities affected by crisis, and contributes to environmental protection.",
    heroMediaNote: "Reserved space for an approved official photograph or video.",
    whoWeAreTitle: "Who we are",
    whoWeAreBody:
      "VIRUNGA ACROBAT CLUB (VIR.ACRO CLUB) is a Congolese nonprofit (ASBL) based in North Kivu. The organization works with children, young people and communities affected by crisis, using sport, acrobatics, circus and the arts as tools for peace, protection and development.",
    missionTitle: "Our mission",
    mission:
      "To promote sustainable peace and development, improve the well-being of children and communities affected by crises, and protect the environment.",
    visionTitle: "Our vision",
    vision:
      "Resilient and peaceful communities where every child and young person, through sport, acrobatics, circus and the arts, benefits from a safe and inclusive environment, develops their potential, and becomes an active contributor to social cohesion, child protection and environmental preservation.",
    programsTitle: "Our program areas",
    programsBody: "Four complementary pillars serving children, young people and communities.",
    impactTitle: "Impact at a glance",
    impactBody:
      "Only verified, approved figures are published, each with its reporting period and verification status.",
    featuredProjectsTitle: "Featured projects",
    approachTitle: "Our approach",
    approachBody: "How we work matters as much as what we deliver.",
    storiesTitle: "Stories from the community",
    storiesBody: "Published only with consent and safeguarding approval.",
    newsTitle: "Latest news",
    eventsTitle: "Upcoming events",
    partnersTitle: "Partners and supporters",
    partnersBody: "Logos are published only with each partner's written permission.",
    getInvolvedTitle: "Get involved with us",
    newsletterTitle: "Stay informed",
    newsletterBody: "Receive our news and institutional publications.",
    finalCtaTitle: "Together, we can build safer, more peaceful and resilient communities.",
  },
  newsletter: {
    email: "Email address",
    firstName: "First name",
    subscribe: "Subscribe",
    consent:
      "I agree to receive communications from VIRUNGA ACROBAT CLUB. I can unsubscribe at any time.",
  },
  about: {
    title: "About the organization",
    lead:
      "VIRUNGA ACROBAT CLUB is a Congolese civil society organization supporting children, young people and communities in North Kivu.",
    storyTitle: "Our story",
    storyBody:
      "The organization's detailed history will be published by the administrators. Nothing factual is invented here.",
    valuesTitle: "Our values",
    valuesNote: "Proposed values, to be confirmed officially by the administrators.",
    approachTitle: "Our approach",
    whySportTitle: "Why sport and the arts",
    whySportBody:
      "Sport, acrobatics, circus and the arts create safe spaces, build confidence, discipline and cooperation, and open the way to work with children and young people on peace, protection and the environment.",
    geographyTitle: "Where we work",
    geographyBody:
      "North Kivu Province, Democratic Republic of Congo. Precise localities are published only once approved.",
    leadershipTitle: "Leadership",
    governanceTitle: "Governance",
    governanceBody:
      "The governance structure, decision-making bodies and oversight arrangements will be described by the administrators.",
    legalTitle: "Legal status",
    safeguardingTitle: "Safeguarding commitment",
  },
  legalFields: {
    organization: "Organization",
    abbreviation: "Abbreviation",
    legalForm: "Legal form",
    country: "Country",
    province: "Province",
    registrationNumber: "Registration number",
    authorizationNumber: "Authorization number",
    issuingAuthority: "Issuing authority",
    registrationDate: "Registration date",
    authorizationDate: "Authorization date",
    headquarters: "Headquarters",
    taxNumber: "Tax / reference numbers",
    notProvided: "To be entered by an administrator",
    note:
      "Sensitive legal information is published only after explicit entry and approval. Only documents marked public may be downloaded.",
  },
  programs: {
    title: "Our programs",
    lead: "Four complementary program pillars, rooted in communities.",
    context: "Context",
    objectives: "Objectives",
    activities: "Activities",
    targetGroups: "Target groups",
    geography: "Geographic focus",
    outcomes: "Expected outcomes",
    achievements: "Verified achievements",
    relatedProjects: "Related projects",
    relatedStories: "Related stories",
    gallery: "Gallery",
  },
  projects: {
    title: "Projects",
    lead: "Projects implemented by the organization, with their status and area of work.",
    status: { planned: "Planned", active: "Active", completed: "Completed", suspended: "Suspended", archived: "Archived" },
    locationNote: "Precise coordinates are never published by default.",
  },
  impact: {
    title: "Impact",
    lead:
      "We publish verified indicators only. Every published figure shows its reporting period and verification status.",
    noData:
      "No verified indicator is published yet. Figures will be added by the administrators once verified.",
    period: "Reporting period",
    verification: "Verification status",
  },
  stories: { title: "Stories", lead: "Community stories, published with consent and safeguarding approval." },
  news: { title: "News", lead: "Official communications from the organization." },
  events: { title: "Events", lead: "Public activities, training sessions and community gatherings.", register: "Register" },
  resources: {
    title: "Resources",
    lead: "Public reports, policies and documents from the organization.",
    category: "Category",
    year: "Year",
    language: "Language",
    download: "Download",
  },
  partners: {
    title: "Partners and supporters",
    lead: "We work with institutions, organizations and local communities.",
    cta: "Partner with VIRUNGA ACROBAT CLUB",
  },
  getInvolved: {
    title: "Get involved",
    lead: "Several ways to support children, young people and communities in North Kivu.",
    partner: "Partner with us",
    partnerBody: "Institutional, technical and funding collaborations.",
    volunteer: "Volunteer",
    volunteerBody: "Put your skills at the service of the programs.",
    support: "Support our work",
    supportBody: "Financial, material or in-kind support.",
    attend: "Attend our events",
    share: "Share our mission",
  },
  support: {
    title: "Support our work",
    lead: "Online donations are not yet enabled.",
    donationsDisabled:
      "Online payments will be switched on once official payment details have been authorized by the organization. No banking information is invented.",
    ways: "Ways to support",
  },
  safeguarding: {
    title: "Safeguarding",
    lead: "The safety, dignity and well-being of children and vulnerable people come first.",
    commitment: "Our commitment",
    principles: "Child safety principles",
    expectations: "Expectations of staff and volunteers",
    raising: "How to raise a concern",
    confidentiality: "Confidentiality",
    contact: "Safeguarding contact",
    emergency:
      "This website does not replace emergency services. If someone is in immediate danger, contact the appropriate local protection or emergency authority.",
  },
  report: {
    title: "Report a concern",
    lead:
      "This secure form is separate from ordinary enquiries. It is handled only by authorized people.",
    warning:
      "This form should not be used when someone is in immediate danger. Contact the appropriate local emergency or protection authority.",
    anonymous: "You may report anonymously. No identifying field is required.",
  },
  contact: {
    title: "Contact",
    lead: "Write to us for general questions, partnerships or information requests.",
    details: "Contact details",
    safeguardingNotice:
      "For safeguarding or serious concerns, use our secure Report a Concern form.",
    hours: "Opening hours",
    notProvided: "To be entered by an administrator",
  },
  search: {
    title: "Search",
    lead: "Search programs, projects, news, stories, events and resources.",
    empty: "Search will cover published content once the content library has been filled in.",
  },
  complaints: {
    title: "Complaints and feedback",
    lead:
      "Your feedback helps us improve our programs. Serious safeguarding matters belong in the dedicated secure form.",
  },
  legalPages: {
    privacy: "Privacy policy",
    terms: "Terms of use",
    cookies: "Cookies",
    accessibility: "Accessibility",
    reviewNotice: "LEGAL REVIEW REQUIRED — provisional text to be validated by a legal professional.",
  },
  footer: {
    tagline:
      "Peace, child protection, sport and arts, environment — in North Kivu, Democratic Republic of Congo.",
    explore: "Explore",
    engage: "Get involved",
    legal: "Legal information",
    rights: "All rights reserved.",
    social: "Social media",
  },
  notFound: {
    title: "Page not found",
    body: "The page you are looking for does not exist or has been moved.",
  },
};

export const messages: Record<Lang, Dict> = { fr, en };
export type Messages = Dict;
