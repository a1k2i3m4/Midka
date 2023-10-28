  // src/components/Header.js
  import React from 'react';
  import { Layout, Button, Space, Divider } from 'antd';
  import { SearchField } from '../search/SearchField';
  import './Header.css';
  import { Link } from 'react-router-dom';
  
  const { Header } = Layout;
  
  export const AppHeader = () => {
    return (
      <Header className="app-header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
        }}
      >
          <SearchField
            id='search'
          />
          <Space 
            className='reg-block'
            split={<Divider type="vertical" style={{height: '2rem', background: 'white'}}/>}
          >
           
          </Space>
      </Header>
    );
  };
  
  export default AppHeader;
  