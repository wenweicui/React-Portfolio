import React, { Component } from 'react';
import Typist from 'react-typist';

export default class Header extends Component {

  state = {
    typing: true,
  }

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true })
    });
  }

  render() {
    let data = this.props.data;
    return (
      <React.Fragment>
      <header id='home' className="banner-background">
          <div className="banner-container ">
            <div className="banner-text container">
              <h3 className="responsive-headline name-text">{data.name}</h3>
              <h3 className="responsive-headline light-text">{data.oldAddress}</h3>
              <h3 className="responsive-headline light-text">{data.address}</h3>
              <h3 className="responsive-headline light-text">#willingToRelocate</h3>
              <div className="main-container">
                <span className="main-text">I'm a &nbsp;</span>
                {this.state.typing?
                  <Typist className="main-text" avgTypingDelay={100} onTypingDone={this.done}>
                    <span> Full-Stack Developer</span>
                    <Typist.Backspace count={21} delay={400} />
                    <span> Data Analyst</span>
                    <Typist.Backspace count={13} delay={400} />
                    <span> Graphic Designer</span>
                    <Typist.Backspace count={17} delay={400} />
                  </Typist>
                : '' }
              </div>
            </div>
           </div>
           <div className="contact-overlay" />
        </header>

      </React.Fragment>
    );
  }
}
