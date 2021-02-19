import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    source:  PropTypes.string.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} ImageSource={this.props.source} />
        <div className={styles.description}>
          {this.props.description}
        </div>
        <div className={styles.columns}>
          <Column title='First' />
          <Column title='Second' />
          <Column title='Third' />
        </div>
      </section>
    )
  }
}

export default List; 




