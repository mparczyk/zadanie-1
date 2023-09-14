import React, { useState }from 'react';
import { useFetchFacts } from "./custom-hook-await";
import './App.css';

import { Divider, List, Select } from 'antd';
import { ModalButton } from './ModalButton';

function App() {
  const [url, setUrl] = useState("https://cat-fact.herokuapp.com/facts");
  const [facts, hasError, isLoading] = useFetchFacts(url)

  const handleChange = (value) => {
    setUrl(`https://cat-fact.herokuapp.com/facts/random?animal_type=${value}&amount=5`);
  }
  
  return (
    <>
    {isLoading ? <div>Loading...</div> 
    : 
      hasError ? <div>{hasError}</div>
    :
    <div className='App'>
      <h1>Animal Facts</h1>
      <div className='list'>
        <Divider orientation="center">
          Select an animal
          <Select
            defaultValue="Cat"
            style={{ width: 200, margin: 10 }}
            onChange={handleChange}
            options={[
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
            ]}
          />
        </Divider>
        <List
          bordered
          dataSource={facts}
          renderItem={(fact) => (
            <List.Item className='list-item'>
              {fact.text}
              <ModalButton className="Modal" id={fact._id} />
            </List.Item>
          )}
        />
      </div>
      </div>
    }
    </>
  )
}

export default App;
