import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd'
import {Navbar} from './components';
import './App.css'
import { HomeFilled } from '@ant-design/icons/lib/icons';
import Homepage from './components/pages/Homepage';

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
          </Switch>
        </div>
      </Layout>
      </div>
      <div className='footer'>

      </div>
      
  </div>;
};

export default App;
