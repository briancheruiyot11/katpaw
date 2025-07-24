'use client';
import React from 'react';

export default function EditApplicantForm({ formData, onChange, onSubmit, onCancel }) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-[#EDE9FE] rounded-xl p-6 shadow-md border w-full md:w-[480px] space-y-4"
    >
      <h2 className="text-xl font-bold text-purple-700 mb-2">Edit Applicant Details</h2>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            className="border bg-white p-2 rounded w-full"
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            className="border bg-white p-2 rounded w-full"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            className="border bg-white p-2 rounded w-full"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Home Type</label>
          <input
            className="border bg-white p-2 rounded w-full"
            type="text"
            name="home"
            value={formData.home}
            onChange={onChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            className="border bg-white p-2 rounded w-full"
            type="text"
            name="location"
            value={formData.location}
            onChange={onChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Family Size</label>
          <input
            className="border bg-white p-2 rounded w-full"
            type="number"
            name="familySize"
            value={formData.familySize}
            onChange={onChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Experience with Cats</label>
          <textarea
            className="border bg-white p-2 rounded w-full"
            name="experience"
            rows={3}
            value={formData.experience}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-400 text-black rounded hover:bg-gray-400 cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
        >
          Save
        </button>
      </div>
    </form>
  );
}