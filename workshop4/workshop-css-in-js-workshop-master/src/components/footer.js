/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
margin: 2em 0;
padding: 2em 2em;
border-radius: 3px;
background-color: black;
`;
const List = styled.ul`
display: flex;
flex-direction: column;
justfy-content: space-around;
list-style-type: none;
margin: 0em 2em;
`;
const Button = styled.button`
color: white;
padding: 0 2em;
margin: 0 1em;
`;
const ListItem2 = styled(Button)`
color: black;
background: white;

&:hover {
    color: #F05252;
    text-decoration: none;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Bar>
        <List>
          <ListItem2 as="a" href="/">Home</ListItem2>
          <ListItem2 as="a" href="/">About</ListItem2>
          <ListItem2 as="a" href="/">FAQ</ListItem2>
          <ListItem2 as="a" href="/">Contact</ListItem2>
        </List>
        <List>
          <ListItem2 as="a" href="/">Resources</ListItem2>
          <ListItem2 as="a" href="/">Help</ListItem2>
          <ListItem2 as="a" href="/">Questions</ListItem2>
          <ListItem2 as="a" href="/">Environment</ListItem2>
        </List>
        <List>
          <ListItem2 as="a" href="/">Videos</ListItem2>
          <ListItem2 as="a" href="/">Subscribers</ListItem2>
          <ListItem2 as="a" href="/">Legal</ListItem2>
          <ListItem2 as="a" href="/">Team</ListItem2>
        </List>
        <List>
          <ListItem2 as="a" href="/">Software</ListItem2>
          <ListItem2 as="a" href="/">Web Development</ListItem2>
          <ListItem2 as="a" href="/">API</ListItem2>
          <ListItem2 as="a" href="/">Directions</ListItem2>
        </List>
        <List>
          <ListItem2 as="a" href="/">Map</ListItem2>
          <ListItem2 as="a" href="/">Stats</ListItem2>
          <ListItem2 as="a" href="/">Support</ListItem2>
          <ListItem2 as="a" href="/">Report</ListItem2>
        </List>
      </Bar>
    );
  }
}

export default Footer;
