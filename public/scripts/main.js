// main.js - global interactions
// ─── LANGUAGE DATA ────────────────────────────────────────────────────────────
// To add a new language: add a new key block below following the same structure
const TRANSLATIONS = {
  en: {
    available:          "Available",
    hero_eyebrow:       "// OPERATOR PROFILE LOADED",
    hero_role_prefix:   "> ROLE: ",
    hero_bio:           "New York based. Blue team focused. I got into security through an SQL class that changed everything, and I haven't stopped building since.",
    hero_cta_primary:   "ENTER OPERATOR FILE",
    hero_cta_resume:    "VIEW RESUME ↗",
    hud_status:         "STATUS",
    hud_available:      "AVAILABLE",
    hud_clearance:      "CLEARANCE",
    hud_location:       "LOCATION",
    hud_team:           "TEAM",
    hud_focus:          "FOCUS",
    hud_threat:         "THREAT AWARENESS",
    scroll_hint:        "SCROLL TO DEPLOY",
    about_title:        "WHOAMI",
    about_card2_title:  "THE DEFENDER",
    about_card2_text:   "I am drawn to SOC work because it combines investigation, documentation, and careful pattern recognition under pressure.",
    about_card3_title:  "THE BUILDER",
    about_card3_text:   "I build and document technical projects that connect security concepts to practical tools, analysis, and clearer workflows.",
    about_card4_title:  "THE DOCUMENTOR",
    about_card4_text:   "My IT support and library roles taught me to translate technical issues into clear steps that help people solve problems.",
    skills_title:       "SKILLS & TOOLS",
    projects_title:     "PROJECTS",
    proj1_title:        "Fraud Job Posting Detection Tool",
    proj1_desc:         "A Python-based ML tool that identifies fraudulent job postings using NLP techniques and classification models. Built to protect job seekers from scams, trained on real-world data.",
    proj2_title:        "SOC Incident Simulator",
    proj2_desc:         "Role-specific SOC training simulator covering 5 industry tracks. Features compliance-graded reporting, AI mentoring, and realistic evidence packs.",
    proj_github:        "⚙ GitHub",
    proj_live:          "↗ Live Demo",
    proj_coming:        "Coming soon",
    exp_title:          "TIMELINE",
    contact_title:      "CONTACT",
    contact_channels:   "// DIRECT CHANNELS",
    form_name:          "NAME",
    form_email:         "EMAIL",
    form_message:       "MESSAGE",
    form_submit:        "TRANSMIT MESSAGE →",
    security_note:      "This site uses HTTPS and no tracking cookies.",
  },

  es: {
    available:          "Disponible",
    hero_eyebrow:       "// PERFIL DE OPERADOR CARGADO",
    hero_bio:           "Basado en Nueva York. Enfocado en el equipo azul. Entré en seguridad a través de una clase de SQL que lo cambió todo.",
    hero_cta_primary:   "VER PERFIL",
    hero_cta_resume:    "VER CURRÍCULUM ↗",
    hud_status:         "ESTADO",
    hud_available:      "DISPONIBLE",
    hud_clearance:      "AUTORIZACIÓN",
    hud_location:       "UBICACIÓN",
    hud_team:           "EQUIPO",
    hud_focus:          "ENFOQUE",
    hud_threat:         "CONCIENCIA DE AMENAZAS",
    scroll_hint:        "DESPLAZAR PARA CONTINUAR",
    about_title:        "¿QUIÉN SOY?",
    about_card2_title:  "EL DEFENSOR",
    about_card2_text:   "Me atrae el trabajo SOC porque combina investigación, documentación y reconocimiento cuidadoso de patrones bajo presión.",
    about_card3_title:  "EL CONSTRUCTOR",
    about_card3_text:   "Construyo y documento proyectos técnicos que conectan conceptos de seguridad con herramientas prácticas y análisis claro.",
    about_card4_title:  "LA DOCUMENTADORA",
    about_card4_text:   "Mis roles de soporte técnico y biblioteca me enseñaron a convertir problemas técnicos en pasos claros.",
    skills_title:       "HABILIDADES Y HERRAMIENTAS",
    projects_title:     "PROYECTOS",
    proj_github:        "⚙ GitHub",
    proj_live:          "↗ Demo",
    proj_coming:        "Próximamente",
    exp_title:          "CRONOLOGÍA",
    contact_title:      "CONTACTO",
    contact_channels:   "// CANALES DIRECTOS",
    form_name:          "NOMBRE",
    form_email:         "CORREO",
    form_message:       "MENSAJE",
    form_submit:        "ENVIAR MENSAJE →",
    security_note:      "Este sitio usa HTTPS y no usa cookies de rastreo.",
  },

  fr: {
    available:          "Disponible",
    hero_eyebrow:       "// PROFIL D'OPÉRATEUR CHARGÉ",
    hero_bio:           "Basé à New York. Concentré sur la défense. J'ai découvert la sécurité grâce à un cours SQL qui a tout changé.",
    hero_cta_primary:   "VOIR LE PROFIL",
    hero_cta_resume:    "VOIR CV ↗",
    hud_status:         "STATUT",
    hud_available:      "DISPONIBLE",
    hud_clearance:      "AUTORISATION",
    hud_location:       "LIEU",
    hud_team:           "ÉQUIPE",
    hud_focus:          "DOMAINE",
    hud_threat:         "CONSCIENCE DES MENACES",
    scroll_hint:        "DÉFILER POUR CONTINUER",
    about_title:        "QUI SUIS-JE ?",
    skills_title:       "COMPÉTENCES ET OUTILS",
    projects_title:     "PROJETS",
    exp_title:          "CHRONOLOGIE",
    contact_title:      "CONTACT",
    form_name:          "NOM",
    form_email:         "EMAIL",
    form_message:       "MESSAGE",
    form_submit:        "ENVOYER →",
  },

  pt: {
    available:          "Disponível",
    hero_eyebrow:       "// PERFIL DO OPERADOR CARREGADO",
    hero_bio:           "Baseado em Nova York. Focado em defesa. Entrei na segurança através de uma aula de SQL que mudou tudo.",
    hero_cta_primary:   "VER PERFIL",
    hero_cta_resume:    "VER CURRÍCULO ↗",
    hud_status:         "STATUS",
    hud_available:      "DISPONÍVEL",
    skills_title:       "HABILIDADES E FERRAMENTAS",
    projects_title:     "PROJETOS",
    exp_title:          "LINHA DO TEMPO",
    contact_title:      "CONTATO",
    form_name:          "NOME",
    form_email:         "EMAIL",
    form_message:       "MENSAGEM",
    form_submit:        "ENVIAR MENSAGEM →",
  },

  ja: {
    available:          "対応可能",
    hero_eyebrow:       "// オペレータープロファイル読み込み完了",
    hero_bio:           "ニューヨーク在住。ブルーチーム重視。SQLの授業をきっかけにセキュリティの世界へ。",
    hero_cta_primary:   "プロファイルを見る",
    hero_cta_resume:    "履歴書を見る ↗",
    hud_status:         "ステータス",
    hud_available:      "対応可能",
    skills_title:       "スキルとツール",
    projects_title:     "プロジェクト",
    exp_title:          "タイムライン",
    contact_title:      "お問い合わせ",
    form_name:          "お名前",
    form_email:         "メール",
    form_message:       "メッセージ",
    form_submit:        "送信 →",
  },

  zh: {
    available:          "可用",
    hero_eyebrow:       "// 操作员档案已加载",
    hero_bio:           "驻纽约。专注蓝队防御。通过一堂SQL课进入安全领域，从此一发不可收拾。",
    hero_cta_primary:   "查看档案",
    hero_cta_resume:    "查看简历 ↗",
    hud_status:         "状态",
    hud_available:      "可用",
    skills_title:       "技能与工具",
    projects_title:     "项目",
    exp_title:          "时间线",
    contact_title:      "联系",
    form_name:          "姓名",
    form_email:         "邮箱",
    form_message:       "留言",
    form_submit:        "发送消息 →",
  },
};

let currentLang = 'en';

function applyLanguage(lang) {
  const t = { ...TRANSLATIONS.en, ...TRANSLATIONS[lang] };
  currentLang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key].replace(/\n/g, '<br/>');
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update current lang display
  const langDisplay = document.getElementById('lang-current');
  if (langDisplay) langDisplay.textContent = lang.toUpperCase();

  // Mark active option
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Save preference
  try { localStorage.setItem('preferred-lang', lang); } catch {}
}

// ─── LANGUAGE SWITCHER ────────────────────────────────────────────────────────
function initLangSwitcher() {
  const toggle   = document.getElementById('lang-toggle');
  const dropdown = document.getElementById('lang-dropdown');

  if (!toggle || !dropdown) return;

  toggle.addEventListener('click', () => {
    const open = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open.toString());
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Language option click
  dropdown.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) applyLanguage(lang);
      dropdown.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Restore saved preference
  try {
    const saved = localStorage.getItem('preferred-lang');
    if (saved && TRANSLATIONS[saved]) applyLanguage(saved);
  } catch {}
}

// ─── NAV SCROLL BEHAVIOR ─────────────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('nav');

  // Scrolled class for shadow
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Active link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));

  // Mobile hamburger
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu?.classList.remove('open'));
  });
}

// ─── FADE-UP SCROLL ANIMATIONS ────────────────────────────────────────────────
function initFadeUp() {
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ─── CURSOR GLOW EFFECT ───────────────────────────────────────────────────────
function initCursorGlow() {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position:fixed;
    width:300px;height:300px;
    border-radius:50%;
    pointer-events:none;
    z-index:0;
    background:radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%);
    transform:translate(-50%,-50%);
    transition:left 0.1s ease, top 0.1s ease;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  }, { passive: true });
}

// ─── SECURITY HEADERS CHECK (visible easter egg for security folks) ───────────
function addSecurityMeta() {
  // Console message for devs who inspect the site
  console.log(
    '%c🛡 JYNALIS DIAZ // SOC ANALYST',
    'color:#6C63FF;font-size:18px;font-weight:bold;font-family:monospace'
  );
  console.log(
    '%cHey. You opened devtools. That tracks.\nIf you\'re hiring - let\'s talk.\n→ github.com/JynalisDiaz',
    'color:#8896B3;font-size:13px;font-family:monospace'
  );
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initLangSwitcher();
  initFadeUp();
  initCursorGlow();
  addSecurityMeta();
});
