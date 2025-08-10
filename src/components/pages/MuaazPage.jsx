import React, { useState } from 'react';
import axios from 'axios';

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const response = await axios.post('http://localhost:3000/submit-info', formData);
      alert('Form submitted successfully!');
      console.log(response);
    } catch (error) {
      console.error(error);
      alert('Submission failed!');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🧾 Personal Information Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.group}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="03xx-xxxxxxx"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.group}>
          <label style={styles.label}>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Street, City, Country"
            style={styles.textarea}
            required
          />
        </div>

        <button type="submit" style={styles.button}>Submit Information</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#f8fafc',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    textAlign: 'center',
    color: '#1e3a8a',
    marginBottom: '30px',
    fontSize: '26px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: '600',
    marginBottom: '8px',
    color: '#334155',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    outlineColor: '#2563eb',
    backgroundColor: '#fff',
  },
  textarea: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    resize: 'vertical',
    minHeight: '90px',
    outlineColor: '#2563eb',
    backgroundColor: '#fff',
  },
  button: {
    padding: '14px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: '0.3s',
  },
};

export default PersonalInfoForm;
