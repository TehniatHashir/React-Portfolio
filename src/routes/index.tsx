// RENAMED FILE - FRESH BUILD

import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Rocket, TrendingUp, Target, Users, Briefcase, Zap, Sparkles, ArrowUpRight,
  Mail, Linkedin, MapPin, Download, Calendar, GraduationCap, Award,
  Lightbulb, Cpu, Phone, BarChart3,
  Network, Send, CheckCircle2,
} from "lucide-react";
import { Particles } from "@/components/Particles";
import { Counter, Reveal } from "@/components/motion-utils";
import TaskScroller from '../components/sections/Experience';
import LogoScroller from '../components/sections/LogoScroller';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tehniat Hashir | Full Stack Developer Portfolio" },
      { name: "description", content: "Portfolio of Tehniat Hashir, a Full Stack Developer and React Developer specializing in modern web applications, frontend development, project management, UI/UX design, and digital solutions." },
      { name: "keywords", content: "Tehniat Hashir, React Developer, Full Stack Developer, Frontend Developer, Web Developer, JavaScript Developer, Portfolio, Rawalpindi Pakistan" },
    ],
  }),
  component: Portfolio,
});

/* ============================== LOADER ============================== */
function Loader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] grid place-items-center"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="relative">
        <div className="spin-slow absolute -inset-12 rounded-full border border-white/10" />
        <div className="spin-reverse absolute -inset-20 rounded-full border border-white/5" />
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="relative grid h-24 w-24 place-items-center rounded-2xl neon-glow"
          style={{ background: "var(--gradient-border)" }}
        >
          <Sparkles className="h-10 w-10 text-white" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="absolute top-full mt-8 left-1/2 -translate-x-1/2 text-center w-max"
        >
          <div className="text-2xl font-display font-bold shimmer-text">TEHNIAT HASHIR</div>
          <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground mt-2">Initializing…</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ============================== BACKGROUND ============================== */
function TechBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="orb absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, rgba(160,32,240,0.55), transparent 70%)" }} />
      <div className="orb absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, rgba(255,77,255,0.4), transparent 70%)", animationDelay: "3s" }} />
      <div className="orb absolute bottom-0 left-1/4 h-96 w-96 rounded-full blur-3xl"
           style={{ background: "radial-gradient(circle, rgba(0,191,255,0.45), transparent 70%)", animationDelay: "6s" }} />
      {[0, 1.5, 3, 4.5, 6].map((d, i) => (
        <div key={i} className="beam" style={{ top: `${10 + i * 18}%`, animationDelay: `${d}s` }} />
      ))}
    </div>
  );
}

/* ============================== NAV ============================== */
const NAV = [
  ["About", "about"], ["Experience", "experience"], ["Network", "network"], ["Projects", "projects"],
  ["Skills", "skills"], ["Education", "education"], ["Additional", "additional"],
  ["Contact", "contact"],
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.8 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all ${scrolled ? "rounded-2xl glass" : ""}`}>
        <div className="flex items-center justify-between py-2">
          <a href="#top" className="flex items-center gap-2 font-display font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-lg pulse-ring"
                  style={{ background: "var(--gradient-border)" }}>
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <span className="text-gradient">Tehniat Hashir</span>
          </a>
          <ul className="hidden xl:flex items-center gap-0 text-sm">
            {NAV.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`}
                   className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors hover:bg-white/5">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact"
             className="magnetic-btn hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white"
             style={{ background: "var(--gradient-border)" }}>
            Let's talk <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ============================== HERO ============================== */
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Particles density={70} />
      </div>

      {/* Rotating rings */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="spin-slow h-[680px] w-[680px] rounded-full border border-white/5" />
        <div className="spin-reverse absolute inset-12 rounded-full border border-white/5" />
        <div className="spin-slow absolute inset-24 rounded-full border border-white/5" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium glass mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to global opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.9 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            <span className="block shimmer-text">Hi, I'm Tehniat Hashir</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}
            className="text-lg sm:text-2xl font-display text-gradient mb-2">
            Full Stack Developer, React Developer, Frontend Engineer &amp; Project Manager
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
            className="text-sm sm:text-base text-muted-foreground mb-10">
            Motivated and detail-oriented Web Developer with hands-on experience in building responsive and user-friendly web applications. Skilled in frontend development, UI design, project management, digital marketing, and business development.
          </motion.p>

          {/* KPI counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.6 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto mb-10">
            {[
              { v: <Counter to={4} />, l: "Featured Projects" },
              { v: <><Counter to={8} suffix="+" /></>, l: "Real-world Experiences" },
              { v: <Counter to={6} />, l: "Professional Roles" },
            ].map((k, i) => (
              <div key={i} className="glass rounded-2xl p-4 sm:p-5">
                <div className="text-xl sm:text-3xl font-display font-bold text-gradient">{k.v}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider">{k.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }}
            className="flex flex-wrap items-center justify-center gap-3">
            <a href="#projects"
               className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:border-white/40 transition-all">
              <Rocket className="h-4 w-4" /> View Projects
            </a>
            <a href="/resume.pdf" download
               className="magnetic-btn inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white"
               style={{ background: "var(--gradient-border)" }}>
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a href="#contact"
               className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:border-white/40 transition-all">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}
            className="mt-10 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Rawalpindi, Pakistan
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* ============================== ABOUT ============================== */
const ABOUT_PILLARS = [
  { icon: Cpu, label: "Full Stack Development" },
  { icon: Rocket, label: "React Development" },
  { icon: Lightbulb, label: "UI/UX Design" },
  { icon: Briefcase, label: "Project Management" },
  { icon: BarChart3, label: "Digital Marketing" },
];
function About() {
  return (
    <Section id="about" eyebrow="About" title={<>Modern web products with <span className="text-gradient">clarity and polish</span></>}>
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <Reveal x={-30} className="lg:col-span-3">
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            I am a Computer Science graduate with practical experience in Full Stack Development, Frontend Engineering, Project Management, Graphic Design, Digital Marketing, and Business Development. I have worked with startups, software houses, and innovation hubs including NASTP NICAT and Regional Plan 9.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mt-6">
            My expertise includes building responsive web applications, creating modern user interfaces, managing development teams, coordinating with clients, and delivering digital products that solve real business challenges.
          </p>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mt-6">
            I am passionate about learning new technologies and continuously improving my technical and leadership skills.
          </p>
        </Reveal>
        <div className="lg:col-span-2 space-y-3">
          {ABOUT_PILLARS.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08} x={30}>
              <div className="neon-border rounded-2xl p-4 flex items-center gap-4 group hover:translate-x-1 transition-transform">
                <span className="grid h-10 w-10 place-items-center rounded-lg neon-glow"
                      style={{ background: "var(--gradient-border)" }}>
                  <p.icon className="h-5 w-5 text-white" />
                </span>
                <span className="font-medium">{p.label}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============================== IMPACT ============================== */
const METRICS = [
  { to: 4, label: "Featured Projects", icon: Rocket, prefix: "" },
  { to: 8, suffix: "+", label: "Real-world Experiences", icon: TrendingUp, prefix: "" },
  { to: 6, label: "Professional Roles", icon: Target, prefix: "" },
  { to: 5, suffix: "+", label: "Partnerships & Hubs", icon: Users, prefix: "" },
  { to: 4, label: "Business Domains", icon: Briefcase, prefix: "" },
  { to: 10, suffix: "+", label: "Digital Campaigns", icon: Zap, prefix: "" },
];
function Impact() {
  return (
    <Section id="impact" eyebrow="Key Impact" title={<>Numbers that tell the <span className="text-gradient">story</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {METRICS.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.08}>
            <motion.div whileHover={{ y: -6, scale: 1.02 }}
              className="neon-border rounded-2xl p-6 relative overflow-hidden group">
              {/* fake animated graph */}
              <svg className="absolute right-2 bottom-2 opacity-20 group-hover:opacity-40 transition-opacity"
                   width="120" height="50" viewBox="0 0 120 50">
                <defs>
                  <linearGradient id={`g${i}`} x1="0" x2="1">
                    <stop offset="0%" stopColor="#00bfff" />
                    <stop offset="100%" stopColor="#ff4dff" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0,40 Q20,10 40,25 T80,15 T120,5"
                  fill="none" stroke={`url(#g${i})`} strokeWidth="2"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.3 + i * 0.1 }}
                />
              </svg>
              <m.icon className="h-7 w-7 mb-4" style={{ color: "var(--neon-blue)" }} />
              <div className="text-3xl sm:text-4xl font-display font-bold text-gradient">
                {m.prefix && m.prefix}<Counter to={m.to} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== EXPERIENCE ============================== */
const EXPERIENCE = [
  { role: "Full Stack Developer (React) – Paid Intern", org: "Ampflick – NASTP NICAT",
    period: "April 2026 – Present", location: "Rawalpindi, Pakistan",
    bullets: ["Developing real-world web applications using React.",
      "Building backend functionality and API integrations.",
      "Creating responsive, user-friendly interfaces.",
      "Improving performance and application structure.",
      "Collaborating with development teams on live client projects."] },
  { role: "Lead Generation Executive (Web Development)", org: "QUONO – Regional Plan 9 NASTP",
    period: "May 2026 – Present", location: "Rawalpindi, Pakistan",
    bullets: ["Generated qualified leads for web development services.",
      "Connected with businesses seeking digital solutions.",
      "Maintained lead databases and prospect tracking.",
      "Conducted targeted online research and outreach campaigns."] },
  { role: "Project Manager (Contract Based)", org: "CodeAxisTech",
    period: "May 2026 – June 2026", location: "Remote",
    bullets: ["Managed remote software development projects.",
      "Assigned tasks and monitored progress across teams.",
      "Coordinated communication between clients and developers.",
      "Ensured timely project delivery and milestone completion.",
      "Tracked team performance and project milestones."] },
  { role: "Graphic Designer + Frontend Developer + Product Lead + Digital Marketing", org: "Yuni + Technospot (NASTP)",
    period: "December 2025 – April 2026", location: "Rawalpindi, Pakistan",
    bullets: ["Developed and managed course-based websites.",
      "Led product initiatives and digital strategy execution.",
      "Improved website structure and user experience.",
      "Managed digital marketing campaigns.",
      "Delivered real-world frontend solutions with polished UI."] },
  { role: "Frontend Developer Intern (React)", org: "Explorer Bees – NASTP NICAT",
    period: "July 2025 – October 2025", location: "Rawalpindi, Pakistan",
    bullets: ["Developed responsive UI components using React.",
      "Improved user experience through modern design.",
      "Worked on real-world frontend development projects."] },
  { role: "Business Developer Intern + Graphic Designer", org: "NASTP NICAT",
    period: "2 Months", location: "Rawalpindi, Pakistan",
    bullets: ["Assisted in business development strategies.",
      "Coordinated client communication and project planning.",
      "Designed proposals and visual assets for campaigns."] },
  { role: "Digital Marketing Executive", org: "Econex, Rawalpindi",
    period: "December 2022 – May 2023", location: "Rawalpindi, Pakistan",
    bullets: ["Managed social media campaigns.",
      "Improved brand visibility and audience engagement."] },
  { role: "Digital Marketing Executive", org: "Pak e Store, Rawalpindi",
    period: "June 2023 – September 2023", location: "Rawalpindi, Pakistan",
    bullets: ["Managed digital campaigns.",
      "Improved audience engagement and online reach."] },
];

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>A track record of <span className="text-gradient">execution</span></>}>
      <div className="relative">
        <motion.div
          initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          style={{ transformOrigin: "top", background: "linear-gradient(to bottom, transparent, #00bfff, #a020f0, #ff4dff, transparent)" }}
          className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
        />
        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.org}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className={`relative flex ${i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 mt-6 z-10">
                <div className="h-4 w-4 rounded-full pulse-ring" style={{ background: "var(--gradient-border)" }} />
              </div>
              <motion.div whileHover={{ y: -4 }}
                className={`ml-12 sm:ml-0 sm:w-[46%] neon-border rounded-2xl p-6 ${i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"}`}>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <Calendar className="h-3.5 w-3.5" /> {exp.period}
                </div>
                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <div className="text-sm font-medium mb-1" style={{ color: "var(--neon-blue)" }}>{exp.org}</div>
                <div className="text-xs text-muted-foreground mb-4 inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {exp.location}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.bullets.map((b, k) => (
                    <li key={k} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full flex-shrink-0" style={{ background: "var(--neon-pink)" }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============================== NETWORK / STARTUP SCALE ============================== */
const NODES = [
  { label: "Clients", icon: Users, angle: -90 },
  { label: "Web Apps", icon: Rocket, angle: -18 },
  { label: "UI/UX", icon: Lightbulb, angle: 54 },
  { label: "Marketing", icon: Zap, angle: 126 },
  { label: "Growth", icon: TrendingUp, angle: 198 },
];
function Network_() {
  return (
    <Section id="network" eyebrow="Startup Momentum" title={<>A connected <span className="text-gradient">digital delivery network</span></>}>
      <div className="relative aspect-square max-w-2xl mx-auto">
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="linegrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00bfff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ff4dff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {NODES.map((n, i) => {
            const x = 200 + Math.cos((n.angle * Math.PI) / 180) * 160;
            const y = 200 + Math.sin((n.angle * Math.PI) / 180) * 160;
            return (
              <motion.line
                key={n.label}
                x1="200" y1="200" x2={x} y2={y}
                stroke="url(#linegrad)" strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
              />
            );
          })}
          {NODES.map((n, i) => {
            const next = NODES[(i + 1) % NODES.length];
            const x1 = 200 + Math.cos((n.angle * Math.PI) / 180) * 160;
            const y1 = 200 + Math.sin((n.angle * Math.PI) / 180) * 160;
            const x2 = 200 + Math.cos((next.angle * Math.PI) / 180) * 160;
            const y2 = 200 + Math.sin((next.angle * Math.PI) / 180) * 160;
            return (
              <motion.line key={`${i}-c`} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(160,32,240,0.25)" strokeWidth="1" strokeDasharray="3 4"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 + i * 0.1 }}
              />
            );
          })}
        </svg>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="grid h-28 w-28 sm:h-36 sm:w-36 place-items-center rounded-full pulse-ring neon-glow"
            style={{ background: "var(--gradient-border)" }}>
            <div className="text-center text-white px-3">
              <Network className="h-6 w-6 mx-auto mb-1" />
              <div className="text-lg font-bold leading-none">10+</div>
              <div className="text-[10px] uppercase tracking-wider mt-1">Digital Solutions Delivered</div>
            </div>
          </motion.div>
        </div>

        {NODES.map((n, i) => {
          const x = 50 + Math.cos((n.angle * Math.PI) / 180) * 40;
          const y = 50 + Math.sin((n.angle * Math.PI) / 180) * 40;
          return (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.12, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${y}%`, left: `${x}%` }}>
              <div className="glass rounded-2xl px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2">
                <n.icon className="h-4 w-4" style={{ color: "var(--neon-pink)" }} />
                <span className="text-xs sm:text-sm font-medium">{n.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================== PROJECTS ============================== */
function Projects() {
  const projects = [
    {
      title: "Cricket Player Dashboard",
      description: "Built an interactive dashboard for cricket player statistics with responsive design, data visualization, and performance tracking features.",
      tech: ["React", "JavaScript", "CSS"],
    },
    {
      title: "Yuni Courses Website",
      description: "Developed a live educational platform featuring structured course listings, modern UI, responsive design, and intuitive navigation.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Online Food Ordering Website",
      description: "Designed and developed a responsive food ordering platform with modern layouts, smooth navigation, and enhanced user experience.",
      tech: ["React", "JavaScript", "CSS"],
    },
    {
      title: "AI Image Generator Website",
      description: "Developed an AI-powered image generation platform using prompt-based image creation through API integration and modern frontend technologies.",
      tech: ["React", "APIs", "JavaScript"],
    },
  ];

  return (
    <Section id="projects" eyebrow="Featured Projects" title={<>Select web projects with <span className="text-gradient">real impact</span></>}>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <motion.div whileHover={{ y: -4 }} className="neon-border rounded-3xl p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Project {index + 1}</div>
                <div className="rounded-full bg-white/5 px-3 py-1 text-xs text-foreground">Web App</div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== SKILLS MATRIX ============================== */
const SKILL_GROUPS = [
  { icon: Rocket, title: "Frontend Development", color: "#00bfff",
    items: [["HTML5", 96], ["CSS3", 94], ["JavaScript", 93], ["React.js", 95]] },
  { icon: Cpu, title: "Backend & Data", color: "#a020f0",
    items: [["Express.js", 85], ["API Integration", 88], ["SQL (Basic)", 72], ["Python (Basic)", 70]] },
  { icon: BarChart3, title: "Product & Growth", color: "#ff4dff",
    items: [["Project Management", 90], ["Lead Generation", 86], ["Graphic Design", 84], ["Digital Marketing", 87]] },
] as const;

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={<>A futuristic <span className="text-gradient">skill matrix</span></>}>
      <div className="grid lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.12}>
            <motion.div whileHover={{ y: -6 }}
              className="neon-border rounded-2xl p-7 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl"
                      style={{ background: `linear-gradient(135deg, ${g.color}, rgba(255,255,255,0.05))`, boxShadow: `0 0 30px ${g.color}55` }}>
                  <g.icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.items.map(([name, pct]) => (
                  <div key={name as string}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-foreground">{name}</span>
                      <span className="text-muted-foreground">{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${g.color}, #ff4dff)`, boxShadow: `0 0 10px ${g.color}` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== CERTIFICATIONS ============================== */
const TOOL_CARDS = [
  { name: "VS Code", org: "Editor", year: "Daily" },
  { name: "Git & GitHub", org: "Version Control", year: "Daily" },
  { name: "Figma", org: "Design", year: "Regular" },
  { name: "Chrome DevTools", org: "Debugging", year: "Daily" },
  { name: "Postman", org: "API Testing", year: "Regular" },
  { name: "MS Office", org: "Productivity", year: "Regular" },
];
function ToolCard({ c }: { c: typeof TOOL_CARDS[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 10, ry: x * 10 });
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      style={{ transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`, transition: "transform 0.2s" }}
      className="neon-border rounded-2xl p-5 relative overflow-hidden group">
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"
           style={{ background: "var(--neon-purple)" }} />
      <Award className="h-7 w-7 mb-3 relative z-10" style={{ color: "var(--neon-blue)" }} />
      <div className="font-semibold text-sm leading-snug relative z-10">{c.name}</div>
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground relative z-10">
        <span>{c.org}</span>
        <span className="font-mono">{c.year}</span>
      </div>
    </motion.div>
  );
}
function Tools() {
  return (
    <Section id="tools" eyebrow="Tools & Platforms" title={<>A modern development <span className="text-gradient">toolkit</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TOOL_CARDS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.05}>
            <ToolCard c={c} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== EDUCATION ============================== */
const EDUCATION = [
  {
    degree: "BS Computer Science",
    school: "Fazaia Bilquis College (Affiliated with Air University)",
    period: "2021 – 2025",
    note: "Focused on Software Development, Web Technologies, Artificial Intelligence, Database Systems, and Computer Science fundamentals."
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    school: "Askaria College, Rawalpindi",
    period: "2018 – 2020",
    note: "Studied Computer Science, Mathematics, and foundational technical subjects."
  },
  {
    degree: "Matric (Science)",
    school: "Army Public School & College",
    period: "2016 – 2018",
    note: "Completed secondary education with a science background and strong analytical foundations."
  }
];
function Education() {
  return (
    <Section id="education" eyebrow="Education" title={<>Academic <span className="text-gradient">milestones</span></>}>
      <div className="grid sm:grid-cols-2 gap-5">
        {EDUCATION.map((ed, i) => (
          <Reveal key={ed.degree} delay={i * 0.1}>
            <motion.div whileHover={{ y: -4 }}
              className="neon-border rounded-2xl p-6 relative overflow-hidden group h-full">
              <GraduationCap className="absolute -right-6 -top-6 h-28 w-28 opacity-5 group-hover:opacity-20 transition-opacity" />
              <div className="text-xs text-muted-foreground mb-2">{ed.period}</div>
              <h3 className="text-lg font-semibold mb-1">{ed.degree}</h3>
              <div className="text-sm mb-3" style={{ color: "var(--neon-blue)" }}>{ed.school}</div>
              <p className="text-sm text-muted-foreground">{ed.note}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
/* ============================== ADDITIONAL EXPERIENCE ============================== */
const ADDITIONAL_ITEMS = [
  { title: "Data Scraping", description: "Collected and structured 2,000+ USPTO records to support research and service delivery workflows." },
  { title: "Shopify Product Listing", description: "Built optimized product catalogs and storefront pages for Shopify-based commerce stores." },
  { title: "Social Media Management", description: "Managed social campaigns to improve brand visibility, engagement, and digital reach." },
  { title: "Annotation Project Management", description: "Coordinated labeling work for AI datasets with quality review and delivery tracking." },
  { title: "Wix Content Writing", description: "Produced website content and page updates for Wix-powered business sites." },
  { title: "Payhip Store Builder", description: "Configured Payhip storefronts and digital product listings for online sales." },
];

function AdditionalExperience() {
  return (
    <Section id="additional" eyebrow="Additional Experience" title={<>Additional skills and real-world <span className="text-gradient">deliverables</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ADDITIONAL_ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <motion.div whileHover={{ y: -4 }} className="neon-border rounded-3xl p-6 h-full">
              <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">{item.title}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const LANGUAGES = [
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Urdu", level: "Native Proficiency" },
  { name: "Chinese", level: "Basic Proficiency" },
];

function Languages() {
  return (
    <Section id="languages" eyebrow="Languages" title={<>Communication across <span className="text-gradient">global teams</span></>}>
      <div className="grid sm:grid-cols-3 gap-6">
        {LANGUAGES.map((lang, i) => (
          <Reveal key={lang.name} delay={i * 0.08}>
            <motion.div whileHover={{ y: -4 }} className="neon-border rounded-3xl p-6 h-full">
              <div className="text-lg font-semibold mb-2">{lang.name}</div>
              <div className="text-sm text-muted-foreground">{lang.level}</div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ============================== CONTACT ============================== */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };
  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's Build Something Great <span className="text-gradient">Together</span></>}>
      <div className="grid lg:grid-cols-5 gap-8">
        <Reveal x={-30} className="lg:col-span-2 space-y-6">
          <p className="text-muted-foreground">
            I am open to internships, freelance opportunities, full-time roles, project collaborations, and innovative development projects. Feel free to reach out to discuss your ideas.
          </p>
          {[
            { icon: MapPin, label: "Rawalpindi, Pakistan" },
            { icon: Mail, label: "tehniathashir@gmail.com", href: "mailto:tehniathashir@gmail.com" },
            { icon: Linkedin, label: "linkedin.com/in/tehniat-hashir-a860b025b", href: "https://www.linkedin.com/in/tehniat-hashir-a860b025b/" },
            { icon: Sparkles, label: "behance.net/tehniathashir", href: "https://www.behance.net/tehniathashir" },
            { icon: Phone, label: "+92 336 0925493", href: "tel:+923360925493" },
          ].map((c, i) => (
            <a key={i} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
               className="flex items-center gap-3 glass rounded-2xl p-4 hover:border-white/40 transition-all group">
              <span className="grid h-10 w-10 place-items-center rounded-lg neon-glow"
                    style={{ background: "var(--gradient-border)" }}>
                <c.icon className="h-4 w-4 text-white" />
              </span>
              <span className="text-sm">{c.label}</span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          ))}
        </Reveal>

        <Reveal x={30} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="neon-border rounded-3xl p-7 sm:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <Field label="Subject" name="subject" placeholder="What's it about?" required />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <textarea
                name="message" rows={5} required placeholder="Tell me a bit more…"
                className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-[var(--neon-purple)] focus:ring-2 focus:ring-[var(--neon-purple)]/30 transition-all resize-none"
              />
            </div>
            <button type="submit"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full px-7 py-3 font-medium text-white"
              style={{ background: "var(--gradient-border)" }}>
              {sent ? <><CheckCircle2 className="h-4 w-4" /> Sent — thanks!</> : <><Send className="h-4 w-4" /> Send message</>}
            </button>
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="text-sm text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" /> Your message is queued — I'll reply within 24 hours.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-[var(--neon-purple)] focus:ring-2 focus:ring-[var(--neon-purple)]/30 transition-all"
      />
    </div>
  );
}

/* ============================== FOOTER ============================== */
function Footer() {
  return (
    <footer className="relative mt-20 pt-12 pb-8 px-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px"
           style={{ background: "linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-pink), transparent)" }} />
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full blur-3xl"
             style={{ background: "radial-gradient(ellipse, rgba(160,32,240,0.3), transparent 70%)" }} />
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg pulse-ring"
                  style={{ background: "var(--gradient-border)" }}>
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            <div>
              <div className="font-display font-bold text-gradient">Tehniat Hashir</div>
              <div className="text-xs text-muted-foreground">Full Stack Developer | React Developer</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/tehniat-hashir-a860b025b/" },
              { icon: Mail, href: "mailto:tehniathashir@gmail.com" },
              { icon: Download, href: "/resume.pdf" },
            ].map((s, i) => (
              <a key={i} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                 className="glass rounded-full p-3 hover:scale-110 hover:border-white/40 transition-all">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tehniat Hashir. Full Stack Developer | React Developer | Frontend Developer.
        </div>
      </div>
    </footer>
  );
}

/* ============================== SECTION PRIMITIVE ============================== */
function Section({ id, eyebrow, title, children }:
  { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] mb-4"
               style={{ color: "var(--neon-blue)" }}>
            <span className="h-px w-8" style={{ background: "var(--neon-blue)" }} />
            {eyebrow}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/* ============================== PAGE ============================== */
function Portfolio() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <AnimatePresence>{loading && <Loader onDone={() => setLoading(false)} />}</AnimatePresence>
      <TechBackground />
      <Nav />
      <main className="relative">
        <Hero />
        <TaskScroller />
        <About />
        <LogoScroller />
        <Impact />
        <Experience />
        <Network_ />
        <Projects />
        <Skills />
        <Tools />
        <Education />
        <AdditionalExperience />
        <Languages />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
