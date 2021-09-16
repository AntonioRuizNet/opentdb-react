import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import Results from "../components/Results";
import NavBar from "../components/NavBar";
import Search from "../components/Search";

export default function Browse() {
  const [data, setData] = useState([]);
  const [customSearch, setCustomSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(10);
  const [ascOrder, setAscOrder] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      const api_url = `https://opentdb.com/api.php?amount=50`;

      await fetch(api_url)
        .then((res) => res.json())
        .then((response) => {
          setData(response.results);
          setCustomSearch(response.results);
          setLoading(false);
        });
    };

    fetchResults();
  }, []);

  // Search results
  const searcher = (key, filter) => {
    let newData = data;
    if (key != "") {
      if (filter === "category")
        newData = data.filter((e) => {
          return e.category.search(key) != -1;
        });
      if (filter === "question")
        newData = data.filter((e) => {
          return e.question.search(key) != -1;
        });
    }
    setCustomSearch(newData);
  };

  // Get current results
  const indexLast = currentPage * resultsPerPage;
  const indexFirst = indexLast - resultsPerPage;
  const currentResults = customSearch.slice(indexFirst, indexLast);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Order results
  const orderResults = () => {
    setAscOrder(!ascOrder);
    let orderData = "";
    if(ascOrder) orderData = customSearch.sort((a,b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0))
    else orderData = customSearch.sort((a,b) => (a.category < b.category) ? 1 : ((b.category < a.category) ? -1 : 0))
    setCustomSearch(orderData);
  }

  return (
    <React.Fragment>
      <NavBar />
      <Search searcher={searcher} />
      <div className="container">
        <h2> Browse Questions </h2>
        <Results results={currentResults} loading={loading} orderResults={orderResults} />
        <Pagination
          resultsPerPage={resultsPerPage}
          totalResults={customSearch.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </React.Fragment>
  );
}
