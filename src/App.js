import React, { Component } from 'react'
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import data from './data';
import './App.css';

class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {
    return (
      <div className="App">
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <Header data={data} />
        <Projects data={data} />
        <About data={data} />
        <Contact data={data} />
      </div>
    );
  }
}

export default App;
