import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ExternalApi = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently } = useAuth0();



  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/api/lists/rules-lists`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const responseData = await response.json();

      setMessage(responseData);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    callSecureApi()
    return () => {
    }
  }, [])

  return (
    <div className="container">
      
      {error && <div>{error}</div>}
      {message && Object.keys(message).map( app => (
        <div>
          <h1>{app}</h1>
          {message[app].map( rule => (
            <h4>{rule}</h4>
          ))}
        </div> 
        )
      )}
    </div>
  );
};

export default ExternalApi;