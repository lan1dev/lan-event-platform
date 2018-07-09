import React from 'react';
import HomePageBase from './HomePageBase';
import SponsorSection from '../components/SponsorsSection';
import LANSection from '../components/LANSection';
import TournamentsSection from '../components/TournamentsSection';

/**
 * HomePage for the root (/) route
 */
const HomePage = () => (
  <HomePageBase>
    <LANSection />
    <TournamentsSection /> <SponsorSection />{' '}
  </HomePageBase>
);

export default HomePage;
