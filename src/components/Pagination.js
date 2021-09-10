import React from "react";

import './styles/Pagination.css';

const Pagination = ({
  resultsPerPage,
  totalResults,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <center>
      <ul className="pagination pagination-lg">
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active" : ""}>
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </center>
  );
};

export default Pagination;
