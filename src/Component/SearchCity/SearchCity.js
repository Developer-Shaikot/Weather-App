import React from 'react';
import './style.css';
import { useState } from 'react';
import { apiKey } from '../Constants/Constants';

const SearchCity = ( {onCityFound} ) => {

    const [city, setCity] = useState('');

    const getCity = (city) => {
        console.log(city);
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${apiKey}`
        fetch(url)
        .then(response => response.json())
        .then(response => onCityFound({
            city: response.city.name,
            CountryName: response.city.country
        }))
    };

    return (
        <div className="main ml-5">
            
            <input
    
                placeholder='Search City & watch Weather'
                value={city} 
                onChange={e => setCity(e.target.value)} 
            />
            <button className="btn btn-primary"onClick={ () => getCity(city)}>Search</button>
        </div>
    );
};

export default SearchCity;