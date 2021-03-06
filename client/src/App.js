import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Block from './components/block'


class App extends Component {

  render() {
    return (
      <div className="App">
              <BrowserRouter>
                        <Switch>
                          <Route exact path='/' render={(props) => <Block {...props} className='first' text='LOL' qcolor='#ff9595'/>}  />
                          <Route path='/2' render={(props) => <Block {...props} className='second' text='KEK' qcolor='#9595ff'/>} />
                          <Route path='/3' render={(props) => <Block {...props} className='third' text='CHEBU' qcolor = '#fafa95'/>} />
                          <Route path='/4' render={(props) => <Block {...props} className='fourth' text='REK' qcolor = '#ffaafa'/>} />
                        </Switch>
              </BrowserRouter>
      </div>
    );
  }
}


export default App;
