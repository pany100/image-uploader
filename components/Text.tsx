import { styled } from "linaria/react";

//#region css
const StyledText = styled.div`
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.035em;

  /* Gray 4 */

  color: #bdbdbd;
  margin-top: 19px;
`;
//#endregion

type TextProps = {
  children: React.ReactNode;
};

function Text({ children }: TextProps) {
  return <StyledText>{children}</StyledText>;
}

export default Text;
