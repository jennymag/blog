import avatar from "./image/Avatar.jpg";
import styled from "styled-components";

const Side = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 800px;

  * {
    margin: 0;
    padding: 0;
    font-family: Arial;
    font-weight: 50;
    color: gray;
  }

  h2 {
    padding: 30px;
  }

  h3 {
    padding: 30px 0 4px 0;
    border-bottom: 1px solid gray;
    width: 70%;
    margin-bottom: 15px;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    padding: 15px 0px 0 0;
    font-style: italic;
    color: black;
  }

  img {
    width: 60%;
    border-radius: 100px;
    margin-top: 50px;
  }
`;

const SpanImg = styled.span`
  display: flex;
  justify-content: center;
`;

function Sidebar() {
  return (
    <Side>
      <SpanImg>
        <img src={avatar} alt="avatar" />
      </SpanImg>
      <h2>Jenny Magnessen</h2>
      <h3>Archive:</h3>
      <p>januari 2021</p>
      <p>februari 2021</p>
      <p>mer..</p>
    </Side>
  );
}

export default Sidebar;
