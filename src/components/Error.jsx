import { useState } from "react";

const errorAlert = ({ error, closeError }) => {
    return (
        <div className={`contenterror ${error ? "show" : ""}`}>
            <div className="alert-content">
                <div className="errorh5">
                    <h5>Rellena todos los campos </h5>
                </div>
                <button className="btn-alert" onClick={closeError}>
                    X
                </button>
            </div>
        </div>
    );
};

export default errorAlert;
