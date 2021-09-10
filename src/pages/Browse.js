import React, { useState, useEffect } from "react";

import Results from "../components/Results";
import NavBar from "../components/NavBar";

export default function Browse() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

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

        
    return (
        <React.Fragment>
            <NavBar />
            <div className="container">
                <h2> Browse Questions </h2>
                <Results results={data} loading={loading} />
            </div>
    </React.Fragment>
    )
}
