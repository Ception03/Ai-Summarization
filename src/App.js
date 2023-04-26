import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import "./App.scss"

function App() {
  return (
    <div className='container-app'>
      <figure className="circle"></figure>
      <figure className="circle2"></figure>
     <Header/>
     <Hero/>
     
    </div>
  )
}

export default App