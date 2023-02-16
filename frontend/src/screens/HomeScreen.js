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
      console.log("-------data", data);
    }
    fetchCountries();
  }, []);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log("handleOnSearch: ", string, results);

    // navigate("/category");
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log("handleOnHover: ", result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log("handleOnSelect: ", item);
    navigate("/category");
  };

  const handleOnFocus = () => {
    console.log("handleOnFocus", "Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <Link
          // to={"/category"}
          to={{
            pathname: "/category",
            state: { value: item.id }
          }}
        >
          <span style={{ display: "block", textAlign: "left" }}>
            {item.name}
            {console.log("formatResult")}
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
          {/* <Button>
            <i className="fas fa-search"></i>
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
