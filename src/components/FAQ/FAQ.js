import React from 'react';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import { FaqContents } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={FaqContents.title} imageSource={FaqContents.image} />
    <div>
      {FaqContents.description}
    </div>
  </Container>
);

export default FAQ;