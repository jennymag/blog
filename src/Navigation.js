import styled from "styled-components";
import { Link } from "react-router-dom";

const GridTop = styled.nav`
  display: flex;

  * {
    margin: 0;
    padding: 0;
    padding: 5px;
  }

  li {
    list-style-type: none;
    display: inline;
    padding: 20px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-family: arial;
    font-size: 15px;
    color: black;
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
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/edit/overview">
            <b>Log in</b>
          </Link>
        </li>
      </ul>
    </GridTop>
  );
}

export default Navigation;
