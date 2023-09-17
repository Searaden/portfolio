import React from 'react';

export default function Resume() {
  const bout = {
    fontSize: '20px',
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
  return (
    <div style={containerStyle}>
      <h1 style={head}>Resume</h1>
      <h2>View my resume</h2>
      <div style={bout}>
      <p>Backend:</p>
      <p>MySql</p>
      <p>APIS</p>
      <p>Node</p>
      <p>Express</p>
      <p>Restful</p>
      </div>
      <h2>Frontend:</h2>
      <div style={bout}>
      <p>React</p>
      <p>HTML</p>
      <p>CSS</p>
      <p>Bootscrap</p>
    </div>
    </div>
  );
}
