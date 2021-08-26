import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { apiKey } from '../Constants/Constants';
import Navbar from '../Navbar/Navbar';
import SearchCity from '../SearchCity/SearchCity';
import Weather from '../Weather/Weather';
import './Home.css'

const Home = () => {

    const [city, setCity] = useState('');

    const [weatherInfo, setWeatherInfo] = useState([]);

    useEffect(() => {
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${apiKey}`)
                .then(res => res.json())
                .then(res =>
                    // console.log(res))
                    setWeatherInfo(res.list.map(lst => {
                        return {
                            min: lst.main.temp_min,
                            max: lst.main.temp_max,
                            humidity: lst.main.humidity,
                            weather: lst.weather[0]?.description,
                            weatherIcon: lst.weather[0]?.icon
                        }
                    }))
                )
        }

    }, [city]);

    // useEffect(() => {
    //     console.log("weatherInfo", cityInfo)
    // }, [cityInfo])

    // useEffect(() => {
    //     console.log("weatherInfo", weatherInfo)
    // }, [weatherInfo])

    return (
        <div className="back">
            <Navbar></Navbar>
            <br />
            <div className="container text-center">
                <SearchCity
                    onCityFound={cityInfo => {
                        setCity(cityInfo.city);
                    }}
                />
            </div>
            <div className="main container">

                {!!weatherInfo && weatherInfo.map((weather, index) => (<div className="day" key={index}>
                    <Weather min={weather.min} max={weather.max} humidity={weather.humidity} weather={weather.weather} weatherIcon={weather.weatherIcon} />
                </div>))}
            </div>
            <div className="footer">
                <footer class="text-center mt-3 pt-3 mb-3 ml-5 justify-content-end text-light">@Weather- APP{(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
                <br />
            </div>

        </div>
    );
};

export default Home;