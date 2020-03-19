import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Modal from './modal';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

it("Render component Modal", () => {
    act(() => {
        render(<Modal show={true} handleClose={undefined} />, container);
    });
    expect(container.textContent).toContain("Close");

});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});