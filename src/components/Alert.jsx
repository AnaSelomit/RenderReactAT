const successAlert = ({ show, closeSuccess }) => {
    return (
        <div className={`content ${show ? "show" : ""}`}>
            <div className="alert-content">
                <h5>Los datos de han sido agregados con éxito</h5>
                <button className="btn-alert" onClick={closeSuccess}>
                    X
                </button>
            </div>
        </div>
    );
};

export default successAlert;
