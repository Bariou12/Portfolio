"use client";

import {
  SplitText,
  MaskReveal,
  LineReveal,
  Stagger,
  StaggerItem,
  PageTransition,
  ScrollProgress,
} from "@/components/animations";
import { Reveal } from "@/components/reveal";
import {
  ProcessDiagram,
  ProcessFlowDiagram,
  FloatingElement,
  AbstractBlob,
  ConcentricCircles,
  DotsPattern,
} from "@/components/visuals";

const steps = [
  {
    num: "01",
    title: "Comprendre le problème",
    desc: "Chaque projet commence par la compréhension. Je travaille à identifier le vrai défi derrière le brief à travers des conversations avec les parties prenantes, l'analyse concurrentielle et la recherche contextuelle. L'objectif est de séparer les hypothèses des preuves et d'aligner tout le monde sur ce qui doit être résolu.",
    methods: ["Entretiens parties prenantes", "Analyse concurrentielle", "Cadrage du problème"],
  },
  {
    num: "02",
    title: "Recherche UX & structure",
    desc: "La recherche guide chaque décision. Je construis des personas, cartographie les parcours utilisateurs et identifie les points de friction. Cette phase crée la fondation stratégique qui garantit que chaque choix de design a une raison d'être.",
    methods: ["Entretiens utilisateurs", "Personas", "Cartographie de parcours", "Cartes d'empathie"],
  },
  {
    num: "03",
    title: "Flux & architecture",
    desc: "Avant tout travail visuel, je structure l'expérience. L'architecture de l'information, les flux utilisateurs et les patterns de navigation sont définis pour garantir que le produit est logique, intuitif et évolutif.",
    methods: ["Architecture de l'information", "Flux utilisateurs", "Plans de site", "Wireframes"],
  },
  {
    num: "04",
    title: "Interface & système",
    desc: "La couche visuelle donne vie à la structure. Je conçois avec cohérence, en construisant des design systems qui sont beaux, fonctionnels et maintenables. Chaque composant a un objectif.",
    methods: ["Design visuel", "Design systems", "Bibliothèques de composants", "Prototypage"],
  },
  {
    num: "05",
    title: "Livraison & itération",
    desc: "Le design ne s'arrête pas au handoff. Je collabore étroitement avec les développeurs, assure la fidélité du design et itère en fonction des retours réels et des tests. L'objectif est un produit livré qui fonctionne.",
    methods: ["Handoff développeur", "Tests d'utilisabilité", "Itération", "Revue QA"],
  },
];

export default function ProcessPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-32">
        <ScrollProgress />

        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Floating decorative elements */}
          <FloatingElement className="absolute top-16 right-[6%] w-[220px] h-[220px] hidden lg:block" speed={18}>
            <AbstractBlob variant={1} className="w-full h-full opacity-25" />
          </FloatingElement>

          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            {/* Header */}
            <div className="mb-24 md:mb-36 relative">
              <MaskReveal>
                <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
                  Méthodologie
                </span>
              </MaskReveal>
              <div className="mt-4 mb-8">
                <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9]">
                  <SplitText type="words" stagger={0.06}>Processus</SplitText>
                </h1>
              </div>
              <MaskReveal delay={0.3}>
                <p className="text-[#6B635A] max-w-xl text-lg leading-relaxed">
                  Une approche claire et structurée, de la compréhension à la
                  livraison. Chaque étape a un objectif.
                </p>
              </MaskReveal>

              {/* Dots decoration */}
              <div className="absolute top-0 right-0 hidden xl:block opacity-30">
                <DotsPattern cols={6} rows={6} />
              </div>
            </div>

            <LineReveal />

            {/* Steps with illustrations */}
            <div className="mt-16 md:mt-24">
              <Stagger stagger={0.1}>
                {steps.map((step, idx) => (
                  <StaggerItem key={step.num}>
                    <div className="group grid grid-cols-1 md:grid-cols-[120px_1fr_160px] gap-6 md:gap-12 py-14 md:py-20 border-b border-[rgba(196,169,125,0.05)] hover:border-[#C4A97D]/15 transition-colors duration-700 items-start">
                      {/* Number */}
                      <div>
                        <span className="text-[#C4A97D]/15 text-6xl md:text-7xl font-serif italic group-hover:text-[#C4A97D]/30 transition-colors duration-700">
                          {step.num}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-5 group-hover:text-[#C4A97D] transition-colors duration-500">
                          {step.title}
                        </h2>
                        <p className="text-[#6B635A] leading-[1.8] mb-8 max-w-2xl">
                          {step.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.methods.map((m) => (
                            <span
                              key={m}
                              className="text-[10px] border border-[rgba(196,169,125,0.06)] text-[#6B635A]/60 px-4 py-2 tracking-[0.1em] uppercase group-hover:border-[#C4A97D]/15 group-hover:text-[#8A817A] transition-all duration-500"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Process diagram illustration */}
                      <div className="hidden md:block">
                        <ProcessDiagram step={idx + 1} className="w-full max-w-[140px] opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            {/* Visual divider — animated process flow diagram */}
              <div className="py-20 md:py-32 relative">
                <ProcessFlowDiagram className="max-w-[900px] mx-auto" />
              </div>

            {/* Bottom quote */}
            <div className="py-20 md:py-32 text-center relative">
              {/* Decorative concentric circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] hidden md:block">
                <ConcentricCircles className="w-full h-full opacity-20" rings={4} />
              </div>
              <Reveal>
                <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium block mb-8">
                  Philosophie
                </span>
                <blockquote className="font-serif text-2xl md:text-4xl text-foreground leading-[1.3] italic max-w-3xl mx-auto relative z-10">
                  &laquo; Un bon processus est invisible. Il supprime la friction, pas la créativité. &raquo;
                </blockquote>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
