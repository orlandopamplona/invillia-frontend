import React, { Component } from 'react';
import PropTypes from "prop-types";
import qwest from 'qwest';
import Modal from "./modal"
import './starShipModal.css';

class StarShipModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            starship: {}
        };
    }

    componentDidUpdate(prevProps, prevState) {
        let { url } = this.props
        if (url && url !== prevProps.url) {
            this.loadStarShips(this.props.url);
        }
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    loadStarShips = async (url) => {
        var self = this;

        await qwest.get(url, {
            page_size: 10
        }, {
            cache: true
        })
            .then(function (xhr, resp) {
                if (resp) {
                    self.setState({ starship: resp });
                    self.showModal()
                }
            });
    }

    render() {
        return (
            <div id="divStartShip" className="divStartShip">
                {this.state.starship && <Modal show={this.state.show} handleClose={this.hideModal}>
                    <div id="divAvatarStarShip" className="divAvatarStarShip">
                        <p>{this.state.starship.name}</p>
                        <img src={`/img/starships/${this.state.starship.name}.jpg`} alt={this.state.starship.name} />
                    </div>
                    <div id="divTableStarShip" className="divTableStarShip">
                        <table id="tableShip" className="tableMain">
                            <tr>
                                <th>Model</th>
                                <th>Manufacturer</th>
                            </tr>
                            <tr>
                                <td>{this.state.starship.model}</td>
                                <td>{this.state.starship.manufacturer}</td>
                            </tr>
                            <tr>
                                <th>Passengers</th>
                                <th>Cargo Capacity</th>
                            </tr>
                            <tr>
                                <td>{this.state.starship.passengers}</td>
                                <td>{this.state.starship.cargo_capacity}</td>
                            </tr>
                            <tr>
                                <th>Consumables</th>
                                <th>Starship Class</th>
                            </tr>
                            <tr>
                                <td>{this.state.starship.consumables}</td>
                                <td>{this.state.starship.starship_class}</td>
                            </tr>
                        </table>
                    </div>

                </Modal>}
            </div>
        );
    }
}

StarShipModal.propTypes = {
    url: PropTypes.string
};

export default StarShipModal;