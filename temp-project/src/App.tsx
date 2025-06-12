import React from 'react'
import Header from './components/Header/Header'
import './styles/global.scss'
import './App.scss'

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        {/* Other components will go here */}
      </div>
    </div>
  )
}

export default App
