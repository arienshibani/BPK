import styled from "styled-components";
import Container from "react-bootstrap/Container";
import c from "../../assets/colors";

//Breakpoints and devices.
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const Wrapper = styled(Container)`
  height: 100%;
`;

export const Content = styled.div`
  border-radius: 0.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${c.bodyBackground};
  min-height: 1000px;

  > div {
    flex: 1;
  }
`;

export const PageTitle = styled.h2`
  text-align: center;
  font-size: 1.375rem;
  font-weight: bold;
  padding-bottom: 2rem;
`;

export const Header = styled.h3`
  text-align: center;
  font-size: 1.375rem;
  font-weight: bold;
  padding-bottom: 2rem;
`;

export const Footer = styled.div`
  color: white;
  background: ${c.indigoDark};
  padding: 2rem;

  > a {
    display: flex;
    justify-content: center;
    margin: auto;
  }
`;

export const Paragraph = styled.p`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  @media ${device.desktop} {
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
