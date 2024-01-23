import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
