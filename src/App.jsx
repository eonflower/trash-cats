import { useState, useContext } from 'react'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Main from './components/Main'
import { ThemeContext } from './themeContext'


function App() {

  

  return (
    <div className="app">
      <Header />
      <Form />
      <Main />
      <Card />
      <Footer />
    </div>
  )
}

export default App
