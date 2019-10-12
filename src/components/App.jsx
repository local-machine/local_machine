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
import Projects from './Projects';
// import { DaysOfCode } from './DaysOfCode';

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
        <Layout>
          <NavigationBar />
          <Jumbotron />
          <Avatar />
          {/* <DaysOfCode /> */}
          <Switch>
            <Route exact path="/" component={Home} title="Home" />
            <Route path="/contact" component={Contact} title="Contact" />
            <Route path="/projects" component={Projects} title="Projects" />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </Layout>
      </React.Fragment>
    </div>
  );
}

export default App;
