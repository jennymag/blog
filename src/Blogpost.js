import styled from "styled-components";

const Post = styled.div`
  display: flex;
  wrap: wrap;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid gray;
  max-width: 900px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 30px;
  


  * {
    margin: 0;
    padding: 0;
     font-family: Arial;
  font-weight: 100;
  }

  h1 {
    font-size: 30px;
    color: gray;
    margin: 60px 0 20px 0;
    border-bottom: 1px solid gray;
    padding: 10px;
  }

  h2 {
    font-size: 20px;
    color: lightgray;
    margin: 0px 0 50px 0;
  }

  h3 {
    font-size: 19px;
    color: gray;
    margin: 50px 0 30px 0;
    padding-left: 20px;
  }

  img {
    max-width: 100%;
    padding-top: 20px;s
  }
`;

const StyleSpan = styled.span`
  display: flex;
  flex-direction: row-reverse;
`;

function Blogpost(props) {
  return (
    <Post>
      <h1>{props.title}</h1>
      <h2>{props.time}</h2>
      <p>{props.text}</p>
      <img src={props.img} alt={props.alt} />
      <StyleSpan>
        <h3>Category: Life</h3>
        <h3>Comments (0)</h3>
      </StyleSpan>
    </Post>
  );
}

export default Blogpost;
