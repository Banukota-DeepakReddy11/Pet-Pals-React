
/*
  Student: Deepak Reddy Banukota
  Assignment: Week 4 - Pet Search
  Date: November 22, 2026

  This is the main page of the Pet Pals application.
*/

import { useState } from "react";
import pets from "./data";
import PetSearch from "./PetSearch";
import "./App.css";

function App() {
  // Stores the animal category selected by the user.
  const [selectedAnimal, setSelectedAnimal] = useState("all");

  // Displays all pets or only the selected animal type.
  const displayedPets =
    selectedAnimal === "all"
      ? pets
      : pets.filter((pet) => pet.animal === selectedAnimal);

  return (
    <div className="container py-5">

      {/* Page heading */}
      <header className="text-center mb-4">
        <h1 className="display-4 fw-bold">Pet Pals 🐾</h1>
        <p className="text-muted">
          Find your favorite animal and meet some lovely pets!
        </p>
      </header>

      {/* Animal category filter */}
      <div className="mb-4">
        <label htmlFor="animalFilter" className="form-label fw-bold">
          Filter by animal:
        </label>

        <select
          id="animalFilter"
          className="form-select"
          value={selectedAnimal}
          onChange={(event) => setSelectedAnimal(event.target.value)}
        >
          <option value="all">All Animals</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
          <option value="bird">Birds</option>
        </select>
      </div>

      {/* Search and pet display */}
      <PetSearch pets={displayedPets} />

      {/* Footer */}
      <footer className="text-center mt-5 text-muted">
        Made with love for animal lovers ❤️
      </footer>

    </div>
  );
}

export default App;
