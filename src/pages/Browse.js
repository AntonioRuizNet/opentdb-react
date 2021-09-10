import React, { useState, useEffect } from "react";

import Results from "../components/Results";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";

export default function Browse() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsPerPage] = useState(10);

    useEffect(() => {
        const fetchResults = async () => {
          setLoading(true);
          const api_url = `https://opentdb.com/api.php?amount=50`;
    
          await fetch(api_url)
            .then((res) => res.json())
            .then((response) => {
              setData(response.results);
              setLoading(false);
            });
        };
        fetchResults();
  }, []); 

    // Get current results
    const indexLast = currentPage * resultsPerPage;
    const indexFirst = indexLast - resultsPerPage;
    const currentResults = data.slice(indexFirst, indexLast);
  
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

        
    return (
        <React.Fragment>
            <NavBar />
            <div className="container">
                <h2> Browse Questions </h2>
                <Results results={currentResults} loading={loading} />
                <Pagination
                    resultsPerPage={resultsPerPage}
                    totalResults={data.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    />
            </div>
    </React.Fragment>
    )
}
