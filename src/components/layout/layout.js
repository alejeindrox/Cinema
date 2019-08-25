import React from 'react';
import { Container, } from '@material-ui/core';

const Layout = (props) => {
  return (
    <Container fixed className="Layout">
      {props.children}
    </Container>
  );
};

export default Layout;
