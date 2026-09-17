"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "pt" | "en";

type TranslationDictionary = {
  nav: {
    inicio: string;
    sobre: string;
    experiencia: string;
    habilidades: string;
    projetos: string;
    contato: string;
  };
  hero: {
    status: string;
    headline: string;
    headlineItalic: string;
    subheadline: string;
    subheadlineHighlight: string;
    subheadlineText: string;
    ctaProjects: string;
    ctaContact: string;
    downloadResume: string;
    resumeFile: string;
    discover: string;
    tags: string[];
  };
  about: {
    tag: string;
    title: string;
    p1: string;
    p1Highlight: string;
    p2: string;
    p2Highlight1: string;
    p2Highlight2: string;
    p2Highlight3: string;
    p3: string;
    p3Highlight1: string;
    p3Highlight2: string;
    p3Highlight3: string;
    softSkillsTag: string;
    softSkills: {
      title: string;
      desc: string;
    }[];
    clickTip: string;
  };
  experience: {
    tag: string;
    title: string;
    tabs: {
      exp: string;
      edu: string;
      cert: string;
      verifyBtn?: string;
    };
    experiences: {
      role: string;
      company: string;
      period: string;
      location: string;
      desc: string;
    }[];
    education: {
      degree: string;
      institution: string;
      period: string;
      location: string;
      desc: string;
    }[];
    certificates: {
      title: string;
      issuer: string;
      desc: string;
      link?: string;
    }[];
  };
  skills: {
    tag: string;
    title: string;
    categories: {
      title: string;
      desc: string;
    }[];
  };
  projects: {
    tag: string;
    title: string;
    subtitle: string;
    privateProject: string;
    codeBtn: string;
    siteBtn: string;
    techHeader: string;
    closeLabel: string;
    list: {
      id: string;
      title: string;
      category: string;
      summary: string;
      description: string;
      tags: string[];
      link?: string;
      github?: string;
    }[];
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    githubVal: string;
    phoneLabel: string;
    whatsappLabel: string;
    whatsappVal: string;
    whatsappLink: string;
    locationLabel: string;
    locationVal: string;
    copied: string;
    designedWith: string;
  };
};

const translations: Record<Language, TranslationDictionary> = {
  pt: {
    nav: {
      inicio: "Início",
      sobre: "Sobre",
      experiencia: "Formação & Exp",
      habilidades: "Habilidades",
      projetos: "Projetos",
      contato: "Contato"
    },
    hero: {
      status: "Disponível para novos projetos",
      headline: "Construindo sistemas precisos, focados em",
      headlineItalic: "pessoas.",
      subheadline: "Olá, sou ",
      subheadlineHighlight: "Júlio Santos",
      subheadlineText: ". Desenvolvedor Full Stack & DevOps. Combino a precisão do código e da automação com a visão empática vinda da minha formação em Psicologia.",
      ctaProjects: "Ver projetos",
      ctaContact: "Fale comigo",
      downloadResume: "Baixar Currículo (PDF)",
      resumeFile: "/curriculo_julio_santos.pdf",
      discover: "Descobrir",
      tags: ["Next.js / React", "Python & Node.js", "Especialista DevOps", "Bancos de Dados", "Comunicação Humana"]
    },
    about: {
      tag: "Trajetória",
      title: "A convergência entre a mente e o código",
      p1: "Minha jornada profissional iniciou-se na Psicologia, onde aprendi a analisar e depurar o mais complexo dos sistemas: a mente humana. Através da escuta clínica e do entendimento de comportamentos, construí uma base sólida de sensibilidade para a experiência do usuário e comunicação.",
      p1Highlight: "Psicologia",
      p2: "Ao migrar para a tecnologia, levei comigo essa visão centrada nas pessoas. Concluí a graduação em Análise e Desenvolvimento de Sistemas e, atualmente, realizo minha especialização em DevOps na prestigiada CESAR School.",
      p2Highlight1: "Análise e Desenvolvimento de Sistemas",
      p2Highlight2: "DevOps",
      p2Highlight3: "CESAR School",
      p3: "Entendo o desenvolvimento de software não apenas como linhas de código executadas em servidores, mas como ferramentas reais que resolvem dores de pessoas reais. No dia a dia, isso se traduz em APIs otimizadas, containers Docker organizados e pipelines robustos de DevOps que economizam tempo das equipes e garantem entregas contínuas e seguras.",
      p3Highlight1: "APIs otimizadas",
      p3Highlight2: "containers Docker",
      p3Highlight3: "pipelines robustos de DevOps",
      softSkillsTag: "Habilidades Interpessoais (Soft Skills)",
      softSkills: [
        {
          title: "Escuta Ativa & Comunicação",
          desc: "Desenvolvida no atendimento clínico psicológico. Traduz-se na capacidade de compreender profundamente os requisitos do cliente e mediar dinâmicas de equipe com empatia."
        },
        {
          title: "Colaboração",
          desc: "Foco no alinhamento de objetivos. Experiência de coordenação de tarefas em projetos acadêmicos e corporativos com times multidisciplinares."
        },
        {
          title: "Flexibilidade",
          desc: "Curiosidade intelectual para transitar entre diferentes áreas do desenvolvimento, compreendendo múltiplos aspectos do código à infraestrutura."
        },
        {
          title: "Aprendizado Rápido",
          desc: "Fácil adaptação a novos cenários, stacks tecnológicas e metodologias, integrando novos conhecimentos para resolver problemas de imediato."
        }
      ],
      clickTip: "Clique em um cartão para expandir os detalhes."
    },
    experience: {
      tag: "Jornada",
      title: "Histórico Profissional e Acadêmico",
      tabs: {
        exp: "Experiência",
        edu: "Formação",
        cert: "Certificações",
        verifyBtn: "Verificar Credencial"
      },
      experiences: [
        {
          role: "Desenvolvedor Freelancer",
          company: "Projetos Autônomos",
          period: "2026 - Presente",
          location: "Remoto",
          desc: "Desenvolvimento de ferramentas personalizadas, web scraping (raspadores), plataformas de e-commerce e sites otimizados para mecanismos de busca (SEO). Foco em entregar velocidade de carregamento, design adaptável e código de fácil manutenção."
        },
        {
          role: "Desenvolvedor Full Stack & Implementador",
          company: "AI Atende",
          period: "2025 - 2026",
          location: "Piedade, Jaboatão, PE (Presencial)",
          desc: "Engenharia de prompts, gerenciamento de projetos, desenvolvimento full-stack com JS/TSX. Gestão e provisionamento de VPS e contêineres Docker, além de automação de CRM e integrações de mensagens (Kommo) para empresa do setor de inteligência artificial."
        }
      ],
      education: [
        {
          degree: "Especialização em DevOps",
          institution: "CESAR School",
          period: "2025 - 03/2027",
          location: "Recife, PE",
          desc: "Pós-graduação com foco em práticas modernas de entrega contínua (CI/CD), computação em nuvem, orquestração de contêineres, infraestrutura como código (IaC), monitoramento e governança de TI em uma das principais referências em inovação tecnológica do país."
        },
        {
          degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
          institution: "Uninassau",
          period: "2022 - 2025",
          location: "Recife, PE",
          desc: "Formação em engenharia de software básica, programação orientada a objetos, modelagem de dados, arquiteturas cliente-servidor e algoritmos avançados."
        },
        {
          degree: "Bacharelado em Psicologia",
          institution: "FACHO",
          period: "2018 - 2023",
          location: "Olinda, PE",
          desc: "Formação focada em processos cognitivos, análise de comportamento, técnicas de entrevista e escuta ativa. Aplicação prática dos conceitos para entender interações humanas e dinâmica de grupos de trabalho."
        }
      ],
      certificates: [
        {
          title: "Red Hat System Administration I (RH-124 RHA) v10",
          issuer: "Red Hat",
          desc: "Administração profissional de servidores Linux Red Hat, englobando gerenciamento de usuários, redes, permissões, serviços de sistema e linha de comando avançada.",
          link: "https://www.redhat.com/pt-br/services/training-and-certification"
        },
        {
          title: "Programação Web",
          issuer: "SENAC",
          desc: "Desenvolvimento de aplicações ricas em JavaScript, TypeScript, Angular, Node.js. Implementação de CRUDs completos usando Express e bancos de dados relacionais (PostgreSQL/Railway) e não-relacionais (Firebase)."
        },
        {
          title: "Linguagem Python",
          issuer: "SENAC",
          desc: "Programação avançada em Python, desenvolvimento backend com Django, interfaces de usuário com PyQt6, integração com PostgreSQL, publicação no Railway e distribuição de arquivos com Whitenoise."
        },
        {
          title: "Inglês para Conversação e Escrita Avançada",
          issuer: "SENAC",
          desc: "Fluência em conversação e escrita acadêmica/profissional complexa. Capacidade técnica de redigir documentação de código e manter reuniões comerciais internacionais de forma fluida."
        }
      ]
    },
    skills: {
      tag: "Habilidades",
      title: "Competências e Tecnologias",
      categories: [
        {
          title: "Front-end Development",
          desc: "Interfaces modernas, responsivas e focadas na experiência final do usuário."
        },
        {
          title: "Back-end Development",
          desc: "APIs REST seguras, roteamento, lógica de negócios estruturada e integração de serviços."
        },
        {
          title: "Banco de Dados & Cloud",
          desc: "Estruturação de tabelas, otimização de consultas e conexões em tempo real."
        },
        {
          title: "DevOps & Ferramentas",
          desc: "Orquestração, virtualização, controle de versão e infraestrutura robusta."
        }
      ]
    },
    projects: {
      tag: "Portfólio",
      title: "Projetos em Destaque",
      subtitle: "Clique em qualquer projeto para abrir detalhes e links associados.",
      privateProject: "Uso interno / Projeto Privado",
      codeBtn: "Código Fonte",
      siteBtn: "Acessar Site",
      techHeader: "Tecnologias & Competências",
      closeLabel: "Fechar detalhes",
      list: [
        {
          id: "batatoom",
          title: "Batatoom! — Jogo Multiplayer em Tempo Real",
          category: "WebSockets / Event-Driven Game",
          summary: "Party game multiplayer em tempo real de vocabulário com motor léxico proprietário de 403.000+ palavras em O(1), áudio procedural Web Audio API e modo TV.",
          description: "Party game multiplayer em tempo real com arquitetura orientada a eventos sobre WebSockets (Socket.IO), conectando smartphones, PC e Modo TV com baixíssima latência.\n\nDestaques de Engenharia:\n• Motor Léxico O(1) (+403k palavras): Validação instantânea (<1ms) com Sets/HashMaps em memória e normalização Unicode NFD para PT-BR.\n• Servidor Autoritativo & Live Typing: Máquina de Estados (FSM) que previne trapaças e sincroniza a digitação ao vivo sem sobrecarga de rede.\n• Áudio 100% Procedural (Web Audio API): Sons dinâmicos e explosões sintetizados em tempo real, sem carregar arquivos de áudio externos (0 KB).\n• Conexão Zero-Config: Entrada rápida por QR Code e Cloudflare Tunnels sem necessidade de abertura de portas ou instalação.",
          tags: ["Node.js", "Socket.IO", "WebSockets", "Web Audio API", "Event-Driven", "JavaScript", "Cloudflare Tunnels", "O(1) Engine"],
          github: "https://github.com/Shuralot/Batatoom"
        },
        {
          id: "odontovieira",
          title: "Website OdontoVieira",
          category: "Web Development / SEO",
          summary: "Foco no crescimento orgânico de clínica local por meio de funis de lead e SEO técnico agressivo.",
          description: "Site institucional desenvolvido em Next.js para a clínica odontológica OdontoVieira. Projetado sob medida com foco em SEO local de alto rendimento para atração orgânica de pacientes. Integra o Google Tag Manager (GTM) para monitoramento de comportamento dos usuários e foi otimizado estruturalmente para aumentar a conversão direta de novos contatos qualificados via web.",
          tags: ["Next.js", "React", "Tailwind CSS", "Google Tag Manager", "SEO Local", "Lead Generation"],
          link: "https://www.clinicaodontovieira.com.br"
        },
        {
          id: "trackchat",
          title: "TrackChat",
          category: "SaaS / Frontend Integration",
          summary: "Painel de exibição em tempo real otimizando triagem operacional de mensagens e filas.",
          description: "Aplicação em Next.js operando como central pública de atendimento e monitoramento (queue board). Integrado via Webhooks/APIs com a plataforma Chatwoot, o sistema exibe fluxos de conversa e filas de atendimento em tempo real na tela principal da empresa, reduzindo o tempo de resposta das equipes operacionais e otimizando a distribuição de chamados.",
          tags: ["Next.js", "TypeScript", "Chatwoot API", "Webhooks", "Tailwind CSS", "Real-time Metrics"]
        },
        {
          id: "gerenciador-atividades",
          title: "Gerenciador de Integrantes e Atividades",
          category: "Desktop App / Database",
          summary: "Software desktop em Python com PyQt e Firebase para gestão e automação de tarefas em equipes.",
          description: "Aplicação Desktop multiplataforma desenvolvida em Python (PyQt6) e integrada em tempo real com o Firebase Realtime Database. O software foi criado para gerenciar e automatizar o fluxo de atividades, atribuição de tarefas e monitoramento de desempenho de uma equipe de 15 pessoas, eliminando gargalos operacionais e centralizando a comunicação do grupo.",
          tags: ["Python", "PyQt6", "Firebase", "Realtime Database", "Team Automation"],
          github: "https://github.com/Shuralot/Gerenciador-de-Integrantes-e-Atividades"
        },
        {
          id: "portfolio-nextjs",
          title: "Portfólio Profissional (Next.js)",
          category: "Web Application / UI-UX",
          summary: "Este portfólio moderno e fluido, construído do zero com foco em performance, tipografia e microanimações.",
          description: "Website portfólio de alta performance projetado em Next.js (App Router) e TypeScript, estilizado com Tailwind CSS e animado com Framer Motion. Apresenta carregamento ultra-rápido, conformidade completa com regras de SEO técnico (Schema JSON-LD, sitemap dinâmico, robots.txt), PWA manifest integrado e um design minimalista integrando DevOps com Psicologia.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO Avançado", "JSON-LD"]
        },
        {
          id: "ragnar",
          title: "Ragnar AI-vs-AI Testing Suite",
          category: "AI Testing / Next.js",
          summary: "Plataforma avançada para orquestrar e auditar interações adversariais entre modelos de IA.",
          description: "Plataforma avançada desenvolvida com Next.js para orquestrar e analisar interações entre modelos de Inteligência Artificial. Utiliza o agente Ragnar para testar e auditar outros agentes de IA em cenários adversariais através do WhatsApp (Evolution API). Oferece relatórios de auditoria automatizados com score de performance e análise de segurança, gerenciamento de cenários de ataque, logs em tempo real via Socket.IO e gráficos de consumo de tokens.",
          tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.IO", "Evolution API", "Docker"],
          github: "https://github.com/Shuralot/TrackTest"
        }
      ]
    },
    contact: {
      tag: "Conectar",
      title: "Vamos construir algo juntos?",
      subtitle: "Seja para automatizar sua infraestrutura, integrar um sistema completo de backend ou desenhar uma experiência web fluida e focada em usuários, estou à disposição para conversar.",
      emailLabel: "E-mail",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      githubVal: "github.com/Shuralot",
      phoneLabel: "Telefone / WhatsApp",
      whatsappLabel: "WhatsApp Direct",
      whatsappVal: "(81) 98660-1822",
      whatsappLink: "https://wa.me/5581986601822?text=Ol%C3%A1%20J%C3%BAlio%2C%20acessei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
      locationLabel: "Localização",
      locationVal: "Paulista, PE — Brasil",
      copied: "Copiado!",
      designedWith: "Desenhado e programado com Next.js & Framer Motion."
    }
  },
  en: {
    nav: {
      inicio: "Home",
      sobre: "About",
      experiencia: "Timeline",
      habilidades: "Skills",
      projetos: "Projects",
      contato: "Contact"
    },
    hero: {
      status: "Available for new projects",
      headline: "Building precise systems, focused on",
      headlineItalic: "people.",
      subheadline: "Hello, I am ",
      subheadlineHighlight: "Júlio Santos",
      subheadlineText: ". Full Stack & DevOps Developer. I combine coding and automation precision with the empathetic vision gained from my background in Psychology.",
      ctaProjects: "View projects",
      ctaContact: "Get in touch",
      downloadResume: "Download Resume (PDF)",
      resumeFile: "/resume_julio_santos.pdf",
      discover: "Discover",
      tags: ["Next.js / React", "Python & Node.js", "DevOps Specialist", "Databases", "Human Communication"]
    },
    about: {
      tag: "Journey",
      title: "The convergence of mind and code",
      p1: "My professional journey began in Psychology, where I learned to analyze and debug the most complex of systems: the human mind. Through clinical listening and understanding behaviors, I built a solid foundation of sensitivity for user experience and communication.",
      p1Highlight: "Psychology",
      p2: "Moving to technology, I took this human-centric vision with me. I completed my Bachelor's degree in Systems Analysis and Development, and I am currently specializing in DevOps at the prestigious CESAR School.",
      p2Highlight1: "Systems Analysis and Development",
      p2Highlight2: "DevOps",
      p2Highlight3: "CESAR School",
      p3: "I understand software development not just as lines of code executed on servers, but as real tools solving real pain points for real people. In daily practice, this translates to optimized APIs, organized Docker containers, and robust DevOps pipelines that save teams time and ensure continuous, secure deliveries.",
      p3Highlight1: "optimized APIs",
      p3Highlight2: "Docker containers",
      p3Highlight3: "DevOps pipelines",
      softSkillsTag: "Interpersonal Skills (Soft Skills)",
      softSkills: [
        {
          title: "Active Listening & Communication",
          desc: "Developed in clinical psychology practice. Translates to the ability to deeply understand client requirements and facilitate team dynamics with empathy."
        },
        {
          title: "Collaboration",
          desc: "Focused on goal alignment. Experience coordinating tasks in academic and corporate projects with multidisciplinary teams."
        },
        {
          title: "Flexibility",
          desc: "Intellectual curiosity to transit across different development areas, understanding multiple aspects from code to infrastructure."
        },
        {
          title: "Quick Learning",
          desc: "Easy adaptation to new scenarios, technological stacks, and methodologies, integrating new knowledge to solve problems instantly."
        }
      ],
      clickTip: "Click on a card to expand details."
    },
    experience: {
      tag: "Timeline",
      title: "Professional & Academic History",
      tabs: {
        exp: "Experience",
        edu: "Education",
        cert: "Certifications",
        verifyBtn: "Verify Credential"
      },
      experiences: [
        {
          role: "Freelance Developer",
          company: "Self-Employed",
          period: "2026 - Present",
          location: "Remote",
          desc: "Developing custom tools, web scrapers, e-commerce platforms, and websites optimized for search engines (SEO). Focused on delivering fast load times, responsive design, and maintainable clean code."
        },
        {
          role: "Full Stack Developer & Implementer",
          company: "AI Atende",
          period: "2025 - 2026",
          location: "Piedade, Jaboatão, PE (On-site)",
          desc: "Prompt engineering, project management, and full-stack development with JS/TSX. Provisioning and management of VPS environments and Docker containers, alongside CRM automation and message integrations (Kommo) for an AI-focused business."
        }
      ],
      education: [
        {
          degree: "Postgraduate DevOps Specialization",
          institution: "CESAR School",
          period: "2025 - 03/2027",
          location: "Recife, Brazil",
          desc: "Specialization focusing on modern continuous delivery practices (CI/CD), cloud computing, container orchestration, infrastructure as code (IaC), monitoring, and IT governance at one of Brazil's leading technology innovation schools."
        },
        {
          degree: "Technologist in Systems Analysis & Development",
          institution: "Uninassau",
          period: "2022 - 2025",
          location: "Recife, Brazil",
          desc: "Core software engineering, object-oriented programming, data modeling, client-server architectures, and advanced algorithms."
        },
        {
          degree: "Bachelor's in Psychology",
          institution: "FACHO",
          period: "2018 - 2023",
          location: "Olinda, Brazil",
          desc: "Curriculum focused on cognitive processes, behavioral analysis, active listening, and clinical interview techniques. Practical application of concepts to understand human interactions and working group dynamics."
        }
      ],
      certificates: [
        {
          title: "Red Hat System Administration I (RH-124 RHA) v10",
          issuer: "Red Hat",
          desc: "Professional administration of Red Hat Linux servers, covering user management, networking, permissions, system services, and advanced command-line operations.",
          link: "https://www.redhat.com/en/services/training-and-certification"
        },
        {
          title: "Web Programming Professional",
          issuer: "SENAC",
          desc: "Rich web application development in JavaScript, TypeScript, Angular, and Node.js. Implementing full CRUD databases with Express, relational databases (PostgreSQL/Railway), and non-relational backends (Firebase)."
        },
        {
          title: "Advanced Python Language",
          issuer: "SENAC",
          desc: "Advanced Python scripting, backend development with Django, desktop user interfaces with PyQt6, PostgreSQL integration, Railway deployment, and asset serving with Whitenoise."
        },
        {
          title: "Advanced Speaking & Writing English",
          issuer: "SENAC",
          desc: "Fluency in complex academic and professional conversations and writing. Technical ability to write code documentation and hold international business meetings seamlessly."
        }
      ]
    },
    skills: {
      tag: "Skills",
      title: "Competencies and Technologies",
      categories: [
        {
          title: "Front-end Development",
          desc: "Modern, responsive interfaces designed with a focus on end-user experience."
        },
        {
          title: "Back-end Development",
          desc: "Secure REST APIs, structured business routing, business logic, and service integrations."
        },
        {
          title: "Database & Cloud",
          desc: "Table structuring, query optimization, and real-time database connections."
        },
        {
          title: "DevOps & Tools",
          desc: "Container orchestration, virtualization, version control, and robust cloud infrastructure."
        }
      ]
    },
    projects: {
      tag: "Portfolio",
      title: "Featured Projects",
      subtitle: "Click on any project to read details and view available links.",
      privateProject: "Internal Use / Private Project",
      codeBtn: "Source Code",
      siteBtn: "Visit Site",
      techHeader: "Technologies & Skills",
      closeLabel: "Close details",
      list: [
        {
          id: "batatoom",
          title: "Batatoom! — Real-time Multiplayer Word Game",
          category: "WebSockets / Event-Driven Game",
          summary: "Real-time multiplayer vocabulary party game powered by an in-memory O(1) lexical engine with 403k+ words, procedural Web Audio API, and TV mode.",
          description: "Real-time multiplayer vocabulary party game built on an event-driven architecture with WebSockets (Socket.IO), seamlessly synchronizing smartphones, PC, and TV Mode with ultra-low latency.\n\nEngineering Highlights:\n• In-Memory O(1) Lexical Engine (403k+ words): Instant sub-millisecond (<1ms) validation using Sets/HashMaps and Unicode NFD normalization for PT-BR.\n• Authoritative Server & Live Typing: Server-side Finite State Machine (FSM) preventing cheating while streaming live keystrokes efficiently.\n• 100% Procedural Audio (Web Audio API): Real-time synthesized sound effects and explosions with zero external audio assets (0 KB).\n• Zero-Config Networking: Frictionless room access via dynamic QR Code and Cloudflare Tunnels with no port forwarding or installation required.",
          tags: ["Node.js", "Socket.IO", "WebSockets", "Web Audio API", "Event-Driven", "JavaScript", "Cloudflare Tunnels", "O(1) Engine"],
          github: "https://github.com/Shuralot/Batatoom"
        },
        {
          id: "odontovieira",
          title: "OdontoVieira Website",
          category: "Web Development / SEO",
          summary: "Focused on organic traffic growth for local clinic through funnel-based lead conversion.",
          description: "Institutional site developed in Next.js for the OdontoVieira dental clinic. Customized to deliver high-performance local SEO and organic search client acquisition. Features Google Tag Manager (GTM) for detailed user interaction tracking and was structurally optimized to increase conversion rates for direct online booking.",
          tags: ["Next.js", "React", "Tailwind CSS", "Google Tag Manager", "Local SEO", "Lead Generation"],
          link: "https://www.clinicaodontovieira.com.br"
        },
        {
          id: "trackchat",
          title: "TrackChat Panel",
          category: "SaaS / Frontend Integration",
          summary: "Real-time queue display board optimizing operations and call response times.",
          description: "Next.js application serving as a public calling queue display board. Integrated via Webhooks and Chatwoot APIs to showcase live conversation queues, incoming call alerts, and simplified metrics on large industrial monitors and TV screens, optimizing customer triage times.",
          tags: ["Next.js", "TypeScript", "Chatwoot API", "Webhooks", "Tailwind CSS", "Real-time Metrics"]
        },
        {
          id: "gerenciador-atividades",
          title: "Team Task Manager",
          category: "Desktop App / Database",
          summary: "Python desktop app with PyQt and Firebase for task workflow automation and team management.",
          description: "Multiplatform desktop application developed in Python utilizing PyQt6 for GUI. Integrated in real time with Firebase Realtime Database to structure task workflows, assignments, and productivity metrics for a 15-person team, eliminating operational bottlenecks and centralizing team communication.",
          tags: ["Python", "PyQt6", "Firebase", "Realtime Database", "Team Automation"],
          github: "https://github.com/Shuralot/Gerenciador-de-Integrantes-e-Atividades"
        },
        {
          id: "portfolio-nextjs",
          title: "Professional Portfolio (Next.js)",
          category: "Web Application / UI-UX",
          summary: "This modern and fluid portfolio, built from scratch with a focus on performance, typography, and micro-animations.",
          description: "Portfolio website built with Next.js (App Router) and TypeScript, styled with Tailwind CSS, and animated with Framer Motion. Crafted focusing on accessibility, load times, advanced SEO metrics (JSON-LD Schemas, dynamic Sitemaps, Robots), integrated PWA manifests, and a minimal design connecting DevOps engineering with human Psychology.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Advanced SEO", "JSON-LD"]
        },
        {
          id: "ragnar",
          title: "Ragnar AI-vs-AI Testing Suite",
          category: "AI Testing / Next.js",
          summary: "Advanced platform to orchestrate and audit adversarial interactions between AI models.",
          description: "Advanced platform built with Next.js to orchestrate and analyze interactions between AI models. It utilizes the Ragnar agent to test and audit other AI agents in adversarial scenarios via WhatsApp (Evolution API). Includes automated audit reports with performance scoring, security analytics, attack scenario setup, real-time logging via Socket.IO, and token usage metrics.",
          tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.IO", "Evolution API", "Docker"],
          github: "https://github.com/Shuralot/TrackTest"
        }
      ]
    },
    contact: {
      tag: "Connect",
      title: "Let's build something together",
      subtitle: "Whether you need to automate your cloud infrastructure, deploy complex backend services, or build fluid, user-focused interfaces, I am ready to talk.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      githubVal: "github.com/Shuralot",
      phoneLabel: "Phone / WhatsApp",
      whatsappLabel: "WhatsApp Direct",
      whatsappVal: "+55 (81) 98660-1822",
      whatsappLink: "https://wa.me/5581986601822?text=Hello%20Julio%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
      locationLabel: "Location",
      locationVal: "Paulista, PE — Brazil",
      copied: "Copied!",
      designedWith: "Designed and coded with Next.js & Framer Motion."
    }
  }
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (path: string) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language | null;
    if (savedLang === "pt" || savedLang === "en") {
      setLanguage(savedLang);
    }
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  // Helper function to resolve dot-notated translation path strings (e.g. "hero.headline")
  const t = (path: string): any => {
    const keys = path.split(".");
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        console.warn(`Translation path "${path}" not found in language "${language}"`);
        return path;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }} className="contents">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
