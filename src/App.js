import styled from "styled-components";
import Navigation from "./Navigation";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Edit from "./Edit";
import Contact from "./Contact";
import "./App.css";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  }
`;

const Container = styled.div`
  display: grid;
  max-width: 1100px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/edit">
            <Edit />
          </Route>

          <Route path="/contact">
            <Container>
              <Navigation />
              <Contact />
            </Container>
          </Route>
          <Route path="/">
            <Container>
              <Navigation />
              <Header />
              <GridContainer>
                <Sidebar />
                <Content>
                  <Home />
                </Content>
              </GridContainer>
            </Container>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
