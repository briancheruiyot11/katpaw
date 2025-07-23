'use client';

import React, { useEffect, useState } from 'react';
import AdoptionCard from '../components/AdoptionCard';
import EditApplicantForm from '../components/EditApplicantForm';

export default function MyAdoptionsPage() {
  const [adoptions, setAdoptions] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(null);

  // Fetch adoption applications
  useEffect(() => {
    fetch('http://localhost:3001/adoptions')
      .then(res => res.json())
      .then(data => setAdoptions(data))
      .catch(err => console.error('Error fetching adoptions:', err));
  }, []);

  // Delete an application
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/adoptions/${id}`, {
      method: 'DELETE',
    });
    setAdoptions(prev => prev.filter(item => item.id !== id));
  };

  // Start editing an application
  const handleEdit = (id) => {
    const selected = adoptions.find(app => app.id === id);
    setEditingId(id);
    setFormData({ ...selected.applicant });
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingId(null);
    setFormData(null);
  };

  // Form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit updated data
  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:3001/adoptions/${editingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ applicant: formData }),
    });

    setAdoptions(prev =>
      prev.map(app =>
        app.id === editingId ? { ...app, applicant: formData } : app
      )
    );

    setEditingId(null);
    setFormData(null);
  };

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-900 mb-8">
        🐱 My Adoption Applications
      </h1>

      {adoptions.length === 0 ? (
        <p className="text-gray-500">You haven’t submitted any applications yet.</p>
      ) : (
        <div className="grid gap-10">
          {adoptions.map((app) => (
            <div
              key={app.id}
              className="grid md:grid-cols-[480px_1fr] gap-6 items-start border p-4 rounded-md shadow bg-white"
            >
              {/* Form appears only if editing this specific card */}
              {editingId === app.id ? (
                <EditApplicantForm
                  formData={formData}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  onCancel={handleCancel}
                />
              ) : (
                <div className="hidden md:block" />
              )}

              <AdoptionCard
                adoption={app}
                onEdit={() => handleEdit(app.id)}
                onDelete={() => handleDelete(app.id)}
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
