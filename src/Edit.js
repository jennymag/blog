import Styled from "styled-components";
import EditNav from "./EditNav";
import AddPost from "./AddPost";
import Overview from "./Overview";

import Comments from "./Comments";
import Settings from "./Settings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const SettingContainer = Styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

`;

function Edit() {
  return (
    <Switch>
      <SettingContainer>
        <EditNav />
        <Route path="/edit/overview">
          <Overview />
        </Route>
        <Route path="/edit/addpost">
          <AddPost />
        </Route>

        <Route path="/edit/comments">
          <Comments />
        </Route>
        <Route path="/edit/settings">
          <Settings />
        </Route>
        <Route path="/"></Route>
      </SettingContainer>
    </Switch>
  );
}

export default Edit;
