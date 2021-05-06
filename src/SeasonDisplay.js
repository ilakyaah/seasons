import './SeasonDisplay.css';
import React from 'react'


const seasonConfig = {
    Summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    Winter: {
        text: "Burr, it is chilly",
        iconName: 'snowflake'
    }
}

const getSeason = (lat,month) => {
    if(month>2 && month<9){
        return lat>0 ? 'Summer' : 'Winter'
    } else{
        return lat>0 ? 'Winter' : 'Summer'
    }
}

const SeasonDisplay = ({lat}) => {

const Season = getSeason(lat, new Date().getMonth())
const {text, iconName} = seasonConfig[Season]

return (
        <div className={`season-display ${Season}`}>
          <i className={`icon-left massive ${iconName} icon`} />
          <h1>{text}</h1>
          <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay
