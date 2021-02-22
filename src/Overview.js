import Styled from "styled-components";
import draw from "./image/draw.png";
const Container = Styled.div`

`;

const OverGrid = Styled.div`
display: grid;
grid-template-rows:    repeat(5, 40px);
grid-template-columns: repeat(5, 1fr);
margin: 50px;
div {
    border: 1px solid white;
    padding: 10px;
     padding-left: 30px;
}
p {
    margin-left: 30px;
}
img {
    width: 10%;
    cursor: pointer;
}
`;

function Overview() {
  return (
    <Container>
      <h2>Blog Overview</h2>
      {/*       <label>
        Search: <input></input>
      </label> */}

      <OverGrid>
        <p>Title</p>
        <p>Category</p>
        <p>Published</p>
        <p>Author</p>
        <p>Edit</p>

        <div class="green">I love it that way</div>
        <div class="blue">Life</div>
        <div class="pink">12:30 13/13/20</div>
        <div class="yellow">Jenny m</div>
        <div>
          <img src={draw} alt="edit" />
        </div>
      </OverGrid>
    </Container>
  );
}

export default Overview;
