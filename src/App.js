import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd'
import {Navbar, Homepage, Cryptocurrencies, CryptoDetails, Exchanges, News} from './components';
import './App.css'
import { HomeFilled } from '@ant-design/icons/lib/icons';

const App = () => {
  // className will be for layout and minor styling changes
  // all main styling will be done specifically through ant design
  return <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
      {/* Layout component from ant design  */}
      <Layout>
        <div className='routes'>
          {/* Switch allows you to have multiple routes */}
          <Switch>
              <Route exact path="/">
                  {/* provide component want to render under the route */}
                <Homepage />
              </Route>  
              <Route exact path="/cryptocurrencies">
                  {/* provide component want to render under the route */}
                <Cryptocurrencies />
              </Route>  
              <Route exact path="/exchanges">
                  {/* provide component want to render under the route */}
                <Exchanges />
              </Route>  
              <Route exact path="/crypto/:coinId">
                  {/* provide component want to render under the route */}
                <CryptoDetails />
              </Route>  
              <Route exact path="/news">
                  {/* provide component want to render under the route */}
                <News />
              </Route>  
          </Switch>
        </div>
      </Layout>
      </div>
      <div className='footer'>
        <Typography.Title>
          Cryptomatic <br/>
          All rights reserved {new Date().getFullYear()}
        </Typography.Title>
      </div>
      
  </div>;
};

export default App;
