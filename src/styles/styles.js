import { Select, Typography, Button } from 'antd';
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
    {
      scrollbar-width: thin;
      scrollbar-color: #404040 #F2FDFF;
    }
    
    
    &::-webkit-scrollbar {
      height: 7px;
      width: 7px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: #F2FDFF;
    }
    
    &::-webkit-scrollbar-track:hover {
      background-color: #E7F0F4;
    }
    
    &::-webkit-scrollbar-track:active {
      background-color: #D1DADC;
    }
    
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #404040;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background-color: #000000;
    }
    
    &::-webkit-scrollbar-thumb:active {
      background-color: #000000;
    }
`;
export const StyledText = styled(Text)`
    font-family: 'SEGA LOGO FONT';
    font-size: 1rem;
`;
export const Paragraph = styled.p`
  padding: 16px;

`;
export const StyledButton = styled(Button)`
  background: rgba(75, 201, 210, 1);
`;