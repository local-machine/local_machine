import React from 'react';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Layout from './Layout';
import { NavigationBar } from './NavigationBar';
import { Jumbotron } from './Jumbotron';
import { Avatar } from './Avatar';

function App() {
  return (
    <div>
      <style global jsx>{`
        body {
          background-color: #eef5f7;
          font-family: Lucida Console;
        }
      `}</style>

      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Avatar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} title="Home" />
            <Route path="/contact" component={Contact} title="Contact" />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </Layout>
      </React.Fragment>
    </div>
  );
}

export default App;
