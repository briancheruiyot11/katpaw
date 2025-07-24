'use client';
import React from 'react';

export default function AdoptionCard({ adoption, onEdit, onDelete }) {
  const { applicant, cat } = adoption;

  return (
    <div className="bg-[#EDE9FE] rounded-xl shadow p-4 border border-gray-200 w-full md:max-w-[600px] ml-1 mt-1 mb-1 mr-1">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start gap-4 border-b pb-4">
        <img
          src={cat.image || 'url'}
          alt={cat.name}
          className="w-24 h-24 object-cover rounded-lg border"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-purple-800">{cat.name}</h2>
          <p className="text-sm text-gray-600">Breed: <span className="font-medium">{cat.breed}</span></p>
          <p className="text-sm text-gray-600">Age: <span className="font-medium">{cat.age}</span></p>
          <p className="text-sm text-gray-600">Gender: <span className="font-medium">{cat.gender}</span></p>
          <p className="text-sm text-purple-800 italic mt-1">{cat.bio}</p>
        </div>
      </div>

      {/* Applicant Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mt-4">
        <h3 className="text-md font-medium text-black-800 col-span-full">Adopter Info</h3>
        <div><strong>Name:</strong> {applicant.name}</div>
        <div><strong>Email:</strong> {applicant.email}</div>
        <div><strong>Phone:</strong> {applicant.phone}</div>
        <div><strong>Home:</strong> {applicant.home}</div>
        <div><strong>Location:</strong> {applicant.location}</div>
        <div><strong>Family Size:</strong> {applicant.familySize}</div>
        <div className="col-span-full"><strong>Experience:</strong> {applicant.experience}</div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
        <button
          onClick={() => onEdit(adoption.id)}
          className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm shadow cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(adoption.id)}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm shadow cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}