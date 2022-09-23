import { Color } from "https://code4fukui.github.io/Color/Color.js";

const COLORS_DEFAULT = "#222,#d00,#0d0,#00d";

export class LEDMatrix extends HTMLElement {
  constructor(content, atts) {
    super();
    for (const name in atts) {
      this.setAttribute(name, atts[name]);
    }
    const s = getContent(this) || content;
    const p = createPattern(s, (this.getAttribute("colors") || COLORS_DEFAULT).split(","));
    this.innerHTML = "";
    this.appendChild(p);
  }
};

const createSVG = (tag) => document.createElementNS("http://www.w3.org/2000/svg", tag);
  
const circle = (x, y, color, color2) => {
  const c = {};
  c.cx = x;
  c.cy = y;
  c.r = 6;
  c.stroke = color;
  c.fill = color2;
  c["stroke-width"] = 8;
  const ci = createSVG("circle");
  for (const name in c) {
    ci.setAttribute(name, c[name]);
  }
  return ci;
};

const createPattern = (ptn, colors) => {
  const lighter = [];
  for (let i = 0; i < colors.length; i++) {
    lighter[i] = Color.lighter(colors[i], 1.2);
  }
  const svg = createSVG("svg");
  const lw = 20;
  const ss = ptn.split("\n").map(s => s.trim());
  const w = ss[0].length;
  const h = ss.length;
  svg.setAttribute("width", lw * w + lw);
  svg.setAttribute("height", lw * h + lw);
  for (let y = 0; y < h; y++) {
    const s = ss[y];
    for (let x = 0; x < w; x++) {
      const n = parseInt(s[x]) || 0;
      const c = circle(x * lw + lw, y * lw + lw, colors[n], lighter[n]);
      svg.appendChild(c);
    }
  }
  svg.style.backgroundColor = "black";
  return svg;
};

const getContent = (comp) => {
  const s = comp.innerHTML.trim();
  if (s.startsWith("<!--")) {
    const n = s.lastIndexOf("-->");
    if (n >= 0) {
      return s.substring(4, n).trim();
    }
  }
  return s;
};

customElements.define("led-matrix", LEDMatrix);
