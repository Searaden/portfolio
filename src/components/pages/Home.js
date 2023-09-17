import React from 'react';


export default function Home() {
  const projectContainer = {
    display: 'flex',
    flex: 'wrap'
  };

  const project = {
    flex: '0 0 calc(50% - 20px)',
    boxSizing:'border-box',
    padding: '10px',
    textAlign: 'center'
  }

    const image = {
      width: '40%',
      height: 'auto'
    }
  return (
    <div>
      <h1>Home Page</h1>
      <div style={{projectContainer}}>
        <div style={project}>
          <a href="https://searaden.github.io/Project-Hyperion/">
            <img
              src={require("./prjct-hyperion.png")}
              alt="Project Hyperion"
              style={image}
            />
          </a>
        </div>
        <div style={project}>
          <a href="https://searaden.github.io/Horiseon-Web-Development/">
            <img
              src={require("./Screenshot 2023-04-04 105010.png")}
              alt="Project Hyperion"
              style={image}
            />
          </a>
          </div>
        <div style={project}>
          <a href="https://searaden.github.io/pop-quiz/">
            <img
              src={require("./quiz.png")}
              alt="Project Hyperion"
              style={image}
            />
          </a>
          </div>
        <div style={project}>
          <a href="https://searaden.github.io/my-portfolio/">
            <img
              src={require("./Screenshot 2023-09-16 204204.png")}
              alt="Project Hyperion"
              style={image}
            />
          </a>
          </div>
        <div style={project}>
          <a href="https://protected-tor-51841-49acc5bceede.herokuapp.com/notes">
            <img
              src={require("./Screenshot 2023-09-16 204532.png")}
              alt="Project Hyperion"
              style={image}
            />
          </a>
          </div>
        <div style={project}>
          <a href="https://searaden.github.io/Task-Popper/">
            <img
              src={require("./home.png")}
              alt="Project Hyperion"
              style={image}
            />
          </a>
        </div>
       </div>
       </div>

);
  }
