import React from "react";

import { Link } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function HomeScreen() {
  const items = [
    {
      id: 0,
      name: "Finland"
    },
    {
      id: 1,
      name: "Germany"
    },
    {
      id: 2,
      name: "Italy"
    },
    {
      id: 3,
      name: "Spain"
    },
    {
      id: 4,
      name: "France"
    }
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <Link to={"/category"}>
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
            items={items}
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
