import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Contact() {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: '.5',
    alignItems: 'left',
    justifyContent: 'left',
    textAlign: 'left',
    paddingLeft: '50px',
    paddingRight: '20px'
  };

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor='email'>Email:</label>
          <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor='message'>Message:</label>
          <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary"> Submit </button>
      </form>
      
    </div>
  );
}
