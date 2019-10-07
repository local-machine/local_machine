import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Introduction from './Introduction';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={Error404} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
