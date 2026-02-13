"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

const experience = [
  {
    role: "UX/UI Designer",
    company: "Maono",
    location: "Togo",
    period: "Oct 2024 — Nov 2025",
    tasks: [
      "Direction du design d'interfaces pour des solutions digitales B2B/B2C",
      "Collaboration étroite avec les équipes produit et développement",
      "Conception de design systems et composants réutilisables",
    ],
  },
  {
    role: "UX/UI Designer",
    company: "SLI Afrika",
    location: "",
    period: "Déc 2023 — Sept 2024",
    tasks: [
      "Conception d'expériences digitales adaptées au marché africain",
      "Focus sur l'accessibilité et la simplicité d'utilisation",
      "Recherche utilisateur et tests d'utilisabilité",
    ],
  },
  {
    role: "UX/UI Designer",
    company: "CADRECO",
    location: "",
    period: "Juin — Sept 2023",
    tasks: [
      "Réalisation de maquettes et prototypes haute fidélité",
      "Conception de parcours utilisateurs optimisés",
      "Amélioration des produits numériques existants",
    ],
  },
  {
    role: "UX/UI Designer",
    company: "Upsilon Consulting",
    location: "",
    period: "Juil 2022 — Janv 2023",
    tasks: [
      "Conception et optimisation d'interfaces pour des projets clients variés",
      "Application d'une méthodologie centrée utilisateur",
    ],
  },
  {
    role: "UX Designer",
    company: "ORTA Service",
    location: "",
    period: "Juin — Juil 2022",
    tasks: [
      "Contribution à la conception d'interfaces utilisateur",
      "Amélioration de l'expérience utilisateur des produits digitaux",
    ],
  },
];

const education = [
  {
    degree: "Licence Professionnelle — Design UX/UI",
    school: "AFRICA DESIGN SCHOOL",
    period: "2021 — 2024",
  },
];

const skills = {
  ux: ["Recherche utilisateur", "Personas & parcours", "Architecture de l'information", "Wireframing", "Prototypage", "Tests d'utilisabilité"],
  ui: ["Design visuel", "Design systems", "Typographie", "Responsive design", "Design d'interaction", "Micro-interactions"],
  tools: ["Figma", "Adobe XD", "Sketch", "Miro", "Notion", "Adobe Illustrator"],
  soft: ["Réflexion produit", "Collaboration", "Accessibilité", "Amélioration continue"],
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 },
  }),
};

export default function CVPage() {
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      {/* Top bar with actions */}
      <div className="max-w-[900px] mx-auto px-6 mb-8 flex items-center justify-between print-hidden">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-[#6B635A] text-sm hover:text-[#C4A97D] transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          <span>Retour</span>
        </Link>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#C4A97D] text-[#080808] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#D4BC95] transition-colors duration-300"
        >
          <Download size={14} />
          Télécharger PDF
        </button>
      </div>

      {/* CV Container — A4 proportions */}
      <motion.div
        ref={cvRef}
        initial="hidden"
        animate="visible"
        className="cv-page max-w-[900px] mx-auto bg-[#0C0C0B] border border-[rgba(196,169,125,0.08)] relative overflow-hidden"
      >
        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C4A97D]/15 print:border-[#C4A97D]/30" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#C4A97D]/15 print:border-[#C4A97D]/30" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#C4A97D]/15 print:border-[#C4A97D]/30" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#C4A97D]/15 print:border-[#C4A97D]/30" />

        <div className="px-10 md:px-16 py-12 md:py-16">
          {/* Header */}
          <motion.header variants={fadeIn} custom={0} className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <motion.h1
                  variants={fadeIn}
                  custom={1}
                  className="font-serif text-4xl md:text-5xl text-foreground tracking-[-0.02em] leading-[1.1]"
                >
                  Bariou<span className="text-[#C4A97D]">.</span>
                </motion.h1>
                <motion.h1
                  variants={fadeIn}
                  custom={2}
                  className="font-serif text-4xl md:text-5xl text-foreground tracking-[-0.02em] leading-[1.1]"
                >
                  Boussari
                </motion.h1>
                <motion.p
                  variants={fadeIn}
                  custom={3}
                  className="mt-3 text-[#C4A97D] text-sm tracking-[0.25em] uppercase font-medium"
                >
                  UX/UI Designer
                </motion.p>
              </div>

              <motion.div
                variants={fadeIn}
                custom={4}
                className="text-right text-[#6B635A] text-xs leading-[2] tracking-wide"
              >
                <p>Lomé, TOGO</p>
                <p>bariouboussari@gmail.com</p>
                <p>linkedin.com/in/bariou-boussari</p>
                <p>behance.net/bariouboussari</p>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="mt-8 h-[1px] bg-gradient-to-r from-[#C4A97D]/40 via-[#C4A97D]/10 to-transparent" />
          </motion.header>

          {/* Profile summary */}
          <motion.section variants={fadeIn} custom={5} className="mb-12">
            <h2 className="cv-section-title">Profil</h2>
            <p className="text-[#8A817A] text-sm leading-[1.9] max-w-[680px]">
              Designer UX/UI avec plus de 3 ans d&apos;expérience dans la conception d&apos;expériences
              digitales claires, structurées et centrées utilisateur. Spécialisé dans la
              transformation de besoins complexes en interfaces intuitives et élégantes.
              Approche méthodique alliant recherche utilisateur, prototypage et collaboration
              étroite avec les équipes techniques.
            </p>
          </motion.section>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16">
            {/* Left Column — Experience */}
            <div>
              <motion.section variants={fadeIn} custom={6}>
                <h2 className="cv-section-title">Expérience professionnelle</h2>
                <div className="space-y-8">
                  {experience.map((exp, i) => (
                    <motion.div
                      key={exp.company}
                      variants={fadeIn}
                      custom={7 + i}
                      className="relative pl-5 border-l border-[rgba(196,169,125,0.08)]"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-[-3px] top-[6px] w-[5px] h-[5px] rounded-full bg-[#C4A97D]/60" />

                      <div className="flex items-baseline justify-between gap-4 mb-1.5">
                        <h3 className="text-foreground text-sm font-medium">
                          {exp.role}
                        </h3>
                        <span className="text-[#6B635A] text-[10px] tracking-wider font-mono whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[#C4A97D]/70 text-xs tracking-wide mb-2.5">
                        {exp.company}{exp.location ? ` — ${exp.location}` : ""}
                      </p>
                      <ul className="space-y-1.5">
                        {exp.tasks.map((task) => (
                          <li
                            key={task}
                            className="text-[#6B635A] text-xs leading-[1.7] flex gap-2"
                          >
                            <span className="text-[#C4A97D]/30 mt-[2px] shrink-0">—</span>
                            {task}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right Column — Skills, Education, Languages */}
            <div className="space-y-10">
              {/* Compétences */}
              <motion.section variants={fadeIn} custom={12}>
                <h2 className="cv-section-title">Compétences</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#C4A97D]/80 text-[10px] tracking-[0.3em] uppercase mb-3">
                      Design UX
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.ux.map((s) => (
                        <span
                          key={s}
                          className="cv-tag"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#C4A97D]/80 text-[10px] tracking-[0.3em] uppercase mb-3">
                      Design UI
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.ui.map((s) => (
                        <span
                          key={s}
                          className="cv-tag"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#C4A97D]/80 text-[10px] tracking-[0.3em] uppercase mb-3">
                      Outils
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.tools.map((s) => (
                        <span
                          key={s}
                          className="cv-tag"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#C4A97D]/80 text-[10px] tracking-[0.3em] uppercase mb-3">
                      Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.soft.map((s) => (
                        <span
                          key={s}
                          className="cv-tag"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Formation */}
              <motion.section variants={fadeIn} custom={13}>
                <h2 className="cv-section-title">Formation</h2>
                {education.map((edu) => (
                  <div key={edu.degree} className="mb-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-foreground text-sm font-medium">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-[#6B635A] text-xs mt-1">{edu.school}</p>
                    <p className="text-[#6B635A] text-[10px] tracking-wider font-mono mt-1">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </motion.section>

              {/* Langues */}
              <motion.section variants={fadeIn} custom={14}>
                <h2 className="cv-section-title">Langues</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground text-sm">Français</span>
                    <span className="text-[#6B635A] text-xs">Natif</span>
                  </div>
                  <div className="h-[1px] bg-[rgba(196,169,125,0.04)]" />
                  <div className="flex items-center justify-between">
                    <span className="text-foreground text-sm">Anglais</span>
                    <span className="text-[#6B635A] text-xs">Intermédiaire</span>
                  </div>
                </div>
              </motion.section>

              {/* Centres d'intérêt */}
              <motion.section variants={fadeIn} custom={15}>
                <h2 className="cv-section-title">Centres d&apos;intérêt</h2>
                <p className="text-[#6B635A] text-xs leading-[1.9]">
                  Design thinking, Typographie, Veille technologique, Art digital, Voyages
                </p>
              </motion.section>
            </div>
          </div>

          {/* Footer */}
          <motion.footer
            variants={fadeIn}
            custom={16}
            className="mt-14 pt-6 border-t border-[rgba(196,169,125,0.06)]"
          >
            <div className="flex items-center justify-between">
              <p className="text-[#6B635A]/50 text-[10px] tracking-wider">
                CV — Bariou Boussari — UX/UI Designer
              </p>
              <p className="text-[#6B635A]/50 text-[10px] tracking-wider">
                2025
              </p>
            </div>
          </motion.footer>
        </div>
      </motion.div>
    </div>
  );
}
