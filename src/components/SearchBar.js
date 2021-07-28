import { useState } from "react";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="input-field searchbar">
      <p>{props.sascha}</p>
      <i className="material-icons prefix">search</i>
      <input
        value={searchInput}
        tyoe="text"
        id="icon_prefix2"
        placeholder="Nach Leseprogramme suchen"
        className="materialize-textarea"
        onChange={(e) => {
          setSearchInput(e.target.value);
          props.updateFunction(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default SearchBar;
