import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'WELL IN TECH', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Wellington Chrystian',
  subtitle: 'Here I am, Well in Tech',
  cta: 'Follow me',
};

// ABOUT DATA
export const aboutData = {
  img: 'me5.png',
  paragraphOne:
    "I'm passionate about programming and I have ease of learning, concentration, dedication, trust, credibility, attention, logical reasoning and good interpersonal relationship are characteristics that I have in my profile.",
  paragraphTwo: 'I like to face challenges, solve problems and create solutions',
  paragraphThree:
    'Perfectionist and methodical, modern, agile and traditional, but flexible for adaptations in situations of pressure or risk.',
  resume: '/ENG_CV_Wellington_Chrystian-v2.pdf',
};

// PROJECTS DATA
export const projectsData = [
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
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'contact@wellchrys.dev',
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
