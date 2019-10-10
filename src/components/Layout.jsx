import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

function Layout(props) {
  return (
    <Container>
      {props.children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;