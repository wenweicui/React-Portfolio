import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './style.css';
import item1 from '../item1.png';
import item2 from '../item2.png';
import item3 from '../item3.png';
import item4 from '../item4.png';
import item0 from '../item0.png';

const tileData = [
  {
    key:'item0',
    img: item0,
    class:"gridList-img",
    link:"https://wenweicui.github.io/react-covid-19/",
    title: 'React COVID-19 Dashboard',
    detail: 'Developed a global trend dashboard for COVID-19 pandemic with heated map and intractive data graph using React JS based on covid19.mathdro.id API.',
    cols: 3,
  },
  {
    key:'item1',
    img: item1,
    class:"gridList-img",
    link: "https://lulusmart.com/",
    title: 'LuluSmart React C2C Website & React Mobile App',
    detail: 'Developed a webapp platform to promote self-employed service provider’s business. Mainly responsible for the front-end development and technical feasibility of UI/UX designs using React JS and SCSS. Working with development team and managers for keeping site up-to-date and prioritizing needs, among other tasks.',
    cols: 2,
  },
  {
    key:'item2',
    img: item2,
    class:"gridList-img-left",
    link: "https://github.com/wenweicui/react-native-fifteen-puzzle",
    title: 'React Native Fifteen Puzzle Game',
    detail: 'Developed a React Native mobile game application for the Fifteen puzzle game using the React Native Game Engine Handbook library. Enabled the function for user to connect the game with Game Centre account to see the scoreboard ranking.',
    cols: 1,
  },
  {
    key:'item3',
    img: item3,
    class:"gridList-img-left",
    link: "https://github.com/wenweicui/react-native-gkesports",
    title: 'React Native Membership Card',
    detail: 'Developed a React Native mobile game application for the Fifteen puzzle game using the React Native Game Engine Handbook library. Enabled the function for user to connect the game with Game Centre account to see the scoreboard ranking.',
    cols: 1,
  },
  {
    key:'item4',
    img: item4,
    class:"gridList-img",
    link:"https://lulucheck.com/",
    title: 'LuluCheck Website & React Native App',
    detail: 'Developed a cross-platform client-side application for all property owners to check and document the conditions of their properties while away. Remain the same front-end duties while having more opportunities to work as a full-stack developer. Engineered dynamic components and created reusable code to facilitate future use.',
    cols: 2,
  },
];

export default class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { active: '', width: 0 };
    this.clickHandler = this.clickHandler.bind(this);
    this.onClose = this.onClose.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
    console.log('width', this.state.width);
  }

  clickHandler(value) {
      console.log('111111', value);
      if(this.state.active === value) {
        this.setState({active: ''});
        console.log('TEST', value);
      } else {
        this.setState({active: value});
        console.log(value);
     }
   }

   onClose() {
     this.setState({active: ''});
   }

   onWindowOpen(link) {
     window.open(link);
     console.log(link)
   }

  render() {

    return (
      <div id="project">
        <header className="project-header">
            <h1>Projects <br/> <span>[ Portfolio Gallery ]</span></h1>
        </header>

        <section className="gallery container" id="projectList">
          {tileData.map((tile, i) => (
          	<div id={tile.key} key={i} className={this.state.active === tile.key ? 'port item-open': 'port item-close'}>
              <a className="close" onClick={this.onClose}></a>
          		<div className="row">
                <div className="port-img">
                  <img src={tile.img} alt={tile.title}/>
                </div>
          			<div className="description">
          				<h1>{tile.title}</h1>
          				<p>{tile.detail}</p>
                  <button onClick={() => this.onWindowOpen(tile.link)} type="button">Click For More Details</button>
          			</div>
              </div>
        		</div>
          ))}
          <div className="project-img-container">
            {this.state.width >= 768 ?
            <GridList cellHeight={450} className="gridList" cols={3} spacing={30} >
              {tileData.map(tile => (
                <GridListTile key={tile.key} cols={tile.cols || 1} className="gridList-tile">
                  <a className="gridList-icon" href="#projectList" onClick={this.clickHandler.bind(this, tile.key)}>
                    <img src={tile.img} alt={tile.title} className={tile.class} />
                  </a>
                </GridListTile>
              ))}
            </GridList>
            :
            <GridList cellHeight={300} className="gridList" cols={1} spacing={30} >
              {tileData.map(tile => (
                <GridListTile key={tile.key} cols={1} className="gridList-tile">
                  <a className="gridList-icon" href="#projectList" onClick={this.clickHandler.bind(this, tile.key)}>
                    <img src={tile.img} alt={tile.title} className='gridList-img' />
                  </a>
                </GridListTile>
              ))}
            </GridList>}
          </div>
        </section>
      </div>

        );
  }
}
