import styled from "styled-components";
import HeaderImg from "./image/IMG_0129.jpg";

const GridTop = styled.div`
  display: grid;

  img {
    width: 100%;
    line-height: 0;
  }
`;

function Header() {
  return (
    <GridTop>
      <img src={HeaderImg} />
    </GridTop>
  );
}

export default Header;
