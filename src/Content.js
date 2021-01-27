import styled from "styled-components";

const StyleContent = styled.div``;

function Content(props) {
  return <StyleContent>{props.children}</StyleContent>;
}

export default Content;
