import React from 'react';
import HomePageBase from './HomePageBase';
import SponsorSection from '../components/SponsorsSection';

/**
 * HomePage for the root (/) route
 */
const HomePage = () => (
  <HomePageBase>
    <SponsorSection />{' '}
  </HomePageBase>
);

export default HomePage;
