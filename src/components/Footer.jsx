const footer = (props) => {
    return (
        <div className="footer">
            <div className="box">
                <img src={props.image} className="logo" alt="logo" />
                <h3>Almacenaje de datos</h3>
            </div>
        </div>
    );
};

export default footer;
