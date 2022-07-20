import React from "react";
import { useEffect, useState } from 'react';

const Card = ({idx, id, file, videoArr, setVideoArr}) => {
    const [isChecked, setIsChecked] = useState(false);

    const deleteArrItem = (arr, item) => {
        for(var i = 0; i < arr.length; i++){ 
          if (arr[i] === item) { 
            arr.splice(i, 1); 
            i--; 
            return;
          }
        }
      };
    
      const checkHandler = ({ target }) => {
        setIsChecked(!isChecked);
        checkedItemHandler(target.value, target.checked);
      };
    
      useEffect(() => {
        setIsChecked(false);
      }, [false]);
    
      const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
          videoArr.push(id);
          setVideoArr(videoArr);
          console.log(videoArr);
        } else if (!isChecked) {
          deleteArrItem(videoArr, id);
          setVideoArr(videoArr);
          console.log(videoArr);
        }
      };
      
    return (
        <div className="col" key={idx}>
            <div className="card ">
                <div className="card-body" key={idx}>
                <img className="card-img-top mb-3" src={file.thumb} />
                <h5 className="card-title">{file.name}</h5>

                <input
                    type="checkbox"
                    name="uncontrolled"
                    checked={isChecked}
                    value={id}
                    onChange={(e) => checkHandler(e)}
                />
                </div>
            </div>
        </div>
    )
}

export default Card;