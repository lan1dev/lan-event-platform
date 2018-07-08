import React from 'react';
import Section from '../Section';
import FlexBox from '../FlexBox';

const SponsorSection = () => (
  <Section>
    <h1>Sponsors</h1>
    <FlexBox direction="row" align="center" height="100%">
      <img alt="sponsor" src="http://lorempixel.com/300/200" />
      <img hspace="20" alt="sponsor" src="http://lorempixel.com/300/200" />
      <img hspace="20" alt="sponsor" src="http://lorempixel.com/300/200" />
      <img hspace="20" alt="sponsor" src="http://lorempixel.com/300/200" />
      <img hspace="20" alt="sponsor" src="http://lorempixel.com/300/200" />
    </FlexBox>
  </Section>
);

export default SponsorSection;
