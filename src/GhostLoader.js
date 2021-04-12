import React from'react'
import splitAndConvert from '../utils/splitAndConvert'
import './GhostLoader.css'
const GhostLoader = ({width, height, row, widthRandom, heightRandom}) => {
    const [w, widthType] = splitAndConvert(width)
    const [h, heightType] = splitAndConvert(height)
    const LoaderElements =[]
    for(let i = 0; i < row; i++){
        const width = `${w - (Math.random() * w * widthRandom)}${widthType}`
        const height = `${h - (Math.random() * h * heightRandom)}${heightType}`
        LoaderElements.push(
            <span
            className="ghost-loader"
            key={i}
            style={{width, height}} 
            >
                &zwnj;
            </span>
        )
    }
    return (
        <>
        {LoaderElements}
        </>
    )
}

GhostLoader.defaultProps ={
    width: "200px",
    height: "100%",
    widthRandom: 0.30,
    heightRandom: 0.25,
    row: 1
}

export default GhostLoader