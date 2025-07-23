import React, {useState} from 'react';

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    home: '',
    location: '',
    experience: '',
    familySize: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [myAdoption, setMyAdoption] = useState([]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
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

  try {
    const response = await fetch('http://localhost:3001/adoptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trimmedData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    setSubmitted(true);
    setMyAdoption(prev => [...prev, data]);
    setFormData({
      name: '',
      email: '',
      phone: '',
      home: '',
      location: '',
      experience: '',
      familySize: '',
    });
  } catch (error) {
    setError('Failed to submit the application. Please try again later.');
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray shadow-md rounded-lg text-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-center">Adoption Application Form</h2>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <label className='block'>   
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            </label><br/>
            
            <label className='block'>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            </label><br/>

            <label className='block'>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required  
            />
            </label><br/>   

            <label className='block'>
            Home Info:
            <textarea
              name="home"
              value={formData.home}
              onChange={handleChange}
              required
            />
            </label><br/>

            <label className='block'>
            Location:
            <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
            />
            </label><br/>

            <label className='block'>
            Experience with Pets:
            <textarea
                name="experience"
              value={formData.experience}
              onChange={handleChange}
              required   
            />
            </label><br/>

            <label className='block'>
            Family Size:
            <input
              type="number"
              name="familySize"
                value={formData.familySize}
                onChange={handleChange}
                required
            />
            </label><br/>

            {error && (
              <p className="text-red-600 text-sm font-medium">{error}</p>
            )}

            <button 
            type="submit"
            disabled={loading}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
              {loading ? 'Submitting...' : 'Submit'}
              </button>

        </form>

            {submitted && (
              <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded"> 
                <h3 className='text-lg font-semibold mb-2' >Application Submitted Successfully!</h3>
                <p>Thank you for your interest in adopting a pet.</p>
                <p>We will review your application and get back to you soon.</p>
              </div>
            )}
    
        </div>
    );
}

export default AdoptionForm;