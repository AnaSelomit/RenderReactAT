const header = (props) => {
    return (
        <div className="header">
            <div className="Logo">
                <img src={props.image} className="logo" alt="logo" />
            </div>
        </div>
    );
};

export default header;
