import React from "react"

export default function CardItemMenu(props) {

    return (
        <div id={props.divCardId} className={props.cardStyle} onClick={() => props.click(props.dataFull)}>
            <div id={props.divImageId} className={props.containerImageStyle}>
                <img src={props.avatar} alt={props.name} />
            </div>
            <div id={props.divLabelId} className={props.containerStyle}>
                <h4><b>{props.name}</b></h4>
            </div>
        </div>

    );
}