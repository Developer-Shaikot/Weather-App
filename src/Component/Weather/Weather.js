import React from 'react';

const Weather = ({ min, max, humidity, weather, weatherIcon }) => {
    return (
        <div className="text-light">
            <div>Humidity: {humidity}</div>
            <div>Temp: min-{min}/ max-{max}</div>
            <div>weather: {weather}</div>
            <div>weatherIcon: {weatherIcon}</div>
        </div>
    );
};

export default Weather;