
import  { useRef, useState } from 'react';

let locations = [
    { name: 'Chennai', count: 22 },
    { name: 'Bengaluru', count: 3 },
    { name: 'Kolkata', count: 19 },
    { name: 'Mumbai (All Areas)', count: 2 },
    { name: 'Kochi', count: 1 },
    { name: 'Ernakulam', count: 1 },
    { name: 'Mumbai ( Areas)', count: 2 },
    { name: 'Dhaka', count: 1 },
    { name: 'Cumilla', count: 1 },
    { name: 'Cumilla (All Areas)', count: 20 },
    { name: 'Vola', count: 1 },
    { name: 'Madaripur', count: 1 },
];

const LocationFilterComponent = () => {
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [locationsData,setLocationsData]=useState(locations)
    const searchData =useRef()
    const handleCheckboxChange = (location) => {
        setSelectedLocations((prev) =>
            prev.includes(location)
                ? prev.filter((loc) => loc !== location)
                : [...prev, location]
        );
    };

    const handleClear = () => {
        setSelectedLocations([]);
          searchData.current.value=''
          setLocationsData(locations)
        
    //   reset
    };

    const handleApply = () => {
        // Apply filter logic here
        console.log('Applied filters:', selectedLocations);
    };


    const handleSearchChange = (e) => {
        const inputValue = e.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive matching
    
        // Filter locations that include the input value
        const matchedLocations = locations.filter(location => 
            location.name.toLowerCase().includes(inputValue) // Match any part of the string
        );
    
        console.log(matchedLocations); // Output the matched locations
        setLocationsData(matchedLocations)
        
    };
    
    return (
        <div className="p-4 border rounded-lg shadow-lg w-[286px] bg-white">
            <h3 className="text-lg font-semibold mb-4">Search location</h3>
            <div id='search-location'>
                <input onChange={()=>handleSearchChange(event)} ref={searchData} type="text" name='search' placeholder='Search location' className='outline-none w-full mb-3 border py-2 px-4 rounded-3xl' />
            </div>
            <div className=' overflow-auto h-[250px] bg-white'>
                {locationsData.length==0 && <h4>No data found</h4> }
                {locationsData.map((loc) => (
                    <div key={loc.name} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id={loc.name}
                            checked={selectedLocations.includes(loc.name)}
                            onChange={() => handleCheckboxChange(loc.name)}
                            className="mr-2"
                        />
                        <label htmlFor={loc.name} className="flex-grow">
                            {loc.name} ({loc.count})
                        </label>
                    </div>
                ))}
            </div>

            <div className="flex justify-between mt-4">
                <button
                    onClick={handleClear}
                    className="text-blue-500 font-bold"
                >
                    Clear
                </button>
                <button
                    onClick={handleApply}
                    className="px-4 py-2 bg-blue-700 rounded-3xl  text-white  flex items-center"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default LocationFilterComponent;
