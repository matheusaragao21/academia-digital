// ── Segurança: escape HTML e sanitização ───────────────────
function escHtml(s) {
  if (s === null || s === undefined) return '';
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#x27;');
}

function sanitizeHtml(html) {
  if (!html) return '';
  // Remove script tags
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers (onclick=, onerror=, etc.)
  html = html.replace(/\s+on[a-zA-Z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]*)/g, '');
  // Block javascript: protocol in href/src/action
  html = html.replace(/(href|src|action)\s*=\s*["']\s*javascript:[^"']*/gi, '$1="#"');
  // Remove <iframe>, <embed>, <object>
  html = html.replace(/<(iframe|embed|object|form|input|button|textarea|select)\b[^>]*>/gi, '');
  return html;
}

// ===== ESCOLA DALET — APP.JS =====

// ── Navbar mobile ──────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('aberto');
  document.getElementById('hamburger').classList.toggle('aberto');
}
document.addEventListener('click', e => {
  const nav = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  if (nav && ham && !nav.contains(e.target) && !ham.contains(e.target))
    nav.classList.remove('aberto');
});

// ── FAQ ────────────────────────────────────────────────────
function toggleFaq(btn) {
  const item = btn.parentElement;
  const aberto = item.classList.contains('aberto');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('aberto'));
  if (!aberto) item.classList.add('aberto');
}

// ── Thumb / Icon helper ────────────────────────────────────
function thumbOuIcon(item, iconName) {
  if (item.thumb) {
    return `<img src="${item.thumb}" alt="${item.titulo||''}" style="width:100%;height:100%;object-fit:cover;display:block">`;
  }
  return `<div class="card-icon-placeholder"><i data-lucide="${iconName||'book-open'}"></i></div>`;
}

function fotoOuIcon(prof) {
  if (prof.foto) {
    const ratio = prof.fotoRatio || '1';
    return `<img src="${prof.foto}" alt="${prof.nome}" class="professor-foto" style="aspect-ratio:${ratio};object-fit:cover">`;
  }
  return `<div class="professor-foto-placeholder"><i data-lucide="user"></i></div>`;
}

// ── Card de curso ───────────────────────────────────────────
function criarCardCurso(curso) {
  const badge = curso.plataforma === 'hotmart'
    ? '<span class="curso-plataforma plataforma-hotmart">Hotmart</span>'
    : '<span class="curso-plataforma plataforma-kiwify">Kiwify</span>';
  return `
    <a href="${curso.url_externa}" target="_blank" rel="noopener" class="curso-card">
      <div style="position:relative;aspect-ratio:${curso.thumbRatio||'1.7778'};overflow:hidden">
        ${thumbOuIcon(curso, 'book-open')}
        ${badge}
      </div>
      <div class="curso-info">
        <div class="curso-professor">${escHtml(curso.professor)}</div>
        <h3 class="curso-titulo">${escHtml(curso.titulo)}</h3>
        <p class="curso-desc">${escHtml(curso.descricao)}</p>
        <div class="curso-cta">Acessar curso <i data-lucide="arrow-right" style="width:14px;height:14px"></i></div>
      </div>
    </a>`;
}

// ── Card de professor ───────────────────────────────────────
function criarCardProfessor(prof) {
  return `
    <div class="professor-card">
      ${fotoOuIcon(prof)}
      <h3 class="professor-nome">${escHtml(prof.nome)}</h3>
      <div class="professor-titulo">${escHtml(prof.titulo)}</div>
      <p class="professor-bio">${escHtml(prof.bio)}</p>
    </div>`;
}

// ── Card de blog ────────────────────────────────────────────
function criarCardBlog(post, modalCallback) {
  const capaHtml = post.thumb
    ? `<img src="${post.thumb}" alt="${post.titulo}" style="width:100%;aspect-ratio:${post.thumbRatio||'1.7778'};object-fit:cover;display:block">`
    : `<div class="blog-capa-placeholder"><i data-lucide="newspaper"></i></div>`;
  const href = modalCallback ? 'javascript:void(0)' : 'blog.html';
  const onclick = modalCallback ? `onclick="${modalCallback}(${post.id})"` : '';
  return `
    <a href="${href}" class="blog-card" ${onclick}>
      ${capaHtml}
      <div class="blog-corpo">
        <div class="blog-data">${escHtml(post.data)}</div>
        <h3 class="blog-titulo">${escHtml(post.titulo)}</h3>
        <p class="blog-excerpt">${escHtml((post.excerpt||'').substring(0,120))}…</p>
        <span class="blog-ler">Ler artigo <i data-lucide="arrow-right" style="width:13px;height:13px"></i></span>
      </div>
    </a>`;
}

// ── Blog Post Modal (homepage) ──────────────────────────────
function abrirPostModal(id) {
  const post = getPosts().find(p => p.id === id);
  if (!post) return;
  const capa = post.thumb
    ? `<img src="${post.thumb}" alt="${post.titulo}" style="width:100%;border-radius:8px;margin-bottom:2rem;max-height:400px;object-fit:cover">`
    : `<div style="aspect-ratio:21/9;border-radius:8px;margin-bottom:2rem;background:linear-gradient(135deg,#0a2d3d,#1a5c6b);display:flex;align-items:center;justify-content:center"><i data-lucide="newspaper" style="width:64px;height:64px;color:rgba(201,168,76,0.4)"></i></div>`;
  document.getElementById('postModalConteudo').innerHTML = `
    ${capa}
    <div class="post-meta"><span class="post-data">${escHtml(post.data)}</span></div>
    <h1 class="post-titulo">${escHtml(post.titulo)}</h1>
    <div class="post-corpo">${sanitizeHtml(post.corpo || '<p><em>Conteúdo completo em breve.</em></p>')}</div>
    <div style="margin-top:3rem;padding-top:2rem;border-top:1px solid rgba(201,168,76,0.2);text-align:center">
      <a href="cursos.html" class="btn-primario">✦ Explorar os Cursos</a>
    </div>`;
  document.getElementById('postModal').classList.add('aberto');
  document.body.style.overflow = 'hidden';
  if (typeof lucide !== 'undefined') lucide.createIcons({ el: document.getElementById('postModalConteudo') });
}

function fecharPostModal() {
  document.getElementById('postModal').classList.remove('aberto');
  document.body.style.overflow = '';
}

// ── Renderização homepage ───────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  try { await inicializarDados(); } catch(e) { console.warn('[app] inicializarDados falhou:', e); }
  const cfg = getConfig();

  // Stats
  const statsEl = document.getElementById('statsBar');
  if (statsEl) {
    statsEl.innerHTML = cfg.stats.map(s => {
      let num = s.num;
      if (num === 'auto:cursos') num = getCursos().length;
      if (num === 'auto:professores') num = getProfessores().length;
      return `<div><span class="stat-num">${escHtml(String(num))}</span><span class="stat-label">${escHtml(s.label)}</span></div>`;
    }).join('');
  }

  // Hero dynamic content
  const heroTag = document.getElementById('heroTag');
  const heroTitulo = document.getElementById('heroTitulo');
  const heroDesc = document.getElementById('heroDesc');
  const heroBtn1 = document.getElementById('heroBtn1');
  const heroBtn2 = document.getElementById('heroBtn2');
  if (heroTag) heroTag.innerHTML = cfg.hero.tag;
  if (heroTitulo) heroTitulo.innerHTML = cfg.hero.titulo;
  if (heroDesc) heroDesc.textContent = cfg.hero.descricao;
  if (heroBtn1) { heroBtn1.textContent = cfg.hero.btn1txt; heroBtn1.href = cfg.hero.btn1url; }
  if (heroBtn2) { heroBtn2.textContent = cfg.hero.btn2txt; heroBtn2.href = cfg.hero.btn2url; }

  // Cursos destaque
  const gridDest = document.getElementById('cursosDestaque');
  if (gridDest) {
    const destaques = getCursos().filter(c => c.destaque);
    gridDest.innerHTML = destaques.length
      ? destaques.map(criarCardCurso).join('')
      : getCursos().slice(0,4).map(criarCardCurso).join('');
    // Center if few items
    gridDest.style.justifyContent = destaques.length <= 2 ? 'center' : '';
  }

  // Todos os cursos + filtros por professor (cursos.html)
  const gridTodos = document.getElementById('todosCursos');
  if (gridTodos) {
    const filtrosEl = document.getElementById('filtros');
    if (filtrosEl) {
      const nomes = [...new Set(getCursos().map(c => c.professor))];
      const botoes = [{ label: 'Todos os Cursos', val: 'todos' }, ...nomes.map(n => ({ label: n, val: n }))];
      filtrosEl.innerHTML = botoes.map((b, i) =>
        `<button class="filtro-btn${i === 0 ? ' ativo' : ''}" data-prof="${escHtml(b.val)}" onclick="filtrar(this.dataset.prof, this)">${escHtml(b.label)}</button>`
      ).join('');
    }
    renderTodosCursos(getCursos());
  }

  // Professores
  const profGrid = document.getElementById('professoresGrid');
  if (profGrid) {
    const profs = getProfessores();
    profGrid.innerHTML = profs.map(criarCardProfessor).join('');
    // Center if 3 or fewer
    profGrid.style.justifyContent = profs.length <= 3 ? 'center' : '';
    profGrid.style.maxWidth = profs.length <= 2 ? '660px' : '1000px';
  }

  // Blog preview — opens modal
  const blogPrev = document.getElementById('blogPreview');
  if (blogPrev) {
    const posts = getPosts().slice(0,3);
    blogPrev.innerHTML = posts.map(p => criarCardBlog(p, 'abrirPostModal')).join('');
    blogPrev.style.justifyContent = posts.length <= 2 ? 'center' : '';
  }

  // Blog listing (blog.html) — handled inline in blog.html

  // Benefits
  const benGrid = document.getElementById('beneficiosGrid');
  if (benGrid) {
    const bens = cfg.beneficios;
    benGrid.innerHTML = bens.map(b => `
      <div class="beneficio-card">
        <div class="beneficio-icone"><i data-lucide="${b.icone}"></i></div>
        <div class="beneficio-titulo">${escHtml(b.titulo)}</div>
        <p class="beneficio-desc">${escHtml(b.desc)}</p>
      </div>`).join('');
  }

  // CTA section
  const ctaTitulo = document.getElementById('ctaTitulo');
  const ctaDesc = document.getElementById('ctaDesc');
  const ctaBtn = document.getElementById('ctaBtn');
  if (ctaTitulo) ctaTitulo.textContent = cfg.cta.titulo;
  if (ctaDesc) ctaDesc.textContent = cfg.cta.desc;
  if (ctaBtn) { ctaBtn.textContent = cfg.cta.btnTxt; ctaBtn.href = cfg.cta.btnUrl; }

  // Footer
  const footerDesc = document.getElementById('footerDesc');
  if (footerDesc) footerDesc.textContent = cfg.footer.desc;

  const footerNavLinks = document.getElementById('footerNavLinks');
  if (footerNavLinks && cfg.footer.navLinks) {
    footerNavLinks.innerHTML = cfg.footer.navLinks.map(l =>
      `<li><a href="${/^(https?:\/\/|\/|\.\/|\w[\w-]*\.html|#)/.test(l.url)?escHtml(l.url):'#'}">${escHtml(l.texto)}</a></li>`
    ).join('');
  }

  const footerPlataformas = document.getElementById('footerPlataformas');
  if (footerPlataformas && cfg.footer.plataformas) {
    footerPlataformas.innerHTML = cfg.footer.plataformas.map(l =>
      `<li><a href="${/^(https?:\/\/|\/|\.\/|\w[\w-]*\.html|#)/.test(l.url)?escHtml(l.url):'#'}" target="_blank" rel="noopener">${escHtml(l.texto)}</a></li>`
    ).join('');
  }

  // FAQ
  const faqLista = document.getElementById('faqLista');
  if (faqLista) {
    faqLista.innerHTML = getFaqs().map(f => `
      <div class="faq-item">
        <button class="faq-pergunta" onclick="toggleFaq(this)">
          ${escHtml(f.pergunta)}<span class="faq-seta">›</span>
        </button>
        <div class="faq-resposta"><p>${escHtml(f.resposta)}</p></div>
      </div>`).join('');
  }

  // Ebooks
  const ebooksLista = document.getElementById('ebooksLista');
  if (ebooksLista) {
    ebooksLista.innerHTML = getEbooks().map(e => {
      const badge = e.plataforma === 'hotmart'
        ? '<span class="ebook-badge plataforma-hotmart">Hotmart</span>'
        : '<span class="ebook-badge plataforma-kiwify">Kiwify</span>';
      const capa = e.thumb
        ? `<img src="${e.thumb}" style="width:140px;min-height:180px;object-fit:cover;border-radius:6px 0 0 6px">`
        : `<div class="ebook-capa"><i data-lucide="book"></i></div>`;
      return `
        <a href="${e.url_externa}" target="_blank" rel="noopener" class="ebook-card">
          ${capa}
          <div class="ebook-info">
            <div style="display:flex;gap:.5rem;align-items:center">
              <span class="ebook-professor">${escHtml(e.professor)}</span>${badge}
            </div>
            <h3 class="ebook-titulo">${escHtml(e.titulo)}</h3>
            <p class="ebook-desc">${escHtml(e.descricao)}</p>
            <span class="ebook-cta">Acessar ebook <i data-lucide="arrow-right" style="width:13px;height:13px"></i></span>
          </div>
        </a>`;
    }).join('');
  }

  // Logo override
  if (cfg.logo) {
    document.querySelectorAll('img[alt="Escola Dalet"], img[alt="Dalet"], img[alt="Academia Digital"]').forEach(img => {
      img.src = cfg.logo;
      img.removeAttribute('onerror');
    });
  }

  // Init lucide icons
  if (typeof lucide !== 'undefined') lucide.createIcons();
});

// ── Filtro cursos ───────────────────────────────────────────
function filtrar(professor, btn) {
  document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');
  const lista = professor === 'todos' ? getCursos() : getCursos().filter(c => c.professor === professor);
  renderTodosCursos(lista);
}

function renderTodosCursos(lista) {
  const grid = document.getElementById('todosCursos');
  if (grid) {
    grid.innerHTML = lista.map(criarCardCurso).join('');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

function abrirAdmin(e) {
  if (e) e.preventDefault();
  window.location.href = 'admin.html';
}
