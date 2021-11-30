import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import Weather from "./Weather";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 5px 5px 0 ;
  background: white;
  font-family: Sans-serif;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2b23f27c2e0d0dc786c3a97df8065d1`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Weather Forecast</AppLabel>
        <Weather updateCity={updateCity} fetchWeather={fetchWeather} weather={weather} city={city} />
    </Container>
  );
}

export default App;
