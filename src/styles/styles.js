import { Select, Typography } from 'antd';
import styled from 'styled-components';
const { Text } = Typography;

export const MainWrapper = styled.main`
  margin: 1.5rem;
`;
export const Title = styled.header`
  text-align: center;
  font-size: 3rem;
  font-family: 'SEGA LOGO FONT';
  font-weight: 200;
  color: rgba(226, 215, 184, 0.719);
  text-shadow: 5px 5px rgba(126, 114, 80, 0.719)
`;
export const SelectBar = styled(Select)`
  width: 200px;
  margin: 10px;
`;
export const ScrollWrapper = styled.section`
    overflow-y: scroll;
    border-radius: 15px;
    border: 1px;
    height: 700px;
    background: rgba(244, 248, 248, 0.7);

    &::-webkit-scrollbar {
        display: none;
      }
`;
export const StyledText = styled(Text)`
    font-family: 'SEGA LOGO FONT';
    font-size: 1rem;
`;
export const Paragraph = styled.p`
   padding: 16px;

`;
export const StyledButton = styled.button`
background: rgba(75, 201, 210, 1);
  border: 0;
  border-radius: 12px;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
`;