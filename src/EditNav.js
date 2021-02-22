import Styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = Styled.ul`
margin: 0;
padding: 0px;
list-style: none;

font-size: 20px;
background-color: lightblue;
ul {
  margin: 0;
  padding: 0;
}
li, h3 {
    
}
li:hover {
    background-color: white;
}
a {
  color: black;
  text-decoration: none;
}
`;

function EditNav() {
  return (
    <>
      <Navbar>
        <Link to="/">
          <button>Visit blog</button>
        </Link>
        <button>Log out</button>

        <h3>Edit blog</h3>

        <li>
          <Link to="/edit/overview">Overview</Link>
        </li>
        <li>
          <Link to="/edit/addpost">Add blog post</Link>
        </li>
        <li>
          <Link to="/edit/drafts">Drafts</Link>
        </li>
        <li>
          <Link to="/edit/gallary">Image gallary</Link>
        </li>
        <li>
          <Link to="/edit/comments">Comments</Link>
        </li>
        <li>
          <Link to="/edit/settings">Settings</Link>
        </li>
      </Navbar>
    </>
  );
}

export default EditNav;
