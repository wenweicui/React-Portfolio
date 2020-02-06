import React, { Component } from 'react';

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
        date: 'Nov 2018 - Present',
        category: {
          tag: 'Part-time Job',
          color: '#2abb9b'
        }
    },
]

export default class About extends Component {
  render() {
    let data = this.props.data;

    const TimelineItem = ({ data }) => (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <span className="tag" style={{ background: data.category.color }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                <p>{data.header}</p>
                <p>{data.text}</p>
                <span className="circle" />
            </div>
        </div>
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
            <h1>Little bit about William</h1>
            <p>{data.aboutme}</p>
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
