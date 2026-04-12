# Academia Digital — Plataforma de Educação Online

> Plataforma completa de cursos online construída **100% com IA (Claude)** em uma única sessão — do zero ao produto funcional.

**[🌐 Ver Demo ao Vivo](https://SEU-USUARIO.github.io/academia-digital)**

---

## ✦ O Projeto

**Academia Digital** é uma plataforma de educação online estática, porém completamente funcional, desenvolvida inteiramente com auxílio de Inteligência Artificial. Serve como portfólio técnico demonstrando o potencial das ferramentas de IA modernas para produção de software real.

### Páginas públicas
| Página | Descrição |
|--------|-----------|
| `index.html` | Home com hero, stats, cursos em destaque, professores, blog preview, benefícios e FAQ |
| `cursos.html` | Catálogo completo com filtro por professor |
| `ebooks.html` | Lista de materiais digitais |
| `blog.html` | Artigos com abertura em overlay |

### Painel Administrativo (`admin.html`)
- Login seguro com hash SHA-256
- CRUD completo: Cursos, Ebooks, Posts, Professores, FAQ
- Editor de texto rico (bold, italic, headings, listas, blockquote)
- Upload e crop de thumbnails (Cropper.js)
- Configuração do site: hero, stats, benefícios, CTA, footer
- Gestão de contas de acesso
- Sincronização em tempo real com Supabase

---

## 🛠 Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Frontend | HTML5 · CSS3 · JavaScript puro (sem frameworks) |
| Ícones | Lucide Icons |
| Banco de dados | Supabase (PostgreSQL) |
| Armazenamento local | localStorage (espelhado no Supabase) |
| Image crop | Cropper.js |
| Hospedagem | GitHub Pages |

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/academia-digital.git
cd academia-digital

# Sirva com qualquer servidor estático, ex:
npx serve .
# ou
python -m http.server 3000
```

Acesse `http://localhost:3000`

**Admin:** `http://localhost:3000/admin.html`

---

## 🔐 Acesso Admin (Demo)

```
Email: admin@academiadigital.com
Senha: Admin2025
```

> ⚠️ Para uso em produção real: troque as credenciais no painel Admin → Acesso, e substitua as chaves do Supabase pelas suas próprias.

---

## 🤖 Construído com IA

Todo o código deste projeto foi gerado e refinado com **[Claude](https://claude.ai)** (Anthropic):

- Design system completo do zero
- Lógica de CRUD e persistência
- Integração com Supabase
- Segurança: sanitização XSS, hash de senhas, CSP
- Sistema de thumbnails com crop
- Editor rich text customizado

**Tempo de desenvolvimento:** Uma sessão de trabalho com IA

---

## 📁 Estrutura de arquivos

```
academia-digital/
├── index.html          # Homepage
├── cursos.html         # Catálogo de cursos
├── ebooks.html         # Materiais digitais
├── blog.html           # Blog
├── admin.html          # Painel administrativo
├── app.js              # Renderização e interações
├── dados.js            # Dados padrão (fallback)
├── storage.js          # LocalStorage + Supabase sync
├── styles.css          # Design system completo
└── logo.svg            # Logo da plataforma
```

---

## 📄 Licença

MIT — use à vontade como base para seus projetos.

---

<p align="center">Feito com ✦ e Inteligência Artificial</p>
