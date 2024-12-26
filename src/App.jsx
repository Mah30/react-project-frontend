import React from 'react';
import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage/AboutPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* import AboutPage from './pages/AboutPage'; */



import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  

  return (

    <div className= "App">
     
    <Router>
      <Navbar/>

      <Routes>
        <Route path='/homepage' element = {<HomePage/>} />
        {/* <Route path="*" element={<NotFoundPage />} /> */} {/* Fazer aparecer depois, já está "pronta" */}

        <Route path = '/aboutpage' element = {<AboutPage/>} />

      

      </Routes>  

          

        {/*   <Routes> 
            <Route path = "/" element = {<TaskBoard tasks={tasks} setTasks={setTasks} />} />
            <Route path = "/item/:id" element = {<ItemDetails tasks={tasks} setTasks={setTasks} />} />
            <Route path = "/about" element = {<AboutPage/>} />
            <Route path = "/dashboard" element = {<Dashboard tasks={tasks} setTasks={setTasks} />} />
            <Route path = "*" element = {<NotFoundPage/>}/>
          </Routes>
        */}
       

      <Footer/>

    </Router>  

  
     
    </div>
  )
  
  



  
}

export default App
