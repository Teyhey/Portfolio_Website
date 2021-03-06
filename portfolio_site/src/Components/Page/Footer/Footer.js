import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Footer extends Component {
  render() {
    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}>
          <FontAwesomeIcon icon={['fab', network.className]}/>
          </a></li>
      })
    }

    return (
      <footer>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
     </div>
  </footer>
    );
  }
}

export default Footer;