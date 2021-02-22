import Styled from "styled-components";

const ContainerForm = Styled.form`
display: flex;
flex-direction: column;

input {
    max-width: 500px;
    margin-top: 30px;
      margin-bottom: 30px;
    padding: 10px;
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
p {
    font-style: italic;
}
h3 {
    padding-top: 20px;
    padding-bottom: 20px;
}
`;

function Settings() {
  return (
    <ContainerForm>
      <h2>Settings</h2>

      <label>Name:</label>
      <input />
      <label>About me:</label>
      <input />
      <p>Your name and about me will be showing on the first page...</p>
      <h3>Security</h3>
      <label>Email:</label>
      <input />
      <label>Password:</label>
      <input />
      <button>Save</button>
    </ContainerForm>
  );
}

export default Settings;
