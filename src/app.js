import './styles/app.css'
import React from 'react';
// component import
import SideBar from './Sidebar/sideBar.jsx';
import Header from './header/header.jsx';
import MainArea from './mainArea/mainArea.jsx';


function App() {
  return (
    <div className="app">

      
      <Header />

      <SideBar />

      <MainArea />
      


      
    </div>
  )
}

export default App
