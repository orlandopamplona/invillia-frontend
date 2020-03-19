import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CardItemMenu from './cardItemMenu';

let container = null;

const characterItemMock = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
    ],
    "species": [
        "https://swapi.co/api/species/1/"
    ],
    "vehicles": [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.co/api/people/1/"
}

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

it("Render component CardItemMenu", () => {
    act(() => {
        render(<CardItemMenu divCardId="divCardId"
        divImageId="divImageId"
        divLabelId="divLabelId"
        cardStyle="card"
        containerStyle="container"
        containerImageStyle="containerImage"
        name={characterItemMock.name}
        avatar={`/img/${characterItemMock.name}.jpg`}
        click={undefined}
        dataFull={characterItemMock} />, container);
    });
    expect(container.textContent).toContain("Luke Skywalker");

});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});