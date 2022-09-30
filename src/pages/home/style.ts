import styled from "styled-components";

export const HomeStyle = styled.div`
  p {
    size: 200%;
  }
`;

export const BPKLogo = styled.img`
  margin: auto;
  display: block;
  width: 200px;
  padding: 10px;
  padding-bottom: 40px;
`;

export const EventWrapper = styled.div`
  p {
    size: 200%;
  }
  display: grid;
  justify-items: center;
  grid-gap: 1rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
