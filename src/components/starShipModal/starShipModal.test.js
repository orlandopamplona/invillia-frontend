import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import StarShipModal from './starShipModal';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

it("Render component StarShipModal", () => {
    act(() => {
        render(<StarShipModal  url={"https://swapi.co/api/starships/9/"} />, container);
    });
    expect(container.textContent).toContain("ModelManufacturerPassengersCargo");

});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});