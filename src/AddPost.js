import Styled from "styled-components";

const ContainerForm = Styled.form`
display: flex;
flex-direction: column;


label {
padding: 20px;
}
textarea {
  min-height: 400px;

}

 button {
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 70px;
  padding: 20px 40px 20px 40px;
  max-width: 200px;
  font-size: 16px;
  background-color: lightgreen;
}
button:hover {
    background-color: green;
}
`;

function AddPost() {
  return (
    <>
      <ContainerForm>
        <h2>Add blog post</h2>
        <label>Title: </label>
        <input></input>
        <label>Entry: </label>
        <textarea></textarea>
        <label>Upload image: </label>
        <input></input>
        <button>Submit</button>
      </ContainerForm>
    </>
  );
}

export default AddPost;
