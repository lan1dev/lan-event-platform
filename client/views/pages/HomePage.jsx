import React from 'react';
import HomePageBase from './HomePageBase';
import SponsorSection from '../components/SponsorsSection';
import LANSection from '../components/LANSection';

/**
 * HomePage for the root (/) route
 */
const HomePage = () => (
  <HomePageBase>
    <LANSection /> <SponsorSection />{' '}
  </HomePageBase>
);

export default HomePage;
