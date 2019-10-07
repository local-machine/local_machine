import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Introduction from './Introduction';
// import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      {/* <Switch>

      </Switch> */}
      <Introduction/>
      <About />
      <Footer />
    </div>
  );
}

export default App;
