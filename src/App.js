import React, { useState } from "react";
import { require } from "yargs";

import "./lib/css/bootstrap.css";
import "./lib/css/mdb.css";
import "./lib/css/style.css";

export default function App() {
  
  


  return(
    <div id='body'>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></link>
        <Nav/>
        
        <Main/>
        <Products/>
        <Footer/>
    </div>
);
}

const Nav = (props) =>{
  return(
    <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
      <div class="container">
        <a class="navbar-brand waves-effect" href="https://mdbootstrap.com/docs/jquery/" target="_blank">
          <strong class="blue-text">Candy Fair</strong>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <li class="nav-item active">
              <a class="nav-link waves-effect" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
        </div>
      </div>
    </nav>
  
  );
  }


const Header = (props) =>{
return(
    <div className='header'>
        <span className='header-title'>
          Candy Fair
        </span>
        <br/>
        <span className="header-text">
           A melhor Black-friday de doces caseiros. 
        </span>
    </div>

);
}







const Card = (props) =>{
return(
    <div className={props.className} >
        <div className="small-div">
            <i className={props.className}></i>
            <img src={props.img} alt=''/>
        </div>

        <div className="big-div">
            <span className='div-title'>
                {props.title}
            </span>
            <br/>
            <span>
                {props.description}
            </span>
        </div>
    </div>
)
}


const ContactContainer = () => {
  
const [ nome, setName ] = useState('');
const [ email, setEmail ] = useState('');

const handle = () => {
  localStorage.setItem('Name',nome);
  localStorage.setItem('Email', email);
}
return(
  <div class="row wow fadeIn">
                  
            <div class="col-md-6 mb-4">
              <div class="p-4">
                <div class="mb-3">
                    <span>
                        É rápido, fácil e barato :)
                    </span>

                    <input class="form-control" placeholder="Nome" type="text"  onChange={(e) => setName(e.target.value)}/>
                    
                    <input class="form-control" placeholder="Email" type="text" onChange={(e) => setEmail(e.target.value)}/>
                    <button class="btn btn-primary btn-md my-0 p" onClick={handle}>Send</button>
                </div>
              </div>
            </div>

    </div>
);

}


const Main = (props) =>{
  return(
    <main class="mt-5 pt-4">
      <div class="container dark-grey-text mt-5">
        <div class="row wow fadeIn" >
          <div class="col-md-6 mb-4" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Brigadeiro.jpg/800px-Brigadeiro.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-md-6 mb-4">
            <div class="p-4">
              <div class="mb-3">
                <a href="">
                  <span class="badge red mr-1">BlackFriday</span>
                  <span class="badge red mr-2">Doces</span>
                </a>
              </div>
              <p class="lead">
                <span class="mr-1">
                  <del>R$ 4,00</del>
                </span>
                <span>R$ 1,00 </span>
              </p> 
              <ContactContainer/>
            </div>
          </div>

        </div>
      </div>
    </main>
  
  );
  }
  

const Footer = (props) =>{
  return(
    <footer class="page-footer text-center font-small mt-4 wow fadeIn">

    <hr class="my-4" />
  
    <div class="pb-4">
      <a href="https://pt-br.facebook.com/maira.daiana.3" target="_blank">
        <i class="fab fa-facebook-f mr-3"></i>
      </a>  
  
      <a href="https://www.linkedin.com/in/maira-fernandes-643759190" target="_blank">
        <i class="fab fa-linkedin mr-3"></i>
      </a>
  
      <a href="https://github.com/M41R40" target="_blank">
        <i class="fab fa-github mr-3"></i>
      </a>
  
      <a href="https://instagram.com/mahdaiana_" target="_blank">
        <i class="fab fa-instagram mr-3"></i>
      </a>
    </div>
  
    <div class="footer-copyright py-3">
      
      <a href="https://mdbootstrap.com/education/bootstrap/" target="_blank"> HIRING CODERS </a>
    </div>
  
  </footer>
  
  );
  }


const Products = (props) =>{
    return(
      <div class="row d-flex justify-content-center wow fadeIn">
        <div class="col-md-6 text-center">
          <h4 class="my-4 h4">Contato</h4>
          <p>Maíra Fernandes</p>
          <p>+55(14)997194556</p>
          <p>maira.daiana99@gmail.com</p>
        </div>
      </div>
    )
    }