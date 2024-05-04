import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const Test = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://techtitan.madagascar.webcup.hodi.host/api/test"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        console.log(jsonData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <>
            <p>There's no tuto for React, Hahaha!!</p>
            <Link className="App-link" to="/" rel="noopener noreferrer">
              Go Back
            </Link>
          </>
        )}
      </header>
    </div>
  );
};

export default Test;
