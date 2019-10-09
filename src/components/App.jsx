import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Introduction from './Introduction';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
// import Layout from './Layout';
import eniacWomen from '../assets/images/eniac-women.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div>
      <style global jsx>{`
        body {
          background-color: #eef5f7;
          font-family: Lucida Console;
        }
      `}</style>
      <style jsx>{`
        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 25%;
        }
      `}</style>
      <Container>

        {/* <React.Fragment> */}
        <Header />
        <Introduction />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error404} />
        </Switch>
        <img src={eniacWomen} />
        <Footer />
      </Container>
      {/* </React.Fragment> */}
    </div>
  );
}

export default App;
