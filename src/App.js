import React from 'react';
import useFetch from "./custom-hook-await";

import { Divider, List } from 'antd';

function App() {
  const [facts, hasError] = useFetch("https://cat-fact.herokuapp.com/facts")
  
  return (
    <>
    {hasError ? <div>Some Error</div>
    :
      <div className="list">
        <Divider orientation="left">Kocie Fakty</Divider>
        <List
          bordered
          dataSource={facts}
          renderItem={(fact) => (
            <List.Item>
              {fact.text}
            </List.Item>
          )}
        />
      </div>
    }
    </>
  )
}

export default App;
