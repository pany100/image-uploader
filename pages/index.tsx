import type { NextPage } from "next";

import { styled } from "linaria/react";

const Container = styled.div`
  background-color: red;
  height: 400px;
`;

const Home: NextPage = () => {
  return <Container>Hello</Container>;
};

export default Home;
