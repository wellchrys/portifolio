import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'WELL IN TECH', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  languages: ['pt', 'es'],
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  en: {
    title: 'Hi, my name is',
    name: 'Wellington Chrystian',
    subtitle: 'Here I am, Well in Tech',
    cta: 'Follow me',
  },
  pt: {
    title: 'Oi, meu nome é',
    name: 'Wellington Chrystian',
    subtitle: 'Aqui eu sou, Well em Tech',
    cta: 'Saiba Mais',
  },
  es: {
    title: 'Mi nombre es',
    name: 'Wellington Chrystian',
    subtitle: 'Aquí estoy, Well en Tech',
    cta: 'Sígueme',
  },
};

// ABOUT DATA
export const aboutData = {
  en: {
    title: '',
    cta: '',
    img: 'me5.png',
    paragraphOne:
      "I'm passionate about programming and I have ease of learning, concentration, dedication, trust, credibility, attention, logical reasoning and good interpersonal relationship are characteristics that I have in my profile.",
    paragraphTwo: 'I like to face challenges, solve problems and create solutions',
    paragraphThree:
      'Perfectionist and methodical, modern, agile and traditional, but flexible for adaptations in situations of pressure or risk.',
    resume: '/ENG_CV_Wellington_Chrystian-v2.pdf',
  },
  pt: {
    title: 'Sobre mim',
    cta: 'Curriculo',
    img: 'me5.png',
    paragraphOne:
      'Sou apaixonado por programação e tenho facilidade de aprendizado, concentração, dedicação, confiança, credibilidade, atenção, raciocínio lógico e um bom relacionamento interpessoal, que são características presentes no meu perfil.',
    paragraphTwo: 'Gosto de enfrentar desafios, resolver problemas e criar soluções.',
    paragraphThree:
      'Perfeccionista e metódico, moderno, ágil e tradicional, mas flexível para adaptações em situações de pressão ou risco.',
    resume: '/PT_CV_Wellington_Chrystian-v2.pdf',
  },
  es: {
    title: 'Acerca de mí',
    cta: 'Currículum',
    img: 'me5.png',
    paragraphOne:
      'Soy un apasionado de la programación y tengo facilidad de aprendizaje, concentración, dedicación, confianza, credibilidad, atención, razonamiento lógico y buenas habilidades interpersonales, que son características presentes en mi perfil.',
    paragraphTwo: 'Me gusta enfrentar desafíos, resolver problemas y crear soluciones.',
    paragraphThree:
      'Perfeccionista y metódico, moderno, ágil y tradicional, pero flexible para adaptarme en situaciones de presión o riesgo.',
    resume: '/ES_CV_Wellington_Chrystian-v2.pdf',
  },
};

// PROJECTS DATA
export const projectsData = {
  en: {
    title: '',
    ctaUrl: '',
    ctaRepo: '',
    projects: [
      {
        id: nanoid(),
        img: 'intranex.png',
        title: 'IntraNEX',
        info:
          'IntraNEX is an application developed at NEX with React, TypeScript, Apollo - GraphQL, Tailwind, Elixir, Phoenix and Absinthe.',
        info2:
          "This is the Internal application, whose main function is to manage the cooperative member's finances. Generating bills, invoices, reports and transfers.",
        url: 'https://new-intranex.nexenergy.com.br/',
        repo: 'https://github.com/wellchrys/nex',
      },
      {
        id: nanoid(),
        img: 'external.png',
        title: 'External Area',
        info:
          'External area is an application developed at NEX with NextJs, Elixir, Phoenix and Absinthe.',
        info2:
          "This is the External application for Nex's clients, whose main function is to expose the cooperative member's finances, bills, invoices, reports and transfers infos.",
        url: 'https://app.nexenergy.com.br/',
        repo: 'https://github.com/wellchrys/nex',
      },
      {
        id: nanoid(),
        img: 'gobarber.png',
        title: 'GoBarber',
        info:
          'GoBarber application developed on Bootcamp GoStack 11.0 with Node.js, ReactJS and React Native.',
        info2:
          'This is the GoBarber application, which is a service scheduling platform for owners of barbershops or beauty salons. In this application, the user can access all registered service providers through a mobile application, with which the user can choose a provider to book their appointment.',
        url: 'https://gobarber.wellchrys.dev',
        repo: 'https://github.com/wellchrys/gostack-gobarber-web',
      },
      {
        id: nanoid(),
        img: 'mentora.png',
        title: 'Mentora',
        info: 'App - Mentora - Developing platform for Hackathon CCR (2ª edition)',
        info2:
          'Connects the user with Mentora HR team to provide the best assistance possible. Enables appointments according to available times. Shows the users progress in relation to their studies and professional contract level. It shows the courses in which the user is enrolled and their progress.',
        url: 'https://app-mentora.netlify.app',
        repo: 'https://github.com/gkum4/mentora',
      },
    ],
  },
  pt: {
    title: 'Projetos',
    ctaUrl: 'Site',
    ctaRepo: 'Código',
    projects: [
      {
        id: nanoid(),
        img: 'intranex.png',
        title: 'IntraNEX',
        info:
          'O IntraNEX é um aplicativo desenvolvido na NEX com React, TypeScript, Apollo - GraphQL, Tailwind, Elixir, Phoenix e Absinthe.',
        info2:
          'Este é o aplicativo interno, cuja principal função é gerenciar as finanças dos cooperados. Gerando boletos, notas fiscais, relatórios e transferências.',
        url: 'https://new-intranex.nexenergy.com.br/',
        repo: 'https://github.com/wellchrys/nex',
      },
      {
        id: nanoid(),
        img: 'external.png',
        title: 'Área Externa',
        info:
          'A Área Externa é um aplicativo desenvolvido na NEX com NextJs, Elixir, Phoenix e Absinthe.',
        info2:
          'Este é o aplicativo externo para os clientes da Nex, cuja principal função é expor informações financeiras dos cooperados, boletos, notas fiscais, relatórios e transferências.',
        url: 'https://app.nexenergy.com.br/',
        repo: 'https://github.com/wellchrys/nex',
      },
      {
        id: nanoid(),
        img: 'gobarber.png',
        title: 'GoBarber',
        info:
          'Aplicativo GoBarber desenvolvido no Bootcamp GoStack 11.0 com Node.js, ReactJS e React Native.',
        info2:
          'Este é o aplicativo GoBarber, que é uma plataforma de agendamento de serviços para donos de barbearias ou salões de beleza. Nele, o usuário pode acessar todos os prestadores de serviço cadastrados através de um aplicativo mobile, escolhendo o profissional para agendar seu atendimento.',
        url: 'https://gobarber.wellchrys.dev',
        repo: 'https://github.com/wellchrys/gostack-gobarber-web',
      },
      {
        id: nanoid(),
        img: 'mentora.png',
        title: 'Mentora',
        info: 'App - Mentora - Plataforma desenvolvida para o Hackathon CCR (2ª edição).',
        info2:
          'Conecta o usuário com a equipe de RH da Mentora para oferecer o melhor suporte possível. Permite realizar agendamentos de acordo com os horários disponíveis. Mostra o progresso do usuário em relação aos estudos e ao nível de contrato profissional. Também exibe os cursos nos quais o usuário está matriculado e seu progresso.',
        url: 'https://app-mentora.netlify.app',
        repo: 'https://github.com/gkum4/mentora',
      },
    ],
  },
  es: {
    title: 'Proyectos',
    ctaUrl: 'Site',
    ctaRepo: 'Código',
    projects: [
      {
        id: nanoid(),
        img: 'intranex.png',
        title: 'IntraNEX',
        info:
          'IntraNEX es una aplicación desarrollada en NEX con React, TypeScript, Apollo - GraphQL, Tailwind, Elixir, Phoenix y Absinthe.',
        info2:
          'Esta es la aplicación interna, cuya función principal es gestionar las finanzas de los socios cooperativos. Genera facturas, recibos, reportes y transferencias.',
        url: 'https://new-intranex.nexenergy.com.br/',
        repo: 'https://github.com/wellchrys/nex',
      },
      {
        id: nanoid(),
        img: 'external.png',
        title: 'Área Externa',
        info:
          'Área Externa es una aplicación desarrollada en NEX con NextJs, Elixir, Phoenix y Absinthe.',
        info2:
          'Esta es la aplicación externa para los clientes de Nex, cuya función principal es mostrar la información financiera de los socios, facturas, recibos, reportes y transferencias.',
        url: 'https://app.nexenergy.com.br/',
        repo: 'https://github.com/wellchrys/nex',
      },
      {
        id: nanoid(),
        img: 'gobarber.png',
        title: 'GoBarber',
        info:
          'Aplicación GoBarber desarrollada en el Bootcamp GoStack 11.0 con Node.js, ReactJS y React Native.',
        info2:
          'Esta es la aplicación GoBarber, que es una plataforma de reserva de servicios para propietarios de barberías o salones de belleza. A través de la app móvil, el usuario puede acceder a todos los proveedores registrados y seleccionar uno para reservar su cita.',
        url: 'https://gobarber.wellchrys.dev',
        repo: 'https://github.com/wellchrys/gostack-gobarber-web',
      },
      {
        id: nanoid(),
        img: 'mentora.png',
        title: 'Mentora',
        info: 'App - Mentora - Plataforma desarrollada para el Hackathon CCR (2ª edición).',
        info2:
          'Conecta al usuario con el equipo de RRHH de Mentora para brindar la mejor asistencia posible. Permite realizar citas según los horarios disponibles. Muestra el progreso del usuario en relación con sus estudios y su nivel contractual profesional. También muestra los cursos en los que está inscrito y su progreso.',
        url: 'https://app-mentora.netlify.app',
        repo: 'https://github.com/gkum4/mentora',
      },
    ],
  },
};

// CONTACT DATA
export const contactData = {
  en: {
    title: '',
    cta: '',
    btn: '',
    email: '',
  },
  pt: {
    title: 'Contato',
    cta: 'Vamos trabalhar juntos? Bora!',
    btn: 'Conversar',
    email: '',
  },
  es: {
    title: 'Contacto',
    cta: '¿Te gustaría trabajar conmigo? ¡Genial!',
    btn: 'Hablemos',
    email: '',
  },
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/wellchrys.dev',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wellington-chrystian',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/wellchrys',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
