import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
    <header class={styles.component}>
        <h2 class={styles.title}>Things to do</h2>
        <img class={styles.image} src="https://i.pinimg.com/originals/c8/6b/ea/c86bea4a59026569d69ebbd0282f8f7d.jpg" />
    </header>
)

export default Hero;