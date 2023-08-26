/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import logo from '../../COTIZAR.COM.png';




class Menu extends React.Component {
 
  render() {
 
  	return (
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
			<div class="container-fluid">
						<a class="navbar-brand" href="#logo">
							<img
							src={logo}
							alt="Logo empresa"
							width="100"
							height="60"
							class="d-inline-block align-text-top" />COTIZAR.COM</a>
			</div>
						
					
				
						<nav class="navbar navbar-expand-lg bg-body-tertiary">
							<div class="container-fluid">
								
								<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
								</button>
								<div class="collapse navbar-collapse" id="navbarNavDropdown">
								<ul class="navbar-nav">
									<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="#" >Home</a>
									</li>
									<li class="nav-item">
									<a class="nav-link" href="#">Log in</a>
									</li>
									<li class="nav-item">
									<a class="nav-link" href="#">Register here</a>
									</li>
									<li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Filter by
									</a>
									<ul class="dropdown-menu">
										<li><a class="dropdown-item" href="#">Pricing</a></li>
										<li><a class="dropdown-item" href="#">Brand</a></li>
										<li><a class="dropdown-item" href="#">Reference</a></li>
									</ul>
									</li>
									<li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Location
									</a>
									<ul class="dropdown-menu">
										<li><a class="dropdown-item" href="#">Armenia</a></li>
										<li><a class="dropdown-item" href="#">Bogotá</a></li>
										<li><a class="dropdown-item" href="#">Cali</a></li>
										<li><a class="dropdown-item" href="#">Medellin</a></li>
										<li><a class="dropdown-item" href="#">Cartagena</a></li>
										<li><a class="dropdown-item" href="#">Pasto</a></li>
									</ul>
									
									</li>
								</ul>
								<form class="d-flex" role="search">
							<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
							<button class="btn btn-outline-success" type="submit">Search</button>
						</form>
								</div>
							</div>
							</nav>
						
	    </nav>	
		         
				
       
          
		   
		
    );
    
  }
 
}
 
export default Menu;