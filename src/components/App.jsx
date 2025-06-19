import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData, headData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [dataProjects, setProjectsData] = useState({ title: '', projects: [] });
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [lang, setLang] = useState(headData.lang);

  useEffect(() => {
    setHero({ ...heroData[lang] });
    setAbout({ ...aboutData[lang] });
    setProjectsData({ ...projectsData[lang] });
    setContact({ ...contactData[lang] });
    setFooter({ ...footerData });
  }, [lang]);

  const handleClick = React.useCallback((lng) => {
    setLang(lng);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, dataProjects, contact, footer, lang }}>
      <Hero onClick={handleClick} headData={headData} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
