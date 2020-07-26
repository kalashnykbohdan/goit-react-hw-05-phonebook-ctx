import React, { Component } from 'react'
import '../index.css' 
import WithTheme from '../hoc/withTheme'

class Header extends Component {
    
  render() {
    
    const theme = this.props.theme;

    return (

                    <header style={{ background: theme.config.headerBg, color: theme.config.fontColor }}>

                        <div className="theme-selector">
                        <span className="label">({theme.type})</span>
                        <label className="switch">
                            <input type="checkbox" checked={theme.type === 'light'} onChange={(event) => this.props.toggleTheme(event.currentTarget.value)} />
                            <span className="slider round"></span>
                            
                        </label>
                        </div>
                    </header>
    )
  }
}

export default WithTheme(Header)
