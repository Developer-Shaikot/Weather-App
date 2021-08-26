import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {


    document.addEventListener("DOMContentLoaded", function(){
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
              document.getElementById('navbar_top').classList.add('fixed-top');
              // add padding top to show content behind navbar
              
            } else {
              document.getElementById('navbar_top').classList.remove('fixed-top');
               // remove padding top from body
              document.body.style.paddingTop = '0';
            } 
        });
    }); 

    const [isNavCollapsed,setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div >
        <header className="container">
            <nav id="navbar_top" class="navbar navbar-expand-lg navbar-dark bg">
                <div className="container-fluid">
                    <p className="navbar-brand">
                       <strong className="siteName">Weather -</strong><span className="app">App</span> 
                    </p>
                         
                    <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span style={{color:'white'}} class="navbar-toggler-icon"></span>
                        </button>

                         <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                          <div className="navbar-nav ml-5">
                        <Link className="nav-link active  text-white" aria-current="page" to="/">Home</Link>
                           <Link className="nav-link text-white" to="/login" tabIndex="-1" aria-disabled="true">Login</Link>  

                        </div>

                    </div>
                </div>
            </nav>
                
        </header>
        
    </div>
    );
};

export default Navbar;