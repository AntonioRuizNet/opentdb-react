import React from "react";

import './styles/Search.css';

const Search = ({ searcher }) => {
  return (
    <div className="row search">
      <div className="col">
        <input
          id="key"
          type="text"
          className="form-control"
          onChange={(e) =>
            searcher(e.target.value, document.getElementById("filter").value)
          }
        />
      </div>
      <div className="col">
        <select
          id="filter"
          className="form-control"
          onChange={(e) =>
            searcher(document.getElementById("key").value, e.target.value)
          }
        >
          <option value="category">Category</option>
          <option value="question">Question</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
