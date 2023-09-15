import React, { useState }from 'react';
import { useFetchFacts } from "./custom-hook-await";
import './App.css';

import { Divider, List, Select } from 'antd';
import { ModalButton } from './ModalButton';
import { Loading } from './Loading';

function App() {
  const url = "https://cat-fact.herokuapp.com/facts";
  const [animalType, setAnimalType] = useState(url);
  const [facts, hasError, isLoading] = useFetchFacts(animalType);

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
    setAnimalType(`${url}/random?animal_type=${value}&amount=5`);
  }
  
  return (
    <>
    <Loading isLoading={isLoading}>
      {hasError ? <p>{hasError}</p>
    :
    <div>
      <h1>Animal Facts</h1>
      <div className='list'>
        <Divider orientation="center">
          Select an animal
          <Select
            defaultValue="cat"
            style={{ width: 200, margin: 10 }}
            onChange={handleChange}
            options={selectBarValue}
          />
        </Divider>
        <List
          bordered
          dataSource={facts}
          renderItem={(fact) => (
            <List.Item>
              {fact.text}
              <ModalButton id={fact._id} />
            </List.Item>
          )}
        />
      </div>
      </div>
    }
    </Loading>
    </>
  )
}

export default App;
