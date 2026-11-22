
import { useState } from "react";


function PetSearch({ pets }) {

  
  const [searchText, setSearchText] = useState("");

  
  const filteredPets = pets.filter((pet) => {
    const search = searchText.toLowerCase();

    return (
      pet.name.toLowerCase().includes(search) ||
      pet.animal.toLowerCase().includes(search) ||
      pet.specialty.toLowerCase().includes(search)
    );
  });

  return (
    <div>
      {/* Search box */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a pet..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>

      {/* Pet information table */}
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Animal</th>
              <th>Specialty</th>
            </tr>
          </thead>

          <tbody>
            {filteredPets.length > 0 ? (
              filteredPets.map((pet) => (
                <tr key={pet.id}>
                  <td>
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="pet-image"
                    />
                  </td>

                  <td>{pet.name}</td>
                  <td className="text-capitalize">{pet.animal}</td>
                  <td>{pet.specialty}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No pets found. Try another search!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PetSearch;
