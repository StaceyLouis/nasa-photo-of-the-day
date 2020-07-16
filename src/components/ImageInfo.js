import React from 'react';
import "./ImageCard.css";
function ImageInfo (props) {
console.log(props)
    return (

        <div className="caption">
            <p>"{props.info}"</p>
        </div>
    )
}

export default ImageInfo;