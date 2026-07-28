import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as AnimatePresence, i as motion, n as useTransform, r as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
import { S as ArrowUpRight, _ as CircleCheck, a as Sparkles, b as Briefcase, c as Phone, d as Mail, f as Linkedin, g as Cpu, h as Download, i as Target, l as Network, m as GraduationCap, n as Users, o as Send, p as Lightbulb, r as TrendingUp, s as Rocket, t as Zap, u as MapPin, v as ChartColumn, x as Award, y as Calendar } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-J4j6Xprk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Lightweight canvas particle field with mouse-follow glow. */
function Particles({ density = 80 }) {
	const ref = (0, import_react.useRef)(null);
	const mouse = (0, import_react.useRef)({
		x: -1e3,
		y: -1e3
	});
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		const ctx = canvas.getContext("2d");
		let raf = 0;
		let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
		const colors = [
			"#a020f0",
			"#00bfff",
			"#ff4dff"
		];
		let parts = [];
		const resize = () => {
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			parts = Array.from({ length: density }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				vx: (Math.random() - .5) * .25,
				vy: (Math.random() - .5) * .25,
				r: Math.random() * 1.4 + .4,
				c: colors[Math.floor(Math.random() * colors.length)]
			}));
		};
		resize();
		window.addEventListener("resize", resize);
		const onMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			mouse.current.x = e.clientX - rect.left;
			mouse.current.y = e.clientY - rect.top;
		};
		window.addEventListener("mousemove", onMove);
		const tick = () => {
			ctx.clearRect(0, 0, w, h);
			if (mouse.current.x > 0) {
				const g = ctx.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, 220);
				g.addColorStop(0, "rgba(160, 32, 240, 0.18)");
				g.addColorStop(.5, "rgba(0, 191, 255, 0.08)");
				g.addColorStop(1, "rgba(0,0,0,0)");
				ctx.fillStyle = g;
				ctx.fillRect(0, 0, w, h);
			}
			for (const p of parts) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0) p.x = w;
				if (p.x > w) p.x = 0;
				if (p.y < 0) p.y = h;
				if (p.y > h) p.y = 0;
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fillStyle = p.c;
				ctx.globalAlpha = .7;
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			for (let i = 0; i < parts.length; i++) {
				for (let j = i + 1; j < parts.length; j++) {
					const dx = parts[i].x - parts[j].x;
					const dy = parts[i].y - parts[j].y;
					const d = Math.hypot(dx, dy);
					if (d < 110) {
						ctx.strokeStyle = `rgba(160, 32, 240, ${.15 * (1 - d / 110)})`;
						ctx.lineWidth = .6;
						ctx.beginPath();
						ctx.moveTo(parts[i].x, parts[i].y);
						ctx.lineTo(parts[j].x, parts[j].y);
						ctx.stroke();
					}
				}
				const dx = parts[i].x - mouse.current.x;
				const dy = parts[i].y - mouse.current.y;
				const d = Math.hypot(dx, dy);
				if (d < 150) {
					ctx.strokeStyle = `rgba(0, 191, 255, ${.4 * (1 - d / 150)})`;
					ctx.lineWidth = .8;
					ctx.beginPath();
					ctx.moveTo(parts[i].x, parts[i].y);
					ctx.lineTo(mouse.current.x, mouse.current.y);
					ctx.stroke();
				}
			}
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", onMove);
		};
	}, [density]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "absolute inset-0 h-full w-full"
	});
}
function Counter({ to, prefix = "", suffix = "", duration = 2 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-50px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min((t - start) / (duration * 1e3), 1);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.floor(eased * to));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [
			prefix,
			n.toLocaleString(),
			suffix
		]
	});
}
function Reveal({ children, delay = 0, y = 30, x = 0, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y,
			x
		},
		whileInView: {
			opacity: 1,
			y: 0,
			x: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.2,
				.8,
				.2,
				1
			]
		},
		className,
		children
	});
}
var TaskScroller = ({ className }) => {
	const tasks = [
		"React UI Components",
		"Responsive Web Design",
		"API Integration",
		"Dashboard Development",
		"Landing Page Design",
		"Form Validation",
		"Project Planning",
		"Team Collaboration",
		"UI Prototyping",
		"Digital Marketing",
		"Graphic Assets",
		"Quality Testing",
		"Client Review"
	];
	const row1Tasks = tasks.slice(0, 7);
	const row2Tasks = tasks.slice(7);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `py-16 px-4 overflow-hidden ${className || ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-center mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-grow h-px",
							style: { background: "linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-pink), transparent)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-6 text-sm font-medium tracking-wider uppercase",
							style: { color: "var(--neon-blue)" },
							children: "Capabilities"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-grow h-px",
							style: { background: "linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-pink), transparent)" }
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex overflow-hidden mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "flex gap-4 whitespace-nowrap",
						animate: { x: [0, -1920] },
						transition: {
							duration: 20,
							repeat: Infinity,
							ease: "linear"
						},
						children: [...row1Tasks, ...row1Tasks].map((task, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-3 px-5 py-3 rounded-xl neon-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-1.5 h-1.5 rounded-full",
								style: { background: "var(--neon-blue)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-foreground",
								children: task
							})]
						}, `row1-${index}`))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "flex gap-4 whitespace-nowrap",
						animate: { x: [-1920, 0] },
						transition: {
							duration: 20,
							repeat: Infinity,
							ease: "linear"
						},
						children: [...row2Tasks, ...row2Tasks].map((task, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-3 px-5 py-3 rounded-xl neon-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-1.5 h-1.5 rounded-full",
								style: { background: "var(--neon-pink)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-foreground",
								children: task
							})]
						}, `row2-${index}`))
					})
				})
			]
		})
	});
};
var LogoScroller = ({ className }) => {
	const logos = [
		{
			name: "NASTP",
			icon: "/images/nastp.png",
			size: "140px"
		},
		{
			name: "Regional Plan 9",
			icon: "/images/regional.png",
			size: "390px"
		},
		{
			name: "PITB",
			icon: "/images/pitb (2).png",
			size: "140px"
		},
		{
			name: "Bank of Khyber",
			icon: "/images/bok (2).png",
			size: "140px"
		},
		{
			name: "Ignite",
			icon: "/images/ignite.png",
			size: "140px"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `py-16 px-4 overflow-hidden ${className || ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-full mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-center mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-grow h-px",
						style: { background: "linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-pink), transparent)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-6 text-sm font-medium tracking-wider uppercase",
						style: { color: "var(--neon-blue)" },
						children: "Trusted By"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-grow h-px",
						style: { background: "linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-pink), transparent)" }
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "flex whitespace-nowrap items-center",
					style: { gap: "60px" },
					animate: { x: [0, -2800] },
					transition: {
						duration: 28,
						repeat: Infinity,
						ease: "linear"
					},
					children: [
						...logos,
						...logos,
						...logos
					].map((logo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center flex-shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo.icon,
							alt: logo.name,
							className: "object-contain",
							style: {
								width: logo.size,
								height: logo.size
							}
						})
					}, `logo-${index}`))
				})
			})]
		})
	});
};
function Loader({ onDone }) {
	(0, import_react.useEffect)(() => {
		const t = setTimeout(onDone, 1800);
		return () => clearTimeout(t);
	}, [onDone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .6 },
		className: "fixed inset-0 z-[100] grid place-items-center",
		style: { background: "var(--gradient-hero)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "spin-slow absolute -inset-12 rounded-full border border-white/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "spin-reverse absolute -inset-20 rounded-full border border-white/5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						scale: 0,
						rotate: -90
					},
					animate: {
						scale: 1,
						rotate: 0
					},
					transition: {
						type: "spring",
						duration: 1
					},
					className: "relative grid h-24 w-24 place-items-center rounded-2xl neon-glow",
					style: { background: "var(--gradient-border)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-10 w-10 text-white" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .4 },
					className: "absolute top-full mt-8 left-1/2 -translate-x-1/2 text-center w-max",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl font-display font-bold shimmer-text",
						children: "TEHNIAT HASHIR"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.4em] text-muted-foreground mt-2",
						children: "Initializing…"
					})]
				})
			]
		})
	});
}
function TechBackground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-hero)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl",
				style: { background: "radial-gradient(circle, rgba(160,32,240,0.55), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full blur-3xl",
				style: {
					background: "radial-gradient(circle, rgba(255,77,255,0.4), transparent 70%)",
					animationDelay: "3s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "orb absolute bottom-0 left-1/4 h-96 w-96 rounded-full blur-3xl",
				style: {
					background: "radial-gradient(circle, rgba(0,191,255,0.45), transparent 70%)",
					animationDelay: "6s"
				}
			}),
			[
				0,
				1.5,
				3,
				4.5,
				6
			].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "beam",
				style: {
					top: `${10 + i * 18}%`,
					animationDelay: `${d}s`
				}
			}, i))
		]
	});
}
var NAV = [
	["About", "about"],
	["Experience", "experience"],
	["Network", "network"],
	["Projects", "projects"],
	["Skills", "skills"],
	["Education", "education"],
	["Additional", "additional"],
	["Contact", "contact"]
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 30);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.nav, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .7,
			delay: 1.8
		},
		className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mx-auto max-w-7xl px-6 transition-all ${scrolled ? "rounded-2xl glass" : ""}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-2 font-display font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-lg pulse-ring",
							style: { background: "var(--gradient-border)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Tehniat Hashir"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden xl:flex items-center gap-0 text-sm",
						children: NAV.map(([label, id]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${id}`,
							className: "px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors hover:bg-white/5",
							children: label
						}) }, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "magnetic-btn hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white",
						style: { background: "var(--gradient-border)" },
						children: ["Let's talk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
					})
				]
			})
		})
	});
}
function Hero() {
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 600], [0, 180]);
	const opacity = useTransform(scrollY, [0, 400], [1, .2]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, { density: 70 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "spin-slow h-[680px] w-[680px] rounded-full border border-white/5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "spin-reverse absolute inset-12 rounded-full border border-white/5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "spin-slow absolute inset-24 rounded-full border border-white/5" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: {
					y,
					opacity
				},
				className: "relative z-10 min-h-screen flex items-center justify-center px-6 pt-32 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-5xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: 2,
								duration: .6
							},
							className: "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium glass mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-emerald-400 animate-pulse" }), "Open to global opportunities"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: 2.1,
								duration: .9
							},
							className: "text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block shimmer-text",
								children: "Hi, I'm Tehniat Hashir"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: 2.4 },
							className: "text-lg sm:text-2xl font-display text-gradient mb-2",
							children: "Full Stack Developer, React Developer, Frontend Engineer & Project Manager"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: 2.5 },
							className: "text-sm sm:text-base text-muted-foreground mb-10",
							children: "Motivated and detail-oriented Web Developer with hands-on experience in building responsive and user-friendly web applications. Skilled in frontend development, UI design, project management, digital marketing, and business development."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: 2.6 },
							className: "grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto mb-10",
							children: [
								{
									v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: 4 }),
									l: "Featured Projects"
								},
								{
									v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										to: 8,
										suffix: "+"
									}) }),
									l: "Real-world Experiences"
								},
								{
									v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: 6 }),
									l: "Professional Roles"
								}
							].map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl p-4 sm:p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xl sm:text-3xl font-display font-bold text-gradient",
									children: k.v
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider",
									children: k.l
								})]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: 2.8 },
							className: "flex flex-wrap items-center justify-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#projects",
									className: "inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:border-white/40 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "h-4 w-4" }), " View Projects"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/resume.pdf",
									download: true,
									className: "magnetic-btn inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white",
									style: { background: "var(--gradient-border)" },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download CV"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:border-white/40 transition-all",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " Contact Me"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: 3 },
							className: "mt-10 inline-flex items-center gap-2 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), " Rawalpindi, Pakistan"]
						})
					]
				})
			})
		]
	});
}
var ABOUT_PILLARS = [
	{
		icon: Cpu,
		label: "Full Stack Development"
	},
	{
		icon: Rocket,
		label: "React Development"
	},
	{
		icon: Lightbulb,
		label: "UI/UX Design"
	},
	{
		icon: Briefcase,
		label: "Project Management"
	},
	{
		icon: ChartColumn,
		label: "Digital Marketing"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		eyebrow: "About",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Modern web products with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "clarity and polish"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-5 gap-10 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				x: -30,
				className: "lg:col-span-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg sm:text-xl text-muted-foreground leading-relaxed",
						children: "I am a Computer Science graduate with practical experience in Full Stack Development, Frontend Engineering, Project Management, Graphic Design, Digital Marketing, and Business Development. I have worked with startups, software houses, and innovation hubs including NASTP NICAT and Regional Plan 9."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg sm:text-xl text-muted-foreground leading-relaxed mt-6",
						children: "My expertise includes building responsive web applications, creating modern user interfaces, managing development teams, coordinating with clients, and delivering digital products that solve real business challenges."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg sm:text-xl text-muted-foreground leading-relaxed mt-6",
						children: "I am passionate about learning new technologies and continuously improving my technical and leadership skills."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-2 space-y-3",
				children: ABOUT_PILLARS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					x: 30,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "neon-border rounded-2xl p-4 flex items-center gap-4 group hover:translate-x-1 transition-transform",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-lg neon-glow",
								style: { background: "var(--gradient-border)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5 text-white" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: p.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
						]
					})
				}, p.label))
			})]
		})
	});
}
var METRICS = [
	{
		to: 4,
		label: "Featured Projects",
		icon: Rocket,
		prefix: ""
	},
	{
		to: 8,
		suffix: "+",
		label: "Real-world Experiences",
		icon: TrendingUp,
		prefix: ""
	},
	{
		to: 6,
		label: "Professional Roles",
		icon: Target,
		prefix: ""
	},
	{
		to: 5,
		suffix: "+",
		label: "Partnerships & Hubs",
		icon: Users,
		prefix: ""
	},
	{
		to: 4,
		label: "Business Domains",
		icon: Briefcase,
		prefix: ""
	},
	{
		to: 10,
		suffix: "+",
		label: "Digital Campaigns",
		icon: Zap,
		prefix: ""
	}
];
function Impact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "impact",
		eyebrow: "Key Impact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Numbers that tell the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "story"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
			children: METRICS.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					whileHover: {
						y: -6,
						scale: 1.02
					},
					className: "neon-border rounded-2xl p-6 relative overflow-hidden group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							className: "absolute right-2 bottom-2 opacity-20 group-hover:opacity-40 transition-opacity",
							width: "120",
							height: "50",
							viewBox: "0 0 120 50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: `g${i}`,
								x1: "0",
								x2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#00bfff"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#ff4dff"
								})]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
								d: "M0,40 Q20,10 40,25 T80,15 T120,5",
								fill: "none",
								stroke: `url(#g${i})`,
								strokeWidth: "2",
								initial: { pathLength: 0 },
								whileInView: { pathLength: 1 },
								viewport: { once: true },
								transition: {
									duration: 1.5,
									delay: .3 + i * .1
								}
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, {
							className: "h-7 w-7 mb-4",
							style: { color: "var(--neon-blue)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-3xl sm:text-4xl font-display font-bold text-gradient",
							children: [m.prefix && m.prefix, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: m.to,
								suffix: m.suffix
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-muted-foreground",
							children: m.label
						})
					]
				})
			}, m.label))
		})
	});
}
var EXPERIENCE = [
	{
		role: "Full Stack Developer (React) – Paid Intern",
		org: "Ampflick – NASTP NICAT",
		period: "April 2026 – Present",
		location: "Rawalpindi, Pakistan",
		bullets: [
			"Developing real-world web applications using React.",
			"Building backend functionality and API integrations.",
			"Creating responsive, user-friendly interfaces.",
			"Improving performance and application structure.",
			"Collaborating with development teams on live client projects."
		]
	},
	{
		role: "Lead Generation Executive (Web Development)",
		org: "QUONO – Regional Plan 9 NASTP",
		period: "May 2026 – Present",
		location: "Rawalpindi, Pakistan",
		bullets: [
			"Generated qualified leads for web development services.",
			"Connected with businesses seeking digital solutions.",
			"Maintained lead databases and prospect tracking.",
			"Conducted targeted online research and outreach campaigns."
		]
	},
	{
		role: "Project Manager (Contract Based)",
		org: "CodeAxisTech",
		period: "May 2026 – June 2026",
		location: "Remote",
		bullets: [
			"Managed remote software development projects.",
			"Assigned tasks and monitored progress across teams.",
			"Coordinated communication between clients and developers.",
			"Ensured timely project delivery and milestone completion.",
			"Tracked team performance and project milestones."
		]
	},
	{
		role: "Graphic Designer + Frontend Developer + Product Lead + Digital Marketing",
		org: "Yuni + Technospot (NASTP)",
		period: "December 2025 – April 2026",
		location: "Rawalpindi, Pakistan",
		bullets: [
			"Developed and managed course-based websites.",
			"Led product initiatives and digital strategy execution.",
			"Improved website structure and user experience.",
			"Managed digital marketing campaigns.",
			"Delivered real-world frontend solutions with polished UI."
		]
	},
	{
		role: "Frontend Developer Intern (React)",
		org: "Explorer Bees – NASTP NICAT",
		period: "July 2025 – October 2025",
		location: "Rawalpindi, Pakistan",
		bullets: [
			"Developed responsive UI components using React.",
			"Improved user experience through modern design.",
			"Worked on real-world frontend development projects."
		]
	},
	{
		role: "Business Developer Intern + Graphic Designer",
		org: "NASTP NICAT",
		period: "2 Months",
		location: "Rawalpindi, Pakistan",
		bullets: [
			"Assisted in business development strategies.",
			"Coordinated client communication and project planning.",
			"Designed proposals and visual assets for campaigns."
		]
	},
	{
		role: "Digital Marketing Executive",
		org: "Econex, Rawalpindi",
		period: "December 2022 – May 2023",
		location: "Rawalpindi, Pakistan",
		bullets: ["Managed social media campaigns.", "Improved brand visibility and audience engagement."]
	},
	{
		role: "Digital Marketing Executive",
		org: "Pak e Store, Rawalpindi",
		period: "June 2023 – September 2023",
		location: "Rawalpindi, Pakistan",
		bullets: ["Managed digital campaigns.", "Improved audience engagement and online reach."]
	}
];
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "experience",
		eyebrow: "Experience",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A track record of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "execution"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { scaleY: 0 },
				whileInView: { scaleY: 1 },
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: { duration: 1.5 },
				style: {
					transformOrigin: "top",
					background: "linear-gradient(to bottom, transparent, #00bfff, #a020f0, #ff4dff, transparent)"
				},
				className: "absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-12",
				children: EXPERIENCE.map((exp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: i % 2 === 0 ? -50 : 50
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .7,
						ease: [
							.2,
							.8,
							.2,
							1
						]
					},
					className: `relative flex ${i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-4 sm:left-1/2 -translate-x-1/2 mt-6 z-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-4 w-4 rounded-full pulse-ring",
							style: { background: "var(--gradient-border)" }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: { y: -4 },
						className: `ml-12 sm:ml-0 sm:w-[46%] neon-border rounded-2xl p-6 ${i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground mb-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }),
									" ",
									exp.period
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold mb-1",
								children: exp.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium mb-1",
								style: { color: "var(--neon-blue)" },
								children: exp.org
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground mb-4 inline-flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
									" ",
									exp.location
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2 text-sm text-muted-foreground",
								children: exp.bullets.map((b, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1.5 h-1 w-1 rounded-full flex-shrink-0",
										style: { background: "var(--neon-pink)" }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
								}, k))
							})
						]
					})]
				}, exp.org))
			})]
		})
	});
}
var NODES = [
	{
		label: "Clients",
		icon: Users,
		angle: -90
	},
	{
		label: "Web Apps",
		icon: Rocket,
		angle: -18
	},
	{
		label: "UI/UX",
		icon: Lightbulb,
		angle: 54
	},
	{
		label: "Marketing",
		icon: Zap,
		angle: 126
	},
	{
		label: "Growth",
		icon: TrendingUp,
		angle: 198
	}
];
function Network_() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "network",
		eyebrow: "Startup Momentum",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A connected ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "digital delivery network"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-square max-w-2xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 400 400",
					className: "absolute inset-0 h-full w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "linegrad",
							x1: "0",
							y1: "0",
							x2: "1",
							y2: "1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "#00bfff",
								stopOpacity: "0.9"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "#ff4dff",
								stopOpacity: "0.5"
							})]
						}) }),
						NODES.map((n, i) => {
							const x = 200 + Math.cos(n.angle * Math.PI / 180) * 160;
							const y = 200 + Math.sin(n.angle * Math.PI / 180) * 160;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
								x1: "200",
								y1: "200",
								x2: x,
								y2: y,
								stroke: "url(#linegrad)",
								strokeWidth: "1.5",
								initial: {
									pathLength: 0,
									opacity: 0
								},
								whileInView: {
									pathLength: 1,
									opacity: 1
								},
								viewport: { once: true },
								transition: {
									duration: 1.2,
									delay: .3 + i * .15
								}
							}, n.label);
						}),
						NODES.map((n, i) => {
							const next = NODES[(i + 1) % NODES.length];
							const x1 = 200 + Math.cos(n.angle * Math.PI / 180) * 160;
							const y1 = 200 + Math.sin(n.angle * Math.PI / 180) * 160;
							const x2 = 200 + Math.cos(next.angle * Math.PI / 180) * 160;
							const y2 = 200 + Math.sin(next.angle * Math.PI / 180) * 160;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
								x1,
								y1,
								x2,
								y2,
								stroke: "rgba(160,32,240,0.25)",
								strokeWidth: "1",
								strokeDasharray: "3 4",
								initial: { opacity: 0 },
								whileInView: { opacity: 1 },
								viewport: { once: true },
								transition: {
									duration: 1,
									delay: 1 + i * .1
								}
							}, `${i}-c`);
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { scale: 0 },
						whileInView: { scale: 1 },
						viewport: { once: true },
						transition: {
							type: "spring",
							duration: .8
						},
						className: "grid h-28 w-28 sm:h-36 sm:w-36 place-items-center rounded-full pulse-ring neon-glow",
						style: { background: "var(--gradient-border)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center text-white px-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "h-6 w-6 mx-auto mb-1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-bold leading-none",
									children: "10+"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-wider mt-1",
									children: "Digital Solutions Delivered"
								})
							]
						})
					})
				}),
				NODES.map((n, i) => {
					const x = 50 + Math.cos(n.angle * Math.PI / 180) * 40;
					const y = 50 + Math.sin(n.angle * Math.PI / 180) * 40;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: 0
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: { once: true },
						transition: {
							delay: .6 + i * .12,
							type: "spring"
						},
						whileHover: { scale: 1.1 },
						className: "absolute -translate-x-1/2 -translate-y-1/2",
						style: {
							top: `${y}%`,
							left: `${x}%`
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-2xl px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, {
								className: "h-4 w-4",
								style: { color: "var(--neon-pink)" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs sm:text-sm font-medium",
								children: n.label
							})]
						})
					}, n.label);
				})
			]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "projects",
		eyebrow: "Featured Projects",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Select web projects with ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "real impact"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid md:grid-cols-2 gap-6",
			children: [
				{
					title: "Cricket Player Dashboard",
					description: "Built an interactive dashboard for cricket player statistics with responsive design, data visualization, and performance tracking features.",
					tech: [
						"React",
						"JavaScript",
						"CSS"
					]
				},
				{
					title: "Yuni Courses Website",
					description: "Developed a live educational platform featuring structured course listings, modern UI, responsive design, and intuitive navigation.",
					tech: [
						"React",
						"HTML",
						"CSS",
						"JavaScript"
					]
				},
				{
					title: "Online Food Ordering Website",
					description: "Designed and developed a responsive food ordering platform with modern layouts, smooth navigation, and enhanced user experience.",
					tech: [
						"React",
						"JavaScript",
						"CSS"
					]
				},
				{
					title: "AI Image Generator Website",
					description: "Developed an AI-powered image generation platform using prompt-based image creation through API integration and modern frontend technologies.",
					tech: [
						"React",
						"APIs",
						"JavaScript"
					]
				}
			].map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: index * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					whileHover: { y: -4 },
					className: "neon-border rounded-3xl p-6 h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm uppercase tracking-[0.3em] text-muted-foreground",
								children: ["Project ", index + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-full bg-white/5 px-3 py-1 text-xs text-foreground",
								children: "Web App"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-semibold mb-3",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed mb-5",
							children: project.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: project.tech.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground",
								children: tech
							}, tech))
						})
					]
				})
			}, project.title))
		})
	});
}
var SKILL_GROUPS = [
	{
		icon: Rocket,
		title: "Frontend Development",
		color: "#00bfff",
		items: [
			["HTML5", 96],
			["CSS3", 94],
			["JavaScript", 93],
			["React.js", 95]
		]
	},
	{
		icon: Cpu,
		title: "Backend & Data",
		color: "#a020f0",
		items: [
			["Express.js", 85],
			["API Integration", 88],
			["SQL (Basic)", 72],
			["Python (Basic)", 70]
		]
	},
	{
		icon: ChartColumn,
		title: "Product & Growth",
		color: "#ff4dff",
		items: [
			["Project Management", 90],
			["Lead Generation", 86],
			["Graphic Design", 84],
			["Digital Marketing", 87]
		]
	}
];
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		eyebrow: "Skills",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A futuristic ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "skill matrix"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid lg:grid-cols-3 gap-6",
			children: SKILL_GROUPS.map((g, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: gi * .12,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					whileHover: { y: -6 },
					className: "neon-border rounded-2xl p-7 h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 place-items-center rounded-xl",
							style: {
								background: `linear-gradient(135deg, ${g.color}, rgba(255,255,255,0.05))`,
								boxShadow: `0 0 30px ${g.color}55`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.icon, { className: "h-5 w-5 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: g.title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: g.items.map(([name, pct]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs mb-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground",
								children: name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [pct, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 rounded-full bg-white/5 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { width: 0 },
								whileInView: { width: `${pct}%` },
								viewport: { once: true },
								transition: {
									duration: 1.2,
									ease: "easeOut"
								},
								className: "h-full rounded-full",
								style: {
									background: `linear-gradient(90deg, ${g.color}, #ff4dff)`,
									boxShadow: `0 0 10px ${g.color}`
								}
							})
						})] }, name))
					})]
				})
			}, g.title))
		})
	});
}
var TOOL_CARDS = [
	{
		name: "VS Code",
		org: "Editor",
		year: "Daily"
	},
	{
		name: "Git & GitHub",
		org: "Version Control",
		year: "Daily"
	},
	{
		name: "Figma",
		org: "Design",
		year: "Regular"
	},
	{
		name: "Chrome DevTools",
		org: "Debugging",
		year: "Daily"
	},
	{
		name: "Postman",
		org: "API Testing",
		year: "Regular"
	},
	{
		name: "MS Office",
		org: "Productivity",
		year: "Regular"
	}
];
function ToolCard({ c }) {
	const ref = (0, import_react.useRef)(null);
	const [tilt, setTilt] = (0, import_react.useState)({
		rx: 0,
		ry: 0
	});
	const onMove = (e) => {
		const r = ref.current.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width - .5;
		setTilt({
			rx: -((e.clientY - r.top) / r.height - .5) * 10,
			ry: x * 10
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		onMouseMove: onMove,
		onMouseLeave: () => setTilt({
			rx: 0,
			ry: 0
		}),
		style: {
			transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
			transition: "transform 0.2s"
		},
		className: "neon-border rounded-2xl p-5 relative overflow-hidden group",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity",
				style: { background: "var(--neon-purple)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
				className: "h-7 w-7 mb-3 relative z-10",
				style: { color: "var(--neon-blue)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-semibold text-sm leading-snug relative z-10",
				children: c.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center justify-between text-xs text-muted-foreground relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.org }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono",
					children: c.year
				})]
			})
		]
	});
}
function Tools() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "tools",
		eyebrow: "Tools & Platforms",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A modern development ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "toolkit"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
			children: TOOL_CARDS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolCard, { c })
			}, c.name))
		})
	});
}
var EDUCATION = [
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "education",
		eyebrow: "Education",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Academic ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "milestones"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 gap-5",
			children: EDUCATION.map((ed, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					whileHover: { y: -4 },
					className: "neon-border rounded-2xl p-6 relative overflow-hidden group h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "absolute -right-6 -top-6 h-28 w-28 opacity-5 group-hover:opacity-20 transition-opacity" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground mb-2",
							children: ed.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold mb-1",
							children: ed.degree
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm mb-3",
							style: { color: "var(--neon-blue)" },
							children: ed.school
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: ed.note
						})
					]
				})
			}, ed.degree))
		})
	});
}
var ADDITIONAL_ITEMS = [
	{
		title: "Data Scraping",
		description: "Collected and structured 2,000+ USPTO records to support research and service delivery workflows."
	},
	{
		title: "Shopify Product Listing",
		description: "Built optimized product catalogs and storefront pages for Shopify-based commerce stores."
	},
	{
		title: "Social Media Management",
		description: "Managed social campaigns to improve brand visibility, engagement, and digital reach."
	},
	{
		title: "Annotation Project Management",
		description: "Coordinated labeling work for AI datasets with quality review and delivery tracking."
	},
	{
		title: "Wix Content Writing",
		description: "Produced website content and page updates for Wix-powered business sites."
	},
	{
		title: "Payhip Store Builder",
		description: "Configured Payhip storefronts and digital product listings for online sales."
	}
];
function AdditionalExperience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "additional",
		eyebrow: "Additional Experience",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Additional skills and real-world ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "deliverables"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
			children: ADDITIONAL_ITEMS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					whileHover: { y: -4 },
					className: "neon-border rounded-3xl p-6 h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: item.description
					})]
				})
			}, item.title))
		})
	});
}
var LANGUAGES = [
	{
		name: "English",
		level: "Professional Working Proficiency"
	},
	{
		name: "Urdu",
		level: "Native Proficiency"
	},
	{
		name: "Chinese",
		level: "Basic Proficiency"
	}
];
function Languages() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "languages",
		eyebrow: "Languages",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Communication across ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "global teams"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-3 gap-6",
			children: LANGUAGES.map((lang, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					whileHover: { y: -4 },
					className: "neon-border rounded-3xl p-6 h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-lg font-semibold mb-2",
						children: lang.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: lang.level
					})]
				})
			}, lang.name))
		})
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		setTimeout(() => setSent(false), 4e3);
		e.target.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		eyebrow: "Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Let's Build Something Great ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "Together"
		})] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-5 gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				x: -30,
				className: "lg:col-span-2 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "I am open to internships, freelance opportunities, full-time roles, project collaborations, and innovative development projects. Feel free to reach out to discuss your ideas."
				}), [
					{
						icon: MapPin,
						label: "Rawalpindi, Pakistan"
					},
					{
						icon: Mail,
						label: "tehniathashir@gmail.com",
						href: "mailto:tehniathashir@gmail.com"
					},
					{
						icon: Linkedin,
						label: "linkedin.com/in/tehniat-hashir-a860b025b",
						href: "https://www.linkedin.com/in/tehniat-hashir-a860b025b/"
					},
					{
						icon: Sparkles,
						label: "behance.net/tehniathashir",
						href: "https://www.behance.net/tehniathashir"
					},
					{
						icon: Phone,
						label: "+92 336 0925493",
						href: "tel:+923360925493"
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: c.href,
					target: c.href?.startsWith("http") ? "_blank" : void 0,
					rel: "noreferrer",
					className: "flex items-center gap-3 glass rounded-2xl p-4 hover:border-white/40 transition-all group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-lg neon-glow",
							style: { background: "var(--gradient-border)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4 w-4 text-white" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: c.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "ml-auto h-4 w-4 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
					]
				}, i))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				x: 30,
				className: "lg:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "neon-border rounded-3xl p-7 sm:p-10 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name",
								placeholder: "Your name",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email",
								placeholder: "you@company.com",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Subject",
							name: "subject",
							placeholder: "What's it about?",
							required: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs uppercase tracking-wider text-muted-foreground mb-2 block",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 5,
							required: true,
							placeholder: "Tell me a bit more…",
							className: "w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-[var(--neon-purple)] focus:ring-2 focus:ring-[var(--neon-purple)]/30 transition-all resize-none"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "magnetic-btn inline-flex items-center gap-2 rounded-full px-7 py-3 font-medium text-white",
							style: { background: "var(--gradient-border)" },
							children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), " Sent — thanks!"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send message"] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: sent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: { opacity: 0 },
							className: "text-sm text-emerald-400 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), " Your message is queued — I'll reply within 24 hours."]
						}) })
					]
				})
			})]
		})
	});
}
function Field({ label, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs uppercase tracking-wider text-muted-foreground mb-2 block",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: "w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-[var(--neon-purple)] focus:ring-2 focus:ring-[var(--neon-purple)]/30 transition-all"
	})] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-20 pt-12 pb-8 px-6 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 h-px",
				style: { background: "linear-gradient(90deg, transparent, var(--neon-purple), var(--neon-pink), transparent)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10 opacity-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full blur-3xl",
					style: { background: "radial-gradient(ellipse, rgba(160,32,240,0.3), transparent 70%)" }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row items-center justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-lg pulse-ring",
							style: { background: "var(--gradient-border)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display font-bold text-gradient",
							children: "Tehniat Hashir"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Full Stack Developer | React Developer"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: [
							{
								icon: Linkedin,
								href: "https://www.linkedin.com/in/tehniat-hashir-a860b025b/"
							},
							{
								icon: Mail,
								href: "mailto:tehniathashir@gmail.com"
							},
							{
								icon: Download,
								href: "/resume.pdf"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: s.href.startsWith("http") ? "_blank" : void 0,
							rel: "noreferrer",
							className: "glass rounded-full p-3 hover:scale-110 hover:border-white/40 transition-all",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 text-center text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Tehniat Hashir. Full Stack Developer | React Developer | Frontend Developer."
					]
				})]
			})
		]
	});
}
function Section({ id, eyebrow, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "relative py-24 sm:py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-12 sm:mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] mb-4",
					style: { color: "var(--neon-blue)" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-px w-8",
						style: { background: "var(--neon-blue)" }
					}), eyebrow]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl",
					children: title
				})]
			}), children]
		})
	});
}
function Portfolio() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, { onDone: () => setLoading(false) }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechBackground, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskScroller, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoScroller, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Impact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network_, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tools, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdditionalExperience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	] });
}
//#endregion
export { Portfolio as component };
