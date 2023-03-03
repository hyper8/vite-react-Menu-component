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
      <Menu mode={"horizon"} onSelect={(index) => {console.log(index)}}>
        <MenuItem>link 1</MenuItem>
        <MenuItem>link 2</MenuItem>
        <MenuItem className={'is-disabled'}>link 3</MenuItem>
        <MenuItem>link 4</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  )
}

export default App
