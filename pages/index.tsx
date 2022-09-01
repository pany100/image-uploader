import type { NextPage } from "next";

import { styled } from "linaria/react";
import FileUploader from "../components/FileUploader";
import Text from "../components/Text";

//#region css
const Container = styled.div`
  align-items: center;
  display: grid;
  height: 100%;
  justify-items: center;
`;

const Content = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  height: 469px;
  width: 402px;
  display: grid;
  justify-content: center;
  grid-template-columns: 100%;
  align-content: start;
`;

const Header = styled.div`
  color: #4f4f4f;
  font-size: 18px;
  letter-spacing: -0.035em;
  line-height: 27px;
  text-align: center;
  align-self: start;
  margin-top: 36px;
`;

const Subheader = styled.div`
  font-size: 10px;
  line-height: 15px;

  text-align: center;
  letter-spacing: -0.035em;
  margin-top: 16px;
  color: #828282;
`;

const Button = styled.button`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 500;
  height: 31.98px;
  background: #2f80ed;
  border-radius: 8px;
  margin-top: 22px;
  width: 101px;
  justify-self: center;
  color: white;
`;

//#endregion

const Home: NextPage = () => {
  return (
    <Container>
      <Content>
        <Header>Upload your image</Header>
        <Subheader>File should be Jpeg, Png,...</Subheader>
        <FileUploader />
        <Text>Or</Text>
        <Button>Choose a file</Button>
      </Content>
    </Container>
  );
};

export default Home;
