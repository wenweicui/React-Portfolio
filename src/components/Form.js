import React from 'react';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import emailjs from 'emailjs-com';

export default class Form extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = { massage: '', name: '', email: '' };
  	this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMassageChange = this.handleMassageChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handleMassageChange(event) {
    this.setState({massage: event.target.value})
  }

  handleSubmit (event) {
  	const templateId = 'template_BqzvVCwv';
    const userId = 'user_UiknmXYnn7QdPF63nH0Kl';
  	this.sendMessage(templateId, {name: this.state.name, email: this.state.email, message: this.state.massage}, userId)
  }

  sendMessage (templateId, templateParams, userId) {
	   emailjs.sendForm('wenwei_cui_gmail', templateId, templateParams, userId)
     .then(res => {
      	console.log('Email successfully sent!')
        alert(JSON.stringify('Email successfully sent!', null, 2));
    	})
    	// Handle errors here however you like, or use a React error boundary
    	.catch(err => {
        console.error('Oh well, something is wrong. Here some thoughts on the error that occured:', err)
        alert(JSON.stringify('Oh no, something is wrong. Here some thoughts on the error that occured:', null, 2));
      })
      this.resetForm()
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  render() {
    return (
        <form className="contact-form">
          <Grid container spacing={3}>
            <Grid item xs={12} className="contact-form-grid">
              <label htmlFor="lastName">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Please enter your name"
                onChange={this.handleNameChange}
                defaultValue={this.state.name}
              />
            </Grid>
            <Grid item xs={12} className="contact-form-grid">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Please enter your email"
                onChange={this.handleEmailChange}
                defaultValue={this.state.email}
              />
            </Grid>
            <Grid item xs={12} className="contact-form-grid">
              <label htmlFor="email">Please leave your message below</label>
              <textarea
                id="massage"
                name="massage"
                type="massage"
                maxlngth="2000"
                placeholder="Please enter your massage"
                onChange={this.handleMassageChange}
                defaultValue={this.state.massage}
              />
            </Grid>
            <Grid item sm={4} xs={12} className="contact-form-grid">
              <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </Grid>
          </Grid>
        </form>
      )
    }
  }
