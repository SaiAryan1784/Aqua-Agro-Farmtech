import React, { useContext } from 'react';

//import component 
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

//import icons
import { RiSearch2Line } from "react-icons/ri";


//import house context 
import { HouseContext } from './HouseContext';
import CountryDropdown2 from './CountryDropdown2';

const Search = () => {


  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-3 relative lg:top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropdown/>
      <PropertyDropdown/>
      <PriceRangeDropdown/>
      <CountryDropdown2/>
      <button className=' bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
        <RiSearch2Line/>
      </button>
    </div>
  );
};

export default Search;