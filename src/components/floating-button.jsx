import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';

const VoiceFlightSearch = () => {
  const [flightDetails, setFlightDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get the transcript from speech recognition
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  // Start listening to voice input
  const startListening = () => SpeechRecognition.startListening({ continuous: true });

  // Stop listening and process the voice input
  const stopListening = () => {
    SpeechRecognition.stopListening();
    console.log('Final Transcript:', transcript);  // Log final transcript for debugging
    handleFlightSearch(transcript);
  };

  // Fetch the Amadeus access token
  const getAmadeusToken = async () => {
    try {
      const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', null, {
        params: {
          grant_type: 'client_credentials',
          client_id: 'gWTLpdwDAKellncriRIg9EcI7LS1EoKg',  // Replace with your Amadeus Client ID
          client_secret: 'w1Jg8h8jq5TcLjd5',  // Replace with your Amadeus Client Secret
        },
      });
      return response.data.access_token;
    } catch (error) {
      console.error('Error getting access token: ', error);
      return null;
    }
  };

  // Search for flights using Amadeus API
  const searchFlights = async (origin, destination, departureDate) => {
    const token = await getAmadeusToken();
    if (!token) {
      console.error('Unable to retrieve access token.');
      return null;
    }

    try {
      const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          originLocationCode: origin,  // Example: 'LON' for London
          destinationLocationCode: destination,  // Example: 'NYC' for New York
          departureDate: departureDate,  // Example: '2025-12-15'
          adults: 1,  // Number of adults
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching flight data: ', error);
      return null;
    }
  };

  // Process the voice input and search flights
  const handleFlightSearch = async (voiceInput) => {
    setLoading(true);

    // Log the transcript to check the raw voice input
    console.log('Transcript:', voiceInput);

    // Simplified regex to capture the voice input like "from LON to NYC on 2025-12-15"
    const regex = /(from)\s*([\w\s]+)\s*(to)\s*([\w\s]+)\s*(on)\s*(\d{4}-\d{2}-\d{2})/i;
    const match = voiceInput.match(regex);

    if (match) {
      const origin = match[2].trim().toUpperCase();  // Convert to uppercase for IATA codes
      const destination = match[4].trim().toUpperCase();  // Convert to uppercase for IATA codes
      const departureDate = match[6];

      console.log('Matched Data:', { origin, destination, departureDate }); // Log matched data for debugging

      const flightData = await searchFlights(origin, destination, departureDate);

      if (flightData && flightData.data) {
        setFlightDetails(flightData.data);
      } else {
        setFlightDetails('No flights found.');
      }
    } else {
      setFlightDetails('Unable to parse flight details from your voice input.');
    }

    setLoading(false);
  };

  // Inline styles with vibrant colors
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#FFFAF0',  // Light background with a warm tone
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '50px auto',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
      color: '#D32F2F',  // Bold red color for the title
      marginBottom: '20px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#2196F3',  // Blue button color
      color: '#fff',
      border: 'none',
      padding: '12px 24px',
      margin: '10px',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.3s',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    buttonDisabled: {
      backgroundColor: '#B0BEC5',  // Greyed out disabled button
      cursor: 'not-allowed',
    },
    transcript: {
      fontSize: '1.2rem',
      marginTop: '20px',
      color: '#455A64',  // Dark grey for text
      fontWeight: '500',
    },
    flightDetails: {
      marginTop: '30px',
      fontSize: '1.1rem',
      color: '#333',
      textAlign: 'left',
      padding: '15px',
      backgroundColor: '#FFEB3B',  // Yellow background for flight details box
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      border: '2px solid #FFC107',  // Yellow border
    },
    flightList: {
      listStyleType: 'none',
      padding: 0,
    },
    flightItem: {
      marginBottom: '15px',
      borderBottom: '1px solid #FF7043',  // Red border for each item
      paddingBottom: '10px',
      paddingLeft: '5px',
    },
    price: {
      fontWeight: 'bold',
      color: '#388E3C',  // Green color for prices
    },
    loading: {
      color: '#FFA000',  // Orange loading indicator color
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Flight Search by Voice</h1>

      <button
        onClick={startListening}
        style={{ ...styles.button, ...(listening ? styles.buttonDisabled : {}) }}
        disabled={listening}
      >
        Start Listening
      </button>
      <button
        onClick={stopListening}
        style={{ ...styles.button, ...(listening ? {} : styles.buttonDisabled) }}
        disabled={!listening}
      >
        Stop Listening
      </button>

      <div>
        <h2>Transcript</h2>
        <p style={styles.transcript}>{transcript}</p>
      </div>

      {loading && <p style={styles.loading}>Loading...</p>}

      {flightDetails && (
        <div style={styles.flightDetails}>
          <h3>Flight Details:</h3>
          {typeof flightDetails === 'string' ? (
            <p>{flightDetails}</p>
          ) : (
            <ul style={styles.flightList}>
              {flightDetails.data.map((flight, index) => (
                <li key={index} style={styles.flightItem}>
                  <p>
                    <strong>Departure:</strong> {flight.itineraries[0].segments[0].departure.iataCode} →{' '}
                    {flight.itineraries[0].segments[0].arrival.iataCode}
                  </p>
                  <p style={styles.price}>Price: {flight.price.total} {flight.price.currency}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default VoiceFlightSearch;
