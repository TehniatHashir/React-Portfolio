import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "./react+tanstack__react-query.mjs";
//#region node_modules/lucide-react/dist/esm/shared/src/utils.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = (0, import_react.forwardRef)(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
	return (0, import_react.createElement)("svg", {
		ref,
		...defaultAttributes,
		width: size,
		height: size,
		stroke: color,
		strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
		className: mergeClasses("lucide", className),
		...rest
	}, [...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)), ...Array.isArray(children) ? children : [children]]);
});
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = (0, import_react.forwardRef)(({ className, ...props }, ref) => (0, import_react.createElement)(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
		...props
	}));
	Component.displayName = `${iconName}`;
	return Component;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/arrow-up-right.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUpRight = createLucideIcon("ArrowUpRight", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/award.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Award = createLucideIcon("Award", [["path", {
	d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
	key: "1yiouv"
}], ["circle", {
	cx: "12",
	cy: "8",
	r: "6",
	key: "1vp47v"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/briefcase.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Briefcase = createLucideIcon("Briefcase", [["path", {
	d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
	key: "jecpp"
}], ["rect", {
	width: "20",
	height: "14",
	x: "2",
	y: "6",
	rx: "2",
	key: "i6l2r4"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/calendar.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Calendar = createLucideIcon("Calendar", [
	["path", {
		d: "M8 2v4",
		key: "1cmpym"
	}],
	["path", {
		d: "M16 2v4",
		key: "4m81vk"
	}],
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "4",
		rx: "2",
		key: "1hopcy"
	}],
	["path", {
		d: "M3 10h18",
		key: "8toen8"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/chart-column.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChartColumn = createLucideIcon("ChartColumn", [
	["path", {
		d: "M3 3v16a2 2 0 0 0 2 2h16",
		key: "c24i48"
	}],
	["path", {
		d: "M18 17V9",
		key: "2bz60n"
	}],
	["path", {
		d: "M13 17V5",
		key: "1frdt8"
	}],
	["path", {
		d: "M8 17v-3",
		key: "17ska0"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/circle-check.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheck = createLucideIcon("CircleCheck", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/cpu.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Cpu = createLucideIcon("Cpu", [
	["rect", {
		width: "16",
		height: "16",
		x: "4",
		y: "4",
		rx: "2",
		key: "14l7u7"
	}],
	["rect", {
		width: "6",
		height: "6",
		x: "9",
		y: "9",
		rx: "1",
		key: "5aljv4"
	}],
	["path", {
		d: "M15 2v2",
		key: "13l42r"
	}],
	["path", {
		d: "M15 20v2",
		key: "15mkzm"
	}],
	["path", {
		d: "M2 15h2",
		key: "1gxd5l"
	}],
	["path", {
		d: "M2 9h2",
		key: "1bbxkp"
	}],
	["path", {
		d: "M20 15h2",
		key: "19e6y8"
	}],
	["path", {
		d: "M20 9h2",
		key: "19tzq7"
	}],
	["path", {
		d: "M9 2v2",
		key: "165o2o"
	}],
	["path", {
		d: "M9 20v2",
		key: "i2bqo8"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/download.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Download = createLucideIcon("Download", [
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["polyline", {
		points: "7 10 12 15 17 10",
		key: "2ggqvy"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "15",
		y2: "3",
		key: "1vk2je"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/graduation-cap.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var GraduationCap = createLucideIcon("GraduationCap", [
	["path", {
		d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
		key: "j76jl0"
	}],
	["path", {
		d: "M22 10v6",
		key: "1lu8f3"
	}],
	["path", {
		d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
		key: "1r8lef"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/lightbulb.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Lightbulb = createLucideIcon("Lightbulb", [
	["path", {
		d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
		key: "1gvzjb"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/linkedin.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Linkedin = createLucideIcon("Linkedin", [
	["path", {
		d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
		key: "c2jq9f"
	}],
	["rect", {
		width: "4",
		height: "12",
		x: "2",
		y: "9",
		key: "mk3on5"
	}],
	["circle", {
		cx: "4",
		cy: "4",
		r: "2",
		key: "bt5ra8"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/mail.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Mail = createLucideIcon("Mail", [["rect", {
	width: "20",
	height: "16",
	x: "2",
	y: "4",
	rx: "2",
	key: "18n3k1"
}], ["path", {
	d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
	key: "1ocrg3"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/map-pin.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var MapPin = createLucideIcon("MapPin", [["path", {
	d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
	key: "1r0f0z"
}], ["circle", {
	cx: "12",
	cy: "10",
	r: "3",
	key: "ilqhr7"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/network.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Network = createLucideIcon("Network", [
	["rect", {
		x: "16",
		y: "16",
		width: "6",
		height: "6",
		rx: "1",
		key: "4q2zg0"
	}],
	["rect", {
		x: "2",
		y: "16",
		width: "6",
		height: "6",
		rx: "1",
		key: "8cvhb9"
	}],
	["rect", {
		x: "9",
		y: "2",
		width: "6",
		height: "6",
		rx: "1",
		key: "1egb70"
	}],
	["path", {
		d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
		key: "1jsf9p"
	}],
	["path", {
		d: "M12 12V8",
		key: "2874zd"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/phone.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Phone = createLucideIcon("Phone", [["path", {
	d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
	key: "foiqr5"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/rocket.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Rocket = createLucideIcon("Rocket", [
	["path", {
		d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
		key: "m3kijz"
	}],
	["path", {
		d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
		key: "1fmvmk"
	}],
	["path", {
		d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
		key: "1f8sc4"
	}],
	["path", {
		d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
		key: "qeys4"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/send.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Send = createLucideIcon("Send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/sparkles.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sparkles = createLucideIcon("Sparkles", [
	["path", {
		d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
		key: "4pj2yx"
	}],
	["path", {
		d: "M20 3v4",
		key: "1olli1"
	}],
	["path", {
		d: "M22 5h-4",
		key: "1gvqau"
	}],
	["path", {
		d: "M4 17v2",
		key: "vumght"
	}],
	["path", {
		d: "M5 18H3",
		key: "zchphs"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/target.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Target = createLucideIcon("Target", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "6",
		key: "1vlfrh"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/trending-up.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TrendingUp = createLucideIcon("TrendingUp", [["polyline", {
	points: "22 7 13.5 15.5 8.5 10.5 2 17",
	key: "126l90"
}], ["polyline", {
	points: "16 7 22 7 22 13",
	key: "kwv8wd"
}]]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/users.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Users = createLucideIcon("Users", [
	["path", {
		d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
		key: "1yyitq"
	}],
	["circle", {
		cx: "9",
		cy: "7",
		r: "4",
		key: "nufk8"
	}],
	["path", {
		d: "M22 21v-2a4 4 0 0 0-3-3.87",
		key: "kshegd"
	}],
	["path", {
		d: "M16 3.13a4 4 0 0 1 0 7.75",
		key: "1da9ce"
	}]
]);
//#endregion
//#region node_modules/lucide-react/dist/esm/icons/zap.js
/**
* @license lucide-react v0.469.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Zap = createLucideIcon("Zap", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]);
//#endregion
export { ArrowUpRight as S, CircleCheck as _, Sparkles as a, Briefcase as b, Phone as c, Mail as d, Linkedin as f, Cpu as g, Download as h, Target as i, Network as l, GraduationCap as m, Users as n, Send as o, Lightbulb as p, TrendingUp as r, Rocket as s, Zap as t, MapPin as u, ChartColumn as v, Award as x, Calendar as y };
