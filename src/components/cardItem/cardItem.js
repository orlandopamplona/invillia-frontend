import React, { useState } from "react"
import StarShipModal from "../starShipModal/starShipModal"
import './cardItem.css'

export default function CardItem(props) {

    const [startship, setStartship] = useState()

    const createStarShipsViewer = (starshipLink) => {
        if (starshipLink) {
            setStartship(starshipLink)
        }
    }

    const createStarShipsLinks = (starships) => {
        if (starships) {
            return starships.map((starship) => {
                return <div className="divLinkShipImage">
                    <img src="/img/defaultLink.png" alt={starship} onClick={() => createStarShipsViewer(starship)} />
                </div>
            })
        }
    }

    return (
        <div id="divCardItem" className="divCardItem">
            {props.character && <div id="divAvatarName" className="divAvatarName">
                <h1>{props.character.name}</h1>
            </div>}
            {props.character && <div id="divAvatar" className="divAvatar">
                <img src={`/img/${props.character.name}.jpg`} alt={props.character.name} />
            </div>}
            {props.character && <div id="divTable" className="divTable">
                <table id={props.tableId} className="tableMain">
                    <tr>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair Color</th>
                        <th>Skin Color</th>
                    </tr>
                    <tr>
                        <td>{props.character.height}</td>
                        <td>{props.character.mass}</td>
                        <td>{props.character.hair_color}</td>
                        <td>{props.character.skin_color}</td>
                    </tr>
                    <tr>
                        <th>Eye Color</th>
                        <th>Birth Year</th>
                        <th>Gender</th>
                        <th>Starships</th>
                    </tr>
                    <tr>
                        <td>{props.character.eye_color}</td>
                        <td>{props.character.birth_year}</td>
                        <td>{props.character.gender}</td>
                        <td>
                            {props.character.starships && <div className="divLinkShip">
                                {createStarShipsLinks(props.character.starships)}
                            </div>}
                            <StarShipModal url={startship}></StarShipModal>
                        </td>
                    </tr>
                </table>
            </div>
            }
        </div>
    );
}