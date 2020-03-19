
import React from "react"
import "./modal.css"

export default function Modal(props) {

    return (
        <div>
            <div className={props.show ? "modal display-block" : "modal display-none"}>
                <section className="modal-main">
                    {props.children}
                    <button onClick={props.handleClose} className="buttonModal">Close</button>
                </section>
            </div>
        </div>

    );
};