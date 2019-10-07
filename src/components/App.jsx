import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Introduction from './Introduction';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
