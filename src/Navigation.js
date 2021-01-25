import styled from "styled-components";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const GridTop = styled.nav`
  display: grid;
  border: 1px solid black;

  * {
    margin: 0;
    padding: 5px;

  li {
    list-style-type: none;
    display: inline;
    padding-left: 60px;
  }
`;

function Navigation() {
  return (
    <GridTop>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </GridTop>
  );
}

export default Navigation;
