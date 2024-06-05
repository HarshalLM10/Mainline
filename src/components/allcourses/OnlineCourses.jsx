import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box' key={val.courseName}>
                <div className='img'>
                  <img src={val.cover} alt={val.courseName} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='video-section'>
        <div className='container'>
          <Heading subtitle='VIDEOS' title='Watch Our Educational Videos' />
          <div className='video-grid'>
            <div className='video-box'>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jZruYop-1RE"
                title="Class 11 Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2>Class 11</h2>
            </div>
            <div className='video-box'>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fH7N9YRxMYc"
                title="Class 12 Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2>Class 12</h2>
            </div>
            <div className='video-box'>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bgir2CJjsr8"
                title="JEE and NEET Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2>JEE and NEET</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
