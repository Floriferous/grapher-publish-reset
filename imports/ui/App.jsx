import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Info2 from './Info2.jsx';

const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <div style={{ display: 'flex' }}>
      <Info />
      <Info2 />
    </div>
  </div>
);

export default App;
