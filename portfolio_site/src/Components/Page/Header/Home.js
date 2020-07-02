import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
  render() {
    if (this.props.data) {
      var project = this.props.data.project;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var mainTitle = this.props.data.maintitle;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
            <FontAwesomeIcon icon={['fab', network.className]}/>
            </a>
          </li>
        );
      });
    }

    return (
      <header id='home'>
        <ParticlesBg type='cobweb' bg={true} color={['#00b570']} num={50} />
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Projects
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#contact'>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <text className='responsive-headline' class="text">
            Hello, I'm 
            <span class="highlight"> {name}.</span>
            <br></br>
            I'm a software developer.</text>
            <ul className='social'>
              <div id='project-btn'>
                <a href='#about' className='smoothscroll'>
                  View my work &ensp;
                  <FontAwesomeIcon icon={faArrowRight} size='sm' />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Home;
