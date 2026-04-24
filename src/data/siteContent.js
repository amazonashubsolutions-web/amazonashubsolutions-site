export const siteContent = {
  navigation: {
    brand: {
      name: "AMAZONAS HUB SOLUTIONS",
      logo: "/images/logo_blanco.png",
    },
    links: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre", href: "#about" },
      { label: "Servicos", href: "#services" },
      { label: "Produtos", href: "#products" },
      { label: "Tecnologia", href: "#stack" },
    ],
    cta: "Solicitar Orcamento",
  },
  hero: {
    badge: "Solucoes Tecnologicas Premium",
    title: "Solucoes Digitais Inteligentes para Escalar o Seu Negocio",
    description:
      "Desenvolvimento de software, criacao de websites e plataformas digitais sob medida para transformar sua visao em realidade tecnologica.",
    backgroundImage: "/images/fondo negro/3.jpg",
    primaryAction: "Solicitar Orcamento",
    secondaryAction: "Falar no WhatsApp",
    secondaryActionHref: "https://wa.me/573204903001",
    image: "/images/imagen pagina buscador de  LDS.png",
  },
  about: {
    sectionId: "about",
    title: "Desenvolvimento com Proposito",
    paragraphs: [
      "A AMAZONAS HUB SOLUTIONS, localizada em Tabatinga, Amazonas, e uma empresa de tecnologia focada em desenvolver solucoes digitais sob medida para impulsionar negocios.",
      "Atuamos com desenvolvimento de software personalizado, criacao de websites modernos em React (SPA) e otimizacao de presenca no Google Maps, ajudando empresas a crescer e se destacar no ambiente digital.",
      "Nossa equipe e altamente capacitada, trabalhando com as melhores tecnologias do mercado, alem de utilizar inteligencia artificial e automacao para criar solucoes eficientes, modernas e escalaveis.",
    ],
    pillars: [
      {
        icon: "lightbulb",
        title: "Inovacao",
        description: "Tecnologias de ponta para solucoes disruptivas e eficientes.",
      },
      {
        icon: "speed",
        title: "Performance",
        description: "Codigo otimizado para velocidade extrema e SEO impecavel.",
      },
      {
        icon: "dashboard_customize",
        title: "Personalizacao",
        description: "Sistemas moldados exatamente conforme suas necessidades.",
      },
      {
        icon: "trending_up",
        title: "Resultados",
        description: "Foco total no ROI e no crescimento do seu ecossistema digital.",
      },
    ],
  },
  services: {
    sectionId: "services",
    title: "Nossos Servicos Especializados",
    description:
      "Expertise tecnica em todas as frentes do desenvolvimento digital moderno.",
    backgroundImage: "/images/fondo negro/4.jpg",
    action: "Ver Portfolio",
    items: [
      {
        icon: "terminal",
        title: "Software Sob Medida",
        description:
          "Sistemas internos robustos, CRMs e ERPs focados na automacao de processos e eficiencia operacional.",
        bullets: ["Arquitetura escalavel", "Integracao via API"],
      },
      {
        icon: "web",
        title: "Websites (SPA em React)",
        description:
          "Criacao de websites modernos e ultra-rapidos utilizando as tecnologias mais recentes do mercado global.",
        bullets: ["Otimizacao SEO Core Web Vitals", "Mobile First Design"],
      },
      {
        icon: "location_on",
        title: "Otimizacao de Maps",
        description:
          "Aumente sua visibilidade local e converta mais clientes atraves do posicionamento estrategico no Google.",
        bullets: ["SEO Local avancado", "Gestao de reputacao online"],
      },
      {
        icon: "hub",
        title: "Automatizacao com n8n",
        description:
          "Criamos fluxos automatizados para integrar sistemas, reduzir tarefas manuais e acelerar operacoes recorrentes do seu negocio.",
        bullets: ["Workflows inteligentes", "Integracoes e notificacoes automaticas"],
      },
    ],
  },
  products: [
    {
      id: "lds-tourism",
      sectionId: "products",
      theme: "light",
      backgroundImage: "/images/fondo blanco/4.jpg",
      layout: "media-left",
      logo: "/images/thumbnail_LDS-COLOR@300x-8.png",
      eyebrow: "Plataforma Turistica B2B",
      title: "LDS Turismo",
      description:
        "LDS se define como uma plataforma de distribuicao turistica B2B e operacional, pensada para que uma agencia fornecedora possa criar, vender, emitir, controlar e administrar seus produtos turisticos, alem de se relacionar comercialmente com agencias parceiras.",
      stack: [
        { shortLabel: "R", label: "React" },
        { shortLabel: "V", label: "Vite" },
        { shortLabel: "JSX", label: "JavaScript / JSX" },
        { shortLabel: "CSS", label: "CSS" },
        { shortLabel: "DB", label: "Supabase" },
      ],
      images: [
        {
          alt: "LDS Platform View 1",
          src: "/images/imagen home LDS.png",
        },
        {
          alt: "LDS Platform View 2",
          src: "/images/imagen panel de reservas LDS.png",
        },
      ],
    },
    {
      id: "tienda-web",
      theme: "dark",
      layout: "media-right",
      backgroundImage: "/images/fondo negro/1.jpg",
      logo: "/images/logo_tiendaweb_recortado_transparente.png",
      eyebrow: "Marketplace Empresarial",
      title: "Plataforma de Marketplace para Negocios",
      description:
        "O marketplace tiendaWeb e uma aplicacao de e-commerce orientada a exibir negocios e seus catalogos de produtos. Cada empresa tem sua propria loja, gerencia seus produtos, define precos e atende seus clientes.",
      stack: [
        { shortLabel: "R", label: "React" },
        { shortLabel: "V", label: "Vite" },
        { shortLabel: "JSX", label: "JavaScript / JSX" },
        { shortLabel: "TSX", label: "TypeScript / TSX" },
        { shortLabel: "CSS", label: "CSS / SCSS" },
        { shortLabel: "SW", label: "Swiper" },
        { shortLabel: "EX", label: "Express" },
        { shortLabel: "ND", label: "Node.js" },
        { shortLabel: "DB", label: "Supabase" },
      ],
      chips: [
        "Lojas Multitenant",
        "Checkout Unificado",
        "Catalogo Centralizado",
        "Gestao de Vendedores",
      ],
      images: [
        {
          alt: "Tienda Web Marketplace",
          src: "/images/imagen home tiendaweb.png",
        },
        {
          alt: "Tienda Web Categories",
          src: "/images/imagen lista de empresas tiendaweb.png",
        },
      ],
    },
  ],
  techStack: {
    sectionId: "stack",
    title: "Nossa Stack Tecnologica",
    items: [
      {
        icon: "deployed_code",
        label: "React",
        category: "Front-end",
        description: "Interfaces SPA modernas, escalaveis e orientadas para conversao.",
      },
      {
        icon: "bolt",
        label: "Vite",
        category: "Build",
        description: "Ambiente de desenvolvimento rapido e compilacao otimizada para producao.",
      },
      {
        icon: "dns",
        label: "Node.js",
        category: "Runtime",
        description: "Base robusta para APIs, integracoes e logica de negocio.",
      },
      {
        icon: "cloud_sync",
        label: "Supabase",
        category: "Back-end",
        description: "Auth, banco de dados, storage e servicos conectados em uma unica plataforma.",
      },
      {
        icon: "database",
        label: "PostgreSQL",
        category: "Dados",
        description: "Persistencia confiavel para operacoes, relatorios e consultas complexas.",
      },
      {
        icon: "data_object",
        label: "TypeScript",
        category: "Qualidade",
        description: "Tipagem forte para manter o codigo mais seguro e sustentavel.",
      },
    ],
  },
  differentiators: {
    title: "Por que escolher a Amazonas Hub?",
    backgroundImage: "/images/fondo negro/3.jpg",
    items: [
      {
        icon: "verified",
        title: "Arquitetura Escalavel",
        description:
          "Sistemas que crescem junto com o seu volume de usuarios sem perder performance.",
      },
      {
        icon: "sync_alt",
        title: "Integracao Moderna",
        description:
          "Conectamos seu software com qualquer servico externo via APIs seguras.",
      },
      {
        icon: "ads_click",
        title: "Foco em Conversao",
        description:
          "UI/UX desenhado para transformar visitantes em clientes fieis.",
      },
    ],
    stat: {
      label: "Desempenho em Producao",
      value: "99.9%",
      caption: "Disponibilidade Garantida",
      logo: "/images/imagen supabase.png",
    },
  },
  finalCta: {
    sectionId: "contact",
    title: "Pronto para levar seu negocio ao proximo nivel?",
    description:
      "Agende uma consultoria tecnica gratuita e descubra como podemos digitalizar sua operacao.",
    primaryAction: "Entrar em Contato",
  },
  footer: {
    brand: {
      name: "AMAZONAS HUB SOLUTIONS",
      logo: "/images/1.png",
    },
    description:
      "Impulsionamos empresas com tecnologia de ponta e solucoes digitais sob medida. Sua visao, nossa execucao.",
    social: [
      { icon: "alternate_email", href: "mailto:ed_ramirez470@hotmail.com" },
      { icon: "chat", href: "https://wa.me/573204903001" },
    ],
    quickLinks: [
      { label: "Inicio", href: "#home" },
      { label: "Sobre", href: "#about" },
      { label: "Servicos", href: "#services" },
      { label: "Produtos", href: "#products" },
      { label: "Tecnologia", href: "#stack" },
    ],
    supportLinks: [
      {
        label: "Email",
        value: "ed_ramirez470@hotmail.com",
        href: "mailto:ed_ramirez470@hotmail.com",
      },
      {
        label: "WhatsApp Brasil",
        value: "(55) 97 98121-2129",
        href: "https://wa.me/5597981212129",
      },
      {
        label: "WhatsApp Colombia",
        value: "(57) 320 490 3001",
        href: "https://wa.me/573204903001",
      },
      {
        label: "Endereco",
        value: "Av. da Amizade, 840-954\nCep 69640-000\nTabatinga - AM - Brasil",
      },
    ],
    copyright: "2024 AMAZONAS HUB SOLUTIONS. Todos os direitos reservados.",
    signature: "Feito por Amazonas Hub Team",
  },
};
