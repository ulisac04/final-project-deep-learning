import styled from "styled-components"

export default function Welcome({children})
{
    return <WelcomeText>{children}</WelcomeText>
}

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`;