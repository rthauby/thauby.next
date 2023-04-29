import React, { Component } from 'react';
import Navigation from '@/Navigation'
import Footer from '@/Footer'
import CardSection from '@/CardSection';
import CardData from '@/data/hobbies.json';

class Work extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards : []
    }
  }

  componentDidMount() {
    this.setState({cards : CardData});
  }

  render() {
    return (
        <div>
            <Navigation />
            <CardSection idName="hobbies" title="Hobbies" cards={this.state.cards} />
            <Footer />
        </div>
    );
  }
}

export default Work;