// import { useState } from 'react'
import Menu from './components/Menu/Menu'
import './App.css'
import './styles/index.scss'
import MenuItem from './components/Menu/MenuItem'

function App() {
  return (
    <div className="App">
      <h3>menu component</h3>
      <Menu defaultIndex={0} mode={"vertical"}>
        <MenuItem index={0}>link 1</MenuItem>
        <MenuItem index={1}>link 2</MenuItem>
        <MenuItem index={2} className={'is-disabled'}>link 3</MenuItem>
        <MenuItem index={3} disabled>link 4</MenuItem>
      </Menu>
    </div>
  )
}

export default App
