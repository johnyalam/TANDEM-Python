import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import axios from "axios";

function HomeScreen() {
  const [country, setCountry] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCountries() {
      const { data } = await axios.get("/api/country/");
      setCountry(data);
    }
    fetchCountries();
  }, []);

  const handleOnSearch = (string, results) => {
    console.log("handleOnSearch: ", string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log("handleOnHover: ", result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    navigate("/category/" + item.id);
  };

  const handleOnFocus = () => {};

  const formatResult = (item) => {
    return (
      <>
        <Link to={"/category/" + item.id}>
          <span style={{ display: "block", textAlign: "left" }}>
            {item.name}
          </span>
        </Link>
      </>
    );
  };

  return (
    <div className="container-full containerBackground">
      <div className="selectCountry">
        <p>Select Country</p>
        <div className="searchGroup">
          <ReactSearchAutocomplete
            items={country}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
