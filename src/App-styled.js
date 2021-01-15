import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  display: grid;
  grid-template-rows: 0.2fr 1.5fr 0.2fr 0.3fr;
  grid-template-columns: 0.7fr 1fr 1fr 1fr;
  grid-template-areas:
    "Nav Nav Nav Nav"
    "Sidebar Main Main Main"
    "Sidebar Content1 Content2 Content3"
    "Sidebar Footer Footer Footer";

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 0.2fr 2.2fr 0.4fr 0.4fr 0.4fr 0.4fr;
    grid-template-areas:
      "Nav"
      "Sidebar"
      "Main"
      "Content1"
      "Content2"
      "Content3"
      "Footer";
  }
`;
export const Nav = styled.div`
  background-color: red;
  grid-area: Nav;
`;
export const Sidebar = styled.div`
  background-color: green;
  grid-area: Sidebar;
`;
export const Main = styled.div`
  background-color: brown;
  grid-area: Main;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.1fr 1.4fr;
  grid-template-areas:
    "Header Header Header Header"
    "InfoWrapper InfoWrapper InfoWrapper InfoWrapper";
`;

export const Content1 = styled.div`
  background-color: yellow;
  grid-area: Content1;
`;
export const Content2 = styled.div`
  background-color: gray;
  grid-area: Content2;
`;
export const Content3 = styled.div`
  background-color: blue;
  grid-area: Content3;
`;
export const Footer = styled.div`
  background-color: pink;
  grid-area: Footer;
`;
export const Button = styled.button`
  padding: 0.5em 0.8em;
  font-size: 1.2rem;
  border: 2px solid palevioletred;
  border-radius: 20px;
  margin-top: ${(props) => (props.primary ? "5px" : "0px")};
`;
export const H2 = styled.h2`
  margin-top: ${(props) => (props.primary ? "20px" : "0px")};
  font-size: 2rem;
`;
export const Header = styled.div`
  background-color: yellow;
  grid-area: Header;
`;
export const InfoWrapper = styled.div`
  background-color: white;
  grid-area: InfoWrapper;
  display: grid;
  font-size: 1.2rem;
  grid-template-columns: 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr;
  grid-template-rows: 1fr 1fr;
`;
export const DataDiv = styled.div`
  border: 1px solid;
  background: gray;
`;
