import React from 'react'

let colorPicker = {
    work: `hsl(15, 100%, 70%)`,
    play: `hsl(195, 74%, 62%)`,
    study: `hsl(348, 100%, 68%)`,
    exercise: `hsl(145, 58%, 55%)`,
    social: `hsl(264, 64%, 52%)`,
    'self-care': `hsl(43, 84%, 65%)`
}
const Card = ({ moreLogo, title, timeframes, timeframe }) => {
    console.log(timeframes);
    let datePicker = {
        daily: 'Yesterday',
        weekly: 'Last Week',
        monthly: 'Last Month'
    }

    let styleName = title.split(" ").join('-').toLowerCase();

    let style = {
        backgroundImage: `url(/bg-img/icon-${styleName}.svg)`,
        backgroundColor: colorPicker[styleName]
    }

    return (
        <div className="content-container" style={style} id={styleName}>

            <div className="content-body">

                <div className="content-heading">
                    <h2 className="content-title">{title}</h2>
                    <img src={moreLogo} alt="more" className="more" />
                </div>

                <div className="content-details">
                    <h3 className="content-time">{timeframes.current}hrs</h3>
                    <p className="previous-content">{datePicker[timeframe]}- {timeframes.previous}hrs</p>
                </div>

            </div>
        </div>
    )
}

export default Card