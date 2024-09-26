// src/components/JobPostForm.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const JobPostForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    description: '',
    location: '',
    salary: '',
    requirements: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/jobs/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        console.log('Job posted successfully');
      }
    } catch (error) {
      console.error('Error posting job', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Job Description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Job Location"
        value={formData.location}
        onChange={handleChange}
      />
      <input
        type="text"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
      />
      <input
        type="text"
        name="requirements"
        placeholder="Job Requirements (comma-separated)"
        value={formData.requirements}
        onChange={handleChange}
      />
      <button type="submit">Post Job</button>
    </form>
  );
};

export default JobPostForm;
