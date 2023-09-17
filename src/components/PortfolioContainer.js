import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/contact.js';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';
import Body from './Body';
import './style.css'
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const projectData = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
    },
    {
      title: 'Project 4',
      description: 'Description of Project 4',
    },
    {
      title: 'Project 5',
      description: 'Description of Project 5',
    },
    {
      title: 'Project 6',
      description: 'Description of Project 6',
    },
  ];

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return (
        <>
          <Home />
          {projectData.map((project, index) => (
            <Project key={index} projectData={project} />
          ))}
        </>
    )};
    
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
      <Header />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="content">
      {renderPage()}
      </div>

      <Footer />
    </div>
  );
}