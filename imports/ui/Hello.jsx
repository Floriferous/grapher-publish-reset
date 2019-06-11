import React, { Component } from 'react';
import links from '../api/links';

export default class Hello extends Component {
  state = {
    counter: 0
  };

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={() =>
            links.insert({ title: 'Yo', url: 'hah', createdAt: new Date() })
          }
        >
          Click Me
        </button>
      </div>
    );
  }
}
