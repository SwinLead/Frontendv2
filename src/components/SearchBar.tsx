import React, { useState, useEffect } from "react";

// Define the prop types for the SearchBar component
interface SearchBarProps {
  // An array of objects containing id and title properties
  searchData: { id: string; title: string }[];
  // Callback function to update the filtered data
  onFilteredDataChange: (filteredData: { id: string; title: string }[]) => void;
}

// Define the SearchBar component
const SearchBar: React.FC<SearchBarProps> = ({
  searchData,
  onFilteredDataChange,
}) => {
  // State to hold the search input value
  const [searchInput, setSearchInput] = useState<string>("");

  // State to hold the filtered data based on search input
  const [filteredData, setFilteredData] = useState<
    { id: string; title: string }[]
  >([]);

  // Effect hook to update the filtered data whenever it changes
  useEffect(() => {
    // Call the onFilteredDataChange callback with the updated filtered data
    onFilteredDataChange(filteredData);
    // Dependency array ensures the effect runs when filteredData or onFilteredDataChange changes
  }, [filteredData, onFilteredDataChange]);

  // Function to handle changes in the search input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    // Filter the searchData based on the search input
    const filtered = searchData.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    // Update the filteredData state with the filtered results
    setFilteredData(filtered);
  };

  return (
    <div>
      {/* Input field for search with event handler */}
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
        className="text-black"
      />
    </div>
  );
};

// Export the SearchBar component as the default export
export default SearchBar;
