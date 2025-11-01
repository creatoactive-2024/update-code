import React, { useState, ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi"; // install via: npm install react-icons

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search name...",
  onChange,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="search-input-wrapper">
      <FiSearch className="search-icon" />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
};

export default SearchInput;
