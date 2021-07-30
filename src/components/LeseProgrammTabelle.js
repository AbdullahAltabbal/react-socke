import React from "react";
import useFetch from "./useFetch";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Pending from "./Pending";

const LeseProgrammTabelle = (props) => {
  const IsPending = props.pending;

  const data = props.data;

  const [leseprogramme, setLeseprogramme] = useState(data);

  useEffect(() => {
    if (data)
      setLeseprogramme(data)
  }, [data])


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
        <tr key={lp.id}>
          <td> {lp.leseprogramm_Name} </td>
          <td> {lp.kategorie} </td>
        </tr>
      );
    });
  };


  return (
    <div>
      <SearchBar updateFunction={updateTabelle} />
      {/* {error && <div>{error}</div>} */}
      {IsPending && <div><Pending></Pending></div>}
      {data && data.length > 0 && (
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
