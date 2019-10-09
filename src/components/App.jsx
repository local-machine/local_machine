import React from 'react';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Layout from './Layout';
import { NavigationBar } from './NavigationBar';
import { Jumbotron } from './Jumbotron';

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

      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </Layout>
      </React.Fragment>
    </div>
  );
}

export default App;
