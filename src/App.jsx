import React from 'react';

import { useState } from 'react';



import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  

  return (

    <div className= "App">
     
     <Navbar/>
        <div>
          

        {/*   <Routes> 
            <Route path = "/" element = {<TaskBoard tasks={tasks} setTasks={setTasks} />} />
            <Route path = "/item/:id" element = {<ItemDetails tasks={tasks} setTasks={setTasks} />} />
            <Route path = "/about" element = {<AboutPage/>} />
            <Route path = "/dashboard" element = {<Dashboard tasks={tasks} setTasks={setTasks} />} />
            <Route path = "*" element = {<NotFoundPage/>}/>
          </Routes>
        */}
        </div>

        <Footer/>

  
     
    </div>
  )
  
  



  
}

export default App
