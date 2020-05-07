import React, { Component } from 'react';
import avatar from '../avatar.png';
const timelineData = [
    {
        header: 'Algonquin College',
        text: 'Computer Programmer Degreee',
        date: 'Jan 2014 - Dec 2015',
        category: {
          tag: 'Education',
          color: '#00b5cc'
        }
    },
    {
        header: 'Ecolulu Inc.',
        text: 'Front-End Developer',
        date: 'May 2016 - June 2018',
        category: {
          tag: 'Full-Time Job',
          color: '#2abb9b'
        }
    },
    {
        header: 'Carleton University',
        text: 'Bacholor of Economics',
        date: 'Sept 2018 - Dec 2019',
        category: {
          tag: 'Education',
          color: '#00b5cc'
        }
    },
    {
        header: 'Scotiabank',
        text: 'Universal Banker',
        date: 'Nov 2018 - Mar 2020',
        category: {
          tag: 'Part-time Job',
          color: '#2abb9b'
        }
    },
]

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0 };
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

  render() {
    let data = this.props.data;

    const TimelineItem = ({ data }) => (
      <>{this.state.width >= 768 ?
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{borderRadius:5, background: data.category.color }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                <p>{data.header}</p>
                <p>{data.text}</p>
                <span className="circle" />
            </div>
        </div>
        :
        <div className="timeline-item-sm">
            <div className="timeline-item-content">
                <span className="tag" style={{borderRadius:5, background: data.category.color }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                <p>{data.header}</p>
                <p>{data.text}</p>
                <span className="circle" />
            </div>
        </div>
      }</>
    );

    const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );

    return (
      <div id="about" className="container">
        <section className="about-container">
          <div className="about-header">
            <div className="about-block">
              <img className="about-avatar" src={avatar}/>
              <div className="about-txt">
                <h1 style={{textAlign:'right'}}>Little bit about William</h1>
                <p style={{textAlign:'justify'}}>{data.aboutme}</p>
              </div>
            </div>
          </div>
          <div className="timeline">
            <h1>Timeline</h1>
            <Timeline />
          </div>
        </section>
      </div>
    );
  }
}
