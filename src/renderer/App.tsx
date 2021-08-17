import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

const Hello = () => {
  return (
    <div className="absoute inselt-0 bg-white text-center h-full flex flex-col justify justify-center">ERB + TAILWIND = ❤</div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
