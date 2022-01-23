import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd'
import {Navbar} from './components';
import './App.css'

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
          <Switch>

          </Switch>
        </div>
      </Layout>
      </div>
      <div className='footer'>

      </div>
      
  </div>;
};

export default App;
