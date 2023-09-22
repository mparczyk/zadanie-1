import { Outlet } from 'react-router-dom';
import { MainWrapper, Title } from '../styles/styles';


export const Home = () => {
  
  return (
    <MainWrapper>
        <Title>Animal Facts</Title>
        <Outlet />
    </MainWrapper>
  )
}


