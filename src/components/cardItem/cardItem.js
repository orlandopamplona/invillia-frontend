import React from "react"
import qwest from 'qwest';
import './cardItem.css';

export default function CardItem(props) {


    const loadStarShips = (url) => {
        var self = this;

        qwest.get(url, {
            page_size: 10
        }, {
            cache: true
        })
            .then(function (xhr, resp) {
                if (resp) {
                    var characters = self.state.characters;

                    resp.results.map((character) => {
                        return characters.push(character);
                    });
                    if (resp.next) {
                        self.setState({
                            characters: characters,
                            nextHref: resp.next
                        });
                    } else {
                        self.setState({
                            hasMoreItems: false
                        });
                    }
                }
            });
    }

    const createStarShipsLinks = (starships) => {
        if (starships) {
            return starships.map((starship) => {
                return <div className="divLinkShipImage">
                    <a href={starship}>
                        <img src="/img/defaultLink.png" alt={starship} />
                    </a>
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
                            
                        </td>
                    </tr>
                </table>
            </div>
            }
        </div>
    );
}