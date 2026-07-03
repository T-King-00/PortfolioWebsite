import './App.css'
import Footer from "./sections/Footer/Footer.jsx";
import Header from "./sections/Header/Header.jsx";
import BodyContainer from "./sections/BodyContainer/BodyContainer.jsx";
import SideBar from "./sections/SideBar/SideBar.jsx";
import {NavLink, Outlet,} from "react-router"

function App() {
  return (

    <div id="App">
        <Header/>
        <nav className={"navbar-container"}>
            <NavLink className={"navbar-items"} to="/">About</NavLink>
            <NavLink className={"navbar-items"}to="/resume">Resume</NavLink>
            <NavLink className={"navbar-items"} to="/projects">projects</NavLink>
     
        </nav>
 
        <aside className="PageContainer">
            <SideBar />
     
            <BodyContainer>
                <main>
                    <Outlet />
                </main>
                
            </BodyContainer>
           
        </aside>
        <Footer/>
        </div>
    
      
  )
}



export default App

