export interface ProjectSection {
  num: string;
  title: string;
  content: string; // main paragraph(s)
  bullets?: string[];
  subsections?: { title: string; content?: string; bullets?: string[] }[];
  quote?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  sector: string;
  tags: string[];
  year: string;
  role: string;
  scope: string;
  description: string;
  vision: string; // italic quote under intro
  thumbnail: string;
  gallery: string[];
  colors: { name: string; hex: string }[];
  tools: string[];
  metrics: { label: string; value: string }[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "alea-park",
    title: "Alea Park",
    subtitle: "Création du site web d'un complexe sportif & de loisirs",
    type: "UX / UI",
    sector: "Sport · Loisirs",
    tags: ["UX", "UI", "Web"],
    year: "2024",
    role: "UX/UI Designer",
    scope: "UX, UI, structure des contenus, direction visuelle",
    description:
      "Alea Park est un complexe sportif et de loisirs imaginé comme un lieu de vie, mêlant sport, détente et moments collectifs. Le projet consistait à concevoir l'expérience digitale du lieu, afin de traduire en ligne l'énergie, la convivialité et la diversité des activités proposées sur place.",
    vision:
      "Concevoir une expérience digitale capable de donner envie de venir avant même d'avoir franchi les portes du lieu.",
    thumbnail:
      "/images/projects/aleaPark/01.png",
    gallery: [
      "/images/projects/aleaPark/01.png",
      "/images/projects/aleapark/02.png",
      "/images/projects/aleapark/03.png",
      "/images/projects/aleapark/04.png",
      "/images/projects/aleapark/05.png",
      "/images/projects/aleapark/06.png",
      "/images/projects/aleapark/07.png",
      "/images/projects/aleapark/08.png",
      "/images/projects/aleapark/09.png",
      "/images/projects/aleapark/10.png",
      "/images/projects/aleapark/11.png",
      "/images/projects/aleapark/12.png",
      "/images/projects/aleapark/13.png",
      "/images/projects/aleapark/14.png",
      "/images/projects/aleapark/15.png",
      "/images/projects/aleapark/16.png",
      "/images/projects/aleapark/17.png",
    ],
    colors: [
      { name: "Deep Dark", hex: "#212121" },
      { name: "Energy Orange", hex: "#EEE8A9" },
      { name: "Light Cream", hex: "#FFF8F0" },
      { name: "Warm Grey", hex: "#0260D2" },
    ],
    tools: ["Figma", "FigJam", "Notion", "Miro"],
    metrics: [
      { label: "Type de projet", value: "Site web" },
      { label: "Secteur", value: "Sport" },
      { label: "Année", value: "2024" },
      { label: "Rôle", value: "UX/UI" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & enjeux",
        content:
          "Alea Park s'adresse à un public large et hétérogène :",
        bullets: [
          "Sportifs amateurs",
          "Familles",
          "Groupes d'amis",
          "Entreprises (team building, événements)",
        ],
        subsections: [
          {
            title: "Enjeux clés",
            bullets: [
              "Expliquer clairement une offre multiservices",
              "Créer une émotion dès les premières secondes",
              "Donner envie de se déplacer physiquement sur le lieu",
              "Faciliter la prise de contact et la réservation",
            ],
          },
        ],
        quote:
          "L'enjeu principal n'était pas seulement d'informer, mais de projeter l'utilisateur dans une expérience.",
      },
      {
        num: "03",
        title: "Mon rôle & responsabilités",
        content:
          "Sur ce projet, j'ai occupé un rôle central et transverse.",
        bullets: [
          "Définition de la vision UX globale",
          "Structuration des contenus et de l'architecture",
          "Conception du parcours utilisateur",
          "Direction artistique et UI",
          "Hiérarchisation de l'information",
          "Mise en valeur des activités et de l'ambiance du lieu",
        ],
        quote:
          "L'objectif n'était pas de faire \"un site vitrine classique\", mais un support d'attraction et de projection.",
      },
      {
        num: "04",
        title: "Démarche UX",
        content: "",
        subsections: [
          {
            title: "1. Compréhension du lieu et de l'expérience réelle",
            content:
              "Avant toute conception, le travail a consisté à comprendre :",
            bullets: [
              "Ce que l'on vit sur place",
              "Ce que les gens viennent chercher",
              "Ce qui rend Alea Park différent d'un simple terrain de sport",
            ],
          },
          {
            title: "2. Définition des besoins utilisateurs",
            content: "Les attentes principales identifiées :",
            bullets: [
              "Comprendre rapidement ce qu'est Alea Park",
              "Découvrir les différentes activités",
              "Ressentir l'ambiance (convivialité, mouvement, partage)",
              "Trouver facilement comment réserver ou contacter",
            ],
          },
          {
            title: "3. Architecture de l'information",
            content:
              "J'ai conçu une structure simple et progressive :",
            bullets: [
              "Immersion & promesse",
              "Découverte des activités",
              "Mise en confiance",
              "Incitation à l'action",
            ],
          },
        ],
        quote:
          "Le site devait traduire l'énergie collective, pas seulement lister des services.",
      },
      {
        num: "05",
        title: "Direction UI & intentions visuelles",
        content: "",
        subsections: [
          {
            title: "Intention globale",
            content: "Créer une interface :",
            bullets: [
              "Sombre et immersive",
              "Contrastée",
              "Rythmée par de grandes images",
              "Inspirée de l'univers événementiel et sportif",
            ],
          },
          {
            title: "Choix visuels",
            bullets: [
              "Fond sombre pour valoriser les images et créer de la profondeur",
              "Accents lumineux pour guider le regard et structurer la lecture",
              "Typographies lisibles mais affirmées",
              "Espaces généreux pour laisser respirer le contenu",
            ],
          },
        ],
        quote:
          "L'interface devait évoquer l'énergie d'un événement, pas la rigidité d'un site institutionnel.",
      },
      {
        num: "06",
        title: "Écrans & sections clés",
        content: "",
        subsections: [
          {
            title: "Hero section",
            content:
              "Image immersive, message court et impactant, mise en avant de l'expérience avant les détails.",
          },
          {
            title: "Section Activités",
            content:
              "Chaque activité est présentée non pas comme une simple liste, mais comme une expérience, un moment à vivre, un prétexte à la rencontre.",
          },
          {
            title: "Sections d'ambiance & moments forts",
            content:
              "Utilisation de visuels grands formats pour transmettre l'énergie, montrer la dimension collective, renforcer la dimension émotionnelle.",
          },
          {
            title: "Call to action",
            content:
              "Les CTA sont positionnés de manière naturelle : après un pic émotionnel, à des moments de décision logique.",
          },
        ],
      },
      {
        num: "07",
        title: "Valeur apportée",
        content: "",
        subsections: [
          {
            title: "Pour les utilisateurs",
            bullets: [
              "Une compréhension claire du concept",
              "Une immersion dans l'ambiance du lieu",
              "Un parcours fluide et rassurant",
            ],
          },
          {
            title: "Pour Alea Park",
            bullets: [
              "Un outil de communication aligné avec l'expérience réelle",
              "Une image moderne et professionnelle",
              "Un site capable de soutenir la notoriété et la fréquentation",
            ],
          },
        ],
      },
      {
        num: "08",
        title: "Learnings & recul de designer",
        content:
          "Ce projet m'a permis de renforcer une conviction forte. Créer pour Alea Park, c'était trouver l'équilibre entre information, émotion, et lisibilité.",
        quote:
          "Un bon site de service n'explique pas tout, il fait ressentir. Une expérience digitale réussie est celle qui donne envie de vivre l'expérience réelle.",
      },
    ],
  },
  {
    slug: "sin",
    title: "SIN",
    subtitle: "Création du concept digital & du site web",
    type: "UX / UI",
    sector: "Digital · Concept",
    tags: ["UX", "UI", "Web"],
    year: "2024",
    role: "UX/UI Designer",
    scope: "UX · UI · Concept · Prototype",
    description:
      "SIN est un projet client dont l'objectif était de poser les fondations digitales d'une marque inexistante en ligne. Le travail a consisté à imaginer le concept, structurer l'expérience utilisateur et concevoir un site web capable d'exprimer une identité forte, contemporaine et différenciante.",
    vision:
      "Construire une expérience digitale cohérente, expressive et mémorable, à partir d'une page blanche.",
    thumbnail:
      "/images/projects/sin/01.png",
    gallery: [
      "/images/projects/sin/01.png",
      "/images/projects/sin/02.png",
      "/images/projects/sin/03.png",
      "/images/projects/sin/04.png",
      "/images/projects/sin/05.png",
      "/images/projects/sin/06.png",
      "/images/projects/sin/07.png",
      "/images/projects/sin/08.png",
      "/images/projects/sin/09.png",
      "/images/projects/sin/10.png",
      "/images/projects/sin/11.png",
      "/images/projects/sin/12.png",
      "/images/projects/sin/13.png",
      "/images/projects/sin/14.png",
      "/images/projects/sin/15.png",
      "/images/projects/sin/16.png",
      "/images/projects/sin/17.png",
    ],
    colors: [
      { name: "Void Black", hex: "#0D0D0D" },
      { name: "Neon Violet", hex: "#39C15F" },
      { name: "Signal White", hex: "#FFFFFF" },
      { name: "Glass Grey", hex: "#04585D" },
    ],
    tools: ["Figma", "FigJam", "Notion", "After Effects"],
    metrics: [
      { label: "Type de projet", value: "Client" },
      { label: "Mission", value: "Création" },
      { label: "Année", value: "2024" },
      { label: "Rôle", value: "UX/UI" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & enjeux",
        content:
          "SIN ne disposait d'aucune présence web avant le projet. Il fallait donc :",
        bullets: [
          "Définir une vision claire",
          "Traduire une intention de marque",
          "Concevoir une expérience digitale crédible dès le premier contact",
        ],
        subsections: [
          {
            title: "Enjeux principaux",
            bullets: [
              "Créer une identité digitale forte sans historique existant",
              "Donner immédiatement de la lisibilité au projet",
              "Construire une expérience alignée avec une vision contemporaine",
              "Éviter un site générique ou purement décoratif",
            ],
          },
        ],
        quote:
          "Le site devait à la fois poser une image premium, exprimer une attitude, et rester lisible, fluide et accessible.",
      },
      {
        num: "03",
        title: "Mon rôle & responsabilités",
        content:
          "Sur SIN, j'ai assuré l'ensemble de la chaîne de conception.",
        bullets: [
          "Définition du concept digital",
          "Construction de la vision UX",
          "Structuration de l'architecture de l'information",
          "Design UI complet",
          "Conception du prototype interactif",
        ],
        quote:
          "Ce projet m'a permis d'intervenir à un niveau stratégique et créatif, avec une liberté totale de conception.",
      },
      {
        num: "04",
        title: "Démarche UX",
        content: "",
        subsections: [
          {
            title: "1. Clarification du concept",
            content:
              "Le point de départ a été de définir ce que SIN devait évoquer, le ton à adopter, l'émotion à transmettre. Avant de dessiner, l'enjeu était de donner un sens clair à l'expérience.",
          },
          {
            title: "2. Définition des besoins utilisateurs",
            content:
              "Même sans données existantes, certaines attentes universelles ont guidé la conception :",
            bullets: [
              "Comprendre rapidement l'univers de SIN",
              "Identifier la proposition de valeur",
              "Explorer le contenu sans friction",
              "Ressentir une cohérence entre fond et forme",
            ],
          },
          {
            title: "3. Architecture de l'information",
            content:
              "L'architecture a été pensée pour éviter la surcharge, favoriser une lecture fluide, créer un rythme visuel maîtrisé. Chaque section répond à un objectif précis, sans redondance.",
          },
        ],
      },
      {
        num: "05",
        title: "Direction UI & intentions visuelles",
        content: "",
        subsections: [
          {
            title: "Intention globale",
            content: "L'interface devait refléter :",
            bullets: [
              "Une identité forte",
              "Une certaine radicalité graphique",
              "Une approche éditoriale assumée",
            ],
          },
          {
            title: "Principes UI",
            bullets: [
              "Composition sobre mais expressive",
              "Hiérarchie typographique marquée",
              "Utilisation maîtrisée des contrastes",
              "Importance accordée aux respirations visuelles",
            ],
          },
        ],
        quote:
          "Le design ne cherche pas à séduire par l'accumulation, mais par la justesse des choix.",
      },
      {
        num: "06",
        title: "Écrans & moments clés",
        content: "",
        subsections: [
          {
            title: "Hero section",
            content:
              "Message direct, forte présence typographique, mise en place immédiate de l'univers.",
          },
          {
            title: "Sections de contenu",
            content:
              "Chaque section est pensée comme un chapitre, avec une intention claire, un rythme de lecture maîtrisé, une continuité visuelle forte.",
          },
          {
            title: "Prototype",
            content:
              "Le prototype permet de tester les enchaînements, valider les transitions, s'assurer de la cohérence globale de l'expérience.",
          },
        ],
      },
      {
        num: "07",
        title: "Valeur apportée",
        content: "",
        subsections: [
          {
            title: "Pour le client",
            bullets: [
              "Une base digitale solide et crédible",
              "Une identité claire et différenciante",
              "Un site capable d'évoluer avec le projet",
            ],
          },
          {
            title: "Pour l'utilisateur",
            bullets: [
              "Une expérience fluide",
              "Une lecture claire du message",
              "Une immersion cohérente dans l'univers de SIN",
            ],
          },
        ],
      },
      {
        num: "08",
        title: "Learnings & recul de designer",
        content:
          "SIN m'a permis de travailler la cohérence globale, la responsabilité du designer dans la construction d'une vision, l'équilibre entre expression créative et clarté UX.",
        quote:
          "Quand il n'y a pas de cadre existant, le rôle du designer est de créer du sens avant de créer de la forme.",
      },
    ],
  },
  {
    slug: "togotech",
    title: "TogoTech",
    subtitle:
      "Conception UX/UI & prototype d'une plateforme technologique",
    type: "UX / UI",
    sector: "Technologie · Innovation",
    tags: ["UX", "UI", "Product"],
    year: "2024",
    role: "UX/UI Designer",
    scope: "UX · UI · Prototype",
    description:
      "TogoTech est une initiative visant à structurer et valoriser l'écosystème technologique togolais à travers une plateforme digitale claire, accessible et moderne. Le projet avait pour objectif de concevoir une expérience capable de connecter les acteurs du numérique, tout en rendant l'innovation locale lisible et crédible.",
    vision:
      "Concevoir une plateforme qui rende l'innovation visible, compréhensible et accessible.",
    thumbnail:
      "/images/projects/togotech/01.png",
    gallery: [
      "/images/projects/togotech/01.png",
      "/images/projects/togotech/02.png",
      "/images/projects/togotech/03.png",
      "/images/projects/togotech/04.png",
      "/images/projects/togotech/05.png",
      "/images/projects/togotech/06.png",
      "/images/projects/togotech/07.png",
      "/images/projects/togotech/08.png",
      "/images/projects/togotech/09.png",
      "/images/projects/togotech/10.png",
      "/images/projects/togotech/11.png",
      "/images/projects/togotech/12.png",
      "/images/projects/togotech/13.png",
      "/images/projects/togotech/14.png",
      "/images/projects/togotech/15.png",
      "/images/projects/togotech/16.png",
      "/images/projects/togotech/17.png",
    ],
    colors: [
      { name: "Tech Dark", hex: "#00000000" },
      { name: "Trust Blue", hex: "#0EDD83" },
      { name: "Clean White", hex: "#FAFAFA" },
      { name: "Steel Grey", hex: "#00134B" },
    ],
    tools: ["Figma", "FigJam", "Miro", "Notion"],
    metrics: [
      { label: "Type de projet", value: "Client" },
      { label: "Secteur", value: "Tech" },
      { label: "Année", value: "2024" },
      { label: "Rôle", value: "UX/UI" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & enjeux",
        content:
          "Le secteur tech togolais est en pleine croissance, mais souffre souvent :",
        bullets: [
          "D'un manque de visibilité",
          "D'une fragmentation des acteurs",
          "D'une difficulté à accéder à l'information",
        ],
        subsections: [
          {
            title: "Enjeux principaux",
            bullets: [
              "Rendre l'information technologique accessible à tous",
              "Valoriser les initiatives locales",
              "Créer un point d'entrée crédible pour l'écosystème",
              "Offrir une expérience claire malgré la diversité des contenus",
            ],
          },
        ],
        quote:
          "TogoTech devait répondre à un enjeu central : structurer un écosystème complexe dans une interface simple et lisible.",
      },
      {
        num: "03",
        title: "Mon rôle & responsabilités",
        content:
          "Sur ce projet, je suis intervenu sur l'ensemble de l'expérience utilisateur et visuelle.",
        bullets: [
          "Analyse des besoins utilisateurs",
          "Structuration de l'architecture de l'information",
          "Conception des parcours clés",
          "Design UI complet",
          "Réalisation du prototype interactif",
        ],
        quote:
          "Mon rôle a été de traduire un sujet complexe en une expérience fluide et compréhensible.",
      },
      {
        num: "04",
        title: "Démarche UX",
        content: "",
        subsections: [
          {
            title: "1. Compréhension de l'écosystème",
            content:
              "Avant toute conception, il a fallu comprendre la diversité des profils utilisateurs, identifier les attentes clés, clarifier la mission réelle de la plateforme. L'objectif n'était pas de tout montrer, mais de hiérarchiser intelligemment.",
          },
          {
            title: "2. Définition des besoins utilisateurs",
            bullets: [
              "Découvrir rapidement ce qu'est TogoTech",
              "Accéder facilement aux informations clés",
              "Comprendre la valeur de l'écosystème local",
              "Naviguer sans surcharge informationnelle",
            ],
          },
          {
            title: "3. Architecture de l'information",
            content:
              "L'architecture a été conçue pour guider naturellement l'utilisateur, éviter les blocs de contenu trop denses, proposer une navigation progressive et logique. Chaque page a un rôle clair dans le parcours global.",
          },
        ],
      },
      {
        num: "05",
        title: "Direction UI & intentions visuelles",
        content: "",
        subsections: [
          {
            title: "Intention globale",
            content: "L'interface devait :",
            bullets: [
              "Inspirer confiance",
              "Refléter la modernité technologique",
              "Rester sobre et institutionnelle sans être froide",
            ],
          },
          {
            title: "Principes UI",
            bullets: [
              "Design épuré",
              "Hiérarchie typographique claire",
              "Couleurs maîtrisées et cohérentes",
              "Mise en avant du contenu avant le décor",
            ],
          },
        ],
        quote:
          "Le design sert la lisibilité et la crédibilité du message.",
      },
      {
        num: "06",
        title: "Écrans & sections clés",
        content: "",
        subsections: [
          {
            title: "Page d'accueil",
            content:
              "Présentation claire de la mission, mise en contexte de l'écosystème, accès rapide aux contenus stratégiques.",
          },
          {
            title: "Sections de contenu",
            content:
              "Chaque section est pensée pour informer sans surcharger, valoriser les initiatives locales, créer une lecture fluide et structurée.",
          },
          {
            title: "Prototype",
            content:
              "Le prototype permet de tester les parcours principaux, de valider la compréhension globale, d'anticiper les comportements utilisateurs.",
          },
        ],
      },
      {
        num: "07",
        title: "Valeur apportée",
        content: "",
        subsections: [
          {
            title: "Pour le client",
            bullets: [
              "Une plateforme claire et structurée",
              "Une base UX solide pour évoluer",
              "Une image professionnelle et crédible",
            ],
          },
          {
            title: "Pour les utilisateurs",
            bullets: [
              "Accès simplifié à l'information",
              "Lecture claire de l'écosystème tech",
              "Expérience fluide et rassurante",
            ],
          },
        ],
      },
      {
        num: "08",
        title: "Learnings & recul de designer",
        content:
          "TogoTech m'a permis de travailler la structuration de l'information, la pédagogie par le design, l'équilibre entre institutionnel et engagement.",
        quote:
          "Dans des sujets complexes, le vrai défi du design est la clarté.",
      },
    ],
  },
  {
    slug: "on-se-dit-oui",
    title: "On Se Dit Oui",
    subtitle:
      "Conception UX/UI & prototype d'une plateforme mariage",
    type: "UX / Product",
    sector: "Événementiel · Mariage",
    tags: ["UX", "UI", "Product"],
    year: "2024",
    role: "UX/UI Designer · Product Designer",
    scope: "UX · UI · Prototype",
    description:
      "On Se Dit Oui est une plateforme digitale dédiée à l'univers du mariage, conçue pour accompagner les futurs mariés dans l'organisation de leur événement. Le projet visait à créer une expérience à la fois émotionnelle, rassurante et fonctionnelle, capable de simplifier un parcours souvent complexe et chargé affectivement.",
    vision:
      "Concevoir une expérience digitale qui simplifie l'organisation sans dénaturer l'émotion du moment.",
    thumbnail:
      "/images/projects/onseditoui/01.png",
    gallery: [
      "/images/projects/onseditoui/01.png",
      "/images/projects/onseditoui/02.png",
      "/images/projects/onseditoui/03.png",
      "/images/projects/onseditoui/04.png",
      "/images/projects/onseditoui/05.png",
      "/images/projects/onseditoui/06.png",
      "/images/projects/onseditoui/07.png",
      "/images/projects/onseditoui/08.png",
      "/images/projects/onseditoui/09.png",
      "/images/projects/onseditoui/10.png",
      "/images/projects/onseditoui/11.png",
      "/images/projects/onseditoui/12.png",
      "/images/projects/onseditoui/13.png",
      "/images/projects/onseditoui/14.png",
      "/images/projects/onseditoui/15.png",
      "/images/projects/onseditoui/16.png",
      "/images/projects/onseditoui/17.png",
    ],
    colors: [
      { name: "Blush Pink", hex: "#3B3026" },
      { name: "Romantic Rose", hex: "#F09C3D" },
      { name: "Warm Cream", hex: "#FDF8F3" },
      { name: "Charcoal", hex: "#596B54" },
    ],
    tools: ["Figma", "FigJam", "Miro", "Notion", "Maze"],
    metrics: [
      { label: "Type de projet", value: "Client" },
      { label: "Secteur", value: "Mariage" },
      { label: "Année", value: "2024" },
      { label: "Rôle", value: "Product" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & problématique",
        content:
          "On Se Dit Oui est une plateforme B2C permettant aux futurs mariés de créer, personnaliser et gérer un site web de mariage, tout en centralisant des fonctionnalités clés comme les RSVP, la gestion des invités et la communication. Les solutions existantes sur le marché présentent plusieurs limites majeures :",
        bullets: [
          "Templates rigides et peu personnalisables",
          "Interfaces complexes pour des utilisateurs non techniques",
          "Multiplication des outils (site, RSVP, liste d'invités, communication)",
          "Faible contrôle de la confidentialité des informations personnelles",
        ],
        quote:
          "Proposer une solution centralisée, intuitive et élégante, capable de simplifier l'organisation du mariage, réduire la charge mentale des couples, offrir une expérience à la fois fonctionnelle et émotionnelle.",
      },
      {
        num: "03",
        title: "Utilisateurs & cibles",
        content: "",
        subsections: [
          {
            title: "Jeunes mariés connectés (25–32 ans)",
            content:
              "Très mobiles (mobile-first), attentes élevées en matière de design, peu de tolérance à la complexité, besoin de résultats rapides et rassurants.",
          },
          {
            title: "Mariés confirmés (35–45 ans)",
            content:
              "Temps limité, forte sensibilité à la sécurité et à la confidentialité, recherche d'une expérience stable, élégante et fiable.",
          },
        ],
        quote:
          "Ces profils ont guidé toutes les décisions UX, notamment la simplification des parcours et la lisibilité de l'interface.",
      },
      {
        num: "04",
        title: "Mon rôle & périmètre",
        content:
          "Sur On Se Dit Oui, j'ai travaillé comme designer produit UX/UI, avec une vision orientée scalabilité et usage réel.",
        bullets: [
          "Définition de l'expérience utilisateur globale",
          "Conception des parcours clés (création, personnalisation, gestion)",
          "Design UI de la plateforme B2C",
          "Design UX/UI de l'interface d'administration",
          "Conception du prototype fonctionnel (desktop & mobile)",
        ],
        quote:
          "L'enjeu n'était pas seulement esthétique, mais structurel et fonctionnel.",
      },
      {
        num: "05",
        title: "Démarche UX",
        content: "",
        subsections: [
          {
            title: "1. Décomposition du produit",
            content:
              "La plateforme a été pensée autour de 3 grands blocs :",
            bullets: [
              "Site vitrine (découverte & conversion)",
              "Templates de sites de mariage personnalisables",
              "Interface d'administration / builder no-code",
            ],
          },
          {
            title: "2. Simplification d'un produit complexe",
            content: "Le cœur du travail UX a été de :",
            bullets: [
              "Rendre un produit riche accessible à des non-tech",
              "Éviter les effets \"usine à gaz\"",
              "Maintenir une cohérence visuelle malgré la personnalisation",
            ],
          },
        ],
        quote:
          "Chaque décision UX visait à réduire la charge cognitive.",
      },
      {
        num: "06",
        title: "Focus UX : Builder & Dashboard",
        content: "",
        subsections: [
          {
            title: "Dashboard principal",
            content:
              "Conçu comme un hub central : vision immédiate de l'avancement (RSVP, invités, visites), accès rapide aux actions clés, logique de priorisation claire.",
          },
          {
            title: "Éditeur de site (Builder)",
            content:
              "Interface WYSIWYG pensée pour l'édition en temps réel, drag & drop des sections, personnalisation guidée (couleurs, photos, contenus), zéro friction technique.",
          },
        ],
        quote:
          "Permettre à n'importe quel couple de créer un site élégant sans compétences techniques.",
      },
      {
        num: "07",
        title: "Direction UI & intentions visuelles",
        content: "",
        subsections: [
          {
            title: "Intentions",
            bullets: [
              "Esthétique douce et élégante",
              "UI rassurante et lisible",
              "Composants cohérents et modulaires",
              "Hiérarchie claire pour éviter les erreurs",
            ],
          },
          {
            title: "Templates",
            content:
              "Les templates ont été pensés comme des univers visuels cohérents, pas comme de simples skins :",
            bullets: [
              "Élégant classique",
              "Moderne romantique",
              "Bohème authentique",
            ],
          },
        ],
        quote:
          "Le design protège l'utilisateur contre les mauvais choix visuels.",
      },
      {
        num: "08",
        title: "Valeur apportée",
        content: "",
        subsections: [
          {
            title: "Valeur utilisateur",
            bullets: [
              "Centralisation de tous les outils du mariage",
              "Gain de temps considérable",
              "Réduction du stress organisationnel",
              "Expérience fluide, mobile-first",
            ],
          },
          {
            title: "Valeur business",
            bullets: [
              "Produit scalable",
              "Architecture claire pour l'évolution",
              "Expérience différenciante sur un marché saturé",
              "Base solide pour un modèle SaaS",
            ],
          },
        ],
      },
      {
        num: "09",
        title: "Learnings & posture de designer",
        content:
          "Ce projet m'a permis de renforcer ma capacité à structurer des produits complexes, mon approche UX orientée non-tech users, ma vision produit long terme (scalabilité, cohérence, maintenance).",
        quote:
          "Concevoir un produit émotionnel demande encore plus de rigueur UX qu'un outil purement fonctionnel.",
      },
    ],
  },
  {
    slug: "maono",
    title: "Maono",
    subtitle:
      "Conception UX/UI & structuration de l'expérience digitale d'une agence d'innovation africaine",
    type: "UX / UI",
    sector: "Digital · IA · Innovation",
    tags: ["UX", "UI", "Web"],
    year: "2024–2025",
    role: "UX/UI Designer",
    scope: "UX · UI · Structure de contenu · Direction visuelle · Storytelling",
    description:
      "Maono est une agence digitale, créative et IA, positionnée comme acteur clé de la transformation numérique en Afrique. Le projet consistait à concevoir et structurer l'expérience digitale de l'agence, afin de traduire une vision ambitieuse : faire du design, de l'UX et des systèmes intelligents un levier économique, culturel et stratégique.",
    vision:
      "Positionner Maono non pas comme une agence parmi d'autres, mais comme un écosystème d'innovation africain.",
    thumbnail:
      "/images/projects/maono/01.png",
    gallery: [
      "/images/projects/maono/01.png",
      "/images/projects/maono/02.png",
      "/images/projects/maono/03.png",
      "/images/projects/maono/04.png",
      "/images/projects/maono/05.png",
      "/images/projects/maono/06.png",
      "/images/projects/maono/07.png",
      "/images/projects/maono/08.png",
      "/images/projects/maono/09.png",
      "/images/projects/maono/10.png",
      "/images/projects/maono/11.png",
      "/images/projects/maono/12.png",
      "/images/projects/maono/13.png",
      "/images/projects/maono/14.png",
      "/images/projects/maono/15.png",
      "/images/projects/maono/16.png",
      "/images/projects/maono/17.png",
    ],
    colors: [
      { name: "Deep Black", hex: "#0A0A0A" },
      { name: "Innovation Blue", hex: "#FFF2D7" },
      { name: "Clean White", hex: "#FAFAFA" },
      { name: "Graphite", hex: "#1E1E1E" },
    ],
    tools: ["Figma", "FigJam", "Notion", "Miro", "After Effects"],
    metrics: [
      { label: "Type de projet", value: "Client" },
      { label: "Secteur", value: "Digital/IA" },
      { label: "Année", value: "24–25" },
      { label: "Rôle", value: "UX/UI" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & problématique",
        content:
          "La digitalisation en Afrique est un levier majeur de transformation, mais de nombreuses organisations font face à plusieurs freins :",
        bullets: [
          "Difficulté à structurer leur présence digitale",
          "Manque d'outils adaptés aux réalités locales",
          "Complexité d'intégration des nouvelles technologies (IA, ERP, UX)",
          "Décalage entre standards internationaux et contextes africains",
        ],
        quote:
          "Maono se positionne comme une réponse systémique à ces enjeux, en combinant design centré utilisateur, technologies intelligentes, compréhension fine des contextes africains.",
      },
      {
        num: "03",
        title: "Vision & positionnement",
        content:
          "Contrairement à une agence classique, Maono revendique un positionnement clair :",
        bullets: [
          "Le design comme moteur économique",
          "L'UX comme socle stratégique",
          "La technologie comme outil d'impact réel",
        ],
        quote:
          "Maono n'imite pas, elle incarne. Elle se définit comme un écosystème, structuré autour de plusieurs pôles (Studio, Systems, Labs, Strategy), capables d'adresser des problématiques complexes à l'échelle institutionnelle, entrepreneuriale et sociétale.",
      },
      {
        num: "04",
        title: "Mon rôle & responsabilités",
        content:
          "Sur ce projet, mon rôle a été de traduire une vision stratégique complexe en une expérience digitale lisible, crédible et inspirante.",
        bullets: [
          "Structuration de l'architecture UX du site",
          "Hiérarchisation des contenus (vision, services, produits, expertise)",
          "Design UI aligné avec l'identité Maono",
          "Mise en récit (storytelling) de la vision et des expertises",
          "Création d'une expérience cohérente entre discours et perception",
        ],
        quote:
          "L'enjeu principal : éviter le discours institutionnel vide, et faire ressentir concrètement la valeur de Maono.",
      },
      {
        num: "05",
        title: "Démarche UX",
        content: "",
        subsections: [
          {
            title: "1. Clarification du message",
            content:
              "Avant toute interface, un travail de fond a été mené pour répondre à une question simple : Qu'est-ce que Maono fait vraiment, et pourquoi c'est différent ? Cela a conduit à clarifier les piliers de l'agence, structurer les offres, éliminer toute ambiguïté de positionnement.",
          },
          {
            title: "2. Architecture de l'information",
            content:
              "L'architecture UX a été pensée pour guider progressivement l'utilisateur, éviter la surcharge informationnelle, rendre compréhensible un écosystème riche. Chaque section répond à une intention claire : comprendre, rassurer, démontrer, projeter.",
          },
        ],
      },
      {
        num: "06",
        title: "Direction UI & intentions visuelles",
        content: "",
        subsections: [
          {
            title: "Intention globale",
            content: "Le design devait refléter :",
            bullets: [
              "La maturité",
              "La rigueur",
              "La créativité maîtrisée",
              "Une ambition internationale",
            ],
          },
          {
            title: "Principes UI",
            bullets: [
              "Interfaces sobres et contrastées",
              "Visuels forts, mais jamais décoratifs",
              "Hiérarchie typographique affirmée",
              "Espaces maîtrisés pour laisser respirer le discours",
            ],
          },
        ],
        quote:
          "Le design ne cherche pas à séduire par l'effet, mais par la cohérence et la posture.",
      },
      {
        num: "07",
        title: "Valeur apportée",
        content: "",
        subsections: [
          {
            title: "Pour Maono",
            bullets: [
              "Une identité digitale alignée avec sa vision",
              "Une plateforme crédible pour adresser institutions, entreprises et partenaires",
              "Un support clair pour présenter services, produits et expertises",
            ],
          },
          {
            title: "Pour les utilisateurs",
            bullets: [
              "Une compréhension rapide du positionnement",
              "Une lecture fluide d'un écosystème complexe",
              "Une expérience rassurante et professionnelle",
            ],
          },
        ],
      },
      {
        num: "08",
        title: "Learnings & recul de designer",
        content:
          "Maono m'a permis de travailler à l'échelle d'un système, pas d'une simple interface, sur des enjeux de positionnement stratégique, à la frontière entre UX, branding et vision produit.",
        quote:
          "Quand le projet est ambitieux, le rôle du designer est d'apporter de la clarté, pas de l'esbroufe.",
      },
    ],
  },
  {
    slug: "toju",
    title: "TOJU",
    subtitle:
      "Conception UX/UI d'une plateforme de suivi en soins palliatifs",
    type: "UX / Product",
    sector: "Santé · e-santé · Social impact",
    tags: ["UX", "Product"],
    year: "2023–2024",
    role: "UX/UI Designer · Concepteur produit",
    scope: "Recherche · UX · UI · Prototype",
    description:
      "TOJU est une plateforme numérique dédiée au suivi des patients en soins palliatifs, conçue pour améliorer la qualité de vie des patients, faciliter la coordination médicale et renforcer la communication entre professionnels de santé, patients et proches.",
    vision:
      "Les soins palliatifs ne concernent pas seulement la fin de vie. Ils concernent la dignité, l'accompagnement et la qualité de vie.",
    thumbnail:
      "/images/projects/toju/01.png",
    gallery: [
      "/images/projects/toju/01.png",
      "/images/projects/toju/02.png",
      "/images/projects/toju/03.png",
      "/images/projects/toju/04.png",
      "/images/projects/toju/05.png",
      "/images/projects/toju/06.png",
      "/images/projects/toju/07.png",
      "/images/projects/toju/08.png",
      "/images/projects/toju/09.png",
      "/images/projects/toju/10.png",
      "/images/projects/toju/11.png",
      "/images/projects/toju/12.png",
      "/images/projects/toju/13.png",
      "/images/projects/toju/14.png",
      "/images/projects/toju/15.png",
      "/images/projects/toju/16.png",
      "/images/projects/toju/17.png",
    ],
    colors: [
      { name: "Soft Sage", hex: "#0065FF" },
      { name: "Healing Green", hex: "#0CE07A" },
      { name: "Warm Cream", hex: "#FFD211" },
      { name: "Calm Stone", hex: "#F33060" },
    ],
    tools: ["Figma", "Miro", "Notion", "UserTesting"],
    metrics: [
      { label: "Entretiens", value: "40" },
      { label: "Personas", value: "5" },
      { label: "Journey maps", value: "3" },
      { label: "Année", value: "23–24" },
    ],
    sections: [
      {
        num: "02",
        title: "Contexte & problématique",
        content:
          "Au Bénin, plus de 62 000 personnes ont besoin de soins palliatifs chaque année, principalement en raison du cancer et du VIH/SIDA. Pourtant, les soins palliatifs restent :",
        bullets: [
          "Peu connus du grand public",
          "Faiblement structurés sur le plan organisationnel",
          "Difficilement accessibles hors des centres hospitaliers",
        ],
        subsections: [
          {
            title: "Les professionnels de santé font face à",
            bullets: [
              "Un manque d'outils numériques adaptés",
              "Une gestion des données souvent réalisée sur Excel",
              "Des difficultés de suivi à domicile",
              "Des problèmes logistiques (déplacements, coordination)",
            ],
          },
        ],
        quote:
          "Comment améliorer l'accessibilité, la coordination et le suivi des soins palliatifs grâce au numérique, dans un contexte de ressources limitées ?",
      },
      {
        num: "03",
        title: "Recherche & démarche terrain",
        content:
          "Le projet TOJU repose sur une démarche de recherche qualitative approfondie.",
        subsections: [
          {
            title: "Méthodologie",
            bullets: [
              "40 entretiens semi-dirigés (20 professionnels de santé, 20 personnes du grand public)",
              "Analyse de données issues d'études cliniques nationales",
              "Veilles sociales, concurrentielles, juridiques, littéraires et artistiques",
            ],
          },
          {
            title: "Constat clé",
            bullets: [
              "100 % des personnes du grand public interrogées ne connaissaient pas le terme « soins palliatifs »",
              "Aucun des professionnels interrogés n'avait reçu de formation spécifique en soins palliatifs durant ses études",
              "La douleur est présente chez 100 % des patients admis en soins palliatifs",
            ],
          },
        ],
        quote:
          "Ces constats ont directement orienté les choix UX du projet.",
      },
      {
        num: "04",
        title: "Cibles utilisateurs",
        content: "TOJU s'adresse à trois profils principaux :",
        subsections: [
          {
            title: "Professionnels de santé",
            content:
              "Infirmiers / infirmières, coordinateurs de soins palliatifs, médecins référents.",
            bullets: [
              "Besoins : suivi structuré, alertes, rapports clairs, coordination terrain",
            ],
          },
          {
            title: "Patients en soins palliatifs",
            content:
              "Souvent suivis à domicile, mobilité réduite, forte dépendance aux aidants.",
            bullets: [
              "Besoins : soulagement de la douleur, suivi régulier, communication simple",
            ],
          },
          {
            title: "Proches & aidants",
            content:
              "Acteurs clés du suivi quotidien, peu formés, forte charge émotionnelle.",
            bullets: [
              "Besoins : information, réassurance, communication avec les soignants",
            ],
          },
        ],
      },
      {
        num: "05",
        title: "Concept & proposition de valeur",
        content:
          "TOJU est pensé comme une plateforme de suivi palliatif centralisée, accessible et humaine.",
        bullets: [
          "Suivi de l'état de santé en temps réel",
          "Alertes automatiques en cas de changement critique",
          "Planification et suivi des visites à domicile",
          "Centralisation des données patients",
          "Optimisation des rapports médicaux (remplacement d'Excel)",
          "Amélioration de la coordination entre acteurs",
        ],
        quote:
          "Le design vise à soutenir la décision médicale, pas à la complexifier.",
      },
      {
        num: "06",
        title: "Démarche UX",
        content:
          "Le projet repose sur trois axes stratégiques :",
        bullets: [
          "Faciliter l'accès aux soins palliatifs",
          "Renforcer la coordination et le suivi médical",
          "Sensibiliser et informer autour des soins palliatifs",
        ],
        quote:
          "Chaque fonctionnalité répond à un problème réel identifié sur le terrain.",
      },
      {
        num: "07",
        title: "Direction UI & intentions visuelles",
        content: "",
        subsections: [
          {
            title: "Intentions",
            bullets: [
              "Interface sobre et rassurante",
              "Design accessible et non anxiogène",
              "Priorité à la lisibilité et à l'utilisabilité",
              "Neutralité émotionnelle respectueuse du contexte médical",
            ],
          },
        ],
        quote:
          "Le design UI s'efface au profit de l'usage et de l'humain.",
      },
      {
        num: "08",
        title: "Prototype & vision produit",
        content:
          "Un prototype fonctionnel a été conçu pour tester les parcours clés, simuler les alertes, structurer les tableaux de suivi, projeter l'usage réel en contexte hospitalier et à domicile.",
        subsections: [
          {
            title: "Vision long terme",
            bullets: [
              "Intégration aux dossiers médicaux",
              "Partenariats publics / privés",
              "Déploiement national",
              "Contribution à une stratégie de e-santé",
            ],
          },
        ],
      },
      {
        num: "09",
        title: "Valeur & impact",
        content: "",
        subsections: [
          {
            title: "Impact social",
            bullets: [
              "Amélioration de la qualité de vie des patients",
              "Meilleure prise en charge de la douleur",
              "Soutien aux proches et aidants",
              "Renforcement des pratiques médicales",
            ],
          },
          {
            title: "Impact système",
            bullets: [
              "Structuration des soins palliatifs",
              "Optimisation des ressources",
              "Amélioration de la traçabilité et de la coordination",
            ],
          },
        ],
      },
      {
        num: "10",
        title: "Learnings & posture de designer",
        content:
          "TOJU m'a permis de lier recherche sociale et design numérique, concevoir un produit à fort impact humain, travailler sur des enjeux éthiques, médicaux et systémiques, affirmer une posture de designer orienté sens et utilité réelle.",
        quote:
          "Concevoir pour la santé, c'est concevoir avec responsabilité.",
      },
    ],
  },
];
