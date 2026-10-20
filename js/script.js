/* ---------- Sempre abrir no início da página ----------
   Impede o navegador de restaurar a rolagem anterior e remove âncoras (#projetos etc.) da URL ao abrir o site.
   Protegido com try/catch: se algo falhar aqui, o resto do site continua funcionando. */
(function () {
  try {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  } catch (e) {}
  const top = () => {
    try {
      const root = document.documentElement, prev = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      root.style.scrollBehavior = prev;
    } catch (e) {}
  };
  top();
  window.addEventListener("load", top);
  window.addEventListener("pageshow", e => { if (e.persisted) top(); });
})();

/* ============================================================
   CONFIGURAÇÃO — preencha com os dados oficiais da MVN PROJETADOS
   ============================================================ */
const CONFIG = {
  whatsapp: "5584997051232",   // somente números com DDI e DDD, ex.: "5584999999999"
  telefone: "(84) 99705-1232",   // texto exibido, ex.: "(84) 99999-9999"
  email: "thallysonrbarros@gmail.com",      // ex.: "contato@dominio.com.br"
  endereco: "Rua Santa Maria Gorete, 15 - Zona de Expansão Urbana Sul, Macaíba - RN, CEP 59281-740",   // endereço oficial
  instagram: "https://www.instagram.com/mvnprojetados/",  // URL completa do perfil
  mensagemWhatsapp: "Olá! Gostaria de solicitar um orçamento com a MVN PROJETADOS.",
  /* Fotos: caminho de cada posição (pasta images/). Sem foto, aparece uma ilustração provisória.
     Posições: hero, residencial, room, doors-wood, doors, metal, glass, movel, store, glass-wide */
  posicoes: { residencial: "50% 40%", store: "30% 50%", "glass-wide": "60% 50%" },
  imagens: {
    "room": "images/sobre-principal.jpg",
    "doors-wood": "images/sobre-menor.jpg",
    "glass": "images/servico-vidracaria.jpg",
    "metal": "images/servico-metalurgica.jpg",
    "movel": "images/servico-moveis.jpg",
    "store": "images/aplicacao-condominios.jpg",
    "glass-wide": "images/contato.jpg",
    "residencial": "images/aplicacao-residencial.jpg"
  }
};

/* ---------- Cenas ilustradas (provisórias, trocáveis por fotos em CONFIG.imagens) ---------- */
const SCENES = {};
const G = (id, a, b) => `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const svg = (w, h, defs, inner, label) => `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${label}"><defs>${defs}</defs>${inner}</svg>`;
function pane(x, y, w, h, fill, frame, t = 6) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${frame}" stroke-width="${t}"/>`;
}
function grid(x, y, w, h, cols, rows, frame, fill, t = 5) {
  let s = pane(x, y, w, h, fill, frame, t + 2);
  for (let i = 1; i < cols; i++) s += `<rect x="${x + (w / cols) * i - t / 2}" y="${y}" width="${t}" height="${h}" fill="${frame}"/>`;
  for (let j = 1; j < rows; j++) s += `<rect x="${x}" y="${y + (h / rows) * j - t / 2}" width="${w}" height="${t}" fill="${frame}"/>`;
  return s;
}
const shine = (x, y, w, h) => `<polygon points="${x + w * .15},${y} ${x + w * .45},${y} ${x + w * .1},${y + h} ${x - w * .2},${y + h}" fill="#fff" opacity=".09"/>`;

SCENES.hero = () => `<svg viewBox="-130 0 1440 810" preserveAspectRatio="xMaxYMid slice" role="img" aria-label="Residência contemporânea em concreto, vidro e esquadrias metálicas ao entardecer"><defs>
  <linearGradient id="hs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#18202f"/><stop offset=".55" stop-color="#586580"/><stop offset="1" stop-color="#b3a9a4"/></linearGradient>
  <linearGradient id="hw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7e7468"/><stop offset=".35" stop-color="#2b2a2a"/><stop offset="1" stop-color="#101011"/></linearGradient>
  <linearGradient id="hc1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7d776d"/><stop offset="1" stop-color="#9a9387"/></linearGradient>
  <linearGradient id="hc2" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4d4943"/><stop offset="1" stop-color="#38352f"/></linearGradient>
  <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9a45f"/><stop offset="1" stop-color="#6f4a26"/></linearGradient>
  <linearGradient id="hv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6c7482" stop-opacity=".75"/><stop offset="1" stop-color="#3a3e48" stop-opacity=".9"/></linearGradient>
  <filter id="hb"><feGaussianBlur stdDeviation="9"/></filter>
</defs>
<rect x="-800" width="2400" height="810" fill="url(#hs)"/>
<path d="M-800 548 L-300 530 L0 548 L120 536 L240 520 L340 526 L420 512 L520 530 L640 540 L640 560 L-800 560Z" fill="#59545a" opacity=".85"/>
<rect x="-800" y="558" width="2400" height="252" fill="url(#hw)"/>
<rect x="-800" y="556" width="2400" height="3" fill="#a69685" opacity=".6"/>
<g filter="url(#hb)" opacity=".7"><rect x="880" y="580" width="420" height="40" fill="#d9a45f"/><rect x="960" y="640" width="300" height="24" fill="#b98642"/></g>
<polygon points="1250,150 1440,118 1440,420 1250,430" fill="#1c1b19"/>
<g stroke="#2f2d2a" stroke-width="3"><path d="M1275 150V428M1300 146V426M1325 142V424M1350 138V422M1375 134V420M1400 130V418M1425 126V416"/></g>
<polygon points="760,170 1130,118 1130,352 760,352" fill="url(#hc1)"/>
<polygon points="1130,118 1255,100 1255,352 1130,352" fill="url(#hc2)"/>
<polygon points="760,170 1130,118 1255,100 880,156" fill="#aaa294" opacity=".9"/>
<polygon points="818,198 1008,172 1008,330 818,334" fill="url(#hv)"/>
<g stroke="#161514" stroke-width="3" fill="none"><polygon points="818,198 1008,172 1008,330 818,334"/><path d="M880 190V332M944 182V331"/></g>
<polygon points="818,198 1008,172 1008,196 818,226" fill="#fff" opacity=".08"/>
<rect x="840" y="292" width="40" height="40" rx="4" fill="#3a3732" opacity=".8"/><rect x="900" y="300" width="30" height="30" rx="3" fill="#2d2b27" opacity=".8"/>
<polygon points="700,352 1270,326 1270,372 700,392" fill="#8f887d"/>
<polygon points="700,392 1270,372 1270,380 700,402" fill="#4a463f"/>
<rect x="836" y="402" width="470" height="150" fill="url(#hg)"/>
<g fill="#1a1815" opacity=".78"><rect x="900" y="470" width="190" height="9"/><rect x="920" y="479" width="5" height="50"/><rect x="1060" y="479" width="5" height="50"/><rect x="960" y="436" width="46" height="34" rx="2"/><rect x="1150" y="440" width="70" height="90"/></g>
<g stroke="#111010" stroke-width="5" fill="none"><rect x="836" y="402" width="470" height="150"/><path d="M913 402V552M990 402V552M1067 402V552M1144 402V552M1221 402V552M836 438H1306"/></g>
<polygon points="836,402 906,402 836,552" fill="#fff" opacity=".07"/>
<rect x="700" y="552" width="760" height="28" fill="#8a8377"/>
<rect x="700" y="580" width="760" height="6" fill="#3d3a35"/>
<g fill="#e9bf7c" opacity=".85"><rect x="1230" y="556" width="210" height="3"/><rect x="1250" y="563" width="190" height="3"/><rect x="1270" y="570" width="170" height="3"/></g>
<g fill="#16150f"><rect x="1325" y="360" width="10" height="220"/><ellipse cx="1385" cy="330" rx="95" ry="64"/><ellipse cx="1330" cy="388" rx="70" ry="46"/><ellipse cx="1420" cy="410" rx="60" ry="44"/><ellipse cx="1360" cy="296" rx="60" ry="38"/></g>
<g fill="#14130f"><rect x="700" y="545" width="20" height="26" rx="8"/><ellipse cx="710" cy="540" rx="14" ry="18"/></g>
<polygon points="1020,610 1440,610 1440,800 1120,800" fill="#1a1918" opacity=".55"/>
<g opacity=".3" fill="#6b6459"><rect x="-800" y="640" width="2400" height="2"/></g>
</svg>`;

SCENES.movel = () => svg(520, 640,
  G("v1", "#a8744a", "#6e4528") + G("v2", "#2a2018", "#14100c") + G("v3", "#ece6da", "#d3cab8"),
  `<rect width="520" height="640" fill="url(#v3)"/>
   <rect x="40" y="50" width="440" height="470" fill="url(#v1)"/>
   <g stroke="#5a3820" stroke-width="2" opacity=".55"><path d="M80 50V520M120 50V520M160 50V520M200 50V520"/></g>
   <rect x="230" y="80" width="230" height="400" fill="url(#v2)"/>
   <g fill="#f0c98a" opacity=".9"><rect x="230" y="190" width="230" height="4"/><rect x="230" y="300" width="230" height="4"/><rect x="230" y="410" width="230" height="4"/></g>
   <g opacity=".5" fill="#f0c98a"><rect x="230" y="194" width="230" height="22"/><rect x="230" y="304" width="230" height="22"/></g>
   <g fill="#4b4036"><rect x="255" y="150" width="34" height="40"/><rect x="300" y="132" width="26" height="58" rx="3"/><rect x="345" y="158" width="48" height="32"/><rect x="262" y="262" width="52" height="38"/><rect x="330" y="246" width="30" height="54"/><rect x="380" y="270" width="52" height="30" rx="3"/><rect x="258" y="372" width="38" height="38"/><rect x="320" y="360" width="60" height="50"/></g>
   <rect x="40" y="520" width="440" height="16" fill="#3a2616"/>
   <rect y="536" width="520" height="104" fill="#c9bda8"/>
   <rect x="230" y="80" width="230" height="400" fill="none" stroke="#1a1410" stroke-width="5"/>`,
  "Móvel planejado em MDF com nichos iluminados");
SCENES.movel_defs = 0;

SCENES.room = () => svg(600, 690,
  G("r1", "#dfe6e0", "#9db39a") + G("r2", "#f1ede4", "#d9d2c3"),
  `<rect width="600" height="690" fill="url(#r2)"/>
   ${grid(90, 70, 420, 360, 3, 3, "#1c1b18", "url(#r1)", 6)}
   <g opacity=".5" fill="#4a6b48"><ellipse cx="190" cy="360" rx="70" ry="50"/><ellipse cx="400" cy="380" rx="90" ry="55"/></g>
   ${shine(90, 70, 420, 360)}
   <rect y="500" width="600" height="190" fill="#b99a74"/><rect y="500" width="600" height="4" fill="#8a6e4d"/>
   <rect x="40" y="430" width="300" height="110" rx="22" fill="#cdc4b3"/><rect x="40" y="395" width="300" height="60" rx="20" fill="#bcb2a0"/>`,
  "Sala com esquadrias de vidro e perfis metálicos");

SCENES["doors-wood"] = () => svg(560, 460,
  G("w1", "#e9efe6", "#a9bba5") + G("w2", "#f3efe6", "#ddd5c5"),
  `<rect width="560" height="460" fill="url(#w2)"/>
   ${grid(140, 50, 280, 340, 2, 4, "#7a5636", "url(#w1)", 6)}
   <rect y="390" width="560" height="70" fill="#b99a74"/>
   <rect x="20" y="320" width="100" height="80" rx="4" fill="#9b6f45"/><rect x="440" y="340" width="100" height="60" rx="14" fill="#8a7a66"/>`,
  "Portas de vidro com esquadria de madeira");

SCENES.doors = () => svg(520, 640,
  G("d1", "#e4ece4", "#8ea88c") + G("d2", "#efece4", "#d7cfbe"),
  `<rect width="520" height="640" fill="url(#d2)"/>
   ${grid(70, 40, 380, 520, 2, 5, "#161512", "url(#d1)", 7)}
   <g opacity=".5" fill="#40603e"><ellipse cx="160" cy="500" rx="80" ry="60"/><ellipse cx="350" cy="510" rx="90" ry="55"/></g>
   ${shine(70, 40, 380, 520)}
   <rect x="238" y="330" width="9" height="46" rx="3" fill="#c9c9c2"/><rect x="273" y="330" width="9" height="46" rx="3" fill="#c9c9c2"/>
   <rect y="560" width="520" height="80" fill="#b99a74"/>`,
  "Portas de vidro com perfis metálicos pretos");

SCENES.metal = () => svg(520, 640,
  G("m1", "#c9d3dc", "#eef0ee") + G("m2", "#6b6a64", "#3b3a36"),
  `<rect width="520" height="640" fill="url(#m1)"/>
   <rect y="500" width="520" height="140" fill="url(#m2)"/>
   <g fill="#1a1a18"><rect x="80" y="90" width="22" height="430"/><rect x="418" y="90" width="22" height="430"/>
   <rect x="60" y="70" width="400" height="22"/><rect x="60" y="150" width="400" height="14"/>
   <path d="M102 520L260 164L418 520" fill="none" stroke="#1a1a18" stroke-width="12"/>
   <path d="M150 410H370M200 300H320" stroke="#1a1a18" stroke-width="10"/></g>
   <rect x="76" y="86" width="6" height="430" fill="#fff" opacity=".12"/>`,
  "Estrutura metálica arquitetônica preta");

SCENES.glass = () => svg(520, 640,
  G("g1", "#d8e4ea", "#a8c0c8") + G("g2", "#efece4", "#d4ccbb"),
  `<rect width="520" height="640" fill="url(#g2)"/>
   <rect y="470" width="520" height="170" fill="#b99a74"/>
   <rect x="50" y="90" width="420" height="400" fill="url(#g1)" opacity=".85"/>
   <rect x="50" y="90" width="420" height="400" fill="none" stroke="#2c2c29" stroke-width="5"/>
   <rect x="258" y="90" width="4" height="400" fill="#2c2c29"/>
   ${shine(50, 90, 420, 400)}<polygon points="330,90 390,90 300,490 240,490" fill="#fff" opacity=".12"/>
   <rect x="120" y="400" width="160" height="70" rx="14" fill="#8a8473" opacity=".7"/>`,
  "Divisória de vidro em ambiente interno");

SCENES.store = () => svg(480, 640,
  G("s1", "#dbe5ea", "#9fb6bf") + G("s2", "#3a3934", "#232220"),
  `<rect width="480" height="640" fill="url(#s2)"/>
   <rect x="30" y="70" width="420" height="440" fill="url(#s1)"/>
   <rect x="30" y="70" width="420" height="440" fill="none" stroke="#111" stroke-width="8"/>
   <rect x="236" y="70" width="8" height="440" fill="#111"/><rect x="30" y="170" width="420" height="6" fill="#111"/>
   ${shine(30, 70, 420, 440)}
   <rect x="320" y="260" width="9" height="70" rx="3" fill="#c9c9c2"/><rect x="152" y="260" width="9" height="70" rx="3" fill="#c9c9c2"/>
   <rect y="510" width="480" height="130" fill="#2b2a26"/>`,
  "Fachada comercial em vidro e metal");

SCENES["glass-wide"] = () => svg(700, 560,
  G("c1", "#d3dfe6", "#8fb0b6") + G("c2", "#3b3a35", "#1f1e1b"),
  `<rect width="700" height="560" fill="url(#c2)"/>
   ${grid(60, 60, 580, 380, 3, 2, "#0f0f0d", "url(#c1)", 7)}
   ${shine(60, 60, 580, 380)}<polygon points="420,60 480,60 340,440 280,440" fill="#fff" opacity=".1"/>
   <rect y="440" width="700" height="120" fill="#2b2a26"/>`,
  "Conjunto de esquadrias de vidro");

document.querySelectorAll(".scene[data-scene]").forEach(el => {
  const key = el.dataset.scene;
  const url = CONFIG.imagens[key];
  if (url) {
    const img = new Image();
    img.src = url; img.alt = ""; 
    img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;object-position:" + (CONFIG.posicoes[key] || "50% 50%");
    el.appendChild(img);
  } else if (SCENES[key]) {
    el.innerHTML = SCENES[key]();
  }
});


if (CONFIG.imagens.residencial) {
  const pr = document.getElementById("panelResidencial");
  if (pr) pr.classList.replace("yellow", "photo-panel");
}

/* ---------- Vídeo do hero (em loop, sem som) ----------
   Dois vídeos: 16:9 para computador e 9:16 para celular. Troca sozinho se a tela mudar. */
(function () {
  const holder = document.querySelector('.scene[data-scene="hero"]');
  if (!holder) return;
  const HERO = {
    desktop: { video: "images/hero-desktop.mp4", poster: "images/hero-desktop-poster.jpg", pos: "center 52%" },
    mobile:  { video: "images/hero-mobile.mp4",  poster: "images/hero-mobile-poster.jpg",  pos: "center center" }
  };
  const mq = window.matchMedia("(max-width: 720px)");
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = null, el = null;

  function mount() {
    const kind = mq.matches ? "mobile" : "desktop";
    if (kind === current) return;
    current = kind;
    const cfg = HERO[kind];
    if (el) el.remove();
    if (still) {
      el = new Image(); el.src = cfg.poster; el.alt = "";
    } else {
      el = document.createElement("video");
      el.muted = true; el.loop = true; el.autoplay = true; el.playsInline = true; el.preload = "auto";
      el.setAttribute("muted", ""); el.setAttribute("playsinline", ""); el.setAttribute("aria-hidden", "true");
      el.poster = cfg.poster;
      el.src = cfg.video;
    }
    el.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:" + cfg.pos;
    holder.innerHTML = "";
    holder.appendChild(el);
    if (el.play) { const pr = el.play(); if (pr && pr.catch) pr.catch(() => {}); }
  }
  mount();
  (mq.addEventListener ? mq.addEventListener("change", mount) : mq.addListener(mount));
})();

/* ---------- Contatos e destinos dos botões de orçamento ---------- */
const copyIcon = "Copiar";
const items = [];
if (CONFIG.whatsapp) items.push({ label: "WhatsApp", value: CONFIG.telefone || "+" + CONFIG.whatsapp, href: `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagemWhatsapp)}` });
if (CONFIG.telefone && !CONFIG.whatsapp) items.push({ label: "Telefone", value: CONFIG.telefone });
if (CONFIG.email) items.push({ label: "E-mail", value: CONFIG.email });
if (CONFIG.endereco) items.push({ label: "Endereço", value: CONFIG.endereco, noCopy: true, href: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.endereco) });
if (CONFIG.instagram) items.push({ label: "Instagram", value: CONFIG.instagram.replace(/^https?:\/\/(www\.)?/, ""), href: CONFIG.instagram, noCopy: true });

const list = document.getElementById("contactList");
const foot = document.getElementById("footContacts");
items.forEach(it => {
  const row = document.createElement("div");
  row.className = "contact-item";
  const txt = document.createElement("span");
  const sm = document.createElement("small"); sm.textContent = it.label;
  txt.append(sm, it.value);
  row.appendChild(txt);
  if (!it.noCopy) {
    const b = document.createElement("button");
    b.className = "copy-btn"; b.type = "button"; b.textContent = copyIcon;
    b.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(it.value); b.textContent = "Copiado"; }
      catch (e) {
        const r = document.createRange(); r.selectNodeContents(txt);
        const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = "Selecionado";
      }
      setTimeout(() => (b.textContent = copyIcon), 1800);
    });
    row.appendChild(b);
  }
  list.appendChild(row);
  const li = document.createElement("li");
  if (it.href) { const a = document.createElement("a"); a.href = it.href; a.target = "_blank"; a.rel = "noopener"; a.textContent = it.label + ": " + it.value; li.appendChild(a); }
  else li.textContent = it.label + ": " + it.value;
  foot.appendChild(li);
});
if (!items.length) {
  document.getElementById("pendingNote").hidden = false;
  const li = document.createElement("li"); li.textContent = "Contatos oficiais em breve."; foot.appendChild(li);
}
if (CONFIG.whatsapp) {
  const wa = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagemWhatsapp)}`;
  document.querySelectorAll(".js-quote").forEach(a => { a.href = wa; a.target = "_blank"; a.rel = "noopener"; });
}

/* ---------- Menu mobile ---------- */
const nav = document.getElementById("nav"), menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false");
}));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && nav.classList.contains("open")) { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); menuBtn.focus(); }
});

/* ---------- FAQ ---------- */
document.querySelectorAll(".faq-item").forEach(item => {
  item.querySelector(".faq-q").addEventListener("click", e => {
    const willOpen = !item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach(o => { o.classList.remove("open"); o.querySelector(".faq-q").setAttribute("aria-expanded", "false"); });
    if (willOpen) { item.classList.add("open"); e.currentTarget.setAttribute("aria-expanded", "true"); }
  });
});

/* ---------- Link ativo no menu ---------- */
const links = [...nav.querySelectorAll("a")];
const targets = links.map(a => document.querySelector(a.getAttribute("href")));
function markActive() {
  const y = window.scrollY + 160; let idx = 0;
  targets.forEach((t, i) => { if (t && t.offsetTop <= y) idx = i; });
  links.forEach((a, i) => a.toggleAttribute("aria-current", i === idx));
  links.forEach((a, i) => i === idx ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current"));
}
window.addEventListener("scroll", markActive, { passive: true }); markActive();

document.getElementById("year").textContent = new Date().getFullYear();
