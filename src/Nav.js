import React,{useEffect,useState} from 'react'
import './Nav.css'

function Nav() {
    const[show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window?.scrollY > 100 ? handleShow(true) : handleShow(false);
        })
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://i.ibb.co/VYZkHSp/logo-netflix.png" className='nav__logo' alt="Netflix-Logo"/>
            {/* <img src="https://i.ibb.co/W5dgDpZ/Logonfx.png" className='nav__logo' alt="Netflix-Logo"/> */}
            <img src="https://i.ibb.co/bRjtLWv/Netflix-avatar.png" className='nav__avatar' alt="Netflix-Avatar"></img>
        </div>
    )
}

export default Nav
