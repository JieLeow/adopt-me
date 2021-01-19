import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]); //requests from the api, but for now its empty
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]); //first request things to api will have no pets there;

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  useEffect(() => {
    // pet.breeds("dog").then(console.log, console.error); //returns a promise,
    setBreeds([]); //clears the breeds up
    setBreed(""); //

    pet.breeds(animal).then(({ breeds }) => {
      //{breeds} is destructuring
      const breedStrings = breeds.map(({ name }) => name);
      setBreeds(breedStrings); //setBreeds state to an array of breed names
    }, console.error);
  }, [animal, setBreed, setBreeds]); //react dependency list, useEffect only runs when these changes

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
