import axios from 'axios';
import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    duration: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const response = await axios.post(`http://localhost:3000/add-project`, formData)
    console.log(response)
  };

  const handleReq = async () => {
    try {

      const response = await axios.get('http://localhost:3000/contact');
      console.log(response);
    } catch (error) {
      console.log(error)

    }

  }

  return (
    <>
      <div style={{ textAlign: 'center' }}><button type="button" onClick={handleReq} style={{ padding: '10px 20px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', cursor: 'pointer', marginTop: '20px' }}>Communicate with Node Server</button></div>

      <div style={styles.page}>
        <h1 style={styles.heading}>Task Form</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Duration (hours)</label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </>
  );
};

const styles = {
  page: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f8fafc',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', sans-serif"
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#1e3a8a'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    resize: 'vertical',
    minHeight: '80px'
  },
  button: {
    padding: '12px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

export default FormPage;
