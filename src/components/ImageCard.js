import React from 'react';
import ImageInfo from './ImageInfo';
import "./ImageCard.css";

function ImageCard(props) {
    console.log(props)
    return (
        <div>
            <span>{props.data.date}</span>
            <h3 className="title"> {props.data.title}</h3>
        <div className="img-container">
            <img className="img" src ={props.data.url} alt={props.data.title} />

        </div>
        <ImageInfo info ={props.data.explanation}/>
        </div>
    )
}

export default ImageCard; 