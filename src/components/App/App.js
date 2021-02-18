import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello worldie!</h2>
        <List title={['Testing you out', <sup key='1'>soon!</sup>]} source='https://www.solidbackgrounds.com/images/1280x720/1280x720-medium-sea-green-solid-color-background.jpg'>
        </List>
      </main>
    )
  }
}

export default App;
