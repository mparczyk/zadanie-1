import { useState }from 'react';
import './App.css';
import { Divider, List, Select, Typography } from 'antd';
import { useFetchFacts } from "./utils/useFetchFacts";
import { ModalButton } from './Components/ModalButton';
import { Loading } from './Components/Loading';
import { ScrollWrapper } from './Components/ScrollWrapper';
import { url } from './settings/settings';
import styled from 'styled-components';

const { Text } = Typography;

const MainWrapper = styled.main`
  margin: 1rem;
`;
const Title = styled.header`
  text-align: center;
  font-size: 3rem;
  font-family: 'SEGA LOGO FONT';
  font-weight: 200;
  color: rgba(226, 215, 184, 0.719);
  text-shadow: 5px 5px rgba(126, 114, 80, 0.719)
`;
const SelectBarDivider = styled(Divider)`
font-family: 'SEGA LOGO FONT';
font-weight: 200;
color: rgba(226, 215, 184, 0.719);
`;
const SelectBar = styled(Select)`
  width: 200px;
  margin: 10px;
`;
const StyledList = styled(List)`
  background: rgba(244, 248, 248, 0.7);
`;

function App() {
  const [animalType, setAnimalType] = useState("cat");
  const { facts, error, isLoading } = useFetchFacts(`${url}/random?animal_type=${animalType}&amount=30`);



  const selectBarValue = [
    {
      value: 'cat',
      label: 'Cat',
    },
    {
      value: 'dog',
      label: 'Dog',
    },
    {
      value: 'horse',
      label: 'Horse',
    },
  ];
  
  const handleChange = (value) => {
    setAnimalType(value);
  }
  
  return (
    <Loading isLoading={isLoading}>
      {error ? <Text type="danger">{error}</Text>
      :
        <MainWrapper>
          <Title>Animal Facts</Title>
          <SelectBarDivider orientation="center">
            Select an animal
            <SelectBar
              defaultValue="cat"
              onChange={handleChange}
              options={selectBarValue}
            />
          </SelectBarDivider>
          <ScrollWrapper>
            <StyledList
              className='list'
              bordered
              dataSource={facts}
              renderItem={(fact) => (
                <List.Item>
                  {fact.text}
                  <ModalButton id={fact._id} />
                </List.Item>
              )}
            />
            </ScrollWrapper>
        </MainWrapper>
      }
    </Loading>
  )
}

export default App;
