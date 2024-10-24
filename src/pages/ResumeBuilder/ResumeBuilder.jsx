import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add content to PDF
    doc.setFontSize(16);
    doc.text('Resume', 10, 10);
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Email: ${formData.email}`, 10, 30);
    doc.text(`Phone: ${formData.phone}`, 10, 40);
    doc.text('Education:', 10, 50);
    doc.text(formData.education, 10, 60);
    doc.text('Experience:', 10, 70);
    doc.text(formData.experience, 10, 80);
    doc.text('Skills:', 10, 90);
    doc.text(formData.skills, 10, 100);

    // Save the PDF
    doc.save(`${formData.name}_resume.pdf`);
  };

  const renderInputField = (label, type, name, isTextarea = false) => (
    <div className="mb-4">
      <label className="label">{label}</label>
      {isTextarea ? (
        <textarea
          name={name}
          className="textarea textarea-bordered w-full"
          value={formData[name]}
          onChange={handleInputChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          className="input input-bordered w-full"
          value={formData[name]}
          onChange={handleInputChange}
        />
      )}
    </div>
  );

  return (
    <div style={{ padding: '2rem' }}>
      {/* Resume Builder Form */}
      <div style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', padding: '1.5rem', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Build Your Resume</h2>
        <form>
          {renderInputField('Name', 'text', 'name')}
          {renderInputField('Email', 'email', 'email')}
          {renderInputField('Phone', 'text', 'phone')}
          {renderInputField('Education', 'text', 'education', true)}
          {renderInputField('Experience', 'text', 'experience', true)}
          {renderInputField('Skills', 'text', 'skills', true)}

          <button
            type="button"
            style={{ backgroundColor: '#3490dc', color: '#fff', padding: '0.5rem', marginTop: '1.5rem' }}
            onClick={downloadPDF}
          >
            Download as PDF
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeBuilder;
