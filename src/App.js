import styled from "styled-components";
import Navigation from "./Navigation";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  div {
    border: 1px solid black;
    padding: 7px;
  }
`;

function App() {
  return (
    <Router>
      <Header />
      <Navigation />

      <GridContainer>
        <Sidebar />
        <Content>
          <Switch>
            <Route path="/about">
              <About />
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
  );
}

export default App;
