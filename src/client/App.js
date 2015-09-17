import React, { PropTypes, Component } from 'react';

import ThingWrapper from './ThingWrapper';

import AppStyle from './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: false
    };
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { items } = this.state;
    if(!items) {
      return this.renderLoading();
    }
    return (
      <ThingWrapper items={items} />
    );
  }

  renderLoading() {
    return (
      <div className={AppStyle.loading}>
        <div className={AppStyle.loadingWrap}>
          Loading...
        </div>
      </div>
    );
  }

  loadData() {
    this.setState({ items: false })

    // Fetch data
    setTimeout(() => {
      const items = {};
      const phrases = [
        'Sudoku is game',
        'Much wow',
        'Very react',
        'Can haz hot reload?',
        'I herd a fly buzz when I died.  I atsed it.',
        'Tah sleep, purchance tah dreem…prolly tah dreem.',
        'Do not go gentul intah that good nite!  Das where basement cat lives.',
        'All animals r equal.  But sumz equalr than others.',
        'Ask not what yer kitteh can do fer you: Iz not listnin.',
        'Et tu, Kittéh?',
        'Tah b r not tah b – Das wut Iz ponderin.',
        'A DREAM!!1!  I haz it.',
        'Das one small step fer man, one giant leap for kitteh.'
      ]
      for(let i = 0; i < 100; i++) {
        items[i] = phrases[Math.floor(Math.random()*phrases.length)];
      }
      this.setState({items});
    }, 1000);

  }
}
