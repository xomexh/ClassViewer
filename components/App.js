import React from 'react'
import {BrowserRouter,NavLink,Switch,Route} from 'react-router-dom'

import Subject from './Subject'

export default function App() {
    return (
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">ClassViewer</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li> */}
              
              <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Theory 
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink className="dropdown-item" to="/Control-Systems" >Control Systems</NavLink>
                  <NavLink className="dropdown-item" to="/MicroProcessors" >MicroProcessors</NavLink>
                  <NavLink className="dropdown-item" to="/DigitalComm" >Digital Communication</NavLink>
                  <NavLink className="dropdown-item" to="/AdvElec" >Advanced Electronics</NavLink>
                  <NavLink className="dropdown-item" to="/WebMining" >Web Mining</NavLink>
                  <NavLink className="dropdown-item" to="/DataMining" >Data Mining</NavLink>
                  <NavLink className="dropdown-item" to="/PowerElectronics" >Power Electronics</NavLink>
                </div>
             </li>
              
              <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Labs
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {/* <a class="dropdown-item" ></a>
                  <a class="dropdown-item" ></a>
                  <a class="dropdown-item" ></a> */}
                  <NavLink className="dropdown-item" to="/Control-Systems-Labs" >Control System Lab</NavLink>
                  <NavLink className="dropdown-item" to="/MicroProcessors-Labs" >MicroProcessors Lab</NavLink>
                  <NavLink className="dropdown-item" to="/DigitalComm-Lab" >Digital Comm Lab</NavLink>
                </div>
             </li>
             <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/:subject" component={Subject} />
      </BrowserRouter>
    )
}
