import Styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = Styled.ul`
margin: 50px;
padding: 0;
list-style: none;
font-size: 20px;

h3 {
padding: 10px;
}
li {
  padding: 20px 0 20px 10px;
    color: black;    
}
li:hover {
    font-style: italic;
}
a {
    text-decoration: none;
}

`;

function EditNav() {
  return (
    <>
      <Navbar>
        <h3>Edit blog:</h3>
        <Link to="/edit/overview">
          <li>Overview</li>
        </Link>
        <Link to="/edit/addpost">
          <li>Add blog post</li>
        </Link>

        <Link to="/edit/comments">
          <li>Comments</li>
        </Link>

        <Link to="/edit/settings">
          <li>Settings</li>
        </Link>

        <li>
          <Link to="/">
            <button>Visit blog</button>
          </Link>
        </li>
        <li>
          <button>Log out</button>
        </li>
      </Navbar>
    </>
  );
}

export default EditNav;
