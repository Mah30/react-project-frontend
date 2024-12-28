import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage/AboutPage';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  

  return (

    <div className= {"styles.container"}>

      <Navbar />


      <main className={"styles.main"}>  
        <Routes>
          <Route path='/' element = {<HomePage/>} />
          {/* <Route path='/homepage' element = {<HomePage/>} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */} {/* Fazer aparecer depois, já está "pronta" */}

          <Route path = '/aboutpage' element = {<AboutPage/>} />

        </Routes>  
      </main>


      <Footer/>
  
     
    </div>
  )
  
  



  
}

export default App
