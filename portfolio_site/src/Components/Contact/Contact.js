import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter, faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as emailjs from 'emailjs-com';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    isError: false
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message, isError } = this.state;
    let templateParams = {
      from_name: name,
      reply_to: email,
      to_name: 'Peter Tejeda',
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        'service_bjd9sug',
        'template_n09ak9s',
        templateParams,
        'user_LiLBhub8sctvtArPy4J2S'
      )
      .then(
        function (response) {
          alert("Message sent successfully");
        },
        function (error) {
          alert(error);
        }
      );

    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      isError: false
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {

    function ErrorResultYes() {
      return (<div id='message-warning'> Error!</div>);
    }
  
    function ErrorResultNo() {
      return(<div id='message-success'>
        <FontAwesomeIcon icon={faCheck} size='sm' />
        Your message was sent, thank you!
        <br />
      </div>);
    }
  
    const isError = this.state.isError;

    function Result() {
      if (isError) {
        return <ErrorResultYes />;
      }
      return <ErrorResultNo />;
    }


    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

    return (
      <div style={{justifyContent:'center', alignItems:'center'}}>
      <section id='contact'>
        <FontAwesomeIcon className='submit' icon={faEnvelope} size='5x' />
        <div className='row section-head'>
          <div className='two columns header-col'></div>
          <div className='eleven columns'>
            <p className='lead'>{message}</p>
          </div>
        </div>
        <div className='row'>
          <div className=''>
            <form
              id='contactForm'
              name='contactForm'
              onSubmit={this.handleSubmit.bind(this)}
            >
              <fieldset>
                <div>
                  <label htmlFor='contactName'>
                    Name <span className='required'>*</span>
                  </label>
                  <input
                    type='text'
                    defaultValue=''
                    size='35'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange.bind(this, 'name')}
                  />
                </div>

                <div>
                  <label htmlFor='contactEmail'>
                    Email <span className='required'>*</span>
                  </label>
                  <input
                    type='email'
                    defaultValue=''
                    size='35'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, 'email')}
                  />
                </div>

                <div>
                  <label htmlFor='contactSubject'>Subject</label>
                  <input
                    type='text'
                    defaultValue=''
                    size='35'
                    name='subject'
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, 'subject')}
                  />
                </div>

                <div>
                  <label htmlFor='contactMessage'>
                    Message <span className='required'>*</span>
                  </label>
                  <textarea
                    cols='50'
                    rows='15'
                    name='message'
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, 'message')}
                  ></textarea>
                </div>

                <div>
                  <button type='submit'>Submit</button>
                </div>
              </fieldset>
            </form>
            <Result isError={false} />
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Contact;
