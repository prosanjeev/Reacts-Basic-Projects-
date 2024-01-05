import React, { useState, useEffect } from "react";

const CityDropdown = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(""); // To store the selected city

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  useEffect(() => {
    setCities(getCitiesForState(selectedState));
    setSelectedCity(""); // Reset selected city when the state changes
  }, [selectedState]);

  function handleStateChange(event) {
    const newState = event.target.value;
    setSelectedState(newState);
  }

  function handleCityChange(event) {
    const newCity = event.target.value;
    setSelectedCity(newCity);
  }

  function getCitiesForState(state) {
    const cityData = {
      Bihar: [
        "Arrah",
        "Araria",
        "Aurangabad",
        "Bakhtiyarpur",
        "Begusarai",
        "Belsand",
        "Bettiah",
        "Bhagalpur",
        "Bihar Sharif",
        "Buxar",
        "Chhapra",
        "Danapur",
        "Darbhanga",
        "Dehri",
        "Gaya",
        "Gopalganj",
        "Hajipur",
        "Jamalpur",
        "Jamui",
        "Jehanabad",
        "Katihar",
        "Lakhisarai",
        "Madhubani",
        "Motihari",
        "Muzaffarpur",
        "Narkatiaganj",
        "Nawada",
        "Nokha",
        "Patna",
        "Purnia",
        "Raxaul",
        "Saharsa",
        "Samastipur",
        "Sasaram",
        "Sheikhpura",
        "Sitamarhi",
        "Siwan",
        "Supaul"
      ],
      // ... (other states)
    };

    return cityData[state] || [];
  }

  return (
    <div>
      <label htmlFor="stateDropdown">Select State:</label>
      <select
        id="stateDropdown"
        value={selectedState}
        onChange={handleStateChange}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <label htmlFor="cityDropdown">Select City:</label>
      <select
        id="cityDropdown"
        value={selectedCity} // Use selectedCity instead of cities[0]
        disabled={cities.length === 0}
        onChange={handleCityChange}
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdown;
