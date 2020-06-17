import Logo from 'pages/Home/Logo';
import PageLink from 'components/PageLink';
import React from 'react';
import SocialLink from 'components/SocialLink';
import socials from 'shared/data/socials.json';
import { map } from 'lodash';
import { secondaryLinks } from 'components/Routes/links';
import './index.scss';

const Home = () => (
  <div className="home">
    <div className="d-none">
      <h1>Photographer in Albuquerque, NM</h1>
      <p>This Christography is a photographer based in Albuquerque, NM. Specializing in many forms of portraits (individual, couples, graduates, and family), automotive, engagement, weddings, events, and landscapes.</p>
    </div>
    <nav className="socials">{map(socials, SocialLink)}</nav>
    <main><Logo /></main>
    <nav className="other">{map(secondaryLinks, PageLink)}</nav>
  </div>
);

export default Home;
