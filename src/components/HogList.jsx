import React, {useState} from "react";

import HogTile from "./HogTile";
import HogFilter from "./HogFilter";

import hogList from "../porkers_data";

const HogList = () => {
  const [hogs, setHogs] = useState(hogList)
  const [hogSort, setHogSort] = useState(false)
  const [hogFilter, setHogFilter] = useState('all')

  const handleHogSort = () => {
    setHogSort(hogSort => !hogSort)
  }

  const handleHogFilter = (e) => {
    const term = e.target.value
    setHogFilter(term)
  }

  const filterdHogs = () => {
    if (hogFilter === 'weight'){
      return [...hogs].sort((a,b) => b.weight - a.weight)
    }else if (hogFilter === 'name'){
      return [...hogs].sort((a,b) => a.name.localeCompare(b.name))
    }else{
      return hogs
    }
  }

  const sortHogs = () => {
    const hogsArray = filterdHogs()
    
    if (hogSort){
      return hogsArray.filter(hog => hog.greased )
    }else{
      return hogsArray
    }
  }

  const hogTiles = sortHogs().map(hog => {
     return  (
        <HogTile
          key={hog.name} 
          {...hog}
          />
        )
    })


  return (
    <div>
      <HogFilter 
        handleHogSort={handleHogSort} 
        hogSort={hogSort}
        hogFilter={hogFilter}
        handleHogFilter={handleHogFilter}
      />
      <div className="ui grid container">
        {hogTiles}
      </div>
    </div>
  );
};

export default HogList;
