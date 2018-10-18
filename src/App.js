import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import Header from './components/header';
import Home from './components/home';
import Resume from './components/resume';
import LeetCode from './components/leetcode';

class App extends Component {
  render() {
    return (
      <div className="body--share">
        <div className="headerTop"/>
        <Header />
        <div className="preview-box">
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/resume' component={Resume}/>
              <Route path='/leetcode' component={LeetCode}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
