import React, { Component } from 'react';
import Form from './Form';
import Grid from '@material-ui/core/Grid';

export default class Contact extends Component {

  render() {
    let data = this.props.data;

    return (
      <section id="contact" className="banner-background contact-wrap">
        <div className="container contact-container">
          <Grid container className="contact-block">
            <Grid item xs={12} sm={6} className="contact-grid">
              <div className="contact-header">
                <h1>Drop me a line below</h1>
              </div>
              <Form/>
            </Grid>
            <Grid item xs={12} sm={6} className="contact-grid">
                <div className="contact-header">
                  <h1>Feel free to contact me</h1>
                  <p>{data.contactScoial}</p>
                </div>
                <Grid container className="social">
                   {
                     data.socialLinks && data.socialLinks.map(item =>{
                       return(
                               <Grid item xs={4} key={item.name} className='social-icon-list'>
                                 <a href={item.url} target="_blank" className='social-icon'>
                                   <i className={item.className}></i>
                                 </a>
                               </Grid>
                             )
                           }
                     )
                   }
                </Grid>
            </Grid>
          </Grid>
        </div>
        <footer className="contact-footer">
          <p style={{color:'#fff'}}>Photo by Alessio Lin on Unsplash</p>
          <p style={{color:'#fff'}}>2019© Copyright Wenwei Cui (William). All rights reserved.</p>
        </footer>
        <div className="contact-overlay" />
      </section>
        );
  }
}
