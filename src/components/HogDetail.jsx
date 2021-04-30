import React from "react";

const HogDetail = ({specialty, weight, greased}) => {
  
  return (
    <div>
      <p>specialty: {specialty}</p>
      <p>weight: {weight}</p>
      <p>greased: {greased ? "Yup": "Nope"}</p>
    </div>
  );
};

export default HogDetail
