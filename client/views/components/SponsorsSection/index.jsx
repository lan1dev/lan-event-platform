import React from 'react';
import Section from '../Section';
import FlexBox from '../FlexBox';

const SponsorSection = () => (
  <Section title="Sponsors">
    <FlexBox direction="row" align="center" justify="space-around" height="100%">
      <img alt="sponsor" src="http://lorempixel.com/200/100" />
      <img alt="sponsor" src="http://lorempixel.com/200/100" />
      <img alt="sponsor" src="http://lorempixel.com/200/100" />
      <img alt="sponsor" src="http://lorempixel.com/200/100" />
      <img alt="sponsor" src="http://lorempixel.com/200/100" />
    </FlexBox>
  </Section>
);

export default SponsorSection;
