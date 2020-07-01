import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Home extends Component{

    render() {

        if(this.props.data){
           var project = this.props.data.project;
            var github = this.props.data.github;
          var name = this.props.data.name;
          var description= this.props.data.description;
          var city= this.props.data.address.city;
          var networks= this.props.data.social.map(function(network){
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
          })
        }
    

        return (
          <header id="home">
          <ParticlesBg type="cobweb" bg={true} color={["#00b570"]} num={50}/>
          <nav id="nav-wrap">
             <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
    
             <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
                <li><a className="smoothscroll" href="#contact">Contact Me</a></li>
             </ul>
          </nav>
    
          <div className="row banner">
          
             <div className="banner-text">
                <h1 className="responsive-headline">{name}</h1>
                <h3>{description}.</h3>
                <hr />
                <ul className="social">
                   <a href="#about" className="smoothscroll button btn project-btn">View my work</a>
                </ul>
             </div>
          </div>
    
       </header>
        );
      }
    }
    
    export default Home;