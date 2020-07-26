import React, { Component } from 'react';
import Wrapper from './Wrapper';

import Body from './Body';

import ThemeContext from '../context/ThemeContext';
import {themeConfig} from '../context/ThemeContext';
import Header from './Header';
import withTheme   from "../hoc/withTheme"

class App extends Component{
  constructor() {
    super();
    this.state = {
      theme: 'light'
    }
    this.toggleTheme = this.toggleTheme.bind(this);
  }


  localStoreg(){
    const themeNow = localStorage.getItem('theme');

    if(themeNow){
      this.setState({
        theme: JSON.parse(themeNow)
      })
    }
  }
  componentDidMount(){
    console.log('Contacts componentDidMount')
    this.localStoreg();
  }

  componentDidUpdate(prevProps, prevState){
    console.log('theme componentDidUpdate');
    localStorage.setItem('theme', JSON.stringify(this.state.theme));

  }
// ---------------------------------------------------------------------------
  toggleTheme() {
    // console.log({});
    console.log(this.state.theme);
    console.log("toggleTheme");
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  }
  // ---------------------------------------------------------------------------

  render() {

    return (
        <ThemeContext.Provider value={{type: this.state.theme, config: themeConfig[this.state.theme]}}>
          <Wrapper>
            <Header toggleTheme={this.toggleTheme}/>
            <Body/>
          </Wrapper>
        </ThemeContext.Provider>
    )
  };
}
export default withTheme(App);

