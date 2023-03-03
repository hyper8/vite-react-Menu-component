// import { useState } from 'react'
import Menu from './components/Menu/Menu'
import './App.css'
import './styles/index.scss'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'

function App() {
  return (
    <div className="App">
      <h3>menu component</h3>
      <Menu mode={"horizon"}>
        <MenuItem index={0}>link 1</MenuItem>
        <MenuItem index={1}>link 2</MenuItem>
        <MenuItem index={2} className={'is-disabled'}>link 3</MenuItem>
        <MenuItem index={3}>link 4</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default App
