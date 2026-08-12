import React from 'react'

const CardEmpliment = (props) => {
    console.log(props.logo,props.brandName,props.timing,props.position,props.level,props.pay,props.payType)
    return (
        <div class="parent">
            <div class="card">
                <div class="top">
                    <div class="logo">
                        <img src={props.logo} alt="" />
                        <button>save</button>
                    </div>
                </div>
                <div class="center">
                    <h2>{props.brandName}</h2>
                    <h1>{props.position}</h1>
                    <span>{props.timing}</span>
                    <span>{props.level}</span>


                </div>
                <div class="bottom">
                    <div class="price">{props.pay}/{props.payType}</div>
                    <button>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default CardEmpliment