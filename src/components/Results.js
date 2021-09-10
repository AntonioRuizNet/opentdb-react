import React from 'react';
import { FaSort } from 'react-icons/fa';

import './styles/Results.css';

function unescapeHtml(safe) {
    return safe.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
}

const Results = ({ results, loading, orderResults }) => {
    let keyId = 0;

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <table className="table table-bordered tableBrowse">
            <thead>
                <tr>
                    <th><b>Category <a href="#" className="orderTable" onClick={() => orderResults()}><FaSort /></a></b></th>
                    <th><b>Type</b></th>
                    <th><b>Difficulty</b></th>
                    <th><b>Question</b></th>
                </tr>
            </thead>
            <tbody>
            {results.map(e => (
                    <tr key={keyId++}>
                        <td>{e.category}</td>
                        <td>{e.type}</td>
                        <td>{e.difficulty}</td>
                        <td>{unescapeHtml(e.question)}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
};

export default Results;