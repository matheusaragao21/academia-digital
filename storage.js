// ===== STORAGE.JS — LocalStorage + Supabase =====
// Dados são lidos/gravados no localStorage (sync) e espelhados no Supabase (async).
// Senhas de admin ficam APENAS no localStorage — nunca sobem ao Supabase.

// ── Supabase config ─────────────────────────────────────────
const _SB_URL = 'https://vtylikgfbdghefyrxeiu.supabase.co';
const _SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0eWxpa2dmYmRnaGVmeXJ4ZWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3ODI4NDAsImV4cCI6MjA5MTM1ODg0MH0.-q7imO_uTkZnz7fcrlDGpi4bssUu1KybsDysyqrMOf4';
// Chaves que sobem ao Supabase (admins ficam só local por segurança)
const _SB_KEYS = ['cursos','ebooks','posts','professores','faqs','config'];

let _sbInst = null;
function _sb() {
  if (_sbInst) return _sbInst;
  if (typeof supabase !== 'undefined' && supabase.createClient) {
    _sbInst = supabase.createClient(_SB_URL, _SB_KEY);
  }
  return _sbInst;
}

// ── Baixa tudo do Supabase → localStorage ───────────────────
async function sbSync() {
  const sb = _sb();
  if (!sb) return false;
  try {
    const { data, error } = await sb.from('store').select('key, value');
    if (error || !data) return false;
    data.forEach(row => {
      if (STORE[row.key]) {
        try { localStorage.setItem(STORE[row.key], JSON.stringify(row.value)); } catch(e) {}
      }
    });
    return true;
  } catch(e) {
    console.warn('[Supabase] Sync falhou, usando localStorage:', e.message);
    return false;
  }
}

// ── Envia uma chave ao Supabase (fire-and-forget) ────────────
async function sbPush(key, value) {
  if (!_SB_KEYS.includes(key)) return; // admins não sobem
  const sb = _sb();
  if (!sb) return;
  try {
    await sb.from('store').upsert({ key, value }, { onConflict: 'key' });
  } catch(e) {
    console.warn('[Supabase] Push falhou para', key, ':', e.message);
  }
}

// ── Inicializa dados: tenta Supabase, cai no localStorage ───
// Chame esta função antes de renderizar nas páginas públicas e no admin.
async function inicializarDados() {
  return await sbSync();
}

// ── LocalStorage ─────────────────────────────────────────────
const STORE = {
  cursos:      'ed_cursos',
  ebooks:      'ed_ebooks',
  posts:       'ed_posts',
  professores: 'ed_professores',
  faqs:        'ed_faqs',
  config:      'ed_config',
  admins:      'ed_admins'
};

function storeGet(key, fallback) {
  try {
    const raw = localStorage.getItem(STORE[key]);
    return raw ? JSON.parse(raw) : (fallback ? JSON.parse(JSON.stringify(fallback)) : []);
  } catch(e) { return fallback || []; }
}

function storeSet(key, data) {
  try {
    const json = JSON.stringify(data);
    const prev = localStorage.getItem(STORE[key]);
    if (prev) {
      try { localStorage.setItem(STORE[key] + '_bak', prev); } catch(e) {}
    }
    localStorage.setItem(STORE[key], json);
    sbPush(key, data); // espelha no Supabase em background
    return true;
  } catch(e) {
    if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED' || e.code === 22) {
      alert('⚠️ Espaço de armazenamento cheio!\n\nRemova imagens de algum item e tente novamente.');
    } else {
      console.error('[storeSet] Erro ao salvar ' + key + ':', e);
      alert('Erro ao salvar: ' + e.message);
    }
    return false;
  }
}

function storeRestore(key) {
  const bak = localStorage.getItem(STORE[key] + '_bak');
  if (bak) { localStorage.setItem(STORE[key], bak); return true; }
  return false;
}

// ── Getters ──────────────────────────────────────────────────
function getCursos()      { return storeGet('cursos',      typeof CURSOS      !== 'undefined' ? CURSOS      : []); }
function getEbooks()      { return storeGet('ebooks',      typeof EBOOKS      !== 'undefined' ? EBOOKS      : []); }
function getPosts()       { return storeGet('posts',       typeof POSTS_BLOG  !== 'undefined' ? POSTS_BLOG  : []); }
function getProfessores() { return storeGet('professores', typeof PROFESSORES !== 'undefined' ? PROFESSORES : []); }
function getFaqs()        { return storeGet('faqs',        typeof FAQS        !== 'undefined' ? FAQS        : []); }

// ── Setters ──────────────────────────────────────────────────
function salvarCursos(d)      { return storeSet('cursos', d); }
function salvarEbooks(d)      { return storeSet('ebooks', d); }
function salvarPosts(d)       { return storeSet('posts', d); }
function salvarProfessores(d) { return storeSet('professores', d); }
function salvarFaqs(d)        { return storeSet('faqs', d); }

// ── Utilitário ───────────────────────────────────────────────
function novoId(lista) {
  return lista.length > 0 ? Math.max(...lista.map(i => i.id || 0)) + 1 : 1;
}

// ── Config ───────────────────────────────────────────────────
const CONFIG_DEFAULT = {
  logo: null,
  hero: {
    tag: '✦ Plataforma de Educação Online ✦',
    titulo: 'Desenvolva suas <em>Habilidades</em><br>e Avance na Carreira',
    descricao: 'Aprenda com especialistas do mercado através de cursos práticos e objetivos. Do iniciante ao avançado, no seu ritmo.',
    btn1txt: '✦ Ver Todos os Cursos',
    btn1url: 'cursos.html',
    btn2txt: 'Conhecer o Blog',
    btn2url: 'blog.html'
  },
  stats: [
    { num: 'auto:cursos', label: 'Cursos Disponíveis' },
    { num: 'auto:professores', label: 'Professores' },
    { num: '5.000+', label: 'Alunos Satisfeitos' }
  ],
  beneficios: [
    { id:1, icone:'video',        titulo:'Aulas em Vídeo HD',       desc:'Conteúdo gravado em alta qualidade, assista quando e onde quiser' },
    { id:2, icone:'award',        titulo:'Certificado de Conclusão', desc:'Comprove suas habilidades com certificados reconhecidos pelo mercado' },
    { id:3, icone:'users',        titulo:'Comunidade Ativa',         desc:'Conecte-se com outros alunos e tire suas dúvidas com os instrutores' },
    { id:4, icone:'infinity',     titulo:'Acesso Vitalício',         desc:'Compre uma vez e acesse para sempre, sem mensalidades' },
    { id:5, icone:'smartphone',   titulo:'Em Qualquer Dispositivo',  desc:'Estude no celular, tablet ou computador com a mesma qualidade' }
  ],
  cta: {
    titulo: 'Comece Sua Jornada Hoje',
    desc: 'Invista em você. Com uma única compra, acesse o conteúdo para sempre e transforme sua carreira.',
    btnTxt: '✦ Ver Todos os Cursos',
    btnUrl: 'cursos.html'
  },
  footer: {
    desc: 'Academia Digital é uma plataforma de educação online focada no desenvolvimento profissional e pessoal. Aprenda com especialistas e dê o próximo passo na sua carreira.',
    navLinks: [
      { texto: 'Cursos',      url: 'cursos.html' },
      { texto: 'Ebooks',      url: 'ebooks.html' },
      { texto: 'Blog',        url: 'blog.html' },
      { texto: 'Professores', url: 'index.html#professores' }
    ],
    plataformas: [
      { texto: 'Hotmart', url: 'https://hotmart.com' },
      { texto: 'Kiwify',  url: 'https://kiwify.com.br' }
    ]
  }
};

function getConfig() {
  const stored = storeGet('config', null);
  if (!stored) return JSON.parse(JSON.stringify(CONFIG_DEFAULT));
  return {
    logo:      stored.logo || null,
    hero:      { ...CONFIG_DEFAULT.hero,  ...(stored.hero  || {}) },
    stats:     stored.stats     || CONFIG_DEFAULT.stats,
    beneficios: stored.beneficios || CONFIG_DEFAULT.beneficios,
    cta:       { ...CONFIG_DEFAULT.cta,   ...(stored.cta   || {}) },
    footer: {
      desc:        (stored.footer || {}).desc        || CONFIG_DEFAULT.footer.desc,
      navLinks:    (stored.footer || {}).navLinks    || CONFIG_DEFAULT.footer.navLinks,
      plataformas: (stored.footer || {}).plataformas || CONFIG_DEFAULT.footer.plataformas
    }
  };
}
function salvarConfig(d) { return storeSet('config', d); }

// ── Admins (local only — não sobem ao Supabase) ──────────────
const ADMINS_DEFAULT = [{ email: 'admin@academiadigital.com', senha: 'Admin2025' }];
function getAdmins() {
  const stored = storeGet('admins', null);
  if (!stored || !stored.length) return JSON.parse(JSON.stringify(ADMINS_DEFAULT));
  // Migração: remove contas antigas do domínio escoladalet.com
  const migrado = stored.filter(a => !a.email.includes('escoladalet.com'));
  if (!migrado.length) {
    // Salva os novos defaults e retorna
    storeSet('admins', ADMINS_DEFAULT);
    return JSON.parse(JSON.stringify(ADMINS_DEFAULT));
  }
  return migrado;
}
function salvarAdmins(d) { return storeSet('admins', d); }
