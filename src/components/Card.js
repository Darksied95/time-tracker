import React from 'react'

let colorPicker = {
    work: `hsl(15, 100%, 70%)`,
    play: `hsl(195, 74%, 62%)`,
    study: `hsl(348, 100%, 68%)`,
    exercise: `hsl(145, 58%, 55%)`,
    social: `hsl(264, 64%, 52%)`,
    'self-care': `hsl(43, 84%, 65%)`
}
const Card = ({ moreLogo, each }) => {

    let styleName = each.title.split(" ").join('-').toLowerCase()
    let style = {
        backgroundImage: `url(/bg-img/icon-${styleName}.svg)`,
        backgroundColor: colorPicker[styleName]
    }

    return (
        <div className="content-container" style={style}>

            <div className="content-body">

                <div className="content-heading">
                    <h2 className="content-title">{each.title}</h2>
                    <img src={moreLogo} alt="more" className="more" />
                </div>

                <div className="content-details">
                    <h3 className="content-time">{each.timeframes.weekly.current}hrs</h3>
                    <p className="previous-content">Last Week- {each.timeframes.weekly.previous}hrs</p>
                </div>

            </div>
        </div>
    )
}

export default Card