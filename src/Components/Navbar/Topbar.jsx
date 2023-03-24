
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Topbar.css'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


function Topbar() {
  const[activeLink,setActiveLink]=useState('home')
  const[scrolled,setScrolled]=useState(false)

  useEffect(()=>{
    const onScroll=()=>{
      if(window.scrollY>50){
        setScrolled(true)
      }
      else{
        setScrolled(false)
      }
    }

    window.addEventListener("scroll",onScroll);

    return()=>window.removeEventListener("scroll",null)
  },[])

  const onUpdateActiveLink=(value)=>{
    setActiveLink(value)
  }
  return (
    
    <Navbar  className={scrolled ?"scrolled":""}>
    <Container>
      <Navbar.Brand href="#home"><span className='topbar__title'>PORTFOLIO</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills'?'active navbar-link':'navbar-link'}  onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#project" className={activeLink === 'projects'?'active navbar-link':'navbar-link'}  onClick={()=>onUpdateActiveLink('project')}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
          <div className='social-icon'>
            <a href="https://in.linkedin.com/"><img src={navIcon1} alt=''/></a>
            <a href="https://www.facebook.com/"><img src={navIcon2} alt=''/></a>
            <a href="https://www.instagram.com/"><img src={navIcon3} alt=''/></a>
          </div>
          <button className='btn' onClick={()=>console.log('Clicked!')}><spam>Let's Connect</spam></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}

export default Topbar;