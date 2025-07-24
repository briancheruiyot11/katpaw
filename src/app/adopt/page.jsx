'use client';

import { useState, useEffect } from 'react';
import CatCard from '../../components/CatCard';


export default function Adopt() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [breedFilter, setBreedFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  useEffect(() => {
    // Load cats from db.json
    fetch('https://katpaw-api.onrender.com/cats')
      .then(res => res.json())
      .then(data => {
        
        setCats(data);
        setFilteredCats(data);
      })
      .catch(err => console.error('Failed to load cats:', err));
  }, []);

  useEffect(() => {
    // Filter cats based on search and filters
    let filtered = cats.filter(cat => {
      const matchesSearch = cat.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBreed = breedFilter ? cat.breed === breedFilter : true;
      const matchesAge = ageFilter ? cat.age === ageFilter : true;
      const matchesGender = genderFilter ? cat.gender === genderFilter : true;

      return matchesSearch && matchesBreed && matchesAge && matchesGender;
    });

    setFilteredCats(filtered);
  }, [cats, searchQuery, breedFilter, ageFilter, genderFilter]);

  // Get filters
  const breeds = [...new Set(cats.map(cat => cat.breed))];
  const ages = [...new Set(cats.map(cat => cat.age))];
  const genders = [...new Set(cats.map(cat => cat.gender))];

  return (
    <div className="adoptContainer">
      <div className="adoptContent">
        <div className="container">
          <h1 className="adoptTitle">Find Your Purr-fect Cat</h1>
          <p className="adoptSubtitle">
            Browse our available cats and find your new companion
          </p>

          {/* Search Bar */}
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="searchInput"
            />
          </div>

          {/* Filters */}
          <div className="filtersContainer">
            <select
              value={breedFilter}
              onChange={(e) => setBreedFilter(e.target.value)}
              className="filterSelect"
            >
              <option value="">All Breeds</option>
              {breeds.map(breed => (
                <option key={breed} value={breed}>{breed}</option>
              ))}
            </select>

            <select
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
              className="filterSelect"
            >
              <option value="">All Ages</option>
              {ages.map(age => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>

            <select
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              className="filterSelect"
            >
              <option value="">All Genders</option>
              {genders.map(gender => (
                <option key={gender} value={gender}>{gender}</option>
              ))}
            </select>
          </div>

          <p className="resultsText">
            {filteredCats.length} {filteredCats.length === 1 ? 'cat' : 'cats'} found
          </p>

          {/* Cats Grid */}
          <div className="catsGrid">
            {filteredCats.length > 0 ? (
              filteredCats.map(cat => (
                <CatCard key={cat.id} cat={cat} />
              ))
            ) : (
              <div className="emptyState">
                <h3>No cats found matching your criteria</h3>
                <p>Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
