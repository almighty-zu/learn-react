import React from 'react';
import Container from '../Container/Container.js';
import { InfoContents } from '../../data/dataStore';
import Hero from '../Hero/Hero.js';

const Info = () => (
  <Container>
    <Hero titleText={InfoContents.title} imageSource={InfoContents.image} />
    <div>
      {InfoContents.description}
    </div>
  </Container>
);

export default Info;