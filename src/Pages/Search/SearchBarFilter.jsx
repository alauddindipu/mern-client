import React, { useState } from 'react'
import data from "../../../public/data.json";


const SearchBarFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);


    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        filterData(value);
    };


    const filterData = (searchTerm) => {
        const filteredData = data.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredData);
    };


    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            />


            <ul>
                {filteredData.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};


export default SearchBarFilter;
