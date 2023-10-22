import React from "react";

const Search = ({ BaseColaboradores, setColaborador }) => {
    const filtro = (e) => {
        setColaborador(() => {
            return BaseColaboradores.filter((data) => {
                return (
                    data.nombre.includes(e.target.value) ||
                    data.correo.includes(e.target.value) ||
                    data.edad.includes(e.target.value) ||
                    data.cargo.includes(e.target.value) ||
                    data.telefono.includes(e.target.value)
                );
            });
        });
    };

    return <input className="input-search" type="text" placeholder="   Buscador" onChange={filtro} />;
};

export default Search;
