import React from 'react';


const DiagramComp = ({string, img}) => {
    let url = "/images/dashboard/images/" + img + ".svg";
  return (
  <>
    <div>{string}</div>
    <img src = {url}></img>
  </>
  );

}


export default DiagramComp;