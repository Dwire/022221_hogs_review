import React, {useState} from "react";
import HogDetail from "./HogDetail";

const HogTile = (props) => {
  const [toggleDetail, setToggleDetail] = useState(false)

  const {name, specialty, weight, greased, image} = props

  const handleToggle = () => {
    setToggleDetail(toggleDetail => !toggleDetail)
  }
  
  return (
    <div onClick={handleToggle} className="ui four wide column pigTile">
      <h3>{name}</h3>
      <img className="tile-img" src={image} alt={name} />
      {/* {toggleDetail ? <HogDetail /> : null} */}
      {toggleDetail && <HogDetail specialty={specialty} weight={weight} greased={greased} />}
    </div>
  );
};

export default HogTile
