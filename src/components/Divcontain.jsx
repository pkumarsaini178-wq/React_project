import React from 'react'

const Divcontain = ({
    title = "Feature Container",
    description = "this is dive containe that show the different part of this web",
    icon = "🚀"
}) => {
    return (
        <div className='divcontain'>
            <span className='card_icon'>{icon}</span>
            <div className='card_content'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Divcontain