"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const AdoptionForm = () => {
  const searchParams = useSearchParams();
  const catId = searchParams.get("catId"); 

  const [cat, setCat] = useState(null); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    home: "",
    location: "",
    experience: "",
    familySize: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [myAdoption, setMyAdoption] = useState([]);


  useEffect(() => {
    if (catId) {
      fetch(`http://localhost:3001/cats/${catId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch cat info");
          return res.json();
        })
        .then((data) => setCat(data))
        .catch((err) => {
          console.error(err);
          setError("Could not load cat info.");
        });
    }
  }, [catId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const trimmedData = {};
    for (const key in formData) {
      trimmedData[key] = formData[key].trim();
    }

    
    const adoptionData = {
      catId: cat?.id || null,
      cat,
      applicant: trimmedData,
    };

    try {
      const response = await fetch("http://localhost:3001/adoptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adoptionData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSubmitted(true);
      setMyAdoption((prev) => [...prev, data]);

      setFormData({
        name: "",
        email: "",
        phone: "",
        home: "",
        location: "",
        experience: "",
        familySize: "",
      });
    } catch (error) {
      setError("Failed to submit the application. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray shadow-md rounded-lg text-gray-800">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Adoption Application Form
      </h2>

      {cat && (
        <div className="mb-4 p-3 border border-gray-300 rounded text-sm text-gray-700">
          <p>
            <strong>Adopting:</strong> {cat.name}
          </p>
          <p>
            <strong>Breed:</strong> {cat.breed}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="home"
          value={formData.home}
          onChange={handleChange}
          placeholder="Home Type (e.g. Apartment)"
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Your Location"
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Pet Experience"
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="familySize"
          value={formData.familySize}
          onChange={handleChange}
          placeholder="Family Size"
          required
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-800 text-white p-2 rounded"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>

      {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
      {submitted && (
        <p className="mt-4 text-green-600 text-sm">
          Application submitted successfully!
        </p>
      )}
    </div>
  );
};

export default AdoptionForm;
