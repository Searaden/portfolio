import React from 'react';

export default function About() {
  const bout = {
    fontSize: '30px',
    color: '#c7ede4',
    paddingLeft: 'x',
    paddingRight: '50px',
    flexDirection: 'column',
    paddingRight: '20px'
    }

    const head = {
      paddingLeft: '100',
      flexDirection:'column'
    }

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      justifyContent: 'left',
      textAlign: 'left',
      paddingLeft: '50px',
      paddingRight: '20px'
    }

    const imageStyle ={
      flexDirection: 'column',
      width: '200px',
      height: 'auto',
      paddingRight:'50px'
    }
  return (
    <div style={containerStyle}>
      <h1 style={head}>About Me</h1>
      <div style={bout}>
      <img src={require("./Wife.jpg")}
          alt="Me and my Wife"
          style={imageStyle}/>
          <p>
          Hi! My name is Jacob Norris. I'm an asspiring programmer looking to enter inter this exciting and fullfilling career! I will be graduation for the UCI bootcamp soon
          and While this has been a great entry point and taught me many things about fullstack webdevelopment I cant wait to further my career and education
          and branch out into other areas of programming!
          </p>
      </div >
    </div>
  );
}
