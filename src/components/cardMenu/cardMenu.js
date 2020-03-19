import React, { Component } from 'react';
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';
import CardItemMenu from "../cardItemMenu/cardItemMenu"
import './cardMenu.css';

const api = {
    baseUrl: 'https://swapi.co/api/'
};

class CardMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            hasMoreItems: true,
            nextHref: null
        };
    }

    loadItems(page) {
        var self = this;

        var url = api.baseUrl + 'people/';
        if (this.state.nextHref) {
            url = this.state.nextHref;
        }

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

    render() {
        const loader = <div>Loading...</div>;

        var items = [];
        this.state.characters.map((character, i) => {
            return items.push(
                <div id="divCardItemMenu" key={i}>
                    <CardItemMenu divCardId="divCardId"
                        divImageId="divImageId"
                        divLabelId="divLabelId"
                        cardStyle="card"
                        containerStyle="container"
                        containerImageStyle="containerImage"
                        name={character.name}
                        avatar={`/img/${character.name}.jpg`}
                        click={this.props.click}
                        dataFull={character}>
                    </CardItemMenu>
                </div>
            );
        });

        return (
            <div className="divCardMenuInner" ref={(ref) => this.scrollParentRef = ref}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadItems.bind(this)}
                    hasMore={this.state.hasMoreItems}
                    loader={loader}
                    useWindow={false}
                    getScrollParent={() => this.scrollParentRef}>
                    {items}
                </InfiniteScroll>
            </div>
        );
    }
};

CardMenu.propTypes = {
    click: PropTypes.func
};

export default CardMenu;