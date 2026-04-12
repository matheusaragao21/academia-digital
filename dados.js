// ===== DADOS DEFAULT — ACADEMIA DIGITAL =====
// Usados como fallback quando LocalStorage/Supabase estão vazios

const PROFESSORES = [
  {
    id: 1,
    nome: "Ricardo Mendes",
    titulo: "Fundador & Instrutor Principal",
    bio: "Empreendedor serial com 15 anos de experiência em liderança e gestão. Já treinou mais de 3.000 profissionais em empresas de médio e grande porte em todo o Brasil.",
    foto: "https://randomuser.me/api/portraits/men/32.jpg",
    emoji: "👔"
  },
  {
    id: 2,
    nome: "Juliana Ferreira",
    titulo: "Especialista em Marketing Digital",
    bio: "Estrategista de marketing com passagem por agências e startups. Ajudou dezenas de negócios a crescerem sua presença digital e aumentarem suas vendas online.",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    emoji: "📱"
  },
  {
    id: 3,
    nome: "André Costa",
    titulo: "Instrutor de Finanças e Negócios",
    bio: "Especialista em finanças corporativas e pessoais. Acredita que educação financeira é o primeiro passo para a liberdade e o crescimento sustentável.",
    foto: "https://randomuser.me/api/portraits/men/67.jpg",
    emoji: "📊"
  }
];

const CURSOS = [
  { id:1,  titulo:"Liderança de Alta Performance",      professor:"Ricardo Mendes",   professor_id:1, descricao:"Desenvolva as competências de um líder moderno: comunicação, tomada de decisão e gestão de equipes de alta performance.",          plataforma:"hotmart", url_externa:"https://hotmart.com",    thumb:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=450&fit=crop&auto=format",  emoji:"🏆", destaque:true  },
  { id:2,  titulo:"Marketing Digital do Zero",          professor:"Juliana Ferreira", professor_id:2, descricao:"Aprenda os fundamentos do marketing digital: SEO, redes sociais, tráfego pago e estratégias que realmente convertem.",            plataforma:"hotmart", url_externa:"https://hotmart.com",    thumb:"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=450&fit=crop&auto=format",  emoji:"📣", destaque:true  },
  { id:3,  titulo:"Inteligência Financeira",            professor:"André Costa",      professor_id:3, descricao:"Domine suas finanças pessoais, elimine dívidas e comece a investir com consciência e segurança.",                                  plataforma:"kiwify",  url_externa:"https://kiwify.com.br",  thumb:"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=450&fit=crop&auto=format",  emoji:"💰", destaque:true  },
  { id:4,  titulo:"Comunicação Eficaz e Oratória",      professor:"Ricardo Mendes",   professor_id:1, descricao:"Aprenda a se comunicar com clareza e confiança em qualquer situação: reuniões, apresentações e negociações.",                      plataforma:"kiwify",  url_externa:"https://kiwify.com.br",  thumb:"https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=450&fit=crop&auto=format",    emoji:"🎤", destaque:true  },
  { id:5,  titulo:"Instagram e Reels para Negócios",    professor:"Juliana Ferreira", professor_id:2, descricao:"Estratégias práticas para crescer no Instagram, criar reels que engajam e transformar seguidores em clientes.",                   plataforma:"hotmart", url_externa:"https://hotmart.com",    thumb:"https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop&auto=format",  emoji:"📸", destaque:false },
  { id:6,  titulo:"Excel Profissional",                 professor:"André Costa",      professor_id:3, descricao:"Do básico ao avançado: domine as ferramentas do Excel mais usadas no mercado e automatize tarefas repetitivas.",                   plataforma:"kiwify",  url_externa:"https://kiwify.com.br",  thumb:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&auto=format",    emoji:"📊", destaque:false },
  { id:7,  titulo:"Empreendedorismo na Prática",        professor:"Ricardo Mendes",   professor_id:1, descricao:"Do plano de negócios ao lançamento: um guia completo para quem quer abrir seu próprio negócio com mais segurança.",                plataforma:"hotmart", url_externa:"https://hotmart.com",    thumb:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=450&fit=crop&auto=format",  emoji:"🚀", destaque:false },
  { id:8,  titulo:"Copywriting e Escrita Persuasiva",   professor:"Juliana Ferreira", professor_id:2, descricao:"Aprenda a escrever textos que vendem: para posts, e-mails, páginas de vendas e campanhas digitais.",                              plataforma:"kiwify",  url_externa:"https://kiwify.com.br",  thumb:"https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=450&fit=crop&auto=format",  emoji:"✍️", destaque:false },
  { id:9,  titulo:"Gestão do Tempo e Produtividade",    professor:"André Costa",      professor_id:3, descricao:"Métodos comprovados para organizar sua rotina, eliminar distrações e fazer mais com menos esforço.",                               plataforma:"hotmart", url_externa:"https://hotmart.com",    thumb:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop&auto=format",  emoji:"⏱️", destaque:false },
  { id:10, titulo:"Vendas e Negociação",                professor:"Ricardo Mendes",   professor_id:1, descricao:"Técnicas usadas pelos melhores profissionais do mercado para fechar mais negócios e superar objeções.",                           plataforma:"kiwify",  url_externa:"https://kiwify.com.br",  thumb:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop&auto=format",  emoji:"🤝", destaque:false }
];

const EBOOKS = [
  { id:1, titulo:"Guia Definitivo de Produtividade",        professor:"André Costa",      descricao:"Métodos, ferramentas e estratégias para organizar sua rotina e multiplicar seus resultados profissionais.",      plataforma:"hotmart", url_externa:"https://hotmart.com",   thumb:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=560&fit=crop&auto=format",  emoji:"📘", destaque:true  },
  { id:2, titulo:"Marketing de Conteúdo Descomplicado",     professor:"Juliana Ferreira", descricao:"Como criar e distribuir conteúdo que atrai, engaja e converte clientes para o seu negócio digital.",            plataforma:"hotmart", url_externa:"https://hotmart.com",   thumb:"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=560&fit=crop&auto=format",  emoji:"📗", destaque:true  },
  { id:3, titulo:"Primeiros Passos no Empreendedorismo",    professor:"Ricardo Mendes",   descricao:"Um guia prático para quem está começando: validação de ideias, modelo de negócios e primeiros clientes.",       plataforma:"kiwify",  url_externa:"https://kiwify.com.br", thumb:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=560&fit=crop&auto=format",  emoji:"📙", destaque:true  }
];

const FAQS = [
  { id:1, pergunta:"Quanto tempo terei acesso ao curso?",      resposta:"Após a compra, o acesso é vitalício. Você pode assistir quantas vezes quiser, no seu ritmo, em qualquer dispositivo — celular, tablet ou computador." },
  { id:2, pergunta:"Os cursos emitem certificado?",            resposta:"Sim! Todos os cursos emitem certificado de conclusão após você finalizar as aulas. O certificado é reconhecido e pode ser adicionado ao seu LinkedIn." },
  { id:3, pergunta:"Preciso ter conhecimento prévio?",         resposta:"Não. Nossos cursos são desenvolvidos para todos os níveis. Cada instrutor indica claramente o pré-requisito na descrição do curso." },
  { id:4, pergunta:"E se eu não gostar do curso?",             resposta:"Todos os cursos oferecem garantia de satisfação de 7 dias. Se não estiver satisfeito por qualquer motivo, basta solicitar o reembolso diretamente na Hotmart ou Kiwify." },
  { id:5, pergunta:"Como acesso o curso após a compra?",       resposta:"Após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso. O processo é rápido e simples." }
];

const POSTS_BLOG = [
  {
    id: 1,
    titulo: "Como criar uma rotina de estudos online que realmente funciona",
    data: "10 de abril de 2025",
    data_iso: "2025-04-10",
    excerpt: "Estudar online exige autodisciplina e estratégia. Descubra como construir uma rotina eficaz que se encaixa na sua agenda sem abrir mão da consistência.",
    emoji: "📅",
    slug: "rotina-de-estudos-online",
    thumb: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop&auto=format",
    corpo: `<p>Um dos maiores desafios de quem decide estudar online é a falta de estrutura. Sem horários fixos, sem turma e sem professores cobrando, é fácil procrastinar. A boa notícia é que com algumas estratégias simples, você pode criar uma rotina que funciona de verdade.</p>
<h2>1. Defina um horário fixo</h2>
<p>Trate seus estudos como compromissos de trabalho. Bloqueie um horário no calendário — mesmo que seja apenas 30 minutos por dia — e respeite esse compromisso como se fosse uma reunião importante.</p>
<h2>2. Crie um ambiente dedicado</h2>
<p>Não precisa ser um escritório sofisticado. Basta um lugar tranquilo, sem distrações, onde seu cérebro associe o ambiente ao foco. Isso reduz drasticamente o tempo de aquecimento antes de entrar no modo de aprendizado.</p>
<blockquote>"Discipline is choosing between what you want now and what you want most." — Abraham Lincoln</blockquote>
<h2>3. Use a técnica Pomodoro</h2>
<p>Estude por 25 minutos com foco total, depois faça uma pausa de 5 minutos. A cada quatro ciclos, uma pausa mais longa de 15 a 30 minutos. Essa técnica é simples e surpreendentemente eficaz para manter o rendimento ao longo do dia.</p>
<h2>4. Revise regularmente</h2>
<p>O esquecimento é o maior inimigo do aprendizado. Reserve um tempo semanal para revisar o conteúdo estudado. Flashcards, resumos ou simplesmente reler as anotações já fazem uma enorme diferença na retenção.</p>`
  },
  {
    id: 2,
    titulo: "5 habilidades mais valorizadas pelo mercado de trabalho em 2025",
    data: "2 de abril de 2025",
    data_iso: "2025-04-02",
    excerpt: "O mercado evolui rapidamente. Veja quais competências os recrutadores mais buscam e como se destacar na sua área profissional nos próximos anos.",
    emoji: "📈",
    slug: "habilidades-mercado-2025",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop&auto=format",
    corpo: `<p>O mercado de trabalho nunca mudou tão rápido. A automação, a inteligência artificial e a transformação digital estão redefinindo as profissões. Mas algumas habilidades continuam — e continuarão — sendo altamente valorizadas independentemente da área.</p>
<h2>1. Pensamento crítico e resolução de problemas</h2>
<p>Máquinas executam tarefas. Humanos resolvem problemas complexos. A capacidade de analisar situações, identificar causas raízes e propor soluções criativas nunca foi tão valiosa quanto agora.</p>
<h2>2. Comunicação eficaz</h2>
<p>Saber comunicar ideias com clareza — tanto por escrito quanto verbalmente — é uma das habilidades mais escassas e mais demandadas do mercado. Isso inclui saber ouvir, se expressar e adaptar a mensagem ao público.</p>
<h2>3. Inteligência emocional</h2>
<p>Gerenciar suas próprias emoções e ter empatia com os outros é essencial em qualquer ambiente profissional. Equipes lideradas por pessoas com alta inteligência emocional têm melhor performance e menor rotatividade.</p>
<h2>4. Adaptabilidade</h2>
<p>O profissional do futuro precisa estar em constante aprendizado. A disposição para aprender novas ferramentas, novas formas de trabalho e novos modelos de negócio é o que diferencia quem cresce de quem fica para trás.</p>
<h2>5. Letramento digital</h2>
<p>Não significa saber programar. Significa entender como a tecnologia funciona, como usar ferramentas digitais com eficiência e como proteger sua privacidade e a das empresas onde trabalha.</p>`
  },
  {
    id: 3,
    titulo: "Por que investir em educação é o melhor negócio da sua vida",
    data: "20 de março de 2025",
    data_iso: "2025-03-20",
    excerpt: "Em um mundo em constante transformação, aprender é o único ativo que ninguém pode tirar de você. Entenda o retorno real do investimento em conhecimento.",
    emoji: "🎓",
    slug: "investir-em-educacao",
    thumb: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=450&fit=crop&auto=format",
    corpo: `<p>Existe um investimento que nunca desvaloriza, não sofre com inflação e cresce com o tempo: o conhecimento. Em um mundo onde o capital físico pode ser perdido e os mercados oscilam, o que você aprende fica com você para sempre.</p>
<h2>O retorno sobre o aprendizado</h2>
<p>Estudos globais mostram consistentemente que cada ano adicional de educação aumenta em média 8 a 10% a renda de um profissional ao longo da carreira. Mas além do retorno financeiro direto, o conhecimento abre portas, cria redes e amplia horizontes.</p>
<h2>Educação online democratizou o acesso</h2>
<p>Nunca foi tão acessível aprender com os melhores do mundo. Cursos que antes exigiam deslocamento, mensalidades caras e anos de dedicação hoje estão disponíveis por uma fração do custo, no seu tempo e no seu ritmo.</p>
<blockquote>"An investment in knowledge pays the best interest." — Benjamin Franklin</blockquote>
<h2>O custo de não aprender</h2>
<p>A pergunta não é quanto custa investir em educação. A pergunta é: quanto custa não investir? Profissionais que param de aprender tendem a estagnar, ver seus salários perderem para a inflação e encontrar cada vez mais dificuldade para se recolocar no mercado.</p>
<h2>Por onde começar?</h2>
<p>Identifique a lacuna mais importante na sua carreira hoje. Seja uma habilidade técnica, uma competência de liderança ou um conhecimento de mercado. Escolha um curso focado nessa lacuna e comece. O momento ideal é agora.</p>`
  },
  {
    id: 4,
    titulo: "Networking: como construir relações profissionais que duram",
    data: "12 de março de 2025",
    data_iso: "2025-03-12",
    excerpt: "Seu próximo emprego, cliente ou parceiro de negócios provavelmente virá de alguém que você já conhece. Aprenda a construir e manter uma rede de contatos genuína.",
    emoji: "🤝",
    slug: "networking-relacoes-profissionais",
    thumb: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&h=450&fit=crop&auto=format",
    corpo: `<p>Existe um ditado no mundo dos negócios que diz: não é o que você sabe, mas quem você conhece. Embora o conhecimento técnico seja fundamental, as conexões humanas aceleram carreiras de um jeito que o estudo sozinho nunca consegue.</p>
<h2>Networking não é sobre colecionar contatos</h2>
<p>Muitas pessoas tratam o networking como uma troca fria de cartões de visita ou conexões no LinkedIn. Mas relacionamentos profissionais duradouros são construídos com autenticidade, interesse genuíno pelo outro e disposição para contribuir antes de pedir.</p>
<h2>Dê antes de receber</h2>
<p>A regra de ouro do networking é simples: ofereça valor primeiro. Compartilhe um artigo relevante, faça uma apresentação útil, elogie o trabalho de alguém publicamente. Quando você contribui sem esperar retorno imediato, cria um capital de boa vontade que se transforma em oportunidades ao longo do tempo.</p>
<h2>Onde construir sua rede</h2>
<p>Eventos do setor, grupos de LinkedIn, comunidades online, cursos e mentorias são excelentes pontos de partida. Mas o lugar mais subestimado para fazer networking é dentro da sua própria empresa — colegas de hoje são parceiros de amanhã.</p>
<blockquote>"Your network is your net worth." — Porter Gale</blockquote>
<h2>Manutenção é tudo</h2>
<p>Uma rede de contatos não se mantém sozinha. Reserve um tempo mensal para entrar em contato com pessoas da sua rede, parabenizar conquistas, comentar posts e checar como estão. A consistência transforma conhecidos em aliados.</p>`
  },
  {
    id: 5,
    titulo: "Do zero ao primeiro cliente: guia para quem quer trabalhar por conta",
    data: "1 de março de 2025",
    data_iso: "2025-03-01",
    excerpt: "Dar o primeiro passo no trabalho freelance ou empreendedorismo parece difícil, mas com a estratégia certa você conquista seu primeiro cliente mais rápido do que imagina.",
    emoji: "🚀",
    slug: "primeiro-cliente-freelance",
    thumb: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop&auto=format",
    corpo: `<p>Um dos momentos mais difíceis para quem quer trabalhar por conta própria é conseguir o primeiro cliente. Sem portfólio, sem histórico e sem referências, parece um círculo impossível de quebrar. Mas existe um caminho — e ele é mais simples do que parece.</p>
<h2>Comece pelo seu círculo próximo</h2>
<p>Seus primeiros clientes raramente vêm de estranhos. Avise familiares, amigos e ex-colegas sobre o que você faz. Não peça diretamente por clientes — peça indicações. Uma mensagem simples como "Começou a oferecer serviços de X, se conhecer alguém que precisa, ficarei grato pela indicação" pode abrir portas inesperadas.</p>
<h2>Monte um portfólio mínimo viável</h2>
<p>Se você não tem clientes, crie projetos fictícios ou ofereça seus serviços a preço simbólico (ou de graça) para ONGs, microempreendedores ou projetos pessoais. O objetivo é ter algo para mostrar. Três projetos bem documentados valem mais que dez mal apresentados.</p>
<h2>Posicione-se em um nicho</h2>
<p>Quanto mais específico você for, mais fácil é ser encontrado. "Designer de embalagens para pequenas marcas alimentícias" atrai mais clientes certos do que "designer gráfico". O nicho reduz a concorrência e aumenta o valor percebido do seu trabalho.</p>
<h2>Precifique com confiança</h2>
<p>O maior erro de quem está começando é cobrar muito barato. Preços baixos não geram confiança — pelo contrário, levantam suspeitas. Pesquise o mercado, calcule seus custos e cobres um valor justo. É melhor trabalhar menos para clientes que valorizam seu trabalho do que muito para quem não reconhece seu esforço.</p>`
  },
  {
    id: 6,
    titulo: "Autoconhecimento e carreira: a conexão que poucos exploram",
    data: "18 de fevereiro de 2025",
    data_iso: "2025-02-18",
    excerpt: "Entender quem você é, o que te motiva e onde você brilha é o ponto de partida para construir uma carreira que une propósito e resultado.",
    emoji: "🪞",
    slug: "autoconhecimento-carreira",
    thumb: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=450&fit=crop&auto=format",
    corpo: `<p>A maioria das pessoas passa anos aperfeiçoando habilidades técnicas sem dedicar um único dia para se perguntar: isso é realmente o que eu quero? O autoconhecimento é a ferramenta de carreira mais poderosa e a menos utilizada.</p>
<h2>Seus pontos fortes naturais são seu diferencial</h2>
<p>Cada pessoa tem talentos inatos — coisas que faz com facilidade e que para outros parecem difíceis. Identificar esses pontos fortes e construir uma carreira ao redor deles é a estratégia mais sustentável de crescimento profissional. Ferramentas como o CliftonStrengths ou o DISC podem ajudar nesse processo.</p>
<h2>O que te drena x o que te energiza</h2>
<p>Preste atenção nas suas reações ao longo do dia. Que tipos de tarefas te deixam animado? Quais te esgotam, mesmo quando você as executa bem? Essa distinção simples pode guiar decisões importantes sobre em qual direção investir sua energia profissional.</p>
<blockquote>"Knowing yourself is the beginning of all wisdom." — Aristóteles</blockquote>
<h2>Valores como bússola</h2>
<p>Uma carreira satisfatória é aquela alinhada com seus valores mais profundos. Se autonomia é um valor central e você trabalha em um ambiente extremamente controlado, haverá atrito constante. Identifique os três ou quatro valores inegociáveis para você e use-os como filtro nas suas decisões de carreira.</p>
<h2>Como praticar o autoconhecimento</h2>
<p>Journaling diário, meditação, terapia, feedback honesto de pessoas próximas e mentoria são práticas concretas de autoconhecimento. A chave é criar um hábito de reflexão — não como um exercício filosófico, mas como uma ferramenta prática de gestão de carreira.</p>`
  }
];
