import React, { useState } from "react";
import SearchBar from "./SearchBar";
import useEventFetcher from "./UseEventsFetcher"; // Import the useEventFetcher hook

const EventsComponent = () => {
  // Call the useEventFetcher hook to fetch events
  const { events, loading, error } = useEventFetcher();

  // State to hold the filtered data based on search input
  const [filteredData, setFilteredData] = useState<
    { id: string; title: string }[]
  >([]);

  // Function to update the filteredData state when search input changes
  const handleFilteredDataChange = (data: { id: string; title: string }[]) => {
    setFilteredData(data);
  };

  return (
    <div>
      {/* Pass the fetched events as the searchData prop */}
      <SearchBar
        searchData={events}
        onFilteredDataChange={handleFilteredDataChange}
      />
      {/* Display the filtered data */}
      <div>
        {/* Display filteredData however you want */}
        {JSON.stringify(filteredData)}
      </div>
    </div>
  );
};

export default EventsComponent;
