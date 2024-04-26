import { useEffect, useState } from "react";

// Define the Event interface
interface Event {
  id: string;
  title: string;
}

// Custom hook to fetch events
const useEventFetcher = () => {
  // State variables to store events, loading state, and error state
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // useEffect hook to perform side effects (fetching events) after component render
  useEffect(() => {
    // Function to fetch events asynchronously
    const fetchEvents = async () => {
      // API endpoint URL
      const url = "https://api.swinlead.org/cms/manage/en-AU";
      // GraphQL query to fetch events
      const query = `
        {
          listEvents {
            data {
              title
              id
            }
          }
        }
      `;
      // Authorization token for API access
      const token = process.env.NEXT_PUBLIC_TOKEN; // Access token using NEXT_PUBLIC_

      try {
        // Send a POST request to the API with authorization headers and query body
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query }),
        });

        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        // Extract the data from the response
        const { data } = await response.json();
        // Update the events state with the fetched data
        setEvents(data.listEvents.data);
        // Set loading state to false after successful data retrieval
        setLoading(false);
      } catch (error: any) {
        // If an error occurs during fetching, update the error state and set loading state to false
        setError(error);
        setLoading(false);
      }
    };

    // Call the fetchEvents function when the component mounts
    fetchEvents();
    // Dependency array is empty, so this effect runs only once after initial render
  }, []);

  // Return an object containing events, loading state, and error state
  return { events, loading, error };
};

// Export the custom hook useEventFetcher
export default useEventFetcher;
