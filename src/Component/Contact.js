import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess('');

    setTimeout(() => {
      setSubmissions([...submissions, formData]);
      setSuccess('Your information  has been sent successfully!');
      setFormData({ name: '', email: '', password: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>LOG IN</h2>
      {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="email" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="password" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button type="submit" disabled={isSubmitting} style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#007bff', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>

      
    </div>
  );
};

export default Contact;
