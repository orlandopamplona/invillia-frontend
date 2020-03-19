import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CardMenu from './cardMenu';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

it("Render component CardMenu", () => {
    act(() => {
        render(<CardMenu click={undefined} />, container);
    });
    expect(container.textContent).toContain("Loading...");

});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});