import styled from "styled-components";
import Navigation from "./Navigation";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";
import Contact from "./Contact";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  }
`;

const Container = styled.div`
  display: grid;
  max-width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`;

function App() {
  return (
    <Container>
      <Router>
        <Navigation />
        <Header />
        <GridContainer>
          <Sidebar />
          <Content>
            <Switch>
              <Route path="/edit">
                <Edit />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Content>
        </GridContainer>
      </Router>
    </Container>
  );
}

export default App;
