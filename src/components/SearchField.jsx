import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchField = ({ toFind, onSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value); // Envoie la valeur au parent
  };

  return (
    <div className="p-2 grid grid-cols-6  border border-gray-300 rounded-lg w-full">
      <div className="col-span-1">
        <CiSearch />
      </div>

      <input
        type="text"
        placeholder={`Trouvez un  ${toFind}`}
        value={input}
        onChange={handleInputChange}
        className="col-span-5 bg-transparent text-gray-800 outline-none text-left"
      />
    </div>
  );
};

export default SearchField;
