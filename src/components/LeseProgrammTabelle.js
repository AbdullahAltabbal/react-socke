import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Pending from "./Pending";

const LeseProgrammTabelle = (props) => {
  const IsPending = props.pending;

  const data = props.data;

  const [leseprogramme, setLeseprogramme] = useState(data);
  const [active, setActive] = useState('');



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
        <tr
          key={lp.id}
          onClick={() => {
            props.selectLp(lp)
            setActive(lp.id)
          }}
          className={active === lp.id ? "selected" : ''}
        >
          <td> {lp.leseprogramm_Name} </td>
          <td> {lp.kategorie} </td>
        </tr>
      );
    });
  };


  return (
    <div>
      <div className="row" ></div>
      <SearchBar updateFunction={updateTabelle} />
      {/* {error && <div>{error}</div>} */}
      {IsPending && <div><Pending></Pending></div>}
      {data && data.length > 0 && (
        <table className="responsive-table bordered leseprogrammTable">
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
