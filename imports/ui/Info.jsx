import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Links from '../api/links';
import { compose, withState } from 'recompose';

class Info extends Component {
  render() {
    const { setFields, fields } = this.props;
    console.log('Data value withTracker:', this.props.links);
    const links = this.props.links.map(link => this.makeLink(link));

    return (
      <div>
        <button
          onClick={() => {
            if (fields.url) {
              setFields({ title: 1 });
            } else {
              setFields({ title: 1, url: 1 });
            }
          }}
        >
          Toggle fields
        </button>
        <h2>Learn Meteor!</h2>
        <ul>{links}</ul>
      </div>
    );
  }

  makeLink(link) {
    return (
      <li key={link._id}>
        <a href={link.url} target="_blank">
          {link.title}
        </a>
      </li>
    );
  }
}

export default compose(
  withState('fields', 'setFields', { title: 1 }),
  withTracker(({ fields }) => {
    Meteor.subscribe('links', fields);

    return {
      links: Links.find({}).fetch()
    };
  })
)(Info);
