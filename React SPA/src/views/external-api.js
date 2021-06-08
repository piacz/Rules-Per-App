import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "../components/index";

import "../css/external-api.css";

const ExternalApi = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
      setLoading(false)
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
    <div id="containerApps">   
      {loading===true ? <Loading /> : null} 
      {error && <div>{error}</div>}
      {message && Object.keys(message).map( app => (
        <div className='appCard'>
          <h2 id='appName'>{app}</h2>
          <div>Applied rules:</div>
          {message[app].map( rule => (
            <h4 id='appRule'>{rule}</h4>
          ))}
        </div> 
        )
      )}
    </div>
  );
};

export default ExternalApi;