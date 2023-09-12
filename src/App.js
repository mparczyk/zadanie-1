import React from 'react';
import { useFetchFacts } from "./custom-hook-await";

import { Divider, List } from 'antd';
import { ModalButton } from './modalButton';

function App() {
  const [facts, hasError, isLoading] = useFetchFacts("https://cat-fact.herokuapp.com/facts")
  
  return (
    <>
    {isLoading ? <div>Loading...</div> 
    : 
      hasError ? <div>{hasError}</div>
    :
      <div className="list">
        <Divider orientation="left">Kocie Fakty</Divider>
        <List
          bordered
          dataSource={facts}
          renderItem={(fact) => (
            <List.Item style={{display: 'flex'}}>
              {fact.text}
              <ModalButton style={{marginLeft: "auto"}}/>
            </List.Item>
          )}
        />
      </div>
    }
    </>
  )
}

export default App;
