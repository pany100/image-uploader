import Image from "next/image";
import Text from "./Text";
import { styled } from "linaria/react";

//#region css

const Container = styled.div`
  box-sizing: border-box;
  height: 219px;

  background: #f6f8fb;
  border: 1px dashed #97bef4;
  border-radius: 12px;
  margin-top: 30px;
  margin-left: 32px;
  margin-right: 32px;

  text-align: center;
  padding-top: 36px;
`;

const TextContainer = styled.div`
  margin-top: 25px;
`;

//#endregion

function FileUploader() {
  return (
    <Container>
      <Image src="/image.svg" alt="Background" width={114} height={88} />
      <TextContainer>
        <Text>Drag & Drop your image here</Text>
      </TextContainer>
    </Container>
  );
}

export default FileUploader;
