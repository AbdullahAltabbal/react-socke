import React from "react";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const LeseProgrammTabelle = (props) => {
  const pending = props.pending;

  const { data, isPending, error } = useFetch(
    'http://localhost:8000/leseProgramme/'
  );

  useEffect(() => {
    if (data && !error)
      setLeseprogramme(data)
  }, [data]);

  const [leseprogramme, setLeseprogramme] = useState([]);


  const updateTabelle = (searchText) => {

    // data anhand von searchText filern
    let newData = data.filter((e) =>
      e.leseprogramm_Name.toUpperCase().includes(searchText.toUpperCase())
    );
    setLeseprogramme(newData);
  };

  const renderTable = (input) => {
    return leseprogramme.map((lp) => {
      return (
        <tr key={lp.iD_PUB_Leseprogramm}>
          <td> {lp.leseprogramm_Name} </td>
          <td> {lp.kategorie} </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <SearchBar updateFunction={updateTabelle} />
      {error && <div>{error}</div>}
      {isPending && <div>{pending}</div>}
      {data && (
        <table className="highlight responsive-table bordered leseprogrammTable">
          <thead>
            <tr>
              <th>Name </th>
              <th>kategorie</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      )}
    </div>
  );
};

export default LeseProgrammTabelle;
