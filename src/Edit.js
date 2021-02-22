import Styled from "styled-components";
import EditNav from "./EditNav";
import AddPost from "./AddPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const SettingContainer = Styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: pink;
`;

function Edit() {
  return (
    <Switch>
      <SettingContainer>
        <EditNav />
        <Route path="/edit/overview">
          <AddPost />
        </Route>
        <Route path="/edit/addpost">
          <AddPost />
        </Route>
        <Route path="/edit/drafts">
          <AddPost />
        </Route>
        <Route path="/edit/gallary">
          <AddPost />
        </Route>
        <Route path="/edit/comments">
          <AddPost />
        </Route>
        <Route path="/edit/settings">
          <AddPost />
        </Route>
        <Route path="/"></Route>
      </SettingContainer>
    </Switch>
  );
}

export default Edit;
